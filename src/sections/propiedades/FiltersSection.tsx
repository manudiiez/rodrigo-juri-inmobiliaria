"use client";

import { useTranslations } from "next-intl";

interface FiltersSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  selectedTipoSuelo: string;
  setSelectedTipoSuelo: (type: string) => void;
  showTipoSueloFilter: boolean;
  setShowTipoSueloFilter: (show: boolean) => void;
  showPriceFilter: boolean;
  setShowPriceFilter: (show: boolean) => void;
  showHectaresFilter: boolean;
  setShowHectaresFilter: (show: boolean) => void;
  minPrice: number;
  setMinPrice: (price: number) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  minHectares: number;
  setMinHectares: (hectares: number) => void;
  maxHectares: number;
  setMaxHectares: (hectares: number) => void;
}

export default function FiltersSection({
  activeFilter,
  setActiveFilter,
  selectedTipoSuelo,
  setSelectedTipoSuelo,
  showTipoSueloFilter,
  setShowTipoSueloFilter,
  showPriceFilter,
  setShowPriceFilter,
  showHectaresFilter,
  setShowHectaresFilter,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minHectares,
  setMinHectares,
  maxHectares,
  setMaxHectares,
}: FiltersSectionProps) {
  const t = useTranslations("PropertiesPage");

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={() => setActiveFilter("bodegas")}
        className={`px-6 py-2 text-sm uppercase tracking-widest border transition-colors ${
          activeFilter === "bodegas"
            ? "bg-[#0A1628] text-white border-[#0A1628]"
            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
        }`}
      >
        {t("wineries")}
      </button>
      <button
        onClick={() => setActiveFilter("fincas")}
        className={`px-6 py-2 text-sm uppercase tracking-widest border transition-colors ${
          activeFilter === "fincas"
            ? "bg-[#0A1628] text-white border-[#0A1628]"
            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
        }`}
      >
        {t("farms")}
      </button>

      {/* Zona */}
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
          {selectedTipoSuelo || t("zone")}
        </button>

        {showTipoSueloFilter && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-300 shadow-xl z-50">
            <button
              onClick={() => {
                setSelectedTipoSuelo("");
                setShowTipoSueloFilter(false);
              }}
              className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
            >
              {t("all")}
            </button>
            <button
              onClick={() => {
                setSelectedTipoSuelo(t("maipu"));
                setShowTipoSueloFilter(false);
              }}
              className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200"
            >
              {t("maipu")}
            </button>
            <button
              onClick={() => {
                setSelectedTipoSuelo(t("valleDeUco"));
                setShowTipoSueloFilter(false);
              }}
              className="w-full px-6 py-3 text-left text-sm uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {t("valleDeUco")}
            </button>
          </div>
        )}
      </div>

      {/* Precio por Hectárea */}
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
          {t("pricePerHectare")}
        </button>

        {showPriceFilter && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-full left-0 mt-2 w-96 bg-[#0A1628] text-white p-8 shadow-2xl z-50 border-t-4 border-secondary"
          >
            <button
              onClick={() => setShowPriceFilter(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-light mb-8 tracking-wide">
              {t("price")}
            </h3>

            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                {t("any")}
              </p>
              <div className="relative h-2 bg-gray-600 rounded-full mb-2">
                <div
                  className="absolute h-2 bg-secondary rounded-full"
                  style={{
                    left: `${(minPrice / 10000000) * 100}%`,
                    right: `${100 - (maxPrice / 10000000) * 100}%`,
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
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {t("noMin")}
                </p>
                <p className="text-lg">${minPrice.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {t("noMax")}
                </p>
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
                {t("clear")}
              </button>
              <button
                onClick={() => setShowPriceFilter(false)}
                className="flex-1 px-6 py-3 bg-white text-[#0A1628] uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
              >
                {t("apply")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hectáreas */}
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
          {t("hectares")}
        </button>

        {showHectaresFilter && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-full left-0 mt-2 w-96 bg-[#0A1628] text-white p-8 shadow-2xl z-50 border-t-4 border-secondary"
          >
            <button
              onClick={() => setShowHectaresFilter(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-light mb-8 tracking-wide">
              {t("hectares")}
            </h3>

            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                {t("any")}
              </p>
              <div className="relative h-2 bg-gray-600 rounded-full mb-2">
                <div
                  className="absolute h-2 bg-secondary rounded-full"
                  style={{
                    left: `${(minHectares / 500) * 100}%`,
                    right: `${100 - (maxHectares / 500) * 100}%`,
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
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {t("noMin")}
                </p>
                <p className="text-lg">{minHectares} ha</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {t("noMax")}
                </p>
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
                {t("clear")}
              </button>
              <button
                onClick={() => setShowHectaresFilter(false)}
                className="flex-1 px-6 py-3 bg-white text-[#0A1628] uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
              >
                {t("apply")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
