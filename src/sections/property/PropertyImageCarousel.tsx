"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyImageCarouselProps {
  images: {url: string, class?: string}[];
  title: string;
}

export default function PropertyImageCarousel({
  images,
  title,
}: PropertyImageCarouselProps) {
  // No render if no images supplied
  if (!images || !Array.isArray(images) || images.length === 0) return null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.url}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                // className="object-contain"
                className={image.class || "object-cover"}
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 transition-all"
            aria-label="Imagen anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 transition-all"
            aria-label="Siguiente imagen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
