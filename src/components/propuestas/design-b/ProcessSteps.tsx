"use client";

export default function ProcessSteps() {
  const steps = [
  {
    number: '1',
    title: 'Envíe Información',
    description: 'Cuéntenos sobre su finca o campo y déjenos sus datos de contacto.',
  },
  {
    number: '2',
    title: 'Reciba Propuesta Comercial',
    description: 'Le presentamos una estrategia de venta para su finca: perfil de comprador, canales de difusión y valor sugerido.',
  },
  {
    number: '3',
    title: 'Comience la Venta',
    description: 'Avanzamos con la publicación, la promoción y la gestión de interesados hasta concretar la operación.',
  },
];


  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
            Explore el Valor Real de su Propiedad
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Number with background */}
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center">
                    <span className="text-4xl font-serif text-neutral-400">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-600 leading-relaxed pl-26">
                {step.description}
              </p>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-neutral-200 -ml-6"
                  style={{ width: "calc(100% - 80px)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#formulario-valuacion"
            className="inline-block bg-black text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-bordeaux-dark transition-all duration-300"
          >
            COMENZAR
          </a>
        </div>
      </div>
    </section>
  );
}
