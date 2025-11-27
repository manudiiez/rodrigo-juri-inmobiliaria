import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Plugin de next-intl apuntando a la configuración de routing
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",

  // 2. Desactiva la optimización de imágenes (GitHub Pages no tiene servidor para procesarlas)
  images: {
    unoptimized: true,
  },

  // 3. IMPORTANTE: Si tu repo no es tu página principal (username.github.io),
  // sino un proyecto (username.github.io/mi-proyecto), necesitas esto:
  basePath: "/rodrigo-juri-inmobiliaria",
  assetPrefix: "/rodrigo-juri-inmobiliaria/",
};

export default withNextIntl(nextConfig);
