"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMinimalista from "@/components/propuestas/NavbarMinimalista";
import Footer from "@/components/Footer";
import ContactMinimalista from "@/components/propuestas/design-a/ContactMinimalista";

// Mock data - en producción vendría de la API
const property = {
  id: 1,
  ref: "Ref. 186-00835P",
  title: "Finca Los Álamos con Viñedos",
  location: "Luján de Cuyo, Mendoza",
  images: [
    "/finca1.jpg",
    "/finca2.jpg",
    "/finca1.jpg",
    "/finca2.jpg",
    "/finca1.jpg",
  ],

  resumenGeneral: {
    superficieTotal: {
      valor: 42,
      unidad: "ha",
      label: "Superficie total",
    },
    precioPorHectarea: {
      valor: 18500,
      moneda: "USD",
      label: "Precio por hectárea",
    },
    valorTotal: {
      valor: 777000,
      moneda: "USD",
      label: "Valor total",
    },
    altitud: {
      valor: 950,
      unidad: "msnm",
      label: "Altitud",
    },
  },

  ubicacionYAccesos: {
    aptitudProductiva: "Viñedos premium / Olivos",
    estadoActual: "En producción",
    accesoPrincipal: "RP 15 + 2 km ripio",
    coordenadas: {
      lat: -33.0162,
      lng: -68.8751,
    },
    distanciaAMendozaKm: 35,
    serviciosCercanosDescripcion: "5 km del centro",
  },

  fichaTecnica: {
    sueloYClima: {
      tipoDeSuelo: "Franco-arcilloso",
      textura: "Equilibrada",
      phSuelo: {
        valor: 7.2,
        descripcion: "neutro",
      },
      materiaOrganicaPorc: 2.8,
      pendiente: "2-5% (suave)",
      drenaje: "Bueno",
      gradosDia: {
        valor: 1450,
        descripcion: "ideal viñedos",
      },
      heladas: "Tardías (octubre)",
    },

    aguaYRiego: {
      derechoDeAgua: "1,2 l/s/ha",
      caudalTotal: "50 l/s",
      fuente: "Río Mendoza",
      turnoDeRiego: "Cada 15 días",
      ceAgua: {
        valor: 0.8,
        unidad: "dS/m",
        descripcion: "excelente",
      },
      phAgua: 7.5,
      sistemaDeRiego: "Goteo tecnificado",
      anioInstalacion: 2018,
    },
  },

  instalacionesYMejoras: {
    casaPrincipal: "120 m² (3 dormitorios)",
    estadoCasa: "Muy bueno",
    galpon: "200 m²",
    salaDeRiego: "Automatizada",
    cercos: "Perimetral completo",
    caminosInternos: "Consolidados",
    pozoDeAgua: "No (riego por canal)",
    tanqueAustraliano: "50.000 litros",
  },

  energiaYProductividad: {
    tipoDeEnergia: "Trifásica",
    potenciaKw: 25,
    transformador: "Propio",
    medidor: "Individual",
    productividadUva: "12.000 kg/ha",
    variedades: ["Malbec", "Cabernet"],
    edadVinedos: "8-12 años",
    precioUva2024: {
      valor: 0.45,
      unidad: "USD/kg",
    },
  },

  documentacionLegal: {
    escritura: "Al día",
    mensura: "2020 (actualizada)",
    planosMunicipales: "Aprobados",
    impuestos: "Al día",
    aptoCredito: "Sí",
    inhibiciones: "Libre",
  },

  serviciosCercanos: {
    centroUrbanoKm: 5,
    bodegasKm: "3-8 km",
    cooperativaKm: 6,
    escuelaKm: 4,
    hospitalKm: 12,
    aeropuertoKm: 45,
  },

  descripcion: `Excepcional finca con viñedos en venta en Valle de Uco, cerca de Tupungato, provincia de Mendoza. Esta propiedad de 42 hectáreas representa una oportunidad única para inversores o amantes del vino que buscan combinar producción vitivinícola de calidad con un estilo de vida campestre de lujo.

La finca cuenta con viñedos de alta calidad plantados con las mejores variedades de la región, principalmente Malbec y Cabernet Sauvignon. El sistema de riego por goteo tecnificado instalado en 2018 garantiza la máxima eficiencia hídrica y calidad de producción.

Con una productividad de 12.000 kg/ha y precios de uva en 0.45 USD/kg, esta propiedad representa una excelente oportunidad de inversión con retornos comprobados.`,
};

const sections = [
  { id: "resumen", label: "Resumen" },
  { id: "ficha-tecnica", label: "Ficha Técnica" },
  { id: "infraestructura", label: "Infraestructura" },
  { id: "productividad", label: "Productividad" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "documentacion", label: "Documentación" },
  { id: "contacto-finca", label: "Contacto" },
];

