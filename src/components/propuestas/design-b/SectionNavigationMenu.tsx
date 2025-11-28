'use client';

import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';


interface Section {
  id: string;
  label: string;
  icon: JSX.Element;
}

const sections: Section[] = [
  {
    id: 'galeria',
    label: 'Galería',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'resumen',
    label: 'Resumen General',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'suelo',
    label: 'Suelo y Clima',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'agua',
    label: 'Agua y Riego',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'instalaciones',
    label: 'Instalaciones',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'energia',
    label: 'Energía y Productividad',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'legal',
    label: 'Documentación Legal',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'rentabilidad',
    label: 'Rentabilidad',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'ubicacion',
    label: 'Ubicación',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'contacto',
    label: 'Contacto',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SectionNavigationMenu() {
  const [activeSection, setActiveSection] = useState('galeria');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make sticky after scrolling
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Height of navbar + menu
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const mainCategories = [
    { name: 'Fincas', href: '/propuestas/design-b/propiedades?type=casa' },
    { name: 'Campos', href: '/propuestas/design-b/propiedades?type=departamento' },
    { name: 'Terrenos', href: '/propuestas/design-b/propiedades?type=finca' },
    { name: 'Nosotros', href: '/propuestas/design-b/propiedades?type=terreno' },
    { name: 'Contacto', href: '/propuestas/design-b/propiedades?type=comercial' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`text-white fixed w-full top-12 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bordeaux-dark border-b border-white/10 shadow-lg'
          : 'bg-bordeaux-dark border-b border-white/10'
      }`}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
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
              {mainCategories.map((category) => (
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
                href="/propuestas/design-b/login"
                className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Venda con nosotros
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMainMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-white/10 mt-2 pt-4">
              <div className="flex flex-col space-y-4">
                {mainCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-sm hover:text-[#D4AF37] transition-colors duration-300 py-2"
                    onClick={() => setIsMainMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Section Navigation - Horizontal Sticky Menu */}
      <div
        className={`hidden lg:block bg-white border-b border-neutral-200 transition-all duration-300 z-40 fixed top-32 left-0 right-0 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? 'border-bordeaux-dark text-bordeaux-dark font-semibold'
                    : 'border-transparent text-neutral-600 hover:text-bordeaux hover:border-bordeaux/30'
                }`}
              >
                {section.icon}
                <span className="text-sm">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation - Floating Button + Drawer */}
      <div className="lg:hidden">
        {/* Floating Navigation Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed right-6 z-50 bg-bordeaux-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
            isScrolled ? 'bottom-6' : 'bottom-6 opacity-0 pointer-events-none'
          }`}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 max-h-[70vh] overflow-y-auto ${
              isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">Secciones</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-bordeaux-dark text-white'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {section.icon}
                    <span className="font-medium">{section.label}</span>
                    {activeSection === section.id && (
                      <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div
        className={`fixed top-32 left-0 right-0 h-1 bg-neutral-200 z-50 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="h-full bg-bordeaux-dark transition-all duration-300"
          style={{
            width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
          }}
        />
      </div>
    </>
  );
}
