"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import SearchBarSection from "./SearchBarSection";
import FiltersSection from "./FiltersSection";

interface FiltersWrapperProps {
  initialFilters: {
    activeFilter: string;
    selectedTipoSuelo: string;
    searchInput: string;
    minPrice: number;
    maxPrice: number;
    minHectares: number;
    maxHectares: number;
    sortBy: string;
  };
}

export default function FiltersWrapper({ initialFilters }: FiltersWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [activeFilter, setActiveFilter] = useState(initialFilters.activeFilter);
  const [searchInput, setSearchInput] = useState(initialFilters.searchInput);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showHectaresFilter, setShowHectaresFilter] = useState(false);
  const [showTipoSueloFilter, setShowTipoSueloFilter] = useState(false);
  const [selectedTipoSuelo, setSelectedTipoSuelo] = useState(initialFilters.selectedTipoSuelo);
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice);
  const [minHectares, setMinHectares] = useState(initialFilters.minHectares);
  const [maxHectares, setMaxHectares] = useState(initialFilters.maxHectares);

  // Actualizar URL cuando cambien los filtros
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeFilter && activeFilter !== "bodegas") params.set("type", activeFilter);
    if (selectedTipoSuelo) params.set("zone", selectedTipoSuelo);
    if (searchInput) params.set("search", searchInput);
    if (minPrice > 0) params.set("minPrice", minPrice.toString());
    if (maxPrice < 10000000) params.set("maxPrice", maxPrice.toString());
    if (minHectares > 0) params.set("minHectares", minHectares.toString());
    if (maxHectares < 500) params.set("maxHectares", maxHectares.toString());

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(newUrl);
  }, [activeFilter, selectedTipoSuelo, searchInput, minPrice, maxPrice, minHectares, maxHectares, pathname, router]);

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".filter-dropdown")) {
      setShowPriceFilter(false);
      setShowHectaresFilter(false);
      setShowTipoSueloFilter(false);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 md:px-12 py-6" onClick={handleClickOutside}>
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
  );
}
