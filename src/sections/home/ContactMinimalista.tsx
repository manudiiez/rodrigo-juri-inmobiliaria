'use client';

import { useTranslations } from 'next-intl';

export default function ContactMinimalista() {
  const t = useTranslations('HomePage.Contact');

  return (
    <section className="bg-white py-24 md:py-32" id="contacto">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-wide">
              {t('title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
              {t('description')}
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">{t('phoneLabel')}</p>
                <a href="tel:+5492614123456" className="text-xl text-gray-900 hover:text-bordeaux transition-colors">
                  {t('phone')}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">{t('emailLabel')}</p>
                <a href="mailto:contacto@fincasmendoza.com" className="text-xl text-gray-900 hover:text-bordeaux transition-colors">
                  {t('email')}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">{t('locationLabel')}</p>
                <p className="text-xl text-gray-900">{t('location')}</p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/5492614123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 hover:bg-bordeaux transition-all group"
              >
                <span className="text-sm uppercase tracking-widest font-medium">{t('whatsappButton')}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gray-50 p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={t('formNamePlaceholder')}
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t('formEmailPlaceholder')}
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={t('formPhonePlaceholder')}
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder={t('formMessagePlaceholder')}
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 hover:bg-bordeaux transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {t('formSubmit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
