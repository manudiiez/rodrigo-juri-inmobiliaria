interface InstalacionesYMejoras {
  casaPrincipal: string;
  estadoCasa: string;
  galpon: string;
  salaDeRiego: string;
  cercos: string;
  caminosInternos: string;
  pozoDeAgua: string;
  tanqueAustraliano: string;
}

interface PropertyInfrastructureProps {
  instalacionesYMejoras: InstalacionesYMejoras;
}

export default function PropertyInfrastructure({
  instalacionesYMejoras,
}: PropertyInfrastructureProps) {
  return (
    <section id="infraestructura" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
        Instalaciones y Mejoras
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Casa Principal
          </p>
          <p className="text-lg text-gray-900 mb-1">
            {instalacionesYMejoras.casaPrincipal}
          </p>
          <p className="text-sm text-gray-600">
            Estado: {instalacionesYMejoras.estadoCasa}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Galpón
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.galpon}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Sala de Riego
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.salaDeRiego}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Cercos
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.cercos}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Caminos Internos
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.caminosInternos}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Pozo de Agua
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.pozoDeAgua}
          </p>
        </div>
        <div className="bg-gray-50 p-6 md:col-span-2">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Tanque Australiano
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.tanqueAustraliano}
          </p>
        </div>
      </div>
    </section>
  );
}
