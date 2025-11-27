'use client';

import { useState } from 'react';

export default function ValuationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    email: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí irá la lógica de envío
  };

  return (
    <section id="formulario-valuacion" className="bg-white py-20 scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Solicite los servicios de un Especialista
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Complete el formulario y nuestros especialistas se pondrán en contacto con usted
              para comenzar con la venta.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bordeaux/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-bordeaux-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">+150 Fincas en cartera</h3>
                  <p className="text-neutral-600">Propiedades rurales y vitivinícolas activas en Tupungato y el resto de Mendoza.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bordeaux/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-bordeaux-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">+50 Inversores recurrentess</h3>
                  <p className="text-neutral-600">Compradores y fondos que buscan de forma permanente fincas en la zona.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bordeaux/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-bordeaux-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">Asesoramiento 100% dedicado</h3>
                  <p className="text-neutral-600">Acompañamiento directo de Rodrigo Juri, corredor inmobiliario matriculado a cargo, durante todo el proceso de venta.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-4">¿Prefiere hablar directamente?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+542611234567"
                  className="flex items-center gap-2 text-bordeaux-dark font-semibold hover:text-bordeaux transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +54 261 123 4567
                </a>
                <a
                  href="mailto:info@valledeuco.com"
                  className="flex items-center gap-2 text-bordeaux-dark font-semibold hover:text-bordeaux transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@valledeuco.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-neutral-50 rounded-2xl p-8 lg:p-10 border border-neutral-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              {/* Número */}
              <div>
                <label htmlFor="numero" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Número de Teléfono *
                </label>
                <input
                  type="tel"
                  id="numero"
                  required
                  value={formData.numero}
                  onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent outline-none transition-all"
                  placeholder="+54 261 123 4567"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-bordeaux focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntenos sobre su propiedad..."
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-bordeaux-dark border-neutral-300 rounded focus:ring-bordeaux"
                />
                <label htmlFor="terms" className="text-sm text-neutral-600">
                  Acepto los términos y condiciones y autorizo a Valle de Uco Realty a contactarme
                  sobre mi propiedad *
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-bordeaux-dark hover:bg-bordeaux text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Solicitar Valuación Gratuita
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-xs text-neutral-500 text-center">
                Responderemos en un plazo máximo de 24 horas hábiles
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
