"use client";

import { useTranslations } from "next-intl";

export default function SellMarketingSection() {
  const t = useTranslations('SellPage.marketing');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marketing Card 1 */}
          <div className="border border-gray-200 p-6 hover:border-secondary transition-colors">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-[#0A1628]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {t('card1Title')}
            </h3>
            <p className="text-gray-600">
              {t('card1Description')}
            </p>
          </div>

          {/* Marketing Card 2 */}
          <div className="border border-gray-200 p-6 hover:border-secondary transition-colors">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-[#0A1628]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {t('card2Title')}
            </h3>
            <p className="text-gray-600">
              {t('card2Description')}
            </p>
          </div>

          {/* Marketing Card 3 */}
          <div className="border border-gray-200 p-6 hover:border-secondary transition-colors">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-[#0A1628]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {t('card3Title')}
            </h3>
            <p className="text-gray-600">
              {t('card3Description')}
            </p>
          </div>

          {/* Marketing Card 4 */}
          <div className="border border-gray-200 p-6 hover:border-secondary transition-colors">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-[#0A1628]"
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
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {t('card4Title')}
            </h3>
            <p className="text-gray-600">
              {t('card4Description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
