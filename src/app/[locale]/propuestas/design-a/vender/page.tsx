"use client";

import { useState } from "react";
import NavbarMinimalista from "@/components/propuestas/NavbarMinimalista";
import Footer from "@/components/Footer";
import FooterMinimalista from "@/components/propuestas/design-a/FooterMinimalista";

export default function SellWithUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavbarMinimalista />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-bordeaux-dark text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-48 pt-40 text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Vendé con nosotros
            </h1>
            <p
              className="text-xl md:text-2xl font-light italic text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Fincas excepcionales merecen un asesoramiento a su altura.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Empezá hoy mismo
              </h2>
              <p className="text-lg text-gray-600">
                Accedé a una tasación profesional y a una estrategia de venta
                diseñada especialmente para fincas en Tupungato y el resto de
                Mendoza, para obtener el mejor valor por tu propiedad.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      value={formData.firstName}
                      onChange={handleChange}
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
                      value={formData.lastName}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors resize-none"
                    placeholder="Contame sobre tu propiedad…"
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

        {/* Statistics Section */}
        <section className="bg-gray-50 py-16 md:py-24" id="nosotros">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Alcance de mercado incomparable
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tu finca merece la máxima exposición. Mi plataforma combina
                canales online y offline para llegar a compradores e inversores
                calificados en Mendoza, Argentina y el exterior.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 mx-auto text-[#E2B34C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                    +10.000
                  </p>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    CONTACTOS E INVERSORES POTENCIALES
                  </p>
                  <p className="text-sm text-gray-600">
                    Red propia y alianzas estratégicas en el sector agrícola y
                    vitivinícola.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 mx-auto text-[#E2B34C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                    +300
                  </p>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    MCONSULTAS ANUALES POR FINCAS
                  </p>
                  <p className="text-sm text-gray-600">
                    Propietarios y compradores activos interesados en Tupungato
                    y zonas aledañas.
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 mx-auto text-[#E2B34C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                    100%
                  </p>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    FOCO EN FINCAS Y CAMPOS
                  </p>
                  <p className="text-sm text-gray-600">
                    Especialización en propiedades rurales, productivas y de
                    inversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Highlights Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Estrategia integral de marketing para tu finca
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Utilizo herramientas de marketing específicas para destacar el
                valor productivo, turístico y de inversión de cada propiedad y
                conectarla con el comprador adecuado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Marketing Card 1 */}
              <div className="border border-gray-200 p-6 hover:border-[#E2B34C] transition-colors">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#0A1628]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Publicidad digital segmentada
                </h3>
                <p className="text-gray-600">
                  Campañas en portales inmobiliarios, redes sociales y bases de
                  datos de inversores interesados en Mendoza.
                </p>
              </div>

              {/* Marketing Card 2 */}
              <div className="border border-gray-200 p-6 hover:border-[#E2B34C] transition-colors">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#0A1628]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Material comercial y planos
                </h3>
                <p className="text-gray-600">
                  Folletos digitales, información técnica, mapas y datos
                  productivos claros para facilitar decisiones de inversión.
                </p>
              </div>

              {/* Marketing Card 3 */}
              <div className="border border-gray-200 p-6 hover:border-[#E2B34C] transition-colors">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#0A1628]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Red de contactos y alianzas
                </h3>
                <p className="text-gray-600">
                  Conexión con bodegas, desarrolladores, productores e
                  inversores nacionales e internacionales interesados en la
                  zona.
                </p>
              </div>

              {/* Marketing Card 4 */}
              <div className="border border-gray-200 p-6 hover:border-[#E2B34C] transition-colors">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#0A1628]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Fotografía y video profesional
                </h3>
                <p className="text-gray-600">
                  Imágenes, video y tomas aéreas con drone para mostrar el
                  potencial de la finca, sus vistas y su producción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Section: Agent Finder + Local Office */}
        {/* <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Meet a Local Expert
                </h2>
                <p className="text-gray-600 mb-8">
                  Connect with one of our experienced agents who knows your
                  market inside and out. They'll guide you through every step of
                  selling your property.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#E2B34C] flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Market Analysis
                      </h4>
                      <p className="text-sm text-gray-600">
                        Accurate pricing based on current market conditions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#E2B34C] flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Negotiation Expertise
                      </h4>
                      <p className="text-sm text-gray-600">
                        Maximize your sale price with skilled negotiation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#E2B34C] flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Full Support
                      </h4>
                      <p className="text-sm text-gray-600">
                        From listing to closing, we're with you every step
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#0A1628] text-white py-4 px-6 hover:bg-[#1a2d4d] transition-colors font-medium">
                  Find an Agent
                </button>
              </div>

              <div className="bg-[#0A1628] text-white p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl font-light mb-6">
                  Access Our Local Expertise
                </h2>
                <p className="text-gray-300 mb-8">
                  Visit our office to discuss your property sale in person. Our
                  team is ready to provide personalized service and expert
                  advice.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#E2B34C] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Visit Our Office
                      </h4>
                      <p className="text-sm text-gray-400">
                        Av. San Martín 123, Mendoza Capital
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#E2B34C] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-white mb-1">Call Us</h4>
                      <p className="text-sm text-gray-400">+54 261 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#E2B34C] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Office Hours
                      </h4>
                      <p className="text-sm text-gray-400">
                        Monday - Friday: 9am - 6pm
                      </p>
                      <p className="text-sm text-gray-400">
                        Saturday: 10am - 2pm
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#E2B34C] text-[#0A1628] py-4 px-6 hover:bg-[#d4a23d] transition-colors font-medium">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Why Choose Us Section */}
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
      </div>
      <FooterMinimalista />
    </>
  );
}
