'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';

export default function NavbarPrincipal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('Header');

  return (
    <header className="fixed top-12 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-bordeaux">
            {t('brand')}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/propiedades"
              className="text-gray-600 hover:text-bordeaux transition-colors"
            >
              {t('properties')}
            </Link>
            <Link
              href="/vender"
              className="text-gray-600 hover:text-bordeaux transition-colors"
            >
              {t('sell')}
            </Link>
            <Link
              href="/nosotros"
              className="text-gray-600 hover:text-bordeaux transition-colors"
            >
              {t('us')}
            </Link>
            <LanguageSwitcher />
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
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/"
                className="block text-bordeaux font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/propiedades"
                className="block text-gray-600 hover:text-bordeaux transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('properties')}
              </Link>
              <Link
                href="/vender"
                className="block text-gray-600 hover:text-bordeaux transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('sell')}
              </Link>
              <Link
                href="/nosotros"
                className="block text-gray-600 hover:text-bordeaux transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('us')}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
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
