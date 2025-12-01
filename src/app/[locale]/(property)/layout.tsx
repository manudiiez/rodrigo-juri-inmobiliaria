import NavbarMinimalista from "@/components/NavbarMinimalista";
import FooterMinimalista from "@/components/FooterMinimalista";

export default function PropertyLayout({
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
