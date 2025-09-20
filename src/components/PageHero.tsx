"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  images: string[];
  alt: string;
}

// 全局轮播状态，所有PageHero组件共享
let globalCarouselIndex = 0;
let globalCarouselInterval: NodeJS.Timeout | null = null;

export default function PageHero({ title, subtitle, images, alt }: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(globalCarouselIndex);

  useEffect(() => {
    // 如果已经有全局轮播在运行，清除它
    if (globalCarouselInterval) {
      clearInterval(globalCarouselInterval);
    }

    // 设置新的全局轮播
    globalCarouselInterval = setInterval(() => {
      globalCarouselIndex = globalCarouselIndex === images.length - 1 ? 0 : globalCarouselIndex + 1;
      setCurrentImageIndex(globalCarouselIndex);
    }, 5000); // 每5秒切换一次

    // 同步当前状态
    setCurrentImageIndex(globalCarouselIndex);

    return () => {
      // 组件卸载时不清除全局轮播，让其他组件继续使用
    };
  }, [images.length]);

  return (
    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden w-full">
      {/* 背景图片轮播 */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* 标题内容 */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-lg max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
