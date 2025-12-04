import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;

  return {
    title: "Fincas en venta en Mendoza | Asesor técnico especializado",
    description:
      "Asesoría integral para comprar fincas productivas en Mendoza y Cuyo. Análisis técnico, due diligence y acompañamiento total.",
    keywords: [
      "fincas mendoza",
      "propiedades rurales mendoza",
      "viñedos en venta",
      "campos mendoza",
      "inversión rural argentina",
      "fincas productivas cuyo",
      "asesor inmobiliario rural",
      "rodrigo juri",
      "corredor inmobiliario mendoza",
    ],
    authors: [{ name: "Rodrigo Juri" }],
    openGraph: {
      title: "Fincas en venta en Mendoza | Asesor técnico especializado",
      description:
        "Asesoría integral para comprar fincas productivas en Mendoza y Cuyo. Análisis técnico, due diligence y acompañamiento total.",
      type: "website",
      locale: locale,
      siteName: "Fincas Mendoza",
      images: [
        {
          url: "/finca2.jpg",
          width: 1200,
          height: 630,
          alt: "Fincas productivas en Mendoza",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Fincas en venta en Mendoza | Asesor técnico especializado",
      description:
        "Asesoría integral para comprar fincas productivas en Mendoza y Cuyo.",
      images: ["/finca2.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
