import NavbarLuxury from '@/components/propuestas/design-b/NavbarLuxury';
import HeroVender from '@/components/propuestas/design-b/HeroVender';
import ProcessSteps from '@/components/propuestas/design-b/ProcessSteps';
import WhySellWithUs from '@/components/propuestas/design-b/WhySellWithUs';
import ValuationForm from '@/components/propuestas/design-b/ValuationForm';
import FooterLuxury from '@/components/propuestas/design-b/FooterLuxury';

export default function VenderPage() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-bordeaux-dark text-white py-3 text-center text-sm fixed top-0 w-full z-50">
        <p>Valuaciones profesionales gratuitas • +54 261 123 4567</p>
      </div>

      {/* Navbar with transparent variant */}
      <NavbarLuxury variant="transparent" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroVender />

        {/* Process Steps */}
        <ProcessSteps />

        {/* Why Sell With Us */}
        <WhySellWithUs />

        {/* Valuation Form */}
        <ValuationForm />

        {/* Testimonials Section */}
        <section className="bg-white py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
                Lo que Dicen Nuestros Clientes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: 'El equipo de Valle de Uco Realty vendió nuestra finca de 45 hectáreas en tiempo récord. Su conocimiento del mercado y red internacional hicieron la diferencia.',
                  author: 'Roberto Fernández',
                  role: 'Propietario de Finca Los Álamos',
                  rating: 5,
                },
                {
                  quote: 'La valuación fue extremadamente precisa y detallada. Apreciamos el análisis técnico del suelo y los derechos de agua, aspectos fundamentales para compradores serios.',
                  author: 'María Gutiérrez',
                  role: 'Vendedora de Campo en Tupungato',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-8 border border-neutral-200"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#D4AF37]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-neutral-300 pt-4">
                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterLuxury />
    </>
  );
}
