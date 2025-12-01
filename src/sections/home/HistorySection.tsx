import { useTranslations } from "next-intl";

export default function HistorySection() {
  const t = useTranslations("HomePage.History");

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto de historia */}
          <div>
            <div className="w-12 h-[2px] bg-[#E2B34C] mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-wide font-serif">
              {t("title")}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                {t("paragraph1")}
              </p>
              <p>
                {t("paragraph2")}
              </p>
              <p>
                {t("paragraph3")}
              </p>
            </div>
          </div>

          {/* Métricas */}
          <div className="space-y-12">
            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                {t("stat1Value")}
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {t("stat1Label")}
              </p>
            </div>

            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                {t("stat2Value")}
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {t("stat2Label")}
              </p>
            </div>

            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                {t("stat3Value")}
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {t("stat3Label")}
              </p>
            </div>

            <div className="border-l-2 border-[#E2B34C] pl-8">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                {t("stat4Value")}
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {t("stat4Label")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
