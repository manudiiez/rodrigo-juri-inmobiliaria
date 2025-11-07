"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SearchBar() {
  const t = useTranslations("Search");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    console.log({ location, propertyType, budget });
  };

  return (
    <div className="relative -mt-16 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6">Busca entre nuestras ficnas</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location Filter */}
            <div className="relative">
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Ubicacion"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="relative">
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="flex-1 outline-none text-gray-700 bg-transparent cursor-pointer"
                >
                  <option value="">{t("propertyType")}</option>
                  <option value="house">{t("types.house")}</option>
                  <option value="apartment">{t("types.apartment")}</option>
                  <option value="villa">{t("types.villa")}</option>
                  <option value="land">{t("types.land")}</option>
                </select>
              </div>
            </div>

            {/* Budget Filter */}
            <div className="relative">
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="flex-1 outline-none text-gray-700 bg-transparent cursor-pointer"
                >
                  <option value="">{t("budget")}</option>
                  <option value="0-50000">{t("budgetRanges.low")}</option>
                  <option value="50000-100000">
                    {t("budgetRanges.medium")}
                  </option>
                  <option value="100000-500000">
                    {t("budgetRanges.high")}
                  </option>
                  <option value="500000+">{t("budgetRanges.luxury")}</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              {t("searchNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
