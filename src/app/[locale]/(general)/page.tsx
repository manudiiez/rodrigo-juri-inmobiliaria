import HeroMinimalista from "@/sections/home/HeroMinimalista";
import FeaturedProperty from "@/sections/home/FeaturedProperty";
import AboutSection from "@/sections/home/AboutSection";
import PropertiesGrid from "@/sections/home/PropertiesGrid";
import HistorySection from "@/sections/home/HistorySection";
import ContactMinimalista from "@/sections/home/ContactMinimalista";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroMinimalista />
      <FeaturedProperty />
      <AboutSection />
      <PropertiesGrid />
      <HistorySection />
      <ContactMinimalista />
    </main>
  );
}

