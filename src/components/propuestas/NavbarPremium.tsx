'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NavbarPremium() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('Header');

  return (
    <header className="fixed top-12 w-full bg-black/90 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-white tracking-wider">
            {t('brand')}
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/propiedades"
              className="text-sm text-gray-300 hover:text-white transition-colors font-light tracking-wide uppercase"
            >
              {t('properties')}
            </Link>
            <Link
              href="/vender"
              className="text-sm text-gray-300 hover:text-white transition-colors font-light tracking-wide uppercase"
            >
              {t('sell')}
            </Link>
            <Link
              href="/nosotros"
              className="text-sm text-gray-300 hover:text-white transition-colors font-light tracking-wide uppercase"
            >
              {t('us')}
            </Link>
            <a
              href="https://wa.me/5492614123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all text-sm font-semibold tracking-wide uppercase"
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
          <div className="md:hidden border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              <Link href="/propiedades" className="block text-sm text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                {t('properties')}
              </Link>
              <Link href="/vender" className="block text-sm text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                {t('sell')}
              </Link>
              <Link href="/nosotros" className="block text-sm text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                {t('us')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
