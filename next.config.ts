import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/refugee-portfolio',
  assetPrefix: '/refugee-portfolio/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
