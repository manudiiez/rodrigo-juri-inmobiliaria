"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: number;
  slug: string;
  title: string | undefined;
  location: string;
  region: string;
  price: string;
  image: string;
  aptitude: string;
  description: string | undefined;
  summaryFields: {
    label: string;
    value: string;
    extra?: string;
  }[] | undefined;
} 

interface PropertyListItemProps {
  property: Property;
}

export default function PropertyListItem({ property }: PropertyListItemProps) {
  const t = useTranslations("PropertiesPage");

  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className="group flex flex-col lg:flex-row gap-8 hover:shadow-lg transition-shadow duration-300 border-b border-gray-200 pb-12"
    >
      {/* Image */}
      <div className="lg:w-1/2 relative h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 group-hover:text-bordeaux transition-colors">
            {property.title}
          </h2>

          <p className="text-2xl font-light text-gray-900 mb-6">
            {property.price}
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
            {property.description}
          </p>

          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
            {property.ref}
          </p>

          {/* Details Grid - Summary Fields */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-6">
            {property.summaryFields.map((field, index) => (
              <div key={index} className={index === property.summaryFields.length - 1 && property.summaryFields.length % 2 !== 0 ? "col-span-2" : ""}>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {field.label}
                </p>
                <p className="text-lg text-gray-900">
                  {field.value} {field.extra && <span className="text-sm text-gray-600">{field.extra}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button className="self-start px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="text-sm uppercase tracking-widest">{t("save")}</span>
        </button>
      </div>
    </Link>
  );
}
