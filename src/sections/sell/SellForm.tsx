'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';

export default function SellForm() {
  const t = useTranslations('SellPage.form');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setShowSuccess(true);
    setIsSubmitting(false);

    // Reset form and hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <section id="formulario" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl text-neutral-900 mb-6">
              Comience Hoy
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Complete el formulario y uno de nuestros especialistas se pondrá en contacto con usted para discutir cómo podemos ayudarle a vender su propiedad.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">Valuación Gratuita</h3>
                  <p className="text-neutral-600">Análisis profesional del valor de su propiedad sin costo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">Respuesta en 24 horas</h3>
                  <p className="text-neutral-600">Un especialista se comunicará con usted dentro de las 24 horas hábiles</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">Sin Compromiso</h3>
                  <p className="text-neutral-600">Consulta inicial completamente gratuita y sin obligación</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl text-neutral-900 mb-2">
                Solicite una Consulta
              </h3>
              <p className="text-neutral-600">Complete sus datos y nos pondremos en contacto</p>
            </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-neutral-900 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
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
                name="numero"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
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
                name="email"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
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
                name="mensaje"
                rows={4}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Cuéntenos sobre su propiedad..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neutral-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
            </button>

            {showSuccess && (
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-semibold">
                ¡Mensaje enviado! Nos pondremos en contacto pronto.
              </div>
            )}
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
