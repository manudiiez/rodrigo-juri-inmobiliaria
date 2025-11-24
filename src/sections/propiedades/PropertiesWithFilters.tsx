'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import PropertiesFilters, { FilterValues } from '@/components/PropertiesFilters';
import PropertiesList from './PropertiesList';
import type { Property } from '@/data/properties';

interface PropertiesWithFiltersProps {
  properties: Property[];
}

export default function PropertiesWithFilters({ properties }: PropertiesWithFiltersProps) {
  const t = useTranslations('PropertiesPage.filters');
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState<FilterValues>({
    departamento: '',
    priceMin: 0,
    priceMax: 0,
    areaMin: 0,
    areaMax: 0,
    tipoSuelo: '',
    phSuelo: '',
    riego: [],
    energia: '',
    cultivos: [],
    rendimientoMin: 0,
    rendimientoMax: 0,
    edadPlantacion: '',
    agua: [],
    instalaciones: [],
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Departamento
      if (filters.departamento && property.departamento !== filters.departamento) {
        return false;
      }

      // Precio
      if (filters.priceMin > 0 && property.precio < filters.priceMin) {
        return false;
      }
      if (filters.priceMax > 0 && property.precio > filters.priceMax) {
        return false;
      }

      // Superficie
      if (filters.areaMin > 0 && property.superficie < filters.areaMin) {
        return false;
      }
      if (filters.areaMax > 0 && property.superficie > filters.areaMax) {
        return false;
      }

      // Tipo de suelo
      if (filters.tipoSuelo && property.tipoSuelo !== filters.tipoSuelo) {
        return false;
      }

      // pH del suelo
      if (filters.phSuelo && property.ph !== filters.phSuelo) {
        return false;
      }

      // Sistema de riego
      if (filters.riego.length > 0) {
        const hasRiego = filters.riego.some(r => property.riego.includes(r));
        if (!hasRiego) return false;
      }

      // Energía
      if (filters.energia && property.energia !== filters.energia) {
        return false;
      }

      // Cultivos
      if (filters.cultivos.length > 0) {
        const hasCultivo = filters.cultivos.some(c => property.cultivos.includes(c));
        if (!hasCultivo) return false;
      }

      // Rendimiento
      if (filters.rendimientoMin > 0 && property.rendimiento < filters.rendimientoMin) {
        return false;
      }
      if (filters.rendimientoMax > 0 && property.rendimiento > filters.rendimientoMax) {
        return false;
      }

      // Edad de plantación
      if (filters.edadPlantacion && property.edad !== filters.edadPlantacion) {
        return false;
      }

      // Fuente de agua
      if (filters.agua.length > 0) {
        const hasAgua = filters.agua.some(a => property.agua.includes(a));
        if (!hasAgua) return false;
      }

      // Instalaciones
      if (filters.instalaciones.length > 0) {
        const hasInstalacion = filters.instalaciones.every(i => property.instalaciones.includes(i));
        if (!hasInstalacion) return false;
      }

      return true;
    });
  }, [properties, filters]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-10">
      {/* Toggle filters button (mobile and desktop) */}
      <div className="mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-bordeaux text-white px-6 py-3 rounded-lg hover:bg-bordeaux-light transition-colors font-semibold flex items-center gap-2"
        >
          <svg
            className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          {showFilters ? t('hideFilters') : t('showFilters')}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        {showFilters && (
          <div className="lg:col-span-1">
            <PropertiesFilters onFilterChange={setFilters} />
          </div>
        )}

        {/* Properties list */}
        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
          <PropertiesList properties={filteredProperties} />
        </div>
      </div>
    </div>
  );
}
