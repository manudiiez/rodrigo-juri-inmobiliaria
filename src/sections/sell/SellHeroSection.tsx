"use client";

import { useTranslations } from "next-intl";

export default function SellHeroSection() {
  const t = useTranslations('SellPage.hero');

  return (
    <section className="relative bg-bordeaux-dark text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-48 pt-40 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t('title')}
        </h1>
        <p
          className="text-xl md:text-2xl font-light italic text-gray-300 max-w-4xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
