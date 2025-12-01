import SellHeroSection from "@/sections/sell/SellHeroSection";
import SellContactForm from "@/sections/sell/SellContactForm";
import SellStatisticsSection from "@/sections/sell/SellStatisticsSection";
import SellMarketingSection from "@/sections/sell/SellMarketingSection";
import SellWhyChooseSection from "@/sections/sell/SellWhyChooseSection";

export default function SellPage() {
  return (
    <main className="min-h-screen bg-white">
      <SellHeroSection />
      <SellContactForm />
      <SellStatisticsSection />
      <SellMarketingSection />
      <SellWhyChooseSection />
    </main>
  );
}
