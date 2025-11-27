'use client';

import { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  onFilterChange: (filters: PropertyFilters) => void;
  totalResults: number;
}

export interface PropertyFilters {
  type: string;
  priceRange: string;
  sortBy: string;
}

const propertyTypes = [
  { value: 'all', label: 'Todas' },
  { value: 'finca', label: 'Fincas' },
  { value: 'campo', label: 'Campos' },
  { value: 'terreno', label: 'Terrenos' }
];

const priceRanges = [
  { value: 'all', label: 'Todos los precios' },
  { value: '0-500000', label: 'Hasta $500.000' },
  { value: '500000-1000000', label: '$500.000 - $1.000.000' },
  { value: '1000000-2000000', label: '$1.000.000 - $2.000.000' },
  { value: '2000000-5000000', label: '$2.000.000 - $5.000.000' },
  { value: '5000000+', label: 'Más de $5.000.000' }
];

const sortOptions = [
  { value: 'premium', label: 'Premium' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'newest', label: 'Más Recientes' }
];

export default function FilterBar({ onFilterChange, totalResults }: FilterBarProps) {
  const [filters, setFilters] = useState<PropertyFilters>({
    type: 'all',
    priceRange: 'all',
    sortBy: 'premium'
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const priceDropdownRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeDropdownRef.current && !typeDropdownRef.current.contains(event.target as Node) &&
        priceDropdownRef.current && !priceDropdownRef.current.contains(event.target as Node) &&
        sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterChange = (key: keyof PropertyFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[120px] z-40">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-4">
        {/* Top Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Left Section - Results Count */}
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-serif text-gray-900">
              Propiedades de Lujo en Valle de Uco
            </h2>
            <span className="text-gray-600">
              {totalResults.toLocaleString()} propiedades
            </span>
          </div>

          {/* Right Section - Filters Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Type Dropdown */}
            <div className="relative" ref={typeDropdownRef}>
              <button
                onClick={() => toggleDropdown('type')}
                className="px-5 py-2.5 pr-10 border-2 border-gray-300 rounded-full text-sm font-medium focus:outline-none focus:border-bordeaux-dark hover:border-gray-400 transition-colors cursor-pointer bg-white"
              >
                {propertyTypes.find(t => t.value === filters.type)?.label || 'Tipo'}
                <svg
                  className={`w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'type' && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => handleFilterChange('type', type.value)}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        filters.type === type.value ? 'border-bordeaux-dark bg-bordeaux-dark' : 'border-gray-300'
                      }`}>
                        {filters.type === type.value && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700">{type.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Dropdown */}
            <div className="relative" ref={priceDropdownRef}>
              <button
                onClick={() => toggleDropdown('price')}
                className="px-5 py-2.5 pr-10 border-2 border-gray-300 rounded-full text-sm font-medium focus:outline-none focus:border-bordeaux-dark hover:border-gray-400 transition-colors cursor-pointer bg-white"
              >
                {priceRanges.find(p => p.value === filters.priceRange)?.label || 'Precio'}
                <svg
                  className={`w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition-transform ${openDropdown === 'price' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'price' && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[240px] z-50">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => handleFilterChange('priceRange', range.value)}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        filters.priceRange === range.value ? 'border-bordeaux-dark bg-bordeaux-dark' : 'border-gray-300'
                      }`}>
                        {filters.priceRange === range.value && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700">{range.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                onClick={() => toggleDropdown('sort')}
                className="px-5 py-2.5 pr-10 border-2 border-gray-300 rounded-full text-sm font-medium focus:outline-none focus:border-bordeaux-dark hover:border-gray-400 transition-colors cursor-pointer bg-white"
              >
                {sortOptions.find(s => s.value === filters.sortBy)?.label || 'Ordenar'}
                <svg
                  className={`w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition-transform ${openDropdown === 'sort' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'sort' && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[220px] z-50">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange('sortBy', option.value)}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        filters.sortBy === option.value ? 'border-bordeaux-dark bg-bordeaux-dark' : 'border-gray-300'
                      }`}>
                        {filters.sortBy === option.value && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Save Search Button */}
            <button className="px-5 py-2.5 border-2 border-bordeaux-dark text-bordeaux-dark rounded-full hover:bg-bordeaux-dark hover:text-white transition-all duration-300 flex items-center gap-2 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-bordeaux-dark text-white rounded-lg hover:bg-bordeaux transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span className="text-sm font-medium">Filtros</span>
          </button>
        </div>

        {/* Mobile Filters Panel */}
        {showMobileFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200 lg:hidden">
            <div className="space-y-4">
              {/* Type Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Propiedad
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bordeaux-dark"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rango de Precio
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bordeaux-dark"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordenar Por
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bordeaux-dark"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
