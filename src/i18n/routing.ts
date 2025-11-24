import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Todos los mercados soportados (locale-PAÍS)
  locales: ["es-AR", "pt-BR", "en-US"],

  // Mercado por defecto (Argentina en español)
  defaultLocale: "es-AR",

  // Prefijo de locale en URL (always = siempre mostrar /es-AR, /pt-BR, /en-US)
  localePrefix: "always",
  pathnames: {
    '/propiedades': {
      'es-AR': '/propiedades',
      'en-US': '/vineyards',
      'pt-BR': '/propriedades'
    },
  }
});

// Mapeo de países a locales de mercado
export const countryToLocale: Record<string, string> = {
  AR: "es-AR", // Argentina
  BR: "pt-BR", // Brasil
  US: "en-US", // Estados Unidos
  UY: "es-AR", // Uruguay → mercado Argentina
  PY: "es-AR", // Paraguay → mercado Argentina
  CL: "es-AR", // Chile → mercado Argentina (por ahora)
  // Agregar más países según necesites
};

// Export de funciones de navegación con tipo correcto
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
