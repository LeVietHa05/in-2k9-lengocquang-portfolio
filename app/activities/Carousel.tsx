"use client";

import Image from "next/image";
import { useState } from "react";

type CarouselProps = {
  folder: string;
  images: string[];
  alt: string;
};

export function Carousel({ folder, images, alt }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  if (total === 0) {
    return null;
  }

  const prev = () => {
    if (index === 0) {
      return;
    }
    setIndex((i) => i - 1);
  };

  const next = () => {
    if (index === total - 1) {
      return;
    }
    setIndex((i) => i + 1);
  };

  const prevDisabled = index === 0;
  const nextDisabled = index === total - 1;

  const getSrc = (img: string) => `/activity/${folder}/${img}`;

  return (
    <div className="w-full">
      <div className="relative aspect-[1117/744] w-full overflow-hidden border-[3px] border-[#02186F]">
        {images.map((img, i) => {
          const isActive = i === index;
          const isPrev = i === index - 1;
          const isNext = i === index + 1;

          if (!isActive && !isPrev && !isNext) {
            return null;
          }

          return (
            <Image
              key={`${folder}/${img}`}
              src={getSrc(img)}
              alt={`${alt} - slide ${i + 1}`}
              width={1117}
              height={744}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              priority={isActive}
            />
          );
        })}

        <button
          type="button"
          onClick={prev}
          disabled={prevDisabled}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#02186F] transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          disabled={nextDisabled}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#02186F] transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/80 px-3 py-1 text-sm text-[#02186F]">
          {index + 1} / {total}
        </div>
      </div>
    </div>
  );
}