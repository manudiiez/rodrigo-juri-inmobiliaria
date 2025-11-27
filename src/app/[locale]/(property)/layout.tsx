import { NextIntlClientProvider } from "next-intl";
import PropertyNavbar from "@/components/PropertyNavbar";
import Footer from "@/components/Footer";
import DesignSwitcher from "@/components/DesignSwitcher";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DesignSwitcher />

      <PropertyNavbar />
      {children}
      <Footer />
    </>
  );
}
