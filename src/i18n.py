"""Find the translatable text in the built page and swap it for another language.

A unit is one of:
  - a run of text between two HTML tags,
  - the value of a few HTML attributes (aria-label, placeholder, title, alt, content),
  - a JavaScript string literal,
that contains Chinese characters or full-width punctuation. The Traditional
Chinese text itself is the lookup key, so a changed sentence simply shows up
as "missing" until it is translated again.
"""
import html
import json
import re

TRANS = re.compile(r"[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u3000-\u303F]")
WS = re.compile(r"\s+")
BLOCK = re.compile(r"<style>.*?</style>|<script>.*?</script>", re.S)
JS_TOKEN = re.compile(r"//[^\n]*|/\*.*?\*/|\"(?:[^\"\\\n]|\\.)*\"|'(?:[^'\\\n]|\\.)*'", re.S)
TEXT = re.compile(r">([^<>]+)(?=<)")
ATTR = re.compile(r"\b(aria-label|placeholder|title|alt|content)=\"([^\"]*)\"")

# Punctuation that stands alone between tags or in code needs no catalog entry.
PUNCT = {"。": ".", "，": ", ", "、": ", ", "：": ": ", "；": "; ", "（": " (", "）": ")",
         "・": " · ", "\u3000": " ", "「": "\u201c", "」": "\u201d", "？": "?", "！": "!"}


def _segments(page):
    pos = 0
    for m in BLOCK.finditer(page):
        yield "html", page[pos:m.start()]
        block = m.group(0)
        if block.startswith("<script>"):
            yield "raw", "<script>"
            yield "js", block[8:-9]
            yield "raw", "</script>"
        else:
            yield "raw", block
        pos = m.end()
    yield "html", page[pos:]


def _js_value(literal):
    if literal[0] == "'":
        literal = '"' + literal[1:-1].replace('\\\'', "'").replace('"', '\\"') + '"'
    return json.loads(literal)


def _walk(page, on_unit):
    """Rebuild the page, passing every unit through on_unit(key, kind)."""
    out = []
    for kind, seg in _segments(page):
        if kind == "raw":
            out.append(seg)
        elif kind == "js":
            def js(m):
                tok = m.group(0)
                if tok[0] not in "\"'" or not TRANS.search(tok):
                    return tok
                return json.dumps(on_unit(_js_value(tok), "js"), ensure_ascii=False)
            out.append(JS_TOKEN.sub(js, seg))
        else:
            def text(m):
                raw = m.group(1)
                if not TRANS.search(raw):
                    return m.group(0)
                lead = raw[:len(raw) - len(raw.lstrip())]
                trail = raw[len(raw.rstrip()):]
                key = html.unescape(WS.sub(" ", raw).strip())
                return ">" + lead + html.escape(on_unit(key, "html"), quote=False) + trail

            def attr(m):
                if not TRANS.search(m.group(2)):
                    return m.group(0)
                return m.group(1) + '="' + html.escape(on_unit(html.unescape(m.group(2)), "attr")) + '"'
            out.append(ATTR.sub(attr, TEXT.sub(text, seg)))
    return "".join(out)


def units(page):
    """Every unit in page order, without repeats: [(key, kind), ...]."""
    seen, found = set(), []

    def note(key, kind):
        if key not in seen:
            seen.add(key)
            found.append((key, kind))
        return key
    _walk(page, note)
    return found


def is_punct(key):
    return all(ch in PUNCT or ch == " " for ch in key)


def translate(page, table):
    """Return (translated page, keys that had no entry in table)."""
    missing = []

    def swap(key, kind):
        if key in table:
            return table[key]
        if is_punct(key):
            return "".join(PUNCT.get(ch, ch) for ch in key)
        missing.append(key)
        return key
    return _walk(page, swap), missing
