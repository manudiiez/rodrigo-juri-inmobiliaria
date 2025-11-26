'use client';

import { useTranslations } from 'next-intl';

export default function AboutProfile() {
  const t = useTranslations('AboutPage.profile');

  const highlights = [
    { icon: '🏆', text: t('highlight1') },
    { icon: '🌎', text: t('highlight2') },
    { icon: '🤝', text: t('highlight3') },
    { icon: '📋', text: t('highlight4') },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-5 tracking-tight">
            {t('name')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('role')}
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg max-w-md mx-auto w-full">
            <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center text-8xl border-b border-gray-200">
              👤
            </div>
            <div className="p-10 text-center">
              <h3 className="text-3xl font-extrabold text-black mb-2 tracking-tight">
                {t('name')}
              </h3>
              <div className="text-lg text-bordeaux font-semibold mb-6">
                {t('title')}
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0077b5] font-semibold text-base transition-all hover:gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                {t('linkedin')}
              </a>
            </div>
          </div>

          {/* Profile Content */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-black mb-6 tracking-tight">
              {t('sectionTitle')}
            </h3>
            <div className="space-y-5 mb-9">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('description1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('description2')}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-2xl min-w-[30px]">{highlight.icon}</span>
                  <span className="text-base lg:text-lg text-gray-900">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
