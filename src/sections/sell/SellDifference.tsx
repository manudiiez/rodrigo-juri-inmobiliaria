'use client';

import { useTranslations } from 'next-intl';

export default function SellDifference() {
  const t = useTranslations('SellPage.difference');

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <img
              src="https://inmocampo.com/wp-content/uploads/2024/01/Secuencia-01.Imagen-fija007-min.jpg"
              alt="Luxury property"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-5xl  text-neutral-900 mb-8 leading-tight">
              Nuestra visión es ser la
              agencia inmobiliaria más
              confiable y respetada en Valle de Uco.
            </h2>
            <a
              href="#formulario"
              className="inline-block bg-neutral-900 text-white px-10 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-neutral-700 transition-all duration-300 text-center"
            >
              Comenzar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
