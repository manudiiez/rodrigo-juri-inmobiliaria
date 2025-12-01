import { useTranslations } from "next-intl";
import Buscador from "@/components/Buscador";

export default function HeroMinimalista() {
  const t = useTranslations("HomePage.Hero");

  return (
    <section className="bg-bordeaux-dark text-white py-16 px-6 md:px-12 lg:px-12 pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-start gap-2">
        {/* Texto principal */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
          {t("title")}
        </h1>

        {/* Bloque tabs + buscador */}

        <Buscador />
      </div>
    </section>
  );
}
