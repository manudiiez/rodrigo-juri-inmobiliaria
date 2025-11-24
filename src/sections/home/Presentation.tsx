'use client';

import { useTranslations } from 'next-intl';

export default function Presentation() {
  const t = useTranslations('Presentation');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {t.rich('description', {
              name: t('name'),
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-bordeaux rounded-full mr-3"></span>
              {t('feature1')}
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-bordeaux rounded-full mr-3"></span>
              {t('feature2')}
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-bordeaux rounded-full mr-3"></span>
              {t('feature3')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
