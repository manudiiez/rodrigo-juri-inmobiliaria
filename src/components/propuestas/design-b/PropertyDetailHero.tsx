'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PropertyDetailHeroProps {
  images: string[];
  title: string;
  location: string;
  price: number;
}

export default function PropertyDetailHero({ images, title, location, price }: PropertyDetailHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  return (
    <div className="pt-32 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 mb-4">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <button className="flex items-center gap-2 hover:text-bordeaux transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Volver a búsqueda
          </button>
          <span className="text-neutral-300">/</span>
          <span>Propiedades</span>
          <span className="text-neutral-300">/</span>
          <span>Fincas</span>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900">{location}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-8">
          {/* Main Image */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
            <Image
              src={images[currentImageIndex] || '/api/placeholder/1200/800'}
              alt={`${title} - Imagen principal`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setCurrentImageIndex(index + 1)}
              >
                <Image
                  src={image || '/api/placeholder/600/400'}
                  alt={`${title} - Vista ${index + 2}`}
                  fill
                  className="object-cover"
                />
                {index === 3 && images.length > 5 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAllPhotos(true);
                    }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Ver todas las fotos</span>
                      <span className="text-white/80 text-xs block mt-1">+{images.length - 5} fotos</span>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Property Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 pb-8 border-b border-neutral-200">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-serif text-neutral-900 mb-3">{title}</h1>
            <div className="flex items-center gap-2 text-neutral-600">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{location}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-4xl lg:text-5xl font-serif text-bordeaux-dark">
                ${price.toLocaleString('es-AR')}
              </p>
              <p className="text-sm text-neutral-500 uppercase tracking-wider mt-1">USD</p>
            </div>

            <div className="flex gap-3">
              <button className="p-3 border border-neutral-300 rounded-full hover:border-bordeaux hover:text-bordeaux transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-3 border border-neutral-300 rounded-full hover:border-bordeaux hover:text-bordeaux transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
