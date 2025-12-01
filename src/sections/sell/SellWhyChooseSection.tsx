export default function SellWhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Por qué los propietarios de fincas eligen a Rodrigo Juri
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dueños de fincas en Tupungato y otras zonas de Mendoza confían
            en un asesor especializado para vender con seguridad, al mejor
            valor y con un proceso claro de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-50 p-8 h-full">
              <p className="text-5xl font-light text-[#E2B34C] mb-4">98%</p>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                Satisfacción de clientes
              </h4>
              <p className="text-gray-600">
                La mayoría de los propietarios valora la transparencia, el
                trato personalizado y el seguimiento durante toda la venta.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-50 p-8 h-full">
              <p className="text-5xl font-light text-[#E2B34C] mb-4">98%</p>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                Del valor de publicación logrado
              </h4>
              <p className="text-gray-600">
                Negociación profesional para acercarse al precio esperado,
                cuidando tanto el valor económico como las condiciones de la
                operación.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-50 p-8 h-full">
              <p className="text-5xl font-light text-[#E2B34C] mb-4">
                100%
              </p>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                Ofertas serias recibidas
              </h4>
              <p className="text-gray-600">
                Estrategia de precio y marketing enfocada en compradores e
                inversores reales, no en simples consultas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
