'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CustomSelectInput, { SelectOption } from './CustomSelectInput';

export interface FilterValues {
  departamento: string;
  priceMin: number;
  priceMax: number;
  areaMin: number;
  areaMax: number;
  tipoSuelo: string;
  phSuelo: string;
  riego: string[];
  energia: string;
  cultivos: string[];
  rendimientoMin: number;
  rendimientoMax: number;
  edadPlantacion: string;
  agua: string[];
  instalaciones: string[];
}

interface PropertiesFiltersProps {
  onFilterChange: (filters: FilterValues) => void;
}

export default function PropertiesFilters({ onFilterChange }: PropertiesFiltersProps) {
  const t = useTranslations('PropertiesPage.filters');

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

  const updateFilters = (newFilters: Partial<FilterValues>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  const toggleArrayFilter = (key: keyof FilterValues, value: string) => {
    const currentArray = filters[key] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(v => v !== value)
      : [...currentArray, value];
    updateFilters({ [key]: newArray });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('title')}</h2>

      {/* Ubicación y Precio */}
      <div className="filter-section">
        <h3 className="font-semibold text-gray-900 mb-4">{t('locationPrice')}</h3>

        <CustomSelectInput
          label={t('department')}
          value={filters.departamento}
          onChange={(value) => updateFilters({ departamento: value })}
          options={[
            { value: '', label: t('all') },
            { value: 'lujan', label: t('departments.lujan') },
            { value: 'maipu', label: t('departments.maipu') },
            { value: 'tupungato', label: t('departments.tupungato') },
            { value: 'san-martin', label: t('departments.san-martin') },
            { value: 'rivadavia', label: t('departments.rivadavia') },
            { value: 'junin', label: t('departments.junin') },
            { value: 'san-rafael', label: t('departments.san-rafael') },
          ]}
          className="mb-4"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('pricePerHa')} (USD)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Mínimo</label>
              <input
                type="number"
                value={filters.priceMin}
                onChange={(e) => updateFilters({ priceMin: Number(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Máximo</label>
              <input
                type="number"
                value={filters.priceMax}
                onChange={(e) => updateFilters({ priceMax: Number(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent"
                placeholder="Sin límite"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('surface')} (ha)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Mínimo</label>
              <input
                type="number"
                value={filters.areaMin}
                onChange={(e) => updateFilters({ areaMin: Number(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Máximo</label>
              <input
                type="number"
                value={filters.areaMax}
                onChange={(e) => updateFilters({ areaMax: Number(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent"
                placeholder="Sin límite"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Características Técnicas */}
      <div className="filter-section">
        <h3 className="font-semibold text-gray-900 mb-4">{t('technicalFeatures')}</h3>

        <CustomSelectInput
          label={t('soilType')}
          value={filters.tipoSuelo}
          onChange={(value) => updateFilters({ tipoSuelo: value })}
          options={[
            { value: '', label: t('all') },
            { value: 'franco', label: t('soilTypes.franco') },
            { value: 'franco-arcilloso', label: t('soilTypes.franco-arcilloso') },
            { value: 'franco-arenoso', label: t('soilTypes.franco-arenoso') },
            { value: 'arcilloso', label: t('soilTypes.arcilloso') },
            { value: 'arenoso', label: t('soilTypes.arenoso') },
          ]}
          className="mb-4"
        />

        <CustomSelectInput
          label={t('soilPh')}
          value={filters.phSuelo}
          onChange={(value) => updateFilters({ phSuelo: value })}
          options={[
            { value: '', label: t('all') },
            { value: 'acido', label: t('phTypes.acid') },
            { value: 'neutro', label: t('phTypes.neutral') },
            { value: 'alcalino', label: t('phTypes.alkaline') },
          ]}
          className="mb-4"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('irrigationSystem')}
          </label>
          <div className="space-y-2">
            {['goteo', 'aspersion', 'surco', 'manto'].map((tipo) => (
              <label key={tipo} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.riego.includes(tipo)}
                  onChange={() => toggleArrayFilter('riego', tipo)}
                  className="rounded border-gray-300 text-bordeaux focus:ring-bordeaux"
                />
                <span className="ml-2 text-sm">{t(`irrigationTypes.${tipo}`)}</span>
              </label>
            ))}
          </div>
        </div>

        <CustomSelectInput
          label={t('energyType')}
          value={filters.energia}
          onChange={(value) => updateFilters({ energia: value })}
          options={[
            { value: '', label: t('all') },
            { value: 'trifasica', label: t('energyTypes.trifasica') },
            { value: 'monofasica', label: t('energyTypes.monofasica') },
            { value: 'sin-energia', label: t('energyTypes.sin-energia') },
          ]}
          className="mb-4"
        />
      </div>

      {/* Productividad */}
      <div className="filter-section">
        <h3 className="font-semibold text-gray-900 mb-4">{t('productivity')}</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('currentCrops')}
          </label>
          <div className="space-y-2">
            {['vinedos', 'olivos', 'frutales', 'sin-cultivo'].map((cultivo) => (
              <label key={cultivo} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.cultivos.includes(cultivo)}
                  onChange={() => toggleArrayFilter('cultivos', cultivo)}
                  className="rounded border-gray-300 text-bordeaux focus:ring-bordeaux"
                />
                <span className="ml-2 text-sm">{t(`cropTypes.${cultivo}`)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('yield')} (kg/ha)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Mínimo</label>
              <input
                type="number"
                value={filters.rendimientoMin}
                onChange={(e) => updateFilters({ rendimientoMin: Number(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Máximo</label>
              <input
                type="number"
                value={filters.rendimientoMax}
                onChange={(e) => updateFilters({ rendimientoMax: Number(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent"
                placeholder="Sin límite"
              />
            </div>
          </div>
        </div>

        <CustomSelectInput
          label={t('plantationAge')}
          value={filters.edadPlantacion}
          onChange={(value) => updateFilters({ edadPlantacion: value })}
          options={[
            { value: '', label: t('all') },
            { value: 'nueva', label: t('ageTypes.new') },
            { value: 'joven', label: t('ageTypes.young') },
            { value: 'adulta', label: t('ageTypes.adult') },
            { value: 'vieja', label: t('ageTypes.old') },
          ]}
          className="mb-4"
        />
      </div>

      {/* Servicios e Instalaciones */}
      <div className="filter-section">
        <h3 className="font-semibold text-gray-900 mb-4">{t('servicesInstallations')}</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('waterSource')}
          </label>
          <div className="space-y-2">
            {['canal', 'pozo', 'rio'].map((fuente) => (
              <label key={fuente} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.agua.includes(fuente)}
                  onChange={() => toggleArrayFilter('agua', fuente)}
                  className="rounded border-gray-300 text-bordeaux focus:ring-bordeaux"
                />
                <span className="ml-2 text-sm">{t(`waterSources.${fuente}`)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('installations')}
          </label>
          <div className="space-y-2">
            {['casa', 'galpon', 'sala-riego', 'cercos'].map((instalacion) => (
              <label key={instalacion} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.instalaciones.includes(instalacion)}
                  onChange={() => toggleArrayFilter('instalaciones', instalacion)}
                  className="rounded border-gray-300 text-bordeaux focus:ring-bordeaux"
                />
                <span className="ml-2 text-sm">{t(`installationTypes.${instalacion}`)}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const resetFilters: FilterValues = {
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
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
        }}
        className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
      >
        {t('clearFilters')}
      </button>
    </div>
  );
}
