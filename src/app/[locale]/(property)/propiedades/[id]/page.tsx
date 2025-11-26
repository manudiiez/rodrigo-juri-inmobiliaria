import { notFound } from 'next/navigation';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyHero from '@/sections/property/PropertyHero';
import PropertySummary from '@/sections/property/PropertySummary';
import PropertyTechnicalSheet from '@/sections/property/PropertyTechnicalSheet';
import PropertyLocation from '@/sections/property/PropertyLocation';
import PropertyCTA from '@/sections/property/PropertyCTA';
import { propertiesData } from '@/data/properties';

interface PropertyPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

// Generate static params for all properties
export async function generateStaticParams() {
  return propertiesData.map((property) => ({
    id: property.id.toString(),
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const propertyId = parseInt(id);
  const property = propertiesData.find(p => p.id === propertyId);

  if (!property) {
    notFound();
  }

  // Generate gallery images (using property images)
  const galleryImages = [
    property.imagen,
    '/finca1.jpg',
    '/finca2.jpg',
    property.imagen,
    '/finca1.jpg',
    '/finca2.jpg',
    property.imagen,
    '/finca1.jpg',
  ];

  return (
    <main className="min-h-screen bg-white pt-16">
      <PropertyHero property={property} />

      {/* Gallery */}
      <section className="py-12 bg-white">
        <PropertyGallery images={galleryImages} propertyName={property.nombre} />
      </section>

      <PropertySummary property={property} />
      <PropertyTechnicalSheet property={property} />
      <PropertyLocation property={property} />
      <PropertyCTA property={property} />
    </main>
  );
}
