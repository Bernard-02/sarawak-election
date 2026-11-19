"""Build ../index.html from the files in this folder.

    cd src && python3 build.py

template.html holds the markup and page logic, style.css the styles,
data.js and pledges.js the content. Edit those, never index.html.
"""
import pathlib
import re

here = pathlib.Path(__file__).resolve().parent


def read(name):
    return (here / name).read_text(encoding="utf-8")


page = read("template.html")
page, n = re.subn(r"<style>.*?</style>", lambda m: "<style>\n" + read("style.css") + "</style>",
                  page, count=1, flags=re.S)
assert n == 1, "template.html needs exactly one <style> block"
assert page.count("/*__DATA__*/") == 1, "template.html needs exactly one /*__DATA__*/ marker"
page = page.replace("/*__DATA__*/", read("data.js").rstrip() + "\n" + read("pledges.js").rstrip())

(here.parent / "index.html").write_text(page, encoding="utf-8")
print(len(page.encode("utf-8")), "bytes -> index.html")
