"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SearchBarSection from "./SearchBarSection";
import FiltersSection from "./FiltersSection";
import ResultsHeaderSection from "./ResultsHeaderSection";
import PropertyListItem from "./PropertyListItem";

const properties = [
  {
    id: 1,
    ref: "Ref. 186-00835P",
    title: "Finca Los Álamos con Viñedos",
    location: "Luján de Cuyo, Mendoza",
    region: "Valle de Uco, Mendoza, Argentina",
    price: "1.600.000 €",
    image: "/finca1.jpg",
    totalSize: "181.766 m²",
    builtSize: "412 m²",
    bedrooms: 4,
    bathrooms: 3,
    aptitude: "Viñedos",
    description:
      "Finca con viñedos en venta en Valle de Uco, cerca de Tupungato, provincia de Mendoza. En esta finca de 18 hectáreas, 3 hectáreas han sido plantadas con viñas en 2003. El viñedo podría ser expandido hasta 10 hectáreas. La plantación de alta densidad tiene 16.475 vides con las variedades Cabernet Sauvignon, Syrah, Merlot, Tempranillo...",
  },
  {
    id: 2,
    ref: "Ref. 192-01247P",
    title: "Estancia La Merced con Bodega",
    location: "San Rafael, Mendoza",
    region: "San Rafael, Mendoza, Argentina",
    price: "2.400.000 €",
    image: "/finca2.jpg",
    totalSize: "1.200.000 m²",
    builtSize: "850 m²",
    bedrooms: 6,
    bathrooms: 5,
    aptitude: "Vitivinícola",
    description:
      "Excepcional estancia con bodega boutique en San Rafael, Mendoza. Esta propiedad de 120 hectáreas cuenta con viñedos de alta calidad, instalaciones de vinificación de última generación y una casa principal de estilo colonial perfectamente restaurada. Ideal para inversión turística y producción vitivinícola...",
  },
  {
    id: 3,
    ref: "Ref. 175-00982P",
    title: "Campo El Retiro Recreativo",
    location: "Tunuyán, Mendoza",
    region: "Valle de Uco, Mendoza, Argentina",
    price: "988.000 €",
    image: "/finca1.jpg",
    totalSize: "650.000 m²",
    builtSize: "620 m²",
    bedrooms: 5,
    bathrooms: 4,
    aptitude: "Recreativo",
    description:
      "Campo de recreo en Tunuyán con vistas privilegiadas a la Cordillera de los Andes. Esta propiedad de 65 hectáreas ofrece amplias posibilidades para desarrollo turístico, agrícola o simplemente como retiro de montaña. Cuenta con riego, electricidad y acceso asfaltado...",
  },
];

export default function PropertiesSearchPage() {
  const t = useTranslations("PropertiesPage");
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
