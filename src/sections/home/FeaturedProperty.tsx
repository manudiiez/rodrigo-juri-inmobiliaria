"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const properties = [
  {
    id: 1,
    title: "Tupungato",
    location: "Mendoza - Argentina",
    price: "$4,000,000",
    image: "/finca2.jpg",
  },
  {
    id: 2,
    title: "Valle de Uco",
    location: "Mendoza - Argentina",
    price: "$3,500,000",
    image: "/finca1.jpg",
  },
  {
    id: 3,
    title: "Maipú",
    location: "Mendoza - Argentina",
    price: "$5,200,000",
    image: "/finca2.jpg",
  },
];

export default function FeaturedProperty() {
  const t = useTranslations("HomePage.FeaturedProperty");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden md:px-16 lg:px-20">
      {/* Carousel container */}
      <div
        className="absolute inset-0 flex transition-transform duration-1500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {properties.map((property, index) => (
          <div key={property.id} className="relative w-full h-full flex-shrink-0 px-6 md:px-12 lg:px-12">
            {/* Property image */}
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Filtro negro transparente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />

            {/* Property info */}
            <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto py-14 ">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-4 tracking-wide">
                  {property.title}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-white/80 text-lg">{property.location}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white text-2xl font-light">{property.price}</span>
                </div>
                <Link
                  href={`/propiedades/${property.id}`}
                  className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all group"
                >
                  <span className="text-sm uppercase tracking-widest font-medium">
                    {t("viewProperty")}
                  </span>
                  <svg
                    className="w-5 h-5"
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
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators - absolute positioned at bottom */}
      <div className="absolute bottom-14 left-0 right-0 z-20 flex justify-center gap-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-1 transition-colors ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/30 hover:bg-white/60 cursor-pointer"
            }`}
            aria-label={`${t("goToProperty")} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
