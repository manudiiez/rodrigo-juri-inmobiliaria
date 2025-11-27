import PropertyDetailHero from '@/components/propuestas/design-b/PropertyDetailHero';
import TechnicalDataSheet from '@/components/propuestas/design-b/TechnicalDataSheet';
import PropertyAgentCard from '@/components/propuestas/design-b/PropertyAgentCard';
import FooterLuxury from '@/components/propuestas/design-b/FooterLuxury';
import SectionNavigationMenu from '@/components/propuestas/design-b/SectionNavigationMenu';

// Datos técnicos completos de la finca
const fincaData = {
  // Información básica para el hero
  title: 'Finca Las Violetas - Valle de Uco',
  location: 'Tunuyán, Valle de Uco, Mendoza',
  price: 777000,
  images: [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=800&h=600&fit=crop',
  ],

  // Datos técnicos detallados
  resumenGeneral: {
    superficieTotal: '42 ha',
    precioPorHectarea: 'USD 18.500',
    valorTotal: 'USD 777.000',
    altitud: '950 msnm',
    aptitudProductiva: 'Viñedos premium / Olivos',
    estadoActual: 'En producción',
    accesoPrincipal: 'RP 15 + 2 km ripio',
    coordenadas: '-33.0162, -68.8751',
    distanciaAMendoza: '35 km',
    serviciosCercanos: '5 km del centro',
  },

  fichaTecnica: {
    sueloYClima: {
      tipoSuelo: 'Franco-arcilloso',
      textura: 'Equilibrada',
      phSuelo: '7.2 (neutro)',
      materiaOrganica: '2.8%',
      pendiente: '2-5% (suave)',
      drenaje: 'Bueno',
      gradosDia: '1.450 (ideal viñedos)',
      heladas: 'Tardías (octubre)',
    },

    aguaYRiego: {
      derechoDeAgua: '1,2 l/s/ha',
      caudalTotal: '50 l/s',
      fuente: 'Río Mendoza',
      turnoDeRiego: 'Cada 15 días',
      ceAgua: '0.8 dS/m (excelente)',
      phAgua: '7.5',
      sistemaDeRiego: 'Goteo tecnificado',
      anioInstalacion: '2018',
    },

    instalacionesYMejoras: {
      casaPrincipal: '120 m² (3 dormitorios)',
      estadoCasa: 'Muy bueno',
      galpon: '200 m²',
      salaDeRiego: 'Automatizada',
      cercos: 'Perimetral completo',
      caminosInternos: 'Consolidados',
      pozoDeAgua: 'No (riego por canal)',
      tanqueAustraliano: '50.000 litros',
    },

    energiaYProductividad: {
      tipoDeEnergia: 'Trifásica',
      potencia: '25 kW',
      transformador: 'Propio',
      medidor: 'Individual',
      productividadUva: '12.000 kg/ha',
      variedades: 'Malbec, Cabernet',
      edadVinedos: '8-12 años',
      precioUva2024: 'USD 0.45/kg',
    },

    documentacionLegal: {
      escritura: 'Al día',
      mensura: '2020 (actualizada)',
      planosMunicipales: 'Aprobados',
      impuestos: 'Al día',
    },

    serviciosCercanos: {
      centroUrbano: '5 km',
      bodegas: '3-8 km',
      cooperativa: '6 km',
      escuela: '4 km',
    },
  },

  agent: {
    name: 'Maryam Amiri',
    title: 'Especialista en Fincas y Viñedos',
    phone: '+54 261 567 8900',
    email: 'maryam.amiri@valledeuco.com',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    yearsExperience: 12,
  },
};

