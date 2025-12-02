"use client";

import { useTranslations } from "next-intl";

interface DocumentacionLegal {
  label: string;
  groups: {
    fields: {
      label: string;
      value: string | string[];
    }[];
  }[];
}

interface PropertyDocumentationProps {
  legal: DocumentacionLegal;
}

export default function PropertyDocumentation({
  legal,
}: PropertyDocumentationProps) {
  const t = useTranslations("PropertyDetailPage.documentation");

  return (
    <section id="documentacion" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {legal.label}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {legal.groups[0].fields.map((field, index) => (
          <div className="flex items-start gap-3" key={`${index}-legal-field`}>
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                {field.label}
              </p>
              <p className="text-lg text-gray-900">
                {Array.isArray(field.value) ? field.value.join(', ') : field.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
