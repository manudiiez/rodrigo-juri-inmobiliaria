"use client";

interface GroupList {
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
    subText?: string;
  }[];
}

interface SectionData {
  style?: number;
  groups: GroupList[];
}

interface PropertyGroupedFieldsProps {
  id: string;
  label: string;
  data: SectionData;
}

export default function PropertyGroupedFields({
  id,
  label,
  data,
}: PropertyGroupedFieldsProps) {
  // Guard: don't render if no data provided
  if (!data || !Array.isArray(data.groups) || data.groups.length === 0)
    return null;

  const style = data.style || 1;

  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {label}
      </h2>
      {data.groups.map((item, groupIndex) => (
        <div className="mb-10" key={`${groupIndex}-group-${id}`}>
          {item.title && (
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              {item.title}
            </h3>
          )}

          {/* Featured fields if they exist */}
          {item.featured && item.featured.length > 0 && (
            <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4d] text-white p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {item.featured.map((feat, featIndex) => (
                  <div key={`${featIndex}-${groupIndex}-featured-${id}`}>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                      {feat.label}
                    </p>
                    <p className="text-4xl font-light mb-2">{feat.value}</p>
                    <p className="text-sm text-gray-300">{feat.subText}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular fields - Style 1 (default) */}
          {item.fields && style === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.fields.map((field, fieldIndex) => (
                <div
                  className={`border-l-4 ${
                    field.border || "border-gray-200"
                  } pl-4 ${field?.class ?? ""}`}
                  key={`${fieldIndex}-${groupIndex}-field-${id}`}
                >
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {field.label}
                  </p>
                  {Array.isArray(field.value) ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {field.value.map((variedad, variedadIndex) => (
                        <span
                          key={`${variedadIndex}-variedad-${id}`}
                          className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium"
                        >
                          {variedad}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-lg text-gray-900">{field.value}</p>
                  )}
                  {field.subText && (
                    <p className="text-sm text-gray-600">{field.subText}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Regular fields - Style 2 */}
          {item.fields && style === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {item.fields.map((field, fieldIndex) => (
                <div
                  className="bg-gray-50 p-6"
                  key={`${fieldIndex}-${groupIndex}-field-${id}`}
                >
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {field.label}
                  </p>
                  <p className="text-lg text-gray-900 mb-1">
                    {Array.isArray(field.value)
                      ? field.value.join(", ")
                      : field.value}
                  </p>
                  {field.subText && (
                    <p className="text-sm text-gray-600">{field.subText}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
