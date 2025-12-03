"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface ResultsHeaderSectionProps {
  propertiesCount: number;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function ResultsHeaderSection({
  propertiesCount,
  sortBy,
  setSortBy,
}: ResultsHeaderSectionProps) {
  const t = useTranslations("PropertiesPage");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { value: "featured", label: t("exclusive") },
    { value: "price-high", label: t("priceHighToLow") },
    { value: "price-low", label: t("priceLowToHigh") },
    { value: "newest", label: t("mostRecent") },
  ];

  const selectedOption = sortOptions.find(opt => opt.value === sortBy);

  return (
    <div className="bg-gray-50 border-b border-gray-200 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-light text-gray-900 mb-1">
            {t("viewing", {
              count: propertiesCount,
              total: propertiesCount,
            })}
          </h1>
          <p className="text-sm text-gray-600 font-light">
            {t("showingProperties")}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 uppercase tracking-wider">
              {t("sortBy")}
            </span>
            <div className="relative filter-dropdown">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="px-4 py-2 border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 min-w-[200px] justify-between"
              >
                <span>{selectedOption?.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`}
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

              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-2 w-full bg-white border border-gray-300 shadow-lg z-50">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                        sortBy === option.value ? 'bg-gray-100 font-medium' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
