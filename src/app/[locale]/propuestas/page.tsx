import Contact from "@/sections/home/Contact";
import Hero from "@/sections/home/Hero";
import Presentation from "@/sections/home/Presentation";
import Properties from "@/sections/home/Properties";
import NavbarPrincipal from "@/components/propuestas/NavbarPrincipal";
import Footer from "@/components/Footer";

export default function PropuestasPage() {
  return (
    <>
      <NavbarPrincipal />
      <main className="min-h-screen bg-white ">
        <Hero />
        <Presentation />
        <Properties />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
