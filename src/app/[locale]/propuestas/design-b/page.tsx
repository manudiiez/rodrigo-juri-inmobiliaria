import NavbarLuxury from '@/components/propuestas/design-b/NavbarLuxury';
import HeroLuxury from '@/components/propuestas/design-b/HeroLuxury';
import PropertyCarousel from '@/components/propuestas/design-b/PropertyCarousel';
import FeaturedCategories from '@/components/propuestas/design-b/FeaturedCategories';
import FooterLuxury from '@/components/propuestas/design-b/FooterLuxury';

export default function DesignBPage() {
  return (
    <>
      <NavbarLuxury />
      <main className="min-h-screen bg-white">
        <HeroLuxury />
        <PropertyCarousel />
        <FeaturedCategories />
      </main>
      <FooterLuxury />
    </>
  );
}
