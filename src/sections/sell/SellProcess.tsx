'use client';

import { useTranslations } from 'next-intl';

export default function SellProcess() {
  const t = useTranslations('SellPage.process');

  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Nuestro equipo se reúne con usted para entender sus necesidades y expectativas.',
    },
    {
      number: '02',
      title: 'Valuación Profesional',
      description: 'Realizamos un análisis exhaustivo del mercado para determinar el valor óptimo de su propiedad.',
    },
    {
      number: '03',
      title: 'Marketing Estratégico',
      description: 'Implementamos una estrategia de marketing personalizada con fotografía profesional y difusión premium.',
    },
    {
      number: '04',
      title: 'Cierre Exitoso',
      description: 'Coordinamos todo el proceso hasta el cierre, asegurando una transacción fluida y exitosa.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl  text-neutral-900 mb-6">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Un enfoque profesional y personalizado para vender su propiedad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="mb-6">
                <span className="text-6xl text-neutral-200">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-neutral-200 -ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
