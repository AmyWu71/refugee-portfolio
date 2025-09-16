import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 根据环境变量决定是否使用静态导出
  ...(process.env.GITHUB_ACTIONS && {
    output: 'export',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
