"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect } from "react";

interface HectaresFilterProps {
  hectaresRange: [number, number];
  setHectaresRange: (range: [number, number]) => void;
  isHectaresOpen: boolean;
  setIsHectaresOpen: (isOpen: boolean) => void;
}

export default function HectaresFilter({
  hectaresRange,
  setHectaresRange,
  isHectaresOpen,
  setIsHectaresOpen,
}: HectaresFilterProps) {
  const t = useTranslations("PropertiesPage");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const minHectares = 0;
  const maxHectares = 500;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsHectaresOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsHectaresOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsHectaresOpen(!isHectaresOpen)}
        className="w-full px-6 py-3 bg-white border border-gray-300 text-left flex items-center justify-between hover:border-secondary transition-colors"
      >
        <span className="text-gray-700">
          {hectaresRange[0] === minHectares &&
          hectaresRange[1] === maxHectares
            ? t("hectares")
            : `${hectaresRange[0]} - ${hectaresRange[1]} ${t("hectares")}`}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isHectaresOpen ? "rotate-180" : ""
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

      {isHectaresOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 shadow-lg z-50 p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("minHectares")}
            </label>
            <input
              type="range"
              min={minHectares}
              max={maxHectares}
              step={5}
              value={hectaresRange[0]}
              onChange={(e) =>
                setHectaresRange([
                  parseInt(e.target.value),
                  Math.max(hectaresRange[1], parseInt(e.target.value)),
                ])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E2B34C 0%, #E2B34C ${
                  (hectaresRange[0] / maxHectares) * 100
                }%, #e5e7eb ${
                  (hectaresRange[0] / maxHectares) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
            <div className="text-sm text-gray-600 mt-1">
              {hectaresRange[0]} {t("hectares")}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("maxHectares")}
            </label>
            <input
              type="range"
              min={minHectares}
              max={maxHectares}
              step={5}
              value={hectaresRange[1]}
              onChange={(e) =>
                setHectaresRange([
                  Math.min(hectaresRange[0], parseInt(e.target.value)),
                  parseInt(e.target.value),
                ])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E2B34C 0%, #E2B34C ${
                  (hectaresRange[1] / maxHectares) * 100
                }%, #e5e7eb ${
                  (hectaresRange[1] / maxHectares) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
            <div className="text-sm text-gray-600 mt-1">
              {hectaresRange[1]} {t("hectares")}
            </div>
          </div>

          <button
            onClick={() => {
              setHectaresRange([minHectares, maxHectares]);
              setIsHectaresOpen(false);
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
