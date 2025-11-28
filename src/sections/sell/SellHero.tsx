"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SellHero() {
  const t = useTranslations("SellPage.hero");

  return (
    <section className="relative min-h-[700px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ucarecdn.com/6d2901b5-633f-45ac-9e12-d7e21d06a7c2/-/preview/"
          alt="Modern luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Company Name */}
        <div className="mb-8">
          <div className="inline-block border-t border-b border-black/50 py-3 px-8">
            <h2 className="text-gray-900 text-sm tracking-[0.3em] font-light uppercase">
              Fincas Mendoza
            </h2>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-6xl text-gray-900 mb-16 leading-tight font-bold">
          Déjenos ayudarle a vender
          <br />
          su finca.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#formulario"
            className="bg-bordeaux text-white px-12 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-neutral-100 hover:text-gray-900 transition-all duration-300"
          >
            Vender una Finca
          </a>
          <Link
            href="/propiedades"
            className="bg-transparent text-gray-900 border-2 border-gray-900 px-12 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-white   transition-all duration-300"
          >
            Comprar una Finca
          </Link>
        </div>
      </div>
    </section>
  );
}
