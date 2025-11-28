import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Plugin de next-intl apuntando a la configuración de routing
const withNextIntl = createNextIntlPlugin();

const isProduction = !process.env.NODE_ENV || process.env.NODE_ENV === 'production';

// Configurar basePath y assetPrefix según el entorno
const basePath = isProduction ? "/rodrigo-juri-inmobiliaria" : "";
const assetPrefix = isProduction ? "/rodrigo-juri-inmobiliaria" : "";

// Mostrar configuración en consola
console.log('\n🔧 Configuración de Next.js:');
console.log(`   Entorno: ${isProduction ? '🚀 Production' : '🔨 Development'}`);
console.log(`   basePath: "${basePath || '(vacío)'}"`);
console.log(`   assetPrefix: "${assetPrefix || '(vacío)'}"\n`);


const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
