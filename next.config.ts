import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 配置静态导出用于GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
