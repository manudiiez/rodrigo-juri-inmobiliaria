import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DesignSwitcher from "@/components/DesignSwitcher";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DesignSwitcher />

      <Header />
      {children}
      <Footer />
    </>
  );
}
