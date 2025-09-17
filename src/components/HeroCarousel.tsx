'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const backgroundImages = [
  '/hero-bg-1.png',
  '/hero-bg-2.png',
  '/hero-bg-3.png',
  '/hero-bg-4.png',
  '/hero-bg-5.png',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Background image ${index + 1}`}
            fill
            className="object-cover blur-[1.5px]"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
