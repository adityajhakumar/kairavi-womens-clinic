import type { NextConfig } from "next";

// Deployed to GitHub Pages under a project subpath:
//   https://adityajhakumar.github.io/kairavi-womens-clinic/
// `basePath` prefixes every internal link and asset with that subpath.
// If you later move to a custom domain (served at the site root), set the
// env var NEXT_PUBLIC_BASE_PATH="" (empty) in the deploy workflow — `??` keeps
// an explicit empty string, unlike `||`.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/kairavi-womens-clinic";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Custom loader (image-loader.js) prefixes basePath onto local image src for
  // static export and passes Unsplash URLs through. This replaces `unoptimized`
  // — which does not add basePath and would 404 every image on the subpath.
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
  basePath,
};

export default nextConfig;
