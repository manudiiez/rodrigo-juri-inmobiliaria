import AboutHero from '@/sections/about/AboutHero';
import AboutStory from '@/sections/about/AboutStory';
import AboutNumbers from '@/sections/about/AboutNumbers';
import AboutProfile from '@/sections/about/AboutProfile';
import AboutEcosystem from '@/sections/about/AboutEcosystem';
import AboutCTA from '@/sections/about/AboutCTA';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutNumbers />
      <AboutProfile />
      <AboutEcosystem />
      <AboutCTA />
    </main>
  );
}
