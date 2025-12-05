import { useTranslations } from "next-intl";

interface SearchBarSectionProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
}

export default function SearchBarSection({
  searchInput,
  setSearchInput,
}: SearchBarSectionProps) {
  const t = useTranslations("PropertiesPage");

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 flex items-center bg-white border border-gray-300">
        <svg
          className="w-5 h-5 ml-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={searchInput}
          placeholder={t("searchPlaceholder")}
          className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="h-10 w-10 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
