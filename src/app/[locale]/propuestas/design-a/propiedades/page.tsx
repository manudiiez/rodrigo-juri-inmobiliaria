import NavbarMinimalista from '@/components/propuestas/NavbarMinimalista';
import Footer from '@/components/Footer';
import PropertiesSearchPage from '@/components/propuestas/design-a/PropertiesSearchPage';

export default function PropiedadesPage() {
  return (
    <>
      <NavbarMinimalista />
      <main className="min-h-screen bg-white pt-32">
        <PropertiesSearchPage />
      </main>
      <Footer />
    </>
  );
}
