import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Plugin de next-intl apuntando a la configuración de routing
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Recuerda: Si tu repo es "mi-proyecto", necesitas el basePath
  basePath: "/rodrigo-juri-inmobiliaria",
  assetPrefix: "/rodrigo-juri-inmobiliaria",
};

export default withNextIntl(nextConfig);
