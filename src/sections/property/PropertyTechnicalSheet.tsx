"use client";

import { useTranslations } from "next-intl";

interface groupList {
  id?: string;
  title?: string;
  borderColor?: string;
  featured?: {
    label: string;
    value: string;
    subText?: string;
  }[];
  fields: {
    id?: string;
    label: string;
    value: string | string[];
    border?: string;
    class?: string;
  }[];
}

interface TechSpecsField {
  label: string;
  groups: groupList[];
}

interface PropertyTechnicalSheetProps {
  techSpecs: TechSpecsField;
}

export default function PropertyTechnicalSheet({
  techSpecs,
}: PropertyTechnicalSheetProps) {
  const t = useTranslations("PropertyDetailPage.technical");

  return (
    <section id="ficha-tecnica" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {techSpecs.label}
      </h2>
      {techSpecs.groups.map((item, groupIndex) => (
        <div className="mb-10" key={`${groupIndex}-group-techspecs`}>
          {item.title && (
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              {item.title}
            </h3>
          )}

          {/* Featured fields si existen */}
          {item.featured && item.featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {item.featured.map((feat, featIndex) => (
                <div
                  key={`${featIndex}-${groupIndex}-featured-techspecs`}
                  className={`border-l-4 ${item.borderColor || 'border-secondary'} bg-gray-50 p-6`}
                >
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {feat.label}
                  </p>
                  <p className="text-3xl font-light text-gray-900 mb-1">
                    {feat.value}
                  </p>
                  {feat.subText && (
                    <p className="text-sm text-gray-600">{feat.subText}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Regular fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {item.fields.map((field, fieldIndex) => (
              <div
                className={`border-l-4 ${field.border || 'border-gray-200'} pl-4 ${field?.class ?? ""}`}
                key={`${fieldIndex}-${groupIndex}-field-techspecs`}
              >
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  {field.label}
                </p>
                <p className="text-lg text-gray-900">
                  {Array.isArray(field.value) ? field.value.join(', ') : field.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
