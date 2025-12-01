"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect } from "react";

interface PriceRangeFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  isPriceOpen: boolean;
  setIsPriceOpen: (isOpen: boolean) => void;
}

export default function PriceRangeFilter({
  priceRange,
  setPriceRange,
  isPriceOpen,
  setIsPriceOpen,
}: PriceRangeFilterProps) {
  const t = useTranslations("PropertiesPage");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const minPrice = 0;
  const maxPrice = 10000000;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsPriceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsPriceOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsPriceOpen(!isPriceOpen)}
        className="w-full px-6 py-3 bg-white border border-gray-300 text-left flex items-center justify-between hover:border-secondary transition-colors"
      >
        <span className="text-gray-700">
          {priceRange[0] === minPrice && priceRange[1] === maxPrice
            ? t("price")
            : `USD ${priceRange[0].toLocaleString()} - USD ${priceRange[1].toLocaleString()}`}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isPriceOpen ? "rotate-180" : ""
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

      {isPriceOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 shadow-lg z-50 p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("minPrice")}
            </label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step={100000}
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([
                  parseInt(e.target.value),
                  Math.max(priceRange[1], parseInt(e.target.value)),
                ])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E2B34C 0%, #E2B34C ${
                  (priceRange[0] / maxPrice) * 100
                }%, #e5e7eb ${(priceRange[0] / maxPrice) * 100}%, #e5e7eb 100%)`,
              }}
            />
            <div className="text-sm text-gray-600 mt-1">
              USD {priceRange[0].toLocaleString()}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("maxPrice")}
            </label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step={100000}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([
                  Math.min(priceRange[0], parseInt(e.target.value)),
                  parseInt(e.target.value),
                ])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E2B34C 0%, #E2B34C ${
                  (priceRange[1] / maxPrice) * 100
                }%, #e5e7eb ${(priceRange[1] / maxPrice) * 100}%, #e5e7eb 100%)`,
              }}
            />
            <div className="text-sm text-gray-600 mt-1">
              USD {priceRange[1].toLocaleString()}
            </div>
          </div>

          <button
            onClick={() => {
              setPriceRange([minPrice, maxPrice]);
              setIsPriceOpen(false);
            }}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            {t("resetFilter")}
          </button>
        </div>
      )}
    </div>
  );
}
