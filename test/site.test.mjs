import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("guide has metadata and semantic landmarks", () => {
  assert.match(page, /<meta\s+name="description"/);
  assert.match(page, /<main id="content">/);
  assert.match(page, /<ol class="principles"/);
  assert.match(page, /<footer>/);
});

test("external links declare a safe relationship", () => {
  for (const [link] of page.matchAll(/<a[^>]+href="https:[^>]+>/g)) {
    assert.match(link, /rel="noreferrer"/);
  }
});
