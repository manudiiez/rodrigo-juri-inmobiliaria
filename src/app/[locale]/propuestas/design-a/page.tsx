import NavbarMinimalista from '@/components/propuestas/NavbarMinimalista';
import HeroMinimalista from '@/components/propuestas/design-a/HeroMinimalista';
import FeaturedProperty from '@/components/propuestas/design-a/FeaturedProperty';
import AboutSection from '@/components/propuestas/design-a/AboutSection';
import PropertiesGrid from '@/components/propuestas/design-a/PropertiesGrid';
import HistorySection from '@/components/propuestas/design-a/HistorySection';
import ContactMinimalista from '@/components/propuestas/design-a/ContactMinimalista';
import FooterMinimalista from '@/components/propuestas/design-a/FooterMinimalista';

export default function DesignAPage() {
  return (
    <>
      <NavbarMinimalista />
      <main className="min-h-screen bg-white">
        <HeroMinimalista />
        <FeaturedProperty />
        <AboutSection />
        <PropertiesGrid />
        <HistorySection />
        <ContactMinimalista />
      </main>
      <FooterMinimalista/>
    </>
  );
}
