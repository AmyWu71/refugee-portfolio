import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 只在GitHub Actions且非Vercel环境时使用静态导出
  ...(process.env.GITHUB_ACTIONS && !process.env.VERCEL && {
    output: 'export',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;