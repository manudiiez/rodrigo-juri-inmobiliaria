"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import PropertyHeader from "@/sections/property/PropertyHeader";
import PropertyImageCarousel from "@/sections/property/PropertyImageCarousel";
import PropertySummarySection from "@/sections/property/PropertySummarySection";
import PropertyTechnicalSheet from "@/sections/property/PropertyTechnicalSheet";
import PropertyInfrastructure from "@/sections/property/PropertyInfrastructure";
import PropertyProductivity from "@/sections/property/PropertyProductivity";
import PropertyLocation from "@/sections/property/PropertyLocation";
import PropertyDocumentation from "@/sections/property/PropertyDocumentation";
import PropertyContactSection from "@/sections/property/PropertyContactSection";
import SideNavigation from "@/sections/property/SideNavigation";

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

export default function PropertyDetailPage() {
  const t = useTranslations('PropertyDetailPage.navigation');
  const [activeSection, setActiveSection] = useState("resumen");

  const sections = [
    { id: "resumen", label: t('summary') },
    { id: "ficha-tecnica", label: t('technicalSheet') },
    { id: "infraestructura", label: t('infrastructure') },
    { id: "productividad", label: t('productivity') },
    { id: "ubicacion", label: t('location') },
    { id: "documentacion", label: t('documentation') },
    { id: "contacto-finca", label: t('contact') },
  ];

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

  return (
    <main className="min-h-screen bg-white">
      <PropertyHeader
        ref={property.ref}
        title={property.title}
        location={property.location}
      />

      <PropertyImageCarousel images={property.images} title={property.title} />

      {/* Main Content with Side Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex gap-12">
          {/* Left: Content */}
          <div className="flex-1">
            <PropertySummarySection
              ref={property.ref}
              title={property.title}
              location={property.location}
              resumenGeneral={property.resumenGeneral}
              estadoActual={property.ubicacionYAccesos.estadoActual}
              aptitudProductiva={property.ubicacionYAccesos.aptitudProductiva}
              descripcion={property.descripcion}
            />

            <PropertyTechnicalSheet
              sueloYClima={property.fichaTecnica.sueloYClima}
              aguaYRiego={property.fichaTecnica.aguaYRiego}
            />

            <PropertyInfrastructure
              instalacionesYMejoras={property.instalacionesYMejoras}
            />

            <PropertyProductivity
              energiaYProductividad={property.energiaYProductividad}
            />

            <PropertyLocation
              ubicacionYAccesos={property.ubicacionYAccesos}
              serviciosCercanos={property.serviciosCercanos}
            />

            <PropertyDocumentation
              documentacionLegal={property.documentacionLegal}
            />

            <PropertyContactSection />
          </div>

          {/* Right: Sticky Navigation */}
          <SideNavigation
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </div>
      </div>
    </main>
  );
}
