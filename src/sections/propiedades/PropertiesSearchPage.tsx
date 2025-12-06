import { useTranslations } from "next-intl";
import FiltersWrapper from "./FiltersWrapper";
import ResultsHeaderWrapper from "./ResultsHeaderWrapper";
import PropertyListItem from "./PropertyListItem";

interface Property {
  id: number;
  slug: string;
  title: string;
  location: string;
  zone: string | null;
  region: string;
  price: string;
  image: any;
  aptitude: string;
  description: string;
  summaryFields: any[];
  hectares: number | null;
  priceValue: number;
  pricePerHectare: number;
  type: string;
  locationProvince: string | null;
  locationAddress: string | null;
  locationState: string | null;
  locationCountry: string | null;
}

interface InitialFilters {
  activeFilter: string;
  selectedTipoSuelo: string;
  searchInput: string;
  minPrice: number;
  maxPrice: number;
  minHectares: number;
  maxHectares: number;
  sortBy: string;
}

interface PropertiesSearchPageProps {
  properties: Property[];
  initialFilters: InitialFilters;
}

export default function PropertiesSearchPage({
  properties,
  initialFilters,
}: PropertiesSearchPageProps) {
  const t = useTranslations("PropertiesPage");

  return (
    <div className="min-h-screen bg-white">
      {/* Search and Filters Section */}
      <FiltersWrapper initialFilters={initialFilters} />

      {/* Results Header */}
      <ResultsHeaderWrapper
        propertiesCount={properties.length}
        initialSortBy={initialFilters.sortBy}
      />

      {/* Properties List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {properties.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              {t("noResults")}
            </h3>
            <p className="text-gray-600">
              {t("noResultsDescription")}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {properties.map((property) => (
              <PropertyListItem key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
