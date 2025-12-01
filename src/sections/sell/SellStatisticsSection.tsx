"use client";

import { useTranslations } from "next-intl";

export default function SellStatisticsSection() {
  const t = useTranslations('SellPage.statistics');

  return (
    <section className="bg-gray-50 py-16 md:py-24" id="nosotros">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                {t('stat1Value')}
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                {t('stat1Label')}
              </p>
              <p className="text-sm text-gray-600">
                {t('stat1Description')}
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                {t('stat2Value')}
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                {t('stat2Label')}
              </p>
              <p className="text-sm text-gray-600">
                {t('stat2Description')}
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                {t('stat3Value')}
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                {t('stat3Label')}
              </p>
              <p className="text-sm text-gray-600">
                {t('stat3Description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
