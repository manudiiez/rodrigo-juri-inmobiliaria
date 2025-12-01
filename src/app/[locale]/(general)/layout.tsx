import NavbarMinimalista from "@/components/NavbarMinimalista";
import FooterMinimalista from "@/components/FooterMinimalista";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarMinimalista />
      {children}
      <FooterMinimalista />
    </>
  );
}
