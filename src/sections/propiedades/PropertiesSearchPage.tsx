"use client";

import { useState, useMemo, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SearchBarSection from "./SearchBarSection";
import FiltersSection from "./FiltersSection";
import ResultsHeaderSection from "./ResultsHeaderSection";
import PropertyListItem from "./PropertyListItem";
import { properties as propertiesData } from "@/data/properties";

export default function PropertiesSearchPage() {
  const t = useTranslations("PropertiesPage");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Inicializar estados desde query params
  const [activeFilter, setActiveFilter] = useState(searchParams.get("type") || "bodegas");
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showHectaresFilter, setShowHectaresFilter] = useState(false);
  const [showTipoSueloFilter, setShowTipoSueloFilter] = useState(false);
  const [selectedTipoSuelo, setSelectedTipoSuelo] = useState(searchParams.get("zone") || "");
  const [minPrice, setMinPrice] = useState(Number(searchParams.get("minPrice")) || 0);
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get("maxPrice")) || 10000000);
  const [minHectares, setMinHectares] = useState(Number(searchParams.get("minHectares")) || 0);
  const [maxHectares, setMaxHectares] = useState(Number(searchParams.get("maxHectares")) || 500);
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "featured");

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
    if (sortBy && sortBy !== "featured") params.set("sortBy", sortBy);

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [activeFilter, selectedTipoSuelo, searchInput, minPrice, maxPrice, minHectares, maxHectares, sortBy, pathname, router]);

  // Transformar los datos de properties.ts al formato que espera PropertyListItem
  const allProperties = useMemo(() => {
    return propertiesData.map((prop, index) => {
      const content = prop.content[locale as keyof typeof prop.content] || prop.content["es-AR"];
      const priceValue = prop.price.value ?? null;
      const pricePerHa = prop.price.pricePerHectare ?? null;

      return {
        id: index + 1,
        slug: prop.slug,
        title: content?.title,
        location: prop.location.address,
        zone: prop.location.state,
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
        type: prop.type,
        locationProvince: prop.location.province,
        // Campos adicionales para búsqueda
        locationAddress: prop.location.address,
        locationState: prop.location.state,
        locationCountry: prop.location.country,
      };
    });
  }, [locale]);

  // Aplicar filtros
  const properties = useMemo(() => {
    let filtered = [...allProperties];

    // Filtrar por tipo (bodega o finca)
    if (activeFilter === "bodegas") {
      filtered = filtered.filter(p => p.type === "bodega");
    } else if (activeFilter === "fincas") {
      filtered = filtered.filter(p => p.type === "finca");
    }

    // Filtrar por zona
    if (selectedTipoSuelo) {
      const zonaNormalizada = selectedTipoSuelo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      console.log("Zona normalizada:", zonaNormalizada);
      filtered = filtered.filter(p => {
        const provinciaNormalizada = p.zone.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return provinciaNormalizada.includes(zonaNormalizada) || zonaNormalizada.includes(provinciaNormalizada);
      });
    } 

    // Filtrar por precio por hectárea
    if (minPrice > 0 || maxPrice < 10000000) {
      filtered = filtered.filter(p => {
        const price = p.pricePerHectare;
        return price >= minPrice && price <= maxPrice;
      });
    }

    // Filtrar por hectáreas
    if (minHectares > 0 || maxHectares < 500) {
      filtered = filtered.filter(p => {
        const hectares = p.hectares || 0;
        return hectares >= minHectares && hectares <= maxHectares;
      });
    }

    // Filtrar por búsqueda de texto
    if (searchInput.trim()) {
      const search = searchInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      filtered = filtered.filter(p => {
        const searchableFields = [
          p.title,
          p.location,
          p.region,
          p.locationAddress,
          p.locationState,
          p.locationProvince,
          p.locationCountry
        ];

        return searchableFields.some(field => {
          if (!field) return false;
          const normalized = field.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return normalized.includes(search);
        });
      });
    }

    // Ordenar
    if (sortBy === "price-high") {
      filtered.sort((a, b) => b.priceValue - a.priceValue);
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => a.priceValue - b.priceValue);
    }

    return filtered;
  }, [allProperties, activeFilter, selectedTipoSuelo, minPrice, maxPrice, minHectares, maxHectares, searchInput, sortBy]);

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
        {properties.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              {t("noResults")}
            </h3>
            <p className="text-gray-600">
              {t("noResultsDescription")}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {properties.map((property) => (
              <PropertyListItem key={property.id} property={property} />
            ))}
          </div>
        )}
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
