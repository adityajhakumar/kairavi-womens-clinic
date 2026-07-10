#!/usr/bin/env node
// Next's next/og file convention can emit the OG image at an extensionless or
// hashed path. Strict scrapers (LinkedIn, Google) want a clean .png URL, and our
// metadata points at /opengraph-image.png. This copies whatever Next generated
// to that clean filename. Idempotent; no-op if it already exists.
import { readdirSync, statSync, copyFileSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";

const outDir = join(process.cwd(), "out");
let copied = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) { walk(full); continue; }
    const base = basename(full);
    // match opengraph-image, opengraph-image.png, opengraph-image-<hash>.png, etc.
    if (/^opengraph-image/.test(base)) {
      const clean = join(dirname(full), "opengraph-image.png");
      if (full !== clean && !existsSync(clean)) { copyFileSync(full, clean); copied++; }
    }
  }
}

if (existsSync(outDir)) walk(outDir);
console.log(`copy-og-images: ensured clean opengraph-image.png (${copied} copied)`);
