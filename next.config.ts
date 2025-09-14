import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 本地开发配置 - 移除GitHub Pages相关设置
  images: {
    unoptimized: true
  }
};

export default nextConfig;
