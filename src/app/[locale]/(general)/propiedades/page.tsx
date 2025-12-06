import PropertiesSearchPage from '@/sections/propiedades/PropertiesSearchPage';
import { properties as propertiesData } from "@/data/properties";
import { getTranslations } from 'next-intl/server';

interface SearchParams {
  type?: string;
  zone?: string;
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  minHectares?: string;
  maxHectares?: string;
  sortBy?: string;
}

export default async function PropertiesPage({
  searchParams,
  params,
}: {
  searchParams: Promise<SearchParams>;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: 'PropertiesPage' });
  console.log("Locale recibido:", locale);
  // Transformar los datos de properties.ts al formato que espera PropertyListItem
  const allProperties = propertiesData.map((prop, index) => {
    const content = prop.content[locale as keyof typeof prop.content] || prop.content["es-AR"];
    console.log("Contenido de la propiedad:", content);
    const priceValue = prop.price.value as number | null;
    const pricePerHa = prop.price.pricePerHectare as number | null;

    return {
      id: index + 1,
      slug: prop.slug,
      title: content?.title,
      location: prop.location.address,
      zone: prop.location.state,
      region: `${prop.location.province}, ${prop.location.country}`,
      price: priceValue !== null
        ? `${priceValue.toLocaleString()} ${prop.price.currency}`
        : t("noPriceInfo"),
      image: prop.images[0] || "/finca1.jpg",
      aptitude: prop.type,
      description: typeof content?.description === 'string'
        ? content.description
        : content?.description.text,
      summaryFields: content?.summary || [],
      hectares: prop.hectares,
      priceValue: priceValue || 0,
      pricePerHectare: pricePerHa || 0,
      type: prop.type,
      locationProvince: prop.location.province,
      locationAddress: prop.location.address,
      locationState: prop.location.state,
      locationCountry: prop.location.country,
    };
  });

  // Aplicar filtros
  let filtered = [...allProperties];

  const activeFilter = resolvedSearchParams.type || "bodegas";
  const selectedTipoSuelo = resolvedSearchParams.zone || "";
  const searchInput = resolvedSearchParams.search || "";
  const minPrice = Number(resolvedSearchParams.minPrice) || 0;
  const maxPrice = Number(resolvedSearchParams.maxPrice) || 10000000;
  const minHectares = Number(resolvedSearchParams.minHectares) || 0;
  const maxHectares = Number(resolvedSearchParams.maxHectares) || 500;
  const sortBy = resolvedSearchParams.sortBy || "featured";

  // Filtrar por tipo (bodega o finca)
  if (activeFilter === "bodegas") {
    filtered = filtered.filter(p => p.type === "bodega");
  } else if (activeFilter === "fincas") {
    filtered = filtered.filter(p => p.type === "finca");
  }

  // Filtrar por zona
  if (selectedTipoSuelo) {
    const zonaNormalizada = selectedTipoSuelo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    filtered = filtered.filter(p => {
      if (!p.zone) return false;
      const provinciaNormalizada = p.zone.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return provinciaNormalizada.includes(zonaNormalizada) || zonaNormalizada.includes(provinciaNormalizada);
    });
  }

  // Filtrar por precio por hectárea
  if (minPrice > 0 || maxPrice < 10000000) {
    filtered = filtered.filter(p => {
      const price = p.pricePerHectare;
      return price >= minPrice && price <= maxPrice;
    });
  }

  // Filtrar por hectáreas
  if (minHectares > 0 || maxHectares < 500) {
    filtered = filtered.filter(p => {
      const hectares = p.hectares || 0;
      return hectares >= minHectares && hectares <= maxHectares;
    });
  }

  // Filtrar por búsqueda de texto
  if (searchInput.trim()) {
    const search = searchInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    filtered = filtered.filter(p => {
      const searchableFields = [
        p.title,
        p.location,
        p.region,
        p.locationAddress,
        p.locationState,
        p.locationProvince,
        p.locationCountry
      ];

      return searchableFields.some(field => {
        if (!field) return false;
        const normalized = field.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalized.includes(search);
      });
    });
  }

  // Ordenar
  if (sortBy === "price-high") {
    filtered.sort((a, b) => b.priceValue - a.priceValue);
  } else if (sortBy === "price-low") {
    filtered.sort((a, b) => a.priceValue - b.priceValue);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <PropertiesSearchPage
        properties={filtered}
        initialFilters={{
          activeFilter,
          selectedTipoSuelo,
          searchInput,
          minPrice,
          maxPrice,
          minHectares,
          maxHectares,
          sortBy,
        }}
      />
    </main>
  );
}
