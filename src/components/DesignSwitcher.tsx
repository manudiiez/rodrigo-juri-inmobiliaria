'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DesignSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Detectar el diseño actual basado en la ruta
  const getCurrentDesign = () => {
    if (pathname.includes('/design-a')) return 'A';
    if (pathname.includes('/design-b')) return 'B';
    if (pathname.includes('/design-c')) return 'C';
    return 'Principal';
  };

  const currentDesign = getCurrentDesign();

  const designs = [
    { id: 'main', name: 'Diseño Principal', path: '/propuestas' },
    { id: 'a', name: 'Diseño A - Minimalista', path: '/propuestas/design-a' },
    { id: 'b', name: 'Diseño B - Premium', path: '/propuestas/design-b' },
    { id: 'c', name: 'Diseño C - Moderno', path: '/propuestas/design-c' },
  ];

  const handleDesignChange = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Spacer para empujar el contenido hacia abajo */}
      <div className="h-12"></div>

      {/* Barra de diseño fija */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
          {/* Indicador de modo propuesta */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-sm font-semibold">Modo Propuesta</span>
            </div>
            <div className="h-4 w-px bg-gray-600 hidden sm:block"></div>
            <span className="text-xs text-gray-300 hidden sm:inline">
              Vista para cliente - Seleccione su diseño favorito
            </span>
          </div>

          {/* Selector de diseño */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">
                {currentDesign === 'Principal' ? 'Principal' : `Diseño ${currentDesign}`}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                <div className="py-1">
                  {designs.map((design) => {
                    const isActive =
                      (design.id === 'main' && currentDesign === 'Principal') ||
                      design.id.toUpperCase() === currentDesign;

                    return (
                      <button
                        key={design.id}
                        onClick={() => handleDesignChange(design.path)}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                          isActive
                            ? 'bg-bordeaux text-white font-semibold'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{design.name}</span>
                          {isActive && (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-xs text-gray-600">
                    💡 Explore cada diseño y elija el que mejor represente su visión
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

        {/* Overlay para cerrar el dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[-1]"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}
