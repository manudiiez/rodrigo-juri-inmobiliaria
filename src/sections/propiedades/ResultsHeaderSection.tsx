"use client";

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
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:border-gray-400"
            >
              <option value="featured">{t("exclusive")}</option>
              <option value="price-high">{t("priceHighToLow")}</option>
              <option value="price-low">{t("priceLowToHigh")}</option>
              <option value="newest">{t("mostRecent")}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
