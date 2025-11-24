import Hero from "@/sections/home/Hero";
import Presentation from "@/sections/home/Presentation";
import Properties from "@/sections/home/Properties";
import Contact from "@/sections/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Presentation />
      <Properties />
      <Contact />
    </main>
  );
}
