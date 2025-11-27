'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavbarMinimalista() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-12 w-full bg-bordeaux-dark border-b border-white/50 z-50 px-8 lg:px-12">
      <nav >
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/propuestas/design-a" className="flex flex-col">
            <span className="text-white text-2xl font-light tracking-wide">Valle de Uco</span>
            <span className="text-white/60 text-xs uppercase tracking-widest">International Realty</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm uppercase tracking-widest">Buscar</span>
            </button>
            <Link href="/propuestas/design-a/propiedades" className="text-white hover:text-white/80 transition-colors text-sm uppercase tracking-widest">
              Fincas
            </Link>
            <Link href="/nosotros" className="text-white hover:text-white/80 transition-colors text-sm uppercase tracking-widest">
              Agentes
            </Link>
            <Link href="/vender" className="text-white hover:text-white/80 transition-colors text-sm uppercase tracking-widest">
              Historias
            </Link>
            <Link
              href="/vender"
              className="border border-white/30 text-white px-6 py-2.5 hover:bg-white hover:text-[#0A1628] transition-all text-sm uppercase tracking-widest"
            >
              Venda con nosotros
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              <Link href="/propiedades" className="block text-sm text-white/80 uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                Propiedades
              </Link>
              <Link href="/nosotros" className="block text-sm text-white/80 uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                Agentes
              </Link>
              <Link href="/vender" className="block text-sm text-white/80 uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                Venda con nosotros
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
