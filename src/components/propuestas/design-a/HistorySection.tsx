"use client";

export default function HistorySection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto de historia */}
          <div>
            <div className="w-12 h-[2px] bg-[#E2B34C] mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-wide font-serif">
              Nuestra historia
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                La única red especializada en fincas de Mendoza que interpreta
                el nu evo estilo de vida de quienes buscan invertir y disfrutar
                en Tupungato. Inspirado en un espíritu innovador y en años de
                experiencia en el mercado, Rodrigo Juri, corredor inmobiliario
                matriculado, lidera una propuesta diferencial enfocada en fincas
                productivas, de recreación y proyectos de inversión con alto
                potencial.
              </p>
              <p>
                Más allá de las vistas a la cordillera, los viñedos y las propiedades únicas de la zona, el objetivo es ofrecerte un estilo de vida a tu medida: ya sea que busques una finca para un proyecto agrícola, turístico, vitivinícola, una inversión estratégica o simplemente un refugio rodeado de naturaleza.
              </p>
              <p>
                Con una selección de fincas en venta en Valle de Uco y otras zonas estratégicas de Mendoza, podés encontrar, a través del asesoramiento de Rodrigo Juri, la propiedad ideal para tu proyecto o inversión, sin importar en qué lugar del mundo te encuentres.
              </p>
            </div>
          </div>

          {/* Métricas */}
          <div className="space-y-12">
            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                +150
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Fincas en Mendoza
              </p>
            </div>

            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                +20
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Años de experiencia
              </p>
            </div>

            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                +500
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                HECTÁREAS COMERCIALIZADAS
              </p>
            </div>

            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                100%
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                ASESORAMIENTO PERSONALIZADO PARA INVERSORES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
