import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Plugin de next-intl apuntando a la configuración de routing
const withNextIntl = createNextIntlPlugin();

const isProduction = false;
// const isProduction = !process.env.NODE_ENV || process.env.NODE_ENV === 'production';
// Configurar basePath y assetPrefix según el entorno
const basePath = isProduction ? "/rodrigo-juri-inmobiliaria" : "";
const assetPrefix = isProduction ? "/rodrigo-juri-inmobiliaria" : "";

// Mostrar configuración en consola
// console.log('\n🔧 Configuración de Next.js:');
// console.log(`   Entorno: ${isProduction ? '🚀 Production' : '🔨 Development'}`);
// console.log(`   basePath: "${basePath || '(vacío)'}"`);
// console.log(`   assetPrefix: "${assetPrefix || '(vacío)'}"\n`);


const nextConfig: NextConfig = {
  /* Aquí puedes poner tus otras configuraciones globales si tienes */
  reactStrictMode: true,

  // 2. Aquí está la lógica condicional:
  ...(isProduction ? {
    output: "export",
    images: { unoptimized: true },
    basePath: basePath,
    assetPrefix: assetPrefix,
  } : {}), // <--- Si no es producción, agrega un objeto vacío (nada)

};

export default withNextIntl(nextConfig);
