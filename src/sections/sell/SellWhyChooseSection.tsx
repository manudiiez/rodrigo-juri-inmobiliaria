"use client";

import { useTranslations } from "next-intl";

export default function SellWhyChooseSection() {
  const t = useTranslations('SellPage.whyChoose');

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-50 p-8 h-full">
              <p className="text-5xl font-light text-[#E2B34C] mb-4">{t('stat1Value')}</p>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                {t('stat1Title')}
              </h4>
              <p className="text-gray-600">
                {t('stat1Description')}
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-50 p-8 h-full">
              <p className="text-5xl font-light text-[#E2B34C] mb-4">{t('stat2Value')}</p>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                {t('stat2Title')}
              </h4>
              <p className="text-gray-600">
                {t('stat2Description')}
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-50 p-8 h-full">
              <p className="text-5xl font-light text-[#E2B34C] mb-4">
                {t('stat3Value')}
              </p>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                {t('stat3Title')}
              </h4>
              <p className="text-gray-600">
                {t('stat3Description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
