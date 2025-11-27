'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NavbarModerno() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('Header');

  return (
    <header className="fixed top-12 w-full bg-gradient-to-r from-bordeaux to-purple-600 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white drop-shadow-md">
            {t('brand')}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/propiedades"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              {t('properties')}
            </Link>
            <Link
              href="/vender"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              {t('sell')}
            </Link>
            <Link
              href="/nosotros"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              {t('us')}
            </Link>
            <a
              href="https://wa.me/5492614123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-bordeaux px-6 py-2 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-md"
            >
              {t('whatsapp')}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-6 py-4 space-y-3">
              <Link href="/propiedades" className="block text-sm text-white/90" onClick={() => setMobileMenuOpen(false)}>
                {t('properties')}
              </Link>
              <Link href="/vender" className="block text-sm text-white/90" onClick={() => setMobileMenuOpen(false)}>
                {t('sell')}
              </Link>
              <Link href="/nosotros" className="block text-sm text-white/90" onClick={() => setMobileMenuOpen(false)}>
                {t('us')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
