export default function PropertyContactSection() {
  return (
    <section id="contacto-finca" className="py-16 md:py-24 bg-white">
      <div>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Empezá hoy mismo
          </h2>
          <p className="text-lg text-gray-600">
            Recibí asesoramiento personalizado para encontrar la finca ideal en Tupungato y el resto de Mendoza, según tu proyecto: agrícola, turístico, vitivinícola, de inversión o para disfrutar en familia.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 md:p-10">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Apellido *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors resize-none"
                placeholder="Contame sobre tu idea..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0A1628] text-white py-4 px-6 hover:bg-[#1a2d4d] transition-colors font-medium text-lg"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
