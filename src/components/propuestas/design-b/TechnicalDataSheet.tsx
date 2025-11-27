'use client';

interface FincaData {
  resumenGeneral: {
    superficieTotal: string;
    precioPorHectarea: string;
    valorTotal: string;
    altitud: string;
    aptitudProductiva: string;
    estadoActual: string;
    accesoPrincipal: string;
    coordenadas: string;
    distanciaAMendoza: string;
    serviciosCercanos: string;
  };

  fichaTecnica: {
    sueloYClima: {
      tipoSuelo: string;
      textura: string;
      phSuelo: string;
      materiaOrganica: string;
      pendiente: string;
      drenaje: string;
      gradosDia: string;
      heladas: string;
    };

    aguaYRiego: {
      derechoDeAgua: string;
      caudalTotal: string;
      fuente: string;
      turnoDeRiego: string;
      ceAgua: string;
      phAgua: string;
      sistemaDeRiego: string;
      anioInstalacion: string;
    };

    instalacionesYMejoras: {
      casaPrincipal: string;
      estadoCasa: string;
      galpon: string;
      salaDeRiego: string;
      cercos: string;
      caminosInternos: string;
      pozoDeAgua: string;
      tanqueAustraliano: string;
    };

    energiaYProductividad: {
      tipoDeEnergia: string;
      potencia: string;
      transformador: string;
      medidor: string;
      productividadUva: string;
      variedades: string;
      edadVinedos: string;
      precioUva2024: string;
    };

    documentacionLegal: {
      escritura: string;
      mensura: string;
      planosMunicipales: string;
      impuestos: string;
    };

    serviciosCercanos: {
      centroUrbano: string;
      bodegas: string;
      cooperativa: string;
      escuela: string;
    };
  };
}

interface TechnicalDataSheetProps {
  data: FincaData;
}

