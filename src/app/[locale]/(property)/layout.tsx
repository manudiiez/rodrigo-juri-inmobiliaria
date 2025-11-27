import { NextIntlClientProvider } from "next-intl";
import PropertyNavbar from "@/components/PropertyNavbar";
import Footer from "@/components/Footer";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PropertyNavbar />
      {children}
      <Footer />
    </>
  );
}
