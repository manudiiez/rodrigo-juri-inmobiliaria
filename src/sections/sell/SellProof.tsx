'use client';

import { useTranslations } from 'next-intl';

export default function SellProof() {
  const t = useTranslations('SellPage.proof');

  const stats = [
    { number: '150+', label: 'Fincas en nuestra cartera' },
    { number: '99%', label: 'Clientes Satisfechos' },
    { number: '25+', label: 'Años de Experiencia' },
    { number: '50+', label: 'Clientes recurrentes' },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  mb-6">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Décadas de experiencia respaldando cada transacción
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl mb-3 text-[#D4AF37]">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#formulario"
            className="inline-block bg-white text-neutral-900 px-12 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-neutral-100 transition-all duration-300"
          >
            Comience Hoy
          </a>
        </div>
      </div>
    </section>
  );
}
