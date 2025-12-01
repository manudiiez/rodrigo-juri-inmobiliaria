"use client";

import { useTranslations } from "next-intl";

interface ResultsHeaderProps {
  resultsCount: number;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export default function ResultsHeader({
  resultsCount,
  sortBy,
  setSortBy,
}: ResultsHeaderProps) {
  const t = useTranslations("PropertiesPage");

  return (
    <div className="flex items-center justify-between mb-8">
      <p className="text-gray-600">
        {resultsCount} {t("propertiesFound")}
      </p>
      <div className="flex items-center gap-4">
        <label className="text-gray-600">{t("sortBy")}:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-secondary"
        >
          <option value="featured">{t("featured")}</option>
          <option value="price-low">{t("priceLowToHigh")}</option>
          <option value="price-high">{t("priceHighToLow")}</option>
          <option value="newest">{t("newest")}</option>
        </select>
      </div>
    </div>
  );
}
