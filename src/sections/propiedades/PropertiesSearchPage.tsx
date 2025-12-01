'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    ref: 'Ref. 186-00835P',
    title: 'Finca Los Álamos con Viñedos',
    location: 'Luján de Cuyo, Mendoza',
    region: 'Valle de Uco, Mendoza, Argentina',
    price: '1.600.000 €',
    image: '/finca1.jpg',
    totalSize: '181.766 m²',
    builtSize: '412 m²',
    bedrooms: 4,
    bathrooms: 3,
    aptitude: 'Viñedos',
    description: 'Finca con viñedos en venta en Valle de Uco, cerca de Tupungato, provincia de Mendoza. En esta finca de 18 hectáreas, 3 hectáreas han sido plantadas con viñas en 2003. El viñedo podría ser expandido hasta 10 hectáreas. La plantación de alta densidad tiene 16.475 vides con las variedades Cabernet Sauvignon, Syrah, Merlot, Tempranillo...',
  },
  {
    id: 2,
    ref: 'Ref. 192-01247P',
    title: 'Estancia La Merced con Bodega',
    location: 'San Rafael, Mendoza',
    region: 'San Rafael, Mendoza, Argentina',
    price: '2.400.000 €',
    image: '/finca2.jpg',
    totalSize: '1.200.000 m²',
    builtSize: '850 m²',
    bedrooms: 6,
    bathrooms: 5,
    aptitude: 'Vitivinícola',
    description: 'Excepcional estancia con bodega boutique en San Rafael, Mendoza. Esta propiedad de 120 hectáreas cuenta con viñedos de alta calidad, instalaciones de vinificación de última generación y una casa principal de estilo colonial perfectamente restaurada. Ideal para inversión turística y producción vitivinícola...',
  },
  {
    id: 3,
    ref: 'Ref. 175-00982P',
    title: 'Campo El Retiro Recreativo',
    location: 'Tunuyán, Mendoza',
    region: 'Valle de Uco, Mendoza, Argentina',
    price: '988.000 €',
    image: '/finca1.jpg',
    totalSize: '650.000 m²',
    builtSize: '620 m²',
    bedrooms: 5,
    bathrooms: 4,
    aptitude: 'Recreativo',
    description: 'Campo de recreo en Tunuyán con vistas privilegiadas a la Cordillera de los Andes. Esta propiedad de 65 hectáreas ofrece amplias posibilidades para desarrollo turístico, agrícola o simplemente como retiro de montaña. Cuenta con riego, electricidad y acceso asfaltado...',
  },
];

