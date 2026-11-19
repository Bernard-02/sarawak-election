"""Build the four language editions of the page.

    cd src && python3 build.py

Output, relative to the repository root:

    index.html            Traditional Chinese, the original
    zh-hans/index.html    Simplified Chinese, converted from the original with OpenCC
    en/index.html         English, from i18n.json
    ms/index.html         Malay, from i18n.json

template.html holds the markup and page logic, style.css the styles, data.js and
pledges.js the content, and i18n.json the English and Malay text keyed by the
Chinese original. Edit those files, never the generated index.html pages.

Simplified Chinese needs one package:  pip install opencc-python-reimplemented
"""
import json
import pathlib
import re
import sys

import i18n

here = pathlib.Path(__file__).resolve().parent
root = here.parent

SITE = "https://bernard-02.github.io/sarawak-election/"

# code, folder, switcher label, full name, Open Graph locale
EDITIONS = [
    ("zh-Hant", "", "繁", "繁體中文", "zh_TW"),
    ("zh-Hans", "zh-hans/", "简", "简体中文", "zh_CN"),
    ("en", "en/", "EN", "English", "en_GB"),
    ("ms", "ms/", "BM", "Bahasa Melayu", "ms_MY"),
]

# A line for the footer and the About tab saying how each edition was made.
NOTES = {
    "zh-Hant": "",
    "zh-Hans": "简体版由繁体中文版自动转换。",
    "en": "This English edition was translated from the Traditional Chinese original with AI assistance. "
          "If the two differ, the Chinese original is the reference. "
          "Many of the linked sources are Chinese-language news reports.",
    "ms": "Edisi bahasa Melayu ini diterjemah daripada edisi asal bahasa Cina tradisional dengan bantuan AI. "
          "Jika terdapat perbezaan, edisi asal bahasa Cina menjadi rujukan. "
          "Banyak sumber yang dipautkan ialah laporan berita berbahasa Cina.",
}

# Simplified Chinese as written in Malaysia: a few words and the quotation marks differ from OpenCC's output.
HANS_FIXES = [("身分", "身份"), ("「", "\u201c"), ("」", "\u201d"), ("『", "\u2018"), ("』", "\u2019")]
HANS_FONTS = [("Noto+Sans+TC", "Noto+Sans+SC"), ("Noto Sans TC", "Noto Sans SC"),
              ("PingFang TC", "PingFang SC"), ("Microsoft JhengHei", "Microsoft YaHei")]


def read(name):
    return (here / name).read_text(encoding="utf-8")


def assemble():
    """The Traditional Chinese page, with the per-edition placeholders still in it."""
    page = read("template.html")
    page, n = re.subn(r"<style>.*?</style>", lambda m: "<style>\n" + read("style.css") + "</style>",
                      page, count=1, flags=re.S)
    assert n == 1, "template.html needs exactly one <style> block"
    assert page.count("/*__DATA__*/") == 1, "template.html needs exactly one /*__DATA__*/ marker"
    return page.replace("/*__DATA__*/", read("data.js").rstrip() + "\n" + read("pledges.js").rstrip())


def table_for(lang, page):
    """Chinese text -> text in lang, for English and Malay."""
    table = {zh: entry[lang] for zh, entry in json.loads(read("i18n.json")).items() if lang in entry}
    # Constituency names in Chinese are not shown in these editions.
    for name in re.findall(r'^\[\d+,"[^"]*","([^"]*)",', page, re.M):
        table.setdefault(name, "")
    # The Malay edition shows each pledge in the manifesto's own wording.
    if lang == "ms":
        for zh, ms in re.findall(r'\{n:\d+,zh:"([^"]*)",ms:"([^"]*)"', page):
            table[zh] = ms
    return table


def to_hans(page):
    try:
        from opencc import OpenCC
    except ImportError:
        return None
    page = OpenCC("t2s").convert(page)
    for old, new in HANS_FIXES + HANS_FONTS:
        page = page.replace(old, new)
    return page


def finish(page, lang):
    """Fill in what differs between editions apart from the text itself."""
    folder = next(e[1] for e in EDITIONS if e[0] == lang)
    locale = next(e[4] for e in EDITIONS if e[0] == lang)
    up = "../" if folder else ""

    links = []
    for code, path, label, name, _ in EDITIONS:
        href = (up + path) or "./"
        current = ' aria-current="true"' if code == lang else ""
        links.append('<a href="%s" data-href="%s" lang="%s" hreflang="%s"%s>%s</a>' % (href, href, code, code, current, name))
    label, name = next((e[2], e[3]) for e in EDITIONS if e[0] == lang)
    switcher = ('<div class="lang"><button type="button" class="lang-btn" aria-haspopup="true" aria-expanded="false" '
                'aria-label="Language: %s"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/>'
                '<path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg><span>%s</span></button>'
                '<nav class="lang-menu" aria-label="Language">%s</nav></div>' % (name, label, "".join(links)))

    head = ['<meta property="og:url" content="%s%s">' % (SITE, folder),
            '<meta property="og:locale" content="%s">' % locale,
            '<link rel="canonical" href="%s%s">' % (SITE, folder)]
    head += ['<link rel="alternate" hreflang="%s" href="%s%s">' % (code, SITE, path) for code, path, *_ in EDITIONS]
    head.append('<link rel="alternate" hreflang="x-default" href="%s">' % SITE)

    note = NOTES[lang]
    swaps = [
        ('<html lang="zh-Hant">', '<html lang="%s">' % lang),
        ('var LANG = "zh-Hant";', 'var LANG = "%s";' % lang),
        ("<!--LANGSWITCH-->", switcher),
        ("<!--ALTERNATES-->", "\n".join(head)),
        ("<!--TRNOTE-->", "<br>" + note if note else ""),
        ("<!--TRNOTE_LI-->", "\n          <li>" + note + "</li>" if note else ""),
    ]
    for old, new in swaps:
        assert page.count(old) == 1, "expected exactly one %r in the page" % old
        page = page.replace(old, new)
    if lang in ("en", "ms"):
        # No Chinese text left to draw, so skip the Chinese web font.
        page = page.replace("&family=Noto+Sans+TC:wght@400;500;700;900", "")
    return page


def main():
    source = assemble()
    ok = True
    for lang, folder, *_ in EDITIONS:
        if lang == "zh-Hant":
            page = source
        elif lang == "zh-Hans":
            page = to_hans(source)
            if page is None:
                print("zh-Hans  skipped: pip install opencc-python-reimplemented")
                ok = False
                continue
        else:
            page, missing = i18n.translate(source, table_for(lang, source))
            if missing:
                ok = False
                print("%s  %d untranslated, add them to i18n.json:" % (lang, len(missing)))
                for key in dict.fromkeys(missing):
                    print("   ", key)
        out = root / folder / "index.html"
        out.parent.mkdir(exist_ok=True)
        out.write_text(finish(page, lang), encoding="utf-8")
        print("%-8s %7d bytes  %s" % (lang, out.stat().st_size, out.relative_to(root)))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
