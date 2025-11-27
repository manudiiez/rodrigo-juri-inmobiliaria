import NavbarLuxury from '@/components/propuestas/design-b/NavbarLuxury';
import PropertiesListPage from '@/components/propuestas/design-b/PropertiesListPage';
import FooterLuxury from '@/components/propuestas/design-b/FooterLuxury';

export default function PropiedadesPage() {
  return (
    <>
      <NavbarLuxury variant='solid' />
      <main className="mt-20">
        <PropertiesListPage />
      </main>
      <FooterLuxury />
    </>
  );
}
