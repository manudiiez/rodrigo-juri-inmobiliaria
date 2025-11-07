"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          (isScrolled || isMobileMenuOpen)
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "pt-0" : "pt-6"}`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bordeaux rounded flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold">Fincas Valle de Uco</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-bordeaux transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-bordeaux transition-colors "
            >
              Fincas
            </Link>
            <Link
              href="/properties"
              className="text-gray-600 hover:text-bordeaux transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/agents"
              className="text-gray-600 hover:text-bordeaux transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-colors font-medium">
            Vende tu finca
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-gray-900 hover:text-bordeaux transition-colors font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-bordeaux transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Fincas
              </Link>
              <Link
                href="/properties"
                className="block text-gray-600 hover:text-bordeaux transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Nosotros
              </Link>
              <Link
                href="/agents"
                className="block text-gray-600 hover:text-bordeaux transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Contacto
              </Link>
              <button className="w-full px-6 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-colors font-medium mt-4">
                Vende tu finca
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
