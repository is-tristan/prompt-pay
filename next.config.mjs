import path from "path";

import { fileURLToPath } from "url";

// Resolve project root so Turbopack ignores parent lockfiles outside this repo
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1302520-5885348.cloudwaysapps.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
