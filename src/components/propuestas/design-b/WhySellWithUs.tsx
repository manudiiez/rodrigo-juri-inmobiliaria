"use client";

export default function WhySellWithUs() {
  const benefits = [
    {
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
      title: "Venta al Mejor Precio",
      description:
        "Diseñamos una estrategia comercial para que su finca se venda en el mejor precio posible según la demanda real del Valle de Uco.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      title: "Marketing Premium para Fincas",
      description:
        "Fotografía profesional, avisos destacados y difusión en canales específicos para compradores de fincas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
      title: "Red de Compradores e Inversores",
      description:
        "Acceso a una red de interesados en propiedades rurales y vitivinícolas en Mendoza, tanto locales como del exterior.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            La Manera Conveniente de Vender
            <br />
            su Finca de Lujo Comienza Aquí
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-bordeaux-dark to-bordeaux text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-6">
            ¿Listo para Vender su Finca o Campo?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenga una valuación precisa y descubra cómo podemos ayudarle a
            maximizar el valor de su propiedad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulario-valuacion"
              className="bg-white text-bordeaux-dark px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
            >
              Hablar con un Especialista
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
