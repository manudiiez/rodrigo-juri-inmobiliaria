'use client';

import { useTranslations } from 'next-intl';

export default function SellProcess() {
  const t = useTranslations('SellPage.process');

  const steps = [
    {
      number: '1',
      title: t('step1Title'),
      description: t('step1Description'),
    },
    {
      number: '2',
      title: t('step2Title'),
      description: t('step2Description'),
    },
    {
      number: '3',
      title: t('step3Title'),
      description: t('step3Description'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-5">
          {t('title')}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-bordeaux text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
