'use client';

import { useTranslations } from 'next-intl';

export default function AboutStory() {
  const t = useTranslations('AboutPage.story');

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="section-label text-sm font-bold tracking-widest uppercase text-bordeaux mb-5">
          {t('label')}
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-8 leading-tight tracking-tight">
          {t('title')}
        </h2>
        <div className="space-y-6">
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {t('paragraph1')}
          </p>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {t('paragraph2')}
          </p>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {t('paragraph3')}
          </p>
        </div>
      </div>
    </section>
  );
}
