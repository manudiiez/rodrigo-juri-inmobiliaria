"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedProperty() {
  return (
    <section className="relative h-screen group md:px-16 lg:px-20">
      {/* Property image */}
      <div className="absolute inset-0">
        <Image
          src="/finca2.jpg"
          alt="Propiedad destacada"
          fill
          className="object-cover"
        />
        {/* Filtro negro transparente en la parte superior */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
      </div>

      {/* Property info */}
      <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto  py-14">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl  text-white mb-4 tracking-wide">
            Tupungato
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/80 text-lg">Mendoza - Argentina</span>
            <span className="text-white/60">•</span>
            <span className="text-white text-2xl font-light">$4,000,000</span>
          </div>
          <Link
            href="/propiedades/1"
            className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all group"
          >
            <span className="text-sm uppercase tracking-widest font-medium">
              Ver finca
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

        {/* Slide indicators - sticky at bottom */}
        <div className="flex justify-center gap-2 pb-4">
          <button className="w-12 h-1 bg-white transition-colors"></button>
          <button className="w-12 h-1 bg-white/30 hover:bg-white/60 transition-colors"></button>
          <button className="w-12 h-1 bg-white/30 hover:bg-white/60 transition-colors"></button>
        </div>
      </div>
    </section>
  );
}
