import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 配置静态导出用于GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 禁用一些在静态导出中不支持的功能
  experimental: {
    esmExternals: false
  }
};

export default nextConfig;
