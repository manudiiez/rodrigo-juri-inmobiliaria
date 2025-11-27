import NavbarMinimalista from "@/components/propuestas/NavbarMinimalista";
import Footer from "@/components/Footer";
import PropertiesSearchPage from "@/components/propuestas/design-a/PropertiesSearchPage";
import FooterMinimalista from "@/components/propuestas/design-a/FooterMinimalista";

export default async function PropiedadesPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const busqueda = (await searchParams).search;
  console.log("Parámetro de búsqueda:", busqueda);
  return (
    <>
      <NavbarMinimalista />
      <main className="min-h-screen bg-white pt-32">
        <PropertiesSearchPage search={busqueda} />
      </main>
      <FooterMinimalista />
    </>
  );
}
