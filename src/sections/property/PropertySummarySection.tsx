interface ResumenGeneral {
  superficieTotal: {
    valor: number;
    unidad: string;
    label: string;
  };
  precioPorHectarea: {
    valor: number;
    moneda: string;
    label: string;
  };
  valorTotal: {
    valor: number;
    moneda: string;
    label: string;
  };
  altitud: {
    valor: number;
    unidad: string;
    label: string;
  };
}

interface PropertySummarySectionProps {
  ref: string;
  title: string;
  location: string;
  resumenGeneral: ResumenGeneral;
  estadoActual: string;
  aptitudProductiva: string;
  descripcion: string;
}

export default function PropertySummarySection({
  ref,
  title,
  location,
  resumenGeneral,
  estadoActual,
  aptitudProductiva,
  descripcion,
}: PropertySummarySectionProps) {
  return (
    <section id="resumen" className="mb-20 scroll-mt-24">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          {ref}
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-baseline gap-4 mb-8">
          <p className="text-4xl font-light text-gray-900">
            {resumenGeneral.valorTotal.valor.toLocaleString()}{" "}
            {resumenGeneral.valorTotal.moneda}
          </p>
          <p className="text-lg text-gray-600">
            (
            {resumenGeneral.precioPorHectarea.valor.toLocaleString()}{" "}
            {resumenGeneral.precioPorHectarea.moneda}/ha)
          </p>
        </div>
      </div>

      {/* Resumen General Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-200">
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {resumenGeneral.superficieTotal.label}
          </p>
          <p className="text-3xl font-light text-gray-900">
            {resumenGeneral.superficieTotal.valor}{" "}
            {resumenGeneral.superficieTotal.unidad}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {resumenGeneral.precioPorHectarea.label}
          </p>
          <p className="text-3xl font-light text-gray-900">
            {resumenGeneral.precioPorHectarea.valor.toLocaleString()}
          </p>
          <p className="text-xs text-gray-600">
            {resumenGeneral.precioPorHectarea.moneda}/ha
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {resumenGeneral.altitud.label}
          </p>
          <p className="text-3xl font-light text-gray-900">
            {resumenGeneral.altitud.valor}
          </p>
          <p className="text-xs text-gray-600">
            {resumenGeneral.altitud.unidad}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Estado Actual
          </p>
          <p className="text-lg font-light text-gray-900 mt-4">
            {estadoActual}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          Descripción General
        </h3>
        <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">
          {descripcion}
        </p>
      </div>

      {/* Aptitud Productiva */}
      <div className="mt-8 bg-[#0A1628] text-white p-8">
        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Aptitud Productiva
        </h4>
        <p className="text-2xl font-light">
          {aptitudProductiva}
        </p>
      </div>
    </section>
  );
}
