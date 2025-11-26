'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              {t('brand')}
            </div>
            <p className="text-gray-400">
              {t('description')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('contactTitle')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t('phone')}</p>
              <p>{t('email')}</p>
              <p>{t('location')}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('legalTitle')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t('legal1')}</p>
              <p>{t('legal2')}</p>
              <p>{t('legal3')}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
