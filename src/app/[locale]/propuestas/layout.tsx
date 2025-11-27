import DesignSwitcher from '@/components/DesignSwitcher';

export default function PropuestasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DesignSwitcher />
      {children}
    </>
  );
}