export default function TechnicalDataSheet({ data }: TechnicalDataSheetProps) {
  const DataRow = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
    <div className={`flex justify-between items-center py-3 px-4 ${highlight ? 'bg-bordeaux/5' : 'hover:bg-neutral-50'} transition-colors`}>
      <span className="text-neutral-600 text-sm font-medium">{label}</span>
      <span className={`text-neutral-900 font-semibold ${highlight ? 'text-bordeaux-dark text-lg' : ''}`}>{value}</span>
    </div>
  );

  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-neutral-900 mb-2">Ficha Técnica</h1>
        <p className="text-neutral-600">Información técnica detallada de la propiedad</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resumen General - Destacado */}
        <div id="resumen" className="lg:col-span-3 bg-gradient-to-br from-bordeaux-dark to-bordeaux text-white rounded-lg p-8 scroll-mt-36">
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Resumen General
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Superficie Total</p>
              <p className="text-2xl font-serif">{data.resumenGeneral.superficieTotal}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Precio/Hectárea</p>
              <p className="text-2xl font-serif">{data.resumenGeneral.precioPorHectarea}</p>
            </div>
            <div className="bg-[#D4AF37] rounded-lg p-4">
              <p className="text-neutral-900 text-xs uppercase tracking-wider mb-2 font-semibold">Valor Total</p>
              <p className="text-2xl font-serif text-neutral-900">{data.resumenGeneral.valorTotal}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Altitud</p>
              <p className="text-2xl font-serif">{data.resumenGeneral.altitud}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Estado Actual</p>
              <p className="text-lg font-serif">{data.resumenGeneral.estadoActual}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <div>
                <p className="text-white/70 text-xs">Coordenadas GPS</p>
                <p className="text-sm font-mono">{data.resumenGeneral.coordenadas}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div>
                <p className="text-white/70 text-xs">Acceso Principal</p>
                <p className="text-sm">{data.resumenGeneral.accesoPrincipal}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <div>
                <p className="text-white/70 text-xs">Distancia a Mendoza</p>
                <p className="text-sm">{data.resumenGeneral.distanciaAMendoza}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-sm text-white/90">
              <span className="font-semibold">Aptitud Productiva:</span> {data.resumenGeneral.aptitudProductiva}
            </p>
          </div>
        </div>

        {/* Suelo y Clima */}
        <div id="suelo" className="bg-white border border-neutral-200 rounded-lg overflow-hidden scroll-mt-36">
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Suelo y Clima
            </h3>
          </div>
          <div className="divide-y divide-neutral-200">
            <DataRow label="Tipo de Suelo" value={data.fichaTecnica.sueloYClima.tipoSuelo} />
            <DataRow label="Textura" value={data.fichaTecnica.sueloYClima.textura} />
            <DataRow label="pH del Suelo" value={data.fichaTecnica.sueloYClima.phSuelo} highlight />
            <DataRow label="Materia Orgánica" value={data.fichaTecnica.sueloYClima.materiaOrganica} />
            <DataRow label="Pendiente" value={data.fichaTecnica.sueloYClima.pendiente} />
            <DataRow label="Drenaje" value={data.fichaTecnica.sueloYClima.drenaje} />
            <DataRow label="Grados Día" value={data.fichaTecnica.sueloYClima.gradosDia} highlight />
            <DataRow label="Heladas" value={data.fichaTecnica.sueloYClima.heladas} />
          </div>
        </div>

        {/* Agua y Riego */}
        <div id="agua" className="bg-white border border-neutral-200 rounded-lg overflow-hidden scroll-mt-36">
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Agua y Riego
            </h3>
          </div>
          <div className="divide-y divide-neutral-200">
            <DataRow label="Derecho de Agua" value={data.fichaTecnica.aguaYRiego.derechoDeAgua} highlight />
            <DataRow label="Caudal Total" value={data.fichaTecnica.aguaYRiego.caudalTotal} highlight />
            <DataRow label="Fuente" value={data.fichaTecnica.aguaYRiego.fuente} />
            <DataRow label="Turno de Riego" value={data.fichaTecnica.aguaYRiego.turnoDeRiego} />
            <DataRow label="CE Agua" value={data.fichaTecnica.aguaYRiego.ceAgua} />
            <DataRow label="pH Agua" value={data.fichaTecnica.aguaYRiego.phAgua} />
            <DataRow label="Sistema de Riego" value={data.fichaTecnica.aguaYRiego.sistemaDeRiego} />
            <DataRow label="Año Instalación" value={data.fichaTecnica.aguaYRiego.anioInstalacion} />
          </div>
        </div>

        {/* Instalaciones y Mejoras */}
        <div id="instalaciones" className="bg-white border border-neutral-200 rounded-lg overflow-hidden scroll-mt-36">
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Instalaciones y Mejoras
            </h3>
          </div>
          <div className="divide-y divide-neutral-200">
            <DataRow label="Casa Principal" value={data.fichaTecnica.instalacionesYMejoras.casaPrincipal} />
            <DataRow label="Estado Casa" value={data.fichaTecnica.instalacionesYMejoras.estadoCasa} />
            <DataRow label="Galpón" value={data.fichaTecnica.instalacionesYMejoras.galpon} />
            <DataRow label="Sala de Riego" value={data.fichaTecnica.instalacionesYMejoras.salaDeRiego} />
            <DataRow label="Cercos" value={data.fichaTecnica.instalacionesYMejoras.cercos} />
            <DataRow label="Caminos Internos" value={data.fichaTecnica.instalacionesYMejoras.caminosInternos} />
            <DataRow label="Pozo de Agua" value={data.fichaTecnica.instalacionesYMejoras.pozoDeAgua} />
            <DataRow label="Tanque Australiano" value={data.fichaTecnica.instalacionesYMejoras.tanqueAustraliano} />
          </div>
        </div>

        {/* Energía y Productividad */}
        <div id="energia" className="lg:col-span-2 bg-white border border-neutral-200 rounded-lg overflow-hidden scroll-mt-36">
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Energía y Productividad
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-neutral-200">
            <div className="divide-y divide-neutral-200">
              <div className="px-6 py-3 bg-neutral-50">
                <p className="text-xs uppercase tracking-wider text-neutral-600 font-semibold">Energía Eléctrica</p>
              </div>
              <DataRow label="Tipo de Energía" value={data.fichaTecnica.energiaYProductividad.tipoDeEnergia} />
              <DataRow label="Potencia" value={data.fichaTecnica.energiaYProductividad.potencia} />
              <DataRow label="Transformador" value={data.fichaTecnica.energiaYProductividad.transformador} />
              <DataRow label="Medidor" value={data.fichaTecnica.energiaYProductividad.medidor} />
            </div>
            <div className="divide-y divide-neutral-200">
              <div className="px-6 py-3 bg-bordeaux/5">
                <p className="text-xs uppercase tracking-wider text-bordeaux-dark font-semibold">Productividad Actual</p>
              </div>
              <DataRow label="Productividad Uva" value={data.fichaTecnica.energiaYProductividad.productividadUva} highlight />
              <DataRow label="Variedades" value={data.fichaTecnica.energiaYProductividad.variedades} />
              <DataRow label="Edad Viñedos" value={data.fichaTecnica.energiaYProductividad.edadVinedos} />
              <DataRow label="Precio Uva 2024" value={data.fichaTecnica.energiaYProductividad.precioUva2024} highlight />
            </div>
          </div>
        </div>

        {/* Documentación Legal */}
        <div id="legal" className="bg-white border border-neutral-200 rounded-lg overflow-hidden scroll-mt-36">
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documentación Legal
            </h3>
          </div>
          <div className="divide-y divide-neutral-200">
            <DataRow label="Escritura" value={data.fichaTecnica.documentacionLegal.escritura} />
            <DataRow label="Mensura" value={data.fichaTecnica.documentacionLegal.mensura} />
            <DataRow label="Planos Municipales" value={data.fichaTecnica.documentacionLegal.planosMunicipales} />
            <DataRow label="Impuestos" value={data.fichaTecnica.documentacionLegal.impuestos} />
          </div>
        </div>

        {/* Servicios Cercanos */}
        <div className="lg:col-span-2 bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Servicios Cercanos
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-neutral-200">
            <DataRow label="Centro Urbano" value={data.fichaTecnica.serviciosCercanos.centroUrbano} />
            <DataRow label="Bodegas" value={data.fichaTecnica.serviciosCercanos.bodegas} />
            <DataRow label="Cooperativa" value={data.fichaTecnica.serviciosCercanos.cooperativa} />
            <DataRow label="Escuela" value={data.fichaTecnica.serviciosCercanos.escuela} />
          </div>
        </div>
      </div>

      {/* Análisis de Rentabilidad */}
      <div id="rentabilidad" className="mt-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg p-8 scroll-mt-36">
        <h3 className="text-2xl font-serif text-neutral-900 mb-6 flex items-center gap-3">
          <svg className="w-6 h-6 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Análisis de Rentabilidad Estimada
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-neutral-200">
            <p className="text-sm text-neutral-600 mb-2">Producción Anual Estimada</p>
            <p className="text-3xl font-serif text-bordeaux-dark mb-1">504.000 kg</p>
            <p className="text-xs text-neutral-500">12.000 kg/ha × 42 ha</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-neutral-200">
            <p className="text-sm text-neutral-600 mb-2">Ingreso Bruto Anual</p>
            <p className="text-3xl font-serif text-bordeaux-dark mb-1">USD 226.800</p>
            <p className="text-xs text-neutral-500">504.000 kg × USD 0.45</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-neutral-200">
            <p className="text-sm text-neutral-600 mb-2">ROI Estimado</p>
            <p className="text-3xl font-serif text-bordeaux-dark mb-1">29.2%</p>
            <p className="text-xs text-neutral-500">Retorno anual sobre inversión</p>
          </div>
          <div className="bg-bordeaux-dark rounded-lg p-6 text-white">
            <p className="text-sm text-white/80 mb-2">Payback Period</p>
            <p className="text-3xl font-serif mb-1">3.4 años</p>
            <p className="text-xs text-white/70">Tiempo de recuperación</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            <span className="font-semibold">Nota:</span> Los cálculos son estimaciones basadas en datos actuales de mercado.
            Los resultados reales pueden variar según condiciones climáticas, manejo agronómico y fluctuaciones de mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