export default function PropertyDetailPage() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-bordeaux-dark text-white py-3 text-center text-sm">
        <p>Propiedades exclusivas en el Valle de Uco • +54 261 123 4567</p>
      </div>

      {/* Navigation Menu with Sections */}
      <SectionNavigationMenu />

      <main className="min-h-screen bg-white">
        <div id="galeria">
          <PropertyDetailHero
            images={fincaData.images}
            title={fincaData.title}
            location={fincaData.location}
            price={fincaData.price}
          />
        </div>

        {/* Ficha Técnica Completa */}
        <TechnicalDataSheet data={fincaData} />

        {/* Mapa y Ubicación */}
        <div id="ubicacion" className="bg-neutral-50 py-12 border-t border-neutral-200 scroll-mt-36">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Ubicación y Acceso</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden border border-neutral-200 aspect-[16/9]">
                <iframe
                  src={`https://www.google.com/maps?q=${fincaData.resumenGeneral.coordenadas}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Datos de Acceso</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-bordeaux flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Coordenadas GPS</p>
                      <p className="text-sm text-neutral-600 font-mono">{fincaData.resumenGeneral.coordenadas}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-bordeaux flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Acceso</p>
                      <p className="text-sm text-neutral-600">{fincaData.resumenGeneral.accesoPrincipal}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-bordeaux flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Distancia a Mendoza</p>
                      <p className="text-sm text-neutral-600">{fincaData.resumenGeneral.distanciaAMendoza}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <button className="w-full py-3 px-4 bg-bordeaux-dark text-white rounded-lg hover:bg-bordeaux transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Abrir en Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto con el agente */}
        <div id="contacto" className="scroll-mt-36">
          <PropertyAgentCard agent={fincaData.agent} />
        </div>

        {/* Documentos Descargables */}
        <div className="bg-white py-12 border-t border-neutral-200">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Documentación Disponible</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Ficha Técnica Completa', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', size: '245 KB' },
                { name: 'Análisis de Suelo', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', size: '1.2 MB' },
                { name: 'Plano de Mensura', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', size: '890 KB' },
                { name: 'Título de Propiedad', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', size: '567 KB' },
              ].map((doc, idx) => (
                <button
                  key={idx}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 hover:border-bordeaux hover:bg-bordeaux/5 transition-all group"
                >
                  <svg className="w-8 h-8 text-neutral-400 group-hover:text-bordeaux transition-colors mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={doc.icon} />
                  </svg>
                  <p className="text-sm font-semibold text-neutral-900 mb-1">{doc.name}</p>
                  <p className="text-xs text-neutral-500">PDF • {doc.size}</p>
                  <div className="mt-3 flex items-center text-xs text-bordeaux-dark font-medium">
                    Descargar
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Propiedades Similares */}
        <div className="bg-neutral-50 py-16 border-t border-neutral-200">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-neutral-900 mb-4">Fincas Similares</h2>
              <p className="text-neutral-600 text-lg">
                Otras propiedades productivas en el Valle de Uco
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Finca Los Álamos', ha: 35, price: 650000, location: 'San Carlos' },
                { name: 'Finca El Nogal', ha: 28, price: 520000, location: 'Tupungato' },
                { name: 'Finca Santa Elena', ha: 50, price: 925000, location: 'Tunuyán' },
              ].map((property, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        idx === 0
                          ? '1464207687429-7505649dae38'
                          : idx === 1
                          ? '1506905925346-21bda4d32df4'
                          : '1523217582562-09d0def993a6'
                      }?w=800&h=600&fit=crop`}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-sm font-medium text-bordeaux-dark">
                        USD {property.price.toLocaleString('es-AR')}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-neutral-900 mb-2">{property.name}</h3>
                    <p className="text-neutral-600 mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {property.location}, Valle de Uco
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4 pb-4 border-b border-neutral-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        {property.ha} ha
                      </span>
                      <span className="text-neutral-400">•</span>
                      <span>USD {(property.price / property.ha).toLocaleString('es-AR')}/ha</span>
                    </div>
                    <button className="w-full py-3 border border-bordeaux text-bordeaux-dark hover:bg-bordeaux hover:text-white rounded-lg transition-all duration-300 font-medium">
                      Ver Ficha Técnica
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <FooterLuxury />
    </>
  );
}
