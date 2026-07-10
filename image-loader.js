// Custom next/image loader for static export under a GitHub Pages subpath.
//
// next/image does NOT prepend `basePath` to a local image `src` in the
// unoptimized/static-export path, which would 404 every image on the subpath.
// This loader prefixes local paths with basePath and passes remote URLs
// (e.g. Unsplash blog covers) through unchanged. Must match next.config.ts.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "/kairavi-womens-clinic";

module.exports = function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src; // remote (Unsplash) — leave as-is
  return `${BASE}${src}`;                    // local — add the subpath prefix
};
