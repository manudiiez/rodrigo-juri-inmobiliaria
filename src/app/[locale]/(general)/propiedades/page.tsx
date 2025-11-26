import PropertiesHero from '@/sections/propiedades/PropertiesHero';
import PropertiesWithFilters from '@/sections/propiedades/PropertiesWithFilters';
import { propertiesData } from '@/data/properties';
 
export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PropertiesHero totalProperties={propertiesData.length} />
      <PropertiesWithFilters properties={propertiesData} />
    </main>
  );
}
