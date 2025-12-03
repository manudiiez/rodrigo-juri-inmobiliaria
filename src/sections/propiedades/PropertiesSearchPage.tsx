"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import SearchBarSection from "./SearchBarSection";
import FiltersSection from "./FiltersSection";
import ResultsHeaderSection from "./ResultsHeaderSection";
import PropertyListItem from "./PropertyListItem";
import { properties as propertiesData } from "@/data/properties";

export default function PropertiesSearchPage() {
  const t = useTranslations("PropertiesPage");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState("comprar");
  const [searchInput, setSearchInput] = useState("");
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showHectaresFilter, setShowHectaresFilter] = useState(false);
  const [showTipoSueloFilter, setShowTipoSueloFilter] = useState(false);
  const [selectedTipoSuelo, setSelectedTipoSuelo] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minHectares, setMinHectares] = useState(0);
  const [maxHectares, setMaxHectares] = useState(500);
  const [sortBy, setSortBy] = useState("featured");

  // Transformar los datos de properties.ts al formato que espera PropertyListItem
  const properties = useMemo(() => {
    return propertiesData.map((prop, index) => {
      const content = prop.content[locale as keyof typeof prop.content] || prop.content.es;
      const priceValue = prop.price.value;
      const pricePerHa = prop.price.pricePerHectare;

      return {
        id: index + 1,
        slug: prop.slug,
        title: content?.title,
        location: prop.location.address,
        region: `${prop.location.province}, ${prop.location.country}`,
        price: priceValue !== null
          ? `${priceValue.toLocaleString()} ${prop.price.currency}`
          : t("noPriceInfo"),
        image: prop.images[0] || "/finca1.jpg",
        aptitude: prop.type,
        description: typeof content?.description === 'string'
          ? content.description
          : content?.description.text,
        summaryFields: content?.summary || [],
        hectares: prop.hectares,
        priceValue: priceValue || 0,
        pricePerHectare: pricePerHa || 0,
      };
    });
  }, [locale]);

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".filter-dropdown")) {
      setShowPriceFilter(false);
      setShowHectaresFilter(false);
      setShowTipoSueloFilter(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" onClick={handleClickOutside}>
      {/* Search and Filters Section */}
      <div className="bg-white border-b border-gray-200 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <SearchBarSection
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />

          <FiltersSection
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            selectedTipoSuelo={selectedTipoSuelo}
            setSelectedTipoSuelo={setSelectedTipoSuelo}
            showTipoSueloFilter={showTipoSueloFilter}
            setShowTipoSueloFilter={setShowTipoSueloFilter}
            showPriceFilter={showPriceFilter}
            setShowPriceFilter={setShowPriceFilter}
            showHectaresFilter={showHectaresFilter}
            setShowHectaresFilter={setShowHectaresFilter}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minHectares={minHectares}
            setMinHectares={setMinHectares}
            maxHectares={maxHectares}
            setMaxHectares={setMaxHectares}
          />
        </div>
      </div>

      {/* Results Header */}
      <ResultsHeaderSection
        propertiesCount={properties.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Properties List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="space-y-12">
          {properties.map((property) => (
            <PropertyListItem key={property.id} property={property} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--secondary);
          cursor: pointer;
          position: relative;
          z-index: 3;
        }
        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--secondary);
          cursor: pointer;
          border: none;
          position: relative;
          z-index: 3;
        }
      `}</style>
    </div>
  );
}