export default function PropertyDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("resumen");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <>
      <NavbarMinimalista />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 px-6 md:px-12 py-4 pt-24">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/design-a/propiedades"
                className="hover:text-gray-900"
              >
                Propiedades
              </Link>
              <span>/</span>
              <span className="text-gray-900">{property.title}</span>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              {property.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${property.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 transition-all"
                aria-label="Imagen anterior"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 transition-all"
                aria-label="Siguiente imagen"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 text-sm">
                {currentImageIndex + 1} / {property.images.length}
              </div>

              {/* Thumbnails */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Side Navigation */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex gap-12">
            {/* Left: Content */}
            <div className="flex-1">
              {/* SECCIÓN: RESUMEN */}
              <section id="resumen" className="mb-20 scroll-mt-24">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    {property.ref}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-baseline gap-4 mb-8">
                    <p className="text-4xl font-light text-gray-900">
                      {property.resumenGeneral.valorTotal.valor.toLocaleString()}{" "}
                      {property.resumenGeneral.valorTotal.moneda}
                    </p>
                    <p className="text-lg text-gray-600">
                      (
                      {property.resumenGeneral.precioPorHectarea.valor.toLocaleString()}{" "}
                      {property.resumenGeneral.precioPorHectarea.moneda}/ha)
                    </p>
                  </div>
                </div>

                {/* Resumen General Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      {property.resumenGeneral.superficieTotal.label}
                    </p>
                    <p className="text-3xl font-light text-gray-900">
                      {property.resumenGeneral.superficieTotal.valor}{" "}
                      {property.resumenGeneral.superficieTotal.unidad}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      {property.resumenGeneral.precioPorHectarea.label}
                    </p>
                    <p className="text-3xl font-light text-gray-900">
                      {property.resumenGeneral.precioPorHectarea.valor.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600">
                      {property.resumenGeneral.precioPorHectarea.moneda}/ha
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      {property.resumenGeneral.altitud.label}
                    </p>
                    <p className="text-3xl font-light text-gray-900">
                      {property.resumenGeneral.altitud.valor}
                    </p>
                    <p className="text-xs text-gray-600">
                      {property.resumenGeneral.altitud.unidad}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Estado Actual
                    </p>
                    <p className="text-lg font-light text-gray-900 mt-4">
                      {property.ubicacionYAccesos.estadoActual}
                    </p>
                  </div>
                </div>

                {/* Descripción */}
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Descripción General
                  </h3>
                  <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">
                    {property.descripcion}
                  </p>
                </div>

                {/* Aptitud Productiva */}
                <div className="mt-8 bg-[#0A1628] text-white p-8">
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    Aptitud Productiva
                  </h4>
                  <p className="text-2xl font-light">
                    {property.ubicacionYAccesos.aptitudProductiva}
                  </p>
                </div>
              </section>

              {/* SECCIÓN: FICHA TÉCNICA */}
              <section id="ficha-tecnica" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
                  Ficha Técnica
                </h2>

                {/* Suelo y Clima */}
                <div className="mb-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-6">
                    Suelo y Clima
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Tipo de Suelo
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.tipoDeSuelo}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Textura
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.textura}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        pH del Suelo
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.phSuelo.valor} (
                        {property.fichaTecnica.sueloYClima.phSuelo.descripcion})
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Materia Orgánica
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.materiaOrganicaPorc}%
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Pendiente
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.pendiente}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Drenaje
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.drenaje}
                      </p>
                    </div>
                    <div className="border-l-4 border-[#E2B34C] pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Grados Día
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.gradosDia.valor} (
                        {
                          property.fichaTecnica.sueloYClima.gradosDia
                            .descripcion
                        }
                        )
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Heladas
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.sueloYClima.heladas}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agua y Riego */}
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6">
                    Agua y Riego
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Derecho de Agua
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.derechoDeAgua}
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Caudal Total
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.caudalTotal}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Fuente
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.fuente}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Turno de Riego
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.turnoDeRiego}
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        CE del Agua
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.ceAgua.valor}{" "}
                        {property.fichaTecnica.aguaYRiego.ceAgua.unidad}
                        <span className="text-sm text-gray-600">
                          {" "}
                          ({property.fichaTecnica.aguaYRiego.ceAgua.descripcion}
                          )
                        </span>
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        pH del Agua
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.phAgua}
                      </p>
                    </div>
                    <div className="border-l-4 border-[#E2B34C] pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Sistema de Riego
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.sistemaDeRiego}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Año de Instalación
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.fichaTecnica.aguaYRiego.anioInstalacion}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECCIÓN: INFRAESTRUCTURA */}
              <section id="infraestructura" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
                  Instalaciones y Mejoras
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Casa Principal
                    </p>
                    <p className="text-lg text-gray-900 mb-1">
                      {property.instalacionesYMejoras.casaPrincipal}
                    </p>
                    <p className="text-sm text-gray-600">
                      Estado: {property.instalacionesYMejoras.estadoCasa}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Galpón
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.instalacionesYMejoras.galpon}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Sala de Riego
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.instalacionesYMejoras.salaDeRiego}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Cercos
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.instalacionesYMejoras.cercos}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Caminos Internos
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.instalacionesYMejoras.caminosInternos}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Pozo de Agua
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.instalacionesYMejoras.pozoDeAgua}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 md:col-span-2">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Tanque Australiano
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.instalacionesYMejoras.tanqueAustraliano}
                    </p>
                  </div>
                </div>
              </section>

              {/* SECCIÓN: PRODUCTIVIDAD */}
              <section id="productividad" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
                  Energía y Productividad
                </h2>

                {/* Energía */}
                <div className="mb-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-6">
                    Suministro Eléctrico
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Tipo de Energía
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.energiaYProductividad.tipoDeEnergia}
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Potencia
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.energiaYProductividad.potenciaKw} kW
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Transformador
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.energiaYProductividad.transformador}
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Medidor
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.energiaYProductividad.medidor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Producción */}
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6">
                    Producción Vitivinícola
                  </h3>
                  <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4d] text-white p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                          Productividad
                        </p>
                        <p className="text-4xl font-light mb-2">
                          {property.energiaYProductividad.productividadUva}
                        </p>
                        <p className="text-sm text-gray-300">
                          Rendimiento por hectárea
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                          Precio Uva 2024
                        </p>
                        <p className="text-4xl font-light mb-2">
                          {property.energiaYProductividad.precioUva2024.valor}{" "}
                          {property.energiaYProductividad.precioUva2024.unidad}
                        </p>
                        <p className="text-sm text-gray-300">
                          Precio de mercado
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-[#E2B34C] pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Variedades
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {property.energiaYProductividad.variedades.map(
                          (variedad, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium"
                            >
                              {variedad}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Edad de Viñedos
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.energiaYProductividad.edadVinedos}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECCIÓN: UBICACIÓN */}
              <section id="ubicacion" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
                  Ubicación y Accesos
                </h2>

                {/* Mapa placeholder */}
                <div className="bg-gray-200 h-96 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-400 mb-2"
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
                    <p className="text-gray-500">Mapa interactivo</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Lat: {property.ubicacionYAccesos.coordenadas.lat}, Lng:{" "}
                      {property.ubicacionYAccesos.coordenadas.lng}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Acceso Principal
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.ubicacionYAccesos.accesoPrincipal}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Distancia a Mendoza
                    </p>
                    <p className="text-lg text-gray-900">
                      {property.ubicacionYAccesos.distanciaAMendozaKm} km
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-light text-gray-900 mb-4">
                  Servicios Cercanos
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-700">Centro Urbano</span>
                    <span className="text-gray-900 font-medium">
                      {property.serviciosCercanos.centroUrbanoKm} km
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-700">Bodegas</span>
                    <span className="text-gray-900 font-medium">
                      {property.serviciosCercanos.bodegasKm}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-700">Cooperativa</span>
                    <span className="text-gray-900 font-medium">
                      {property.serviciosCercanos.cooperativaKm} km
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-700">Escuela</span>
                    <span className="text-gray-900 font-medium">
                      {property.serviciosCercanos.escuelaKm} km
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-700">Hospital</span>
                    <span className="text-gray-900 font-medium">
                      {property.serviciosCercanos.hospitalKm} km
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-700">Aeropuerto</span>
                    <span className="text-gray-900 font-medium">
                      {property.serviciosCercanos.aeropuertoKm} km
                    </span>
                  </div>
                </div>
              </section>

              {/* SECCIÓN: DOCUMENTACIÓN */}
              <section id="documentacion" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
                  Documentación Legal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        Escritura
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.documentacionLegal.escritura}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        Mensura
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.documentacionLegal.mensura}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        Planos Municipales
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.documentacionLegal.planosMunicipales}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        Impuestos
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.documentacionLegal.impuestos}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        Apto Crédito
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.documentacionLegal.aptoCredito}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        Inhibiciones
                      </p>
                      <p className="text-lg text-gray-900">
                        {property.documentacionLegal.inhibiciones}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Nota:</strong> Toda la documentación legal está disponible
                    para revisión por parte de compradores calificados. Se recomienda la asesoría de un escribano
                    para la debida diligencia.
                  </p>
                </div> */}
              </section>
              {/* <ContactMinimalista /> */}
              <section id="contacto-finca" className="py-16 md:py-24 bg-white">
                <div >
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                      Empezá hoy mismo
                    </h2>
                    <p className="text-lg text-gray-600">
                      Recibí asesoramiento personalizado para encontrar la finca ideal en Tupungato y el resto de Mendoza, según tu proyecto: agrícola, turístico, vitivinícola, de inversión o para disfrutar en familia.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-8 md:p-10">
                    <form  className="space-y-5">
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
            </div>

            {/* Right: Sticky Navigation */}
            <div className="hidden lg:block w-64">
              <div className="sticky top-24">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                  En esta página
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        activeSection === section.id
                          ? "text-[#0A1628] font-medium border-l-2 border-[#E2B34C] bg-gray-50"
                          : "text-gray-600 hover:text-gray-900 border-l-2 border-transparent hover:border-gray-300"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
