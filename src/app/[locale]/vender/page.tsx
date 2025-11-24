import SellHero from '@/sections/sell/SellHero';
import SellDifference from '@/sections/sell/SellDifference';
import SellProcess from '@/sections/sell/SellProcess';
import SellForm from '@/sections/sell/SellForm';
import SellFAQ from '@/sections/sell/SellFAQ';
import SellProof from '@/sections/sell/SellProof';

export default function SellPage() {
  return (
    <main className="min-h-screen bg-white">
      <SellHero />
      <SellDifference />
      <SellProcess />
      <SellForm />
      <SellFAQ />
      <SellProof />
    </main>
  );
}
