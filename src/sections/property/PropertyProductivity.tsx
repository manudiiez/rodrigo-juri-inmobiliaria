"use client";

import { useTranslations } from "next-intl";

interface EnergiaYProductividad {
  label: string;
  groups: {
    title?: string;
    borderColor?: string;
    featured?: {
      label: string;
      value: string;
      subText?: string;
    }[];
    fields: {
      label: string;
      value: string | string[];
      border?: string;
      class?: string;
      subText?: string;
    }[];
  }[];
}

interface ProductionInterface {
  production: EnergiaYProductividad;
}


const production = {
  label: "Energía y Productividad",
  groups: [
    {
      title: "Suministro Eléctrico",
      fields: [
        {
          label: "TIPO DE ENERGÍA",
          value: "Trifásica",
          class: "border-secondary",
        },
        { label: "POTENCIA", value: "25 kW", class: "border-secondary" },
        { label: "TRANSFORMADOR", value: "Propio" },
        { label: "MEDIDOR", value: "Individual" },
      ],
    },
    {
      title: "Producción Vitivinícola",
      borderColor: "border-indigo-900", // Color oscuro (Vino/Noche)
      featured: [
        {
          label: "PRODUCTIVIDAD",
          value: "12.000 kg/ha",
          subText: "Rendimiento por hectárea",
        },
        {
          label: "PRECIO UVA 2024",
          value: "0.45 USD/kg",
          subText: "Precio de mercado",
        },
      ],
      fields: [
        {
          label: "VARIEDADES",
          value: ["Malbec", "Cabernet"],
          class: "border-secondary",
        }, //
        { label: "EDAD DE VIÑEDOS", value: "8-12 años" },
      ],
    },
  ],
};

export default function PropertyProductivity({
  production,
}: ProductionInterface) {
  const t = useTranslations("PropertyDetailPage.productivity");

  return (
    <section id="productividad" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {production.label}
      </h2>

      {/* Energía */}
      {production.groups.map((group, index) => (
        <div className="mb-10" key={`${index}-group-energy`}>
          <h3 className="text-2xl font-light text-gray-900 mb-6">
            {group.title}
          </h3>
          {group.featured && (
            <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4d] text-white p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {group.featured.map((item, idx) => (
                  <div key={`${idx}-featured-energy`}>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                      {item.label}
                    </p>
                    <p className="text-4xl font-light mb-2">{item.value}</p>
                    <p className="text-sm text-gray-300">{item.subText}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group.fields.map((field, subIndex) => (
              <div
                className={`border-l-4 border-gray-200 pl-4  ${field.class}`}
                key={`${subIndex}-field-energy`}
              >
                <p
                  className={`text-xs uppercase tracking-widest text-gray-500 mb-2 ${field.class}`}
                >
                  {field.label}
                </p>
                {Array.isArray(field.value) ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {field.value.map((variedad, variedadIndex) => (
                      <span
                        key={`${variedadIndex}-variedad-energy`}
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
                  <p className="text-sm text-gray-500 mt-2">{field.subText}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
