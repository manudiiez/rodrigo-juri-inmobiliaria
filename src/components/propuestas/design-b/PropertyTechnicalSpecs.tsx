'use client';

interface TechnicalSpec {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface PropertyTechnicalSpecsProps {
  specs: {
    // Información General
    totalArea: number; // hectáreas
    buildingArea?: number; // m2
    lotSize?: number; // m2

    // Características del Terreno
    soilType?: string;
    waterRights?: string;
    irrigation?: string;
    drainage?: string;

    // Construcciones
    bedrooms?: number;
    bathrooms?: number;
    garages?: number;
    warehouses?: number;

    // Servicios y Utilidades
    electricity?: string;
    gas?: string;
    water?: string;
    internet?: string;

    // Detalles Agrícolas (para fincas)
    crops?: string[];
    vineyard?: {
      hectares: number;
      varieties: string[];
      plantingYear: number;
    };

    // Infraestructura
    fencing?: string;
    roads?: string;
    buildings?: string[];

    // Regulaciones
    zoning?: string;
    propertyType?: string;
    yearBuilt?: number;
  };
  description: string;
}

export default function PropertyTechnicalSpecs({ specs, description }: PropertyTechnicalSpecsProps) {
  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Descripción</h2>
            <p className="text-neutral-700 leading-relaxed text-lg whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Características Principales */}
          <div>
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Características Principales</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <svg className="w-8 h-8 mx-auto mb-3 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <p className="text-2xl font-serif text-neutral-900 mb-1">{specs.totalArea}</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wider">Hectáreas</p>
              </div>

              {specs.buildingArea && (
                <div className="text-center p-6 bg-neutral-50 rounded-lg">
                  <svg className="w-8 h-8 mx-auto mb-3 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-2xl font-serif text-neutral-900 mb-1">{specs.buildingArea}</p>
                  <p className="text-sm text-neutral-600 uppercase tracking-wider">m² Construidos</p>
                </div>
              )}

              {specs.bedrooms && (
                <div className="text-center p-6 bg-neutral-50 rounded-lg">
                  <svg className="w-8 h-8 mx-auto mb-3 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-2xl font-serif text-neutral-900 mb-1">{specs.bedrooms}</p>
                  <p className="text-sm text-neutral-600 uppercase tracking-wider">Dormitorios</p>
                </div>
              )}

              {specs.bathrooms && (
                <div className="text-center p-6 bg-neutral-50 rounded-lg">
                  <svg className="w-8 h-8 mx-auto mb-3 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <p className="text-2xl font-serif text-neutral-900 mb-1">{specs.bathrooms}</p>
                  <p className="text-sm text-neutral-600 uppercase tracking-wider">Baños</p>
                </div>
              )}
            </div>
          </div>

          {/* Detalles Técnicos del Terreno */}
          <div>
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Detalles Técnicos del Terreno</h2>
            <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
              {specs.soilType && (
                <div className="p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-600 font-medium">Tipo de Suelo</span>
                  <span className="text-neutral-900">{specs.soilType}</span>
                </div>
              )}
              {specs.waterRights && (
                <div className="p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-600 font-medium">Derechos de Agua</span>
                  <span className="text-neutral-900">{specs.waterRights}</span>
                </div>
              )}
              {specs.irrigation && (
                <div className="p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-600 font-medium">Sistema de Riego</span>
                  <span className="text-neutral-900">{specs.irrigation}</span>
                </div>
              )}
              {specs.drainage && (
                <div className="p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-600 font-medium">Drenaje</span>
                  <span className="text-neutral-900">{specs.drainage}</span>
                </div>
              )}
              {specs.fencing && (
                <div className="p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-600 font-medium">Cercado</span>
                  <span className="text-neutral-900">{specs.fencing}</span>
                </div>
              )}
              {specs.roads && (
                <div className="p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-600 font-medium">Caminos de Acceso</span>
                  <span className="text-neutral-900">{specs.roads}</span>
                </div>
              )}
            </div>
          </div>

          {/* Información Agrícola */}
          {(specs.vineyard || specs.crops) && (
            <div>
              <h2 className="text-3xl font-serif text-neutral-900 mb-6">Información Agrícola</h2>
              <div className="bg-gradient-to-br from-bordeaux/5 to-bordeaux/10 border border-bordeaux/20 rounded-lg p-8">
                {specs.vineyard && (
                  <div className="mb-6 last:mb-0">
                    <h3 className="text-xl font-serif text-bordeaux-dark mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                      Viñedo
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/50 p-4 rounded">
                        <p className="text-sm text-neutral-600 mb-1">Superficie Plantada</p>
                        <p className="text-2xl font-serif text-bordeaux-dark">{specs.vineyard.hectares} ha</p>
                      </div>
                      <div className="bg-white/50 p-4 rounded">
                        <p className="text-sm text-neutral-600 mb-1">Año de Plantación</p>
                        <p className="text-2xl font-serif text-bordeaux-dark">{specs.vineyard.plantingYear}</p>
                      </div>
                      <div className="bg-white/50 p-4 rounded md:col-span-1">
                        <p className="text-sm text-neutral-600 mb-2">Variedades</p>
                        <div className="flex flex-wrap gap-2">
                          {specs.vineyard.varieties.map((variety, idx) => (
                            <span key={idx} className="px-3 py-1 bg-bordeaux-dark text-white text-xs rounded-full">
                              {variety}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {specs.crops && specs.crops.length > 0 && (
                  <div>
                    <h3 className="text-xl font-serif text-bordeaux-dark mb-4">Cultivos Actuales</h3>
                    <div className="flex flex-wrap gap-2">
                      {specs.crops.map((crop, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white border border-bordeaux/30 text-neutral-900 rounded-lg">
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Servicios e Infraestructura */}
          <div>
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Servicios e Infraestructura</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Servicios */}
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Servicios</h3>
                <div className="space-y-3">
                  {specs.electricity && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-bordeaux flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <p className="text-sm text-neutral-600">Electricidad</p>
                        <p className="text-neutral-900">{specs.electricity}</p>
                      </div>
                    </div>
                  )}
                  {specs.water && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-bordeaux flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <div>
                        <p className="text-sm text-neutral-600">Agua</p>
                        <p className="text-neutral-900">{specs.water}</p>
                      </div>
                    </div>
                  )}
                  {specs.gas && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-bordeaux flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      <div>
                        <p className="text-sm text-neutral-600">Gas</p>
                        <p className="text-neutral-900">{specs.gas}</p>
                      </div>
                    </div>
                  )}
                  {specs.internet && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-bordeaux flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                      <div>
                        <p className="text-sm text-neutral-600">Internet</p>
                        <p className="text-neutral-900">{specs.internet}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Construcciones */}
              {specs.buildings && specs.buildings.length > 0 && (
                <div className="border border-neutral-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Construcciones</h3>
                  <ul className="space-y-2">
                    {specs.buildings.map((building, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-bordeaux flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-neutral-700">{building}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Información Legal y Regulatoria */}
          <div>
            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Información Legal</h2>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {specs.zoning && (
                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Zonificación</p>
                    <p className="text-lg text-neutral-900 font-medium">{specs.zoning}</p>
                  </div>
                )}
                {specs.propertyType && (
                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Tipo de Propiedad</p>
                    <p className="text-lg text-neutral-900 font-medium">{specs.propertyType}</p>
                  </div>
                )}
                {specs.yearBuilt && (
                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Año de Construcción</p>
                    <p className="text-lg text-neutral-900 font-medium">{specs.yearBuilt}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            {/* Quick Facts */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Datos Rápidos</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                  <span className="text-sm text-neutral-600">Superficie Total</span>
                  <span className="text-sm font-medium text-neutral-900">{specs.totalArea} ha</span>
                </div>
                {specs.buildingArea && (
                  <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600">Área Construida</span>
                    <span className="text-sm font-medium text-neutral-900">{specs.buildingArea} m²</span>
                  </div>
                )}
                {specs.yearBuilt && (
                  <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600">Año</span>
                    <span className="text-sm font-medium text-neutral-900">{specs.yearBuilt}</span>
                  </div>
                )}
                {specs.propertyType && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-neutral-600">Tipo</span>
                    <span className="text-sm font-medium text-neutral-900">{specs.propertyType}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Share */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Compartir</h3>
              <div className="flex gap-3">
                <button className="flex-1 p-3 border border-neutral-300 rounded-lg hover:border-bordeaux hover:bg-bordeaux/5 transition-all">
                  <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="flex-1 p-3 border border-neutral-300 rounded-lg hover:border-bordeaux hover:bg-bordeaux/5 transition-all">
                  <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
                <button className="flex-1 p-3 border border-neutral-300 rounded-lg hover:border-bordeaux hover:bg-bordeaux/5 transition-all">
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
