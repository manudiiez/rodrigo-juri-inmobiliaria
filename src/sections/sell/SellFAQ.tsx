'use client';

import { useTranslations } from 'next-intl';

export default function SellFAQ() {
  const t = useTranslations('SellPage.faq');

  const faqs = [
    {
      question: '¿Cuánto cuesta vender mi propiedad con ustedes?',
      answer: 'Nuestra comisión es competitiva y se discute de manera transparente durante la consulta inicial. No hay costos ocultos ni cargos por adelantado.',
    },
    {
      question: '¿Cuánto tiempo toma vender una finca en el Valle de Uco?',
      answer: 'El tiempo de venta varía según la propiedad y las condiciones del mercado. En promedio, las propiedades bien valuadas se venden entre 3 y 9 meses. Nuestra red internacional puede acelerar este proceso.',
    },
    {
      question: '¿Cómo determinan el precio de mi propiedad?',
      answer: 'Realizamos un análisis exhaustivo considerando: ubicación, superficie, derechos de agua, tipo de suelo, productividad, instalaciones, accesos, y ventas comparables recientes en la zona.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-neutral-900 mb-4">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
            >
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between hover:bg-neutral-100 transition-colors">
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-neutral-600 group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
