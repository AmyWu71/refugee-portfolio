import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/refugee-portfolio',
  assetPrefix: '/refugee-portfolio/',
  images: {
    unoptimized: true
  },
  // 确保静态资源正确导出
  distDir: 'out',
  // 禁用服务端功能
  experimental: {
    esmExternals: false
  }
};

export default nextConfig;
