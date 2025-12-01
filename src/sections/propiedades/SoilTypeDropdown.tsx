"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect } from "react";

interface SoilTypeDropdownProps {
  selectedSoilType: string;
  setSelectedSoilType: (type: string) => void;
  isSoilTypeOpen: boolean;
  setIsSoilTypeOpen: (isOpen: boolean) => void;
}

export default function SoilTypeDropdown({
  selectedSoilType,
  setSelectedSoilType,
  isSoilTypeOpen,
  setIsSoilTypeOpen,
}: SoilTypeDropdownProps) {
  const t = useTranslations("PropertiesPage");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const soilTypes = [
    "all",
    "aluvial",
    "franco",
    "arcilloso",
    "arenoso",
    "calcareo",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSoilTypeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSoilTypeOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsSoilTypeOpen(!isSoilTypeOpen)}
        className="w-full px-6 py-3 bg-white border border-gray-300 text-left flex items-center justify-between hover:border-secondary transition-colors"
      >
        <span className="text-gray-700">
          {selectedSoilType === "all"
            ? t("soilType")
            : t(`soilTypes.${selectedSoilType}`)}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isSoilTypeOpen ? "rotate-180" : ""
          }`}
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

      {isSoilTypeOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 shadow-lg z-50 max-h-80 overflow-y-auto">
          {soilTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedSoilType(type);
                setIsSoilTypeOpen(false);
              }}
              className={`w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                selectedSoilType === type
                  ? "bg-gray-100 text-secondary font-medium"
                  : "text-gray-700"
              }`}
            >
              {type === "all" ? t("soilType") : t(`soilTypes.${type}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
