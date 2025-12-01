"use client";

import { useTranslations } from "next-intl";

interface FilterToggleProps {
  selectedType: "buy" | "rent";
  setSelectedType: (type: "buy" | "rent") => void;
}

export default function FilterToggle({
  selectedType,
  setSelectedType,
}: FilterToggleProps) {
  const t = useTranslations("PropertiesPage");

  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => setSelectedType("buy")}
        className={`px-8 py-3 font-medium transition-colors ${
          selectedType === "buy"
            ? "bg-secondary text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:border-secondary"
        }`}
      >
        {t("buy")}
      </button>
      <button
        onClick={() => setSelectedType("rent")}
        className={`px-8 py-3 font-medium transition-colors ${
          selectedType === "rent"
            ? "bg-secondary text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:border-secondary"
        }`}
      >
        {t("rent")}
      </button>
    </div>
  );
}
