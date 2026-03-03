"use client";

import { JSX, useEffect, useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
  intervalMs?: number;
}

export const ProductImageGallery = ({
  images,
  title,
  intervalMs = 6000,
}: ProductImageGalleryProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (!images || images.length === 0) {
    return <></>;
  }

  return (
    <div>
      {/* Main image */}
      <div className="overflow-hidden ">
        <div className="flex items-center justify-center ">
          <img
            src={images[currentIndex]}
            alt={`${title} image ${currentIndex + 1}`}
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover transition-opacity duration-500 ease-out"
          />
        </div>
      </div>

      {/* Preview thumbnails */}
      {images.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
          {images.map((src, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-16 sm:w-24 sm:h-18 md:w-28 md:h-20 overflow-hidden rounded-md border transition-all duration-200 ${
                  isActive
                    ? "border-[#1180C5] ring-2 ring-[#1180C5]/40"
                    : "border-gray-200 hover:border-gray-400"
                } bg-black/70`}
              >
                <img
                  src={src}
                  alt={`${title} preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

