'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PropertyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('PropertyNavbar');

  const sections = [
    { id: 'resumen', label: t('summary') },
    { id: 'ficha-tecnica', label: t('technical') },
    { id: 'ubicacion', label: t('location') },
    { id: 'contacto', label: t('contact') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Back button and brand */}
          <div className="flex items-center space-x-4">
            <Link
              href="/propiedades"
              className="text-gray-600 hover:text-bordeaux transition-colors flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="hidden sm:inline">{t('back')}</span>
            </Link>
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
            <Link href="/" className="text-2xl font-bold text-bordeaux hidden sm:block">
              {t('brand')}
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-600 hover:text-bordeaux transition-colors"
              >
                {section.label}
              </button>
            ))}
            <a
              href="https://wa.me/5492614123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bordeaux text-white px-6 py-2 rounded-lg hover:bg-bordeaux-light transition-colors"
            >
              {t('whatsapp')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block text-gray-600 hover:text-bordeaux transition-colors w-full text-left"
                >
                  {section.label}
                </button>
              ))}
              <a
                href="https://wa.me/5492614123456"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-bordeaux text-white px-6 py-2 rounded-lg hover:bg-bordeaux-light transition-colors text-center"
              >
                {t('whatsapp')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}