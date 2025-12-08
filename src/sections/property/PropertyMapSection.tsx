"use client";

import { useTranslations } from "next-intl";

interface SectionData {
  map: {
    lat: number;
    lng: number;
  };
  featured?: { label: string; value: string }[];
  groups?: {
    featured?: boolean;
    title?: string;
    fields: { label: string; value: string }[];
  }[];
}

interface PropertyMapSectionProps {
  id: string;
  label: string;
  data: SectionData;
}

export default function PropertyMapSection({
  id,
  label,
  data,
}: PropertyMapSectionProps) {
  const t = useTranslations("PropertyDetailPage.location");

  // Guard: don't render if data or map missing
  if (!data || !data.map) return null;

  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {label}
      </h2>

      {/* Map placeholder */}
      <div className="bg-gray-200 h-96 flex items-center justify-center mb-8">
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-500">{t("interactiveMap")}</p>
          <p className="text-xs text-gray-400 mt-1">
            Lat: {data.map.lat}, Lng: {data.map.lng}
          </p>
        </div>
      </div>

      {data.featured && data.featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {data.featured.map((item, index) => (
            <div className="bg-gray-50 p-6" key={`${index}-featured-${id}`}>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                {item.label}
              </p>
              <p className="text-lg text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      )}
      {data.groups && data.groups.map((group, groupIndex) => (
        <div key={`${groupIndex}-group-${id}`}>
          <h4 className="text-xl font-light text-gray-900 mb-4">
            {group.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.fields.map((field, fieldIndex) => (
              <div className="flex items-start gap-8 justify-between border-b border-gray-200 pb-3" key={`${fieldIndex}-field-${id}`}>
                <span className="text-gray-700">{field.label}</span>
                <span className="text-gray-900 font-medium">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
