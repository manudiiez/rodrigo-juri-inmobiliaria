interface EnergiaYProductividad {
  tipoDeEnergia: string;
  potenciaKw: number;
  transformador: string;
  medidor: string;
  productividadUva: string;
  variedades: string[];
  edadVinedos: string;
  precioUva2024: {
    valor: number;
    unidad: string;
  };
}

interface PropertyProductivityProps {
  energiaYProductividad: EnergiaYProductividad;
}

export default function PropertyProductivity({
  energiaYProductividad,
}: PropertyProductivityProps) {
  return (
    <section id="productividad" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
        Energía y Productividad
      </h2>

      {/* Energía */}
      <div className="mb-10">
        <h3 className="text-2xl font-light text-gray-900 mb-6">
          Suministro Eléctrico
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Tipo de Energía
            </p>
            <p className="text-lg text-gray-900">
              {energiaYProductividad.tipoDeEnergia}
            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Potencia
            </p>
            <p className="text-lg text-gray-900">
              {energiaYProductividad.potenciaKw} kW
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Transformador
            </p>
            <p className="text-lg text-gray-900">
              {energiaYProductividad.transformador}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Medidor
            </p>
            <p className="text-lg text-gray-900">
              {energiaYProductividad.medidor}
            </p>
          </div>
        </div>
      </div>

      {/* Producción */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-6">
          Producción Vitivinícola
        </h3>
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4d] text-white p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Productividad
              </p>
              <p className="text-4xl font-light mb-2">
                {energiaYProductividad.productividadUva}
              </p>
              <p className="text-sm text-gray-300">
                Rendimiento por hectárea
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Precio Uva 2024
              </p>
              <p className="text-4xl font-light mb-2">
                {energiaYProductividad.precioUva2024.valor}{" "}
                {energiaYProductividad.precioUva2024.unidad}
              </p>
              <p className="text-sm text-gray-300">
                Precio de mercado
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-[#E2B34C] pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Variedades
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {energiaYProductividad.variedades.map(
                (variedad, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium"
                  >
                    {variedad}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Edad de Viñedos
            </p>
            <p className="text-lg text-gray-900">
              {energiaYProductividad.edadVinedos}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