export default function PropertiesSearchPage() {
  const [activeFilter, setActiveFilter] = useState('comprar');
  const [searchInput, setSearchInput] = useState('');
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showHectaresFilter, setShowHectaresFilter] = useState(false);
  const [showTipoSueloFilter, setShowTipoSueloFilter] = useState(false);
  const [selectedTipoSuelo, setSelectedTipoSuelo] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minHectares, setMinHectares] = useState(0);
  const [maxHectares, setMaxHectares] = useState(500);

  // Close filters when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.filter-dropdown')) {
      setShowPriceFilter(false);
      setShowHectaresFilter(false);
      setShowTipoSueloFilter(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" onClick={handleClickOutside}>
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 flex items-center bg-white border border-gray-300">
              <svg
                className="w-5 h-5 ml-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchInput}
                placeholder="Argentina"
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="h-10 w-10 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveFilter('comprar')}
              className={`px-6 py-2 text-sm uppercase tracking-widest border transition-colors ${
                activeFilter === 'comprar'
                  ? 'bg-[#0A1628] text-white border-[#0A1628]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              Comprar
            </button>
            <button
              onClick={() => setActiveFilter('alquilar')}
              className={`px-6 py-2 text-sm uppercase tracking-widest border transition-colors ${
                activeFilter === 'alquilar'
                  ? 'bg-[#0A1628] text-white border-[#0A1628]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              Alquilar
            </button>

            {/* Tipo de Suelo - con click dropdown */}
            <div className="relative filter-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTipoSueloFilter(!showTipoSueloFilter);
                  setShowPriceFilter(false);
                  setShowHectaresFilter(false);
                }}
                className="px-6 py-2 text-sm uppercase tracking-widest border border-gray-300 bg-white text-gray-700 hover:border-gray-400 transition-colors"
              >
                {selectedTipoSuelo || 'Tipo de suelo'}
              </button>

              {showTipoSueloFilter && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-300 shadow-xl z-50">
                  <button
                    onClick={() => {
                      setSelectedTipoSuelo('');
                      setShowTipoSueloFilter(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTipoSuelo('Viñedos');
                      setShowTipoSueloFilter(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
                  >
                    Viñedos
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTipoSuelo('Vitivinícola');
                      setShowTipoSueloFilter(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
                  >
                    Vitivinícola
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTipoSuelo('Recreativo');
                      setShowTipoSueloFilter(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
                  >
                    Recreativo
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTipoSuelo('Agrícola');
                      setShowTipoSueloFilter(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
                  >
                    Agrícola
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTipoSuelo('Ganadero');
                      setShowTipoSueloFilter(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Ganadero
                  </button>
                </div>
              )}
            </div>

            {/* Precio por Hectárea - con click */}
            <div className="relative filter-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPriceFilter(!showPriceFilter);
                  setShowHectaresFilter(false);
                  setShowTipoSueloFilter(false);
                }}
                className="px-6 py-2 text-sm uppercase tracking-widest border border-gray-300 bg-white text-gray-700 hover:border-gray-400 transition-colors"
              >
                Precio por hectárea
              </button>

              {showPriceFilter && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-full left-0 mt-2 w-96 bg-[#0A1628] text-white p-8 shadow-2xl z-50 border-t-4 border-[#E2B34C]"
                >
                  <button
                    onClick={() => setShowPriceFilter(false)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h3 className="text-2xl font-light mb-8 tracking-wide">Precio</h3>

                  <div className="mb-8">
                    <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Cualquiera</p>
                    <div className="relative h-2 bg-gray-600 rounded-full mb-2">
                      <div
                        className="absolute h-2 bg-[#E2B34C] rounded-full"
                        style={{
                          left: `${(minPrice / 10000000) * 100}%`,
                          right: `${100 - (maxPrice / 10000000) * 100}%`
                        }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="10000000"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
                      />
                      <input
                        type="range"
                        min="0"
                        max="10000000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-8 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">sin mín.</p>
                      <p className="text-lg">${minPrice.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">sin máx.</p>
                      <p className="text-lg">${maxPrice.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setMinPrice(0);
                        setMaxPrice(10000000);
                      }}
                      className="flex-1 px-6 py-3 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
                    >
                      Borrar
                    </button>
                    <button
                      onClick={() => setShowPriceFilter(false)}
                      className="flex-1 px-6 py-3 bg-white text-[#0A1628] uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Hectáreas - con click */}
            <div className="relative filter-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHectaresFilter(!showHectaresFilter);
                  setShowPriceFilter(false);
                  setShowTipoSueloFilter(false);
                }}
                className="px-6 py-2 text-sm uppercase tracking-widest border border-gray-300 bg-white text-gray-700 hover:border-gray-400 transition-colors"
              >
                Hectáreas
              </button>

              {showHectaresFilter && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-full left-0 mt-2 w-96 bg-[#0A1628] text-white p-8 shadow-2xl z-50 border-t-4 border-[#E2B34C]"
                >
                  <button
                    onClick={() => setShowHectaresFilter(false)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h3 className="text-2xl font-light mb-8 tracking-wide">Hectáreas</h3>

                  <div className="mb-8">
                    <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Cualquiera</p>
                    <div className="relative h-2 bg-gray-600 rounded-full mb-2">
                      <div
                        className="absolute h-2 bg-[#E2B34C] rounded-full"
                        style={{
                          left: `${(minHectares / 500) * 100}%`,
                          right: `${100 - (maxHectares / 500) * 100}%`
                        }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={minHectares}
                        onChange={(e) => setMinHectares(Number(e.target.value))}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
                      />
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={maxHectares}
                        onChange={(e) => setMaxHectares(Number(e.target.value))}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-8 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">sin mín.</p>
                      <p className="text-lg">{minHectares} ha</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">sin máx.</p>
                      <p className="text-lg">{maxHectares} ha</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setMinHectares(0);
                        setMaxHectares(500);
                      }}
                      className="flex-1 px-6 py-3 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
                    >
                      Borrar
                    </button>
                    <button
                      onClick={() => setShowHectaresFilter(false)}
                      className="flex-1 px-6 py-3 bg-white text-[#0A1628] uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-gray-900 mb-1">
              Visualizando {properties.length} de {properties.length} fincas en venta en Argentina
            </h1>
            <p className="text-sm text-gray-600 font-light">
              Mostrando inmuebles comercializados por Valle de Uco International Realty.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 uppercase tracking-wider">Ordenar:</span>
              <select className="px-4 py-2 border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:border-gray-400">
                <option>Exclusive (Default)</option>
                <option>Precio: Mayor a menor</option>
                <option>Precio: Menor a mayor</option>
                <option>Más recientes</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Properties List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="space-y-12">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/propiedades/${property.id}`}
              className="group flex flex-col lg:flex-row gap-8 hover:shadow-lg transition-shadow duration-300 border-b border-gray-200 pb-12"
            >
              {/* Image - Large */}
              <div className="lg:w-1/2 relative h-96 lg:h-[500px] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 group-hover:text-bordeaux transition-colors">
                    {property.title}
                  </h2>

                  <p className="text-2xl font-light text-gray-900 mb-6">{property.price}</p>

                  <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
                    {property.description}
                  </p>

                  {/* Reference */}
                  <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">{property.ref}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Dormitorios</p>
                      <p className="text-lg text-gray-900">{property.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Baños</p>
                      <p className="text-lg text-gray-900">{property.bathrooms}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Superficie construida</p>
                      <p className="text-lg text-gray-900">{property.builtSize}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Superficie total</p>
                      <p className="text-lg text-gray-900">{property.totalSize}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Aptitud</p>
                      <p className="text-lg text-gray-900">{property.aptitude}</p>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <button className="self-start px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm uppercase tracking-widest">Guardar</span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E2B34C;
          cursor: pointer;
          position: relative;
          z-index: 3;
        }
        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E2B34C;
          cursor: pointer;
          border: none;
          position: relative;
          z-index: 3;
        }
      `}</style>
    </div>
  );
}
