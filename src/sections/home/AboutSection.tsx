
export default function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-light">
          Para quienes buscan una finca y una vida excepcional,
        </p>
        <p className="text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light">
          no hay mejor opción que Valle de uco International Realty.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Mission statement */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light max-w-3xl">
          Respaldado por años de experiencia y con la misión de renovar la forma
          de invertir en fincas en Mendoza, Rodrigo Juri, corredor inmobiliario
          matriculado, marca la diferencia para sus clientes en cada paso del
          camino en Tupungato.
        </p>
      </div>
    </section>
  );
}
