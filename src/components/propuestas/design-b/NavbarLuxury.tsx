'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavbarLuxuryProps {
  variant?: 'transparent' | 'solid';
}

export default function NavbarLuxury({ variant = 'transparent' }: NavbarLuxuryProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (variant === 'transparent') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant]);

  const categories = [
    { name: 'Fincas', href: '/propuestas/design-b/propiedades?type=casa' },
    { name: 'Campos', href: '/propuestas/design-b/propiedades?type=departamento' },
    { name: 'Terrenos', href: '/propuestas/design-b/propiedades?type=finca' },
    { name: 'Nosotros', href: '/propuestas/design-b/vender' },
    { name: 'Contacto', href: '/propuestas/design-b/vender#formulario-valuacion' }
  ];

  const shouldShowBackground = variant === 'solid' || (variant === 'transparent' && isScrolled);

  return (
    <nav className={`text-white fixed w-full top-12 z-50 transition-all duration-300 ${
      shouldShowBackground
        ? 'bg-bordeaux-dark border-b border-white/10 shadow-lg'
        : 'bg-transparent border-b border-white/0'
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Hamburger Menu - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/propuestas/design-b" className="flex flex-col items-center lg:items-start">
            <span className="text-2xl font-serif tracking-wide">Valle de Uco</span>
            <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase">International Realty</span>
          </Link>

          {/* Desktop Categories Menu */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm hover:text-[#D4AF37] transition-colors duration-300"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
           
            <Link
              href="/propuestas/design-b/vender"
              className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Venda con nosotros
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-sm hover:text-[#D4AF37] transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/propuestas/design-b/vender"
                className="text-sm hover:text-[#D4AF37] transition-colors duration-300 py-2 sm:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                Vender Propiedad
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
