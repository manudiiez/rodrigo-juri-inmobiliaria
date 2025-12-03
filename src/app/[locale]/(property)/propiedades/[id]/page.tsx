"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useParams, notFound } from "next/navigation";
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
import { properties } from "@/data/properties";

export default function PropertyDetailPage() {
  const t = useTranslations('PropertyDetailPage.navigation');
  const locale = useLocale();
  const params = useParams();
  const slug = params.id as string;

  // Buscar la propiedad por slug
  const propertyData = properties.find(p => p.slug === slug);

  // Si no se encuentra la propiedad, mostrar 404
  if (!propertyData) {
    notFound();
  }

  // Usar el locale completo (es-AR, en-US, pt-BR) para acceder al contenido
  const propertyContent = (propertyData.content[locale as keyof typeof propertyData.content] ||
                           propertyData.content['es-AR'] ||
                           Object.values(propertyData.content)[0]);

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
      const sectionElements = propertyContent.sections.map((section: { id: string; label: string }) => ({
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
        title={propertyContent.title}
      />

      <PropertyImageCarousel images={propertyData.images} title={propertyContent.title} />

      {/* Main Content with Side Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex gap-12">
          {/* Left: Content */}
          <div className="flex-1">
            <PropertySummarySection
              propertyRef={propertyData.slug}
              title={propertyContent.title}
              location={propertyData.location.address}
              price={propertyData.price}
              resumenGeneral={propertyContent.summary}
              descripcion={propertyContent.description}
            />

            <PropertyTechnicalSheet
              techSpecs={propertyContent.techSpecs}
            />

            <PropertyInfrastructure
              instalaciones={propertyContent.improvements}
            />

            <PropertyProductivity
              production={propertyContent.energy}
            />

            <PropertyLocation
              location={propertyContent.locationDetails}
            />

            <PropertyDocumentation
              legal={propertyContent.legal}
            />

            <PropertyContactSection />
          </div>

          {/* Right: Sticky Navigation */}
          <SideNavigation
            sections={propertyContent.sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </div>
      </div>
    </main>
  );
}
