'use client';

import Link from 'next/link';
import { useState } from 'react';

interface PropertyCardProps {
  id: number;
  images: string[];
  title: string;
  price: string;
  beds?: number;
  baths?: number;
  totalArea: string; // Superficie total en hectáreas
  location: string;
  description: string;
  type: string;
  features: string[];
  soilType?: string; // Tipo de suelo
  irrigation?: string; // Tipo de riego
  isPromoted?: boolean;
}

export default function PropertyCard({
  id,
  images,
  title,
  price,
  beds,
  baths,
  totalArea,
  location,
  description,
  type,
  features,
  soilType,
  irrigation,
  isPromoted = false
}: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Image Gallery */}
        <div className="lg:col-span-2 relative h-[400px] lg:h-auto">
          {/* Main Image */}
          <Link href={`/propuestas/design-b/propiedades/${id}`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {isPromoted && (
              <span className="bg-[#D4AF37] text-white px-3 py-1 rounded text-xs font-medium uppercase">
                Destacada
              </span>
            )}
            <span className="bg-white/95 text-bordeaux-dark px-3 py-1 rounded text-xs font-medium uppercase">
              {type}
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Add to favorites"
          >
            <svg
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-700'}`}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
            {currentImage + 1}/{images.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {images.slice(0, 4).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  currentImage === index ? 'border-white' : 'border-white/50'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${images[index]})` }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Link href={`/propuestas/design-b/propiedades/${id}`}>
                  <h3 className="text-2xl lg:text-3xl font-serif text-gray-900 hover:text-bordeaux transition-colors mb-2">
                    {title}
                  </h3>
                </Link>
                <p className="text-gray-600 flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-light text-bordeaux-dark">{price}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-200">
              {/* Superficie Total */}
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium">{totalArea}</span>
                  <span className="text-xs text-gray-600">Superficie</span>
                </div>
              </div>

              {/* Tipo de Suelo */}
              {soilType && (
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium">{soilType}</span>
                    <span className="text-xs text-gray-600">Tipo de Suelo</span>
                  </div>
                </div>
              )}

              {/* Riego */}
              {irrigation && (
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium">{irrigation}</span>
                    <span className="text-xs text-gray-600">Riego</span>
                  </div>
                </div>
              )}

              {/* Habitaciones - Solo si existen */}
              {beds !== undefined && beds > 0 && (
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium">{beds}</span>
                    <span className="text-xs text-gray-600">Habitaciones</span>
                  </div>
                </div>
              )}

              {/* Baños - Solo si existen */}
              {baths !== undefined && baths > 0 && (
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium">{baths}</span>
                    <span className="text-xs text-gray-600">Baños</span>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-6">
              {features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-bordeaux" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Contact Button */}
          <div className="flex gap-4">
            <Link
              href={`/propuestas/design-b/propiedades/${id}`}
              className="flex-1 text-center px-6 py-3 bg-bordeaux-dark text-white rounded-lg hover:bg-bordeaux transition-all duration-300 font-medium"
            >
              Ver Detalles
            </Link>
            <button className="px-6 py-3 border-2 border-bordeaux-dark text-bordeaux-dark rounded-lg hover:bg-bordeaux-dark hover:text-white transition-all duration-300 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
