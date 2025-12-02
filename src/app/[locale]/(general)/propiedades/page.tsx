import { properties } from '@/data/properties';
import PropertiesSearchPage from '@/sections/propiedades/PropertiesSearchPage';
 
export default function PropertiesPage() {

  const propiedadesData = properties

  return (
    <main className="min-h-screen bg-gray-50">
      <PropertiesSearchPage />
    </main>
  );
}
