import SearchBar from "@/components/SearchBar";
import HeroSection from "@/sections/home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SearchBar />
    </main>
  );
}
