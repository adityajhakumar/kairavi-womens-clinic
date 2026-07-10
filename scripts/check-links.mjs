#!/usr/bin/env node
// Build guard: every internal href in the exported HTML must resolve to a real
// page. Fails the build on a broken internal link so we never ship a 404.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
if (!existsSync(outDir)) { console.error("check-links: out/ not found"); process.exit(1); }

// Under a GitHub Pages project subpath, every href is prefixed with basePath
// (e.g. /kairavi-womens-clinic) while the out/ files are not. Strip it before
// resolving so the guard checks the real page paths. Must match next.config.ts.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "/kairavi-womens-clinic";

// real pages = directories with index.html, plus top-level static files
const pages = new Set();
function index(dir, base = "") {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) index(full, `${base}/${e}`);
    else if (e === "index.html") pages.add(base || "/");
  }
}
index(outDir);

const htmlFiles = [];
function collect(dir) {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) collect(full);
    else if (e.endsWith(".html")) htmlFiles.push(full);
  }
}
collect(outDir);

const broken = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const re = /href="(\/[^"#?]*)"/g;
  let m;
  while ((m = re.exec(html))) {
    let h = m[1].replace(/\/+$/, "") || "/";
    if (BASE && (h === BASE || h.startsWith(BASE + "/"))) h = h.slice(BASE.length) || "/";
    if (h.startsWith("/_next")) continue;
    const ok = pages.has(h) || pages.has(h + "/") || existsSync(join(outDir, h)) || existsSync(join(outDir, h + ".html"));
    if (!ok) broken.push({ from: file.replace(outDir, ""), to: m[1] });
  }
}

if (broken.length) {
  console.error(`check-links: FAIL, ${broken.length} broken internal link(s):`);
  for (const b of broken.slice(0, 40)) console.error(`  ${b.from}  ->  ${b.to}`);
  process.exit(1);
}
console.log(`check-links: OK, ${pages.size} pages, 0 broken internal links`);
