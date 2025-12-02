
export const properties = [
  {
    id: 1,
    slug: "finca-los-alamos-vinedos-lujan",
    type: "finca",
    price: 777000, //
    currency: "USD",
    hectares: 42, //

    // Datos para el Mapa Interactivo
    location: {
      lat: -33.0162,
      lng: -68.8751,
      address: "Luján de Cuyo, Mendoza",
      province: "Mendoza",
      country: "AR",
    },

    images: [
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
    ],

    content: {
      es: {
        title: "Finca Los Álamos con Viñedos",
        description:
          "Excepcional finca con viñedos en venta en Valle de Uco, cerca de Tupungato, provincia de Mendoza. Esta propiedad de 42 hectáreas representa una oportunidad única para inversores o amantes del vino que buscan combinar producción vitivinícola de calidad con un estilo de vida campestre de lujo.\n  La finca cuenta con viñedos de alta calidad plantados con las mejores variedades de la región, principalmente Malbec y Cabernet Sauvignon. El sistema de riego por goteo tecnificado instalado en 2018 garantiza la máxima eficiencia hídrica y calidad de producción.\n  Con una productividad de 12.000 kg/ha y precios de uva en 0.45 USD/kg, esta propiedad representa una excelente oportunidad de inversión con retornos comprobados.",

        sections: [
          { id: "resumen", label: "Resumen" },
          { id: "ficha-tecnica", label: "Ficha Técnica" },
          { id: "infraestructura", label: "Infraestructura" },
          { id: "productividad", label: "Productividad" },
          { id: "ubicacion", label: "Ubicación" },
          { id: "documentacion", label: "Documentación" },
          { id: "contacto-finca", label: "Contacto" },
        ],

        // --- 1. FICHA TÉCNICA (Suelo y Clima) ---
        summary: [
          {
            label: "Superficie Total",
            value: "42 has",
          },
          {
            label: "PRECIO POR HECTÁREA",
            value: "18,500",
            extra: "USD/has",
          },
          {
            label: "ALTITUD",
            value: "950",
            extra: "msnm",
          },
          {
            label: "ESTADO ACTUAL",
            value: "En producción",
          },
        ],
        // --- 1. FICHA TÉCNICA (Suelo y Clima) ---
        techSpecs: {
          label: "Ficha Técnica",
          groups: [
            {
              title: "Suelo y Clima",
              fields: [
                { label: "TIPO DE SUELO", value: "Franco-arcilloso" },
                { label: "TEXTURA", value: "Equilibrada" },
                { label: "PH DEL SUELO", value: "7.2 (neutro)" },
                { label: "MATERIA ORGÁNICA", value: "2.8%" },
                { label: "PENDIENTE", value: "2-5% (suave)" },
                { label: "DRENAJE", value: "Bueno" },
                {
                  label: "GRADOS DÍA",
                  value: "1450 (ideal viñedos)",
                  border: "border-yellow",
                },
                { label: "HELADAS", value: "Tardías (octubre)" },
              ],
            },
            {
              title: "Agua y Riego",
              fields: [
                { label: "DERECHO DE AGUA", value: "1,2 l/s/ha" },
                { label: "CAUDAL TOTAL", value: "50 l/s" },
                { label: "FUENTE", value: "Río Mendoza" },
                { label: "TURNO DE RIEGO", value: "Cada 15 días" },
                {
                  label: "CONDUCTIVIDAD ELÉCTRICA",
                  value: "0.8 dS/m",
                  subText: "(excelente)",
                },
                { label: "PH DEL AGUA", value: "7.5" },
                { label: "SISTEMA DE RIEGO", value: "Goteo tecnificado" },
                { label: "AÑO DE INSTALACIÓN", value: "2018" },
              ],
            },
          ],
        },

        // --- 3. INSTALACIONES Y MEJORAS ---
        improvements: {
          label: "Instalaciones y Mejoras",
          fields: [
            {
              label: "CASA PRINCIPAL",
              value: "120 m² (3 dormitorios)",
              subText: "Estado: Muy bueno",
            },
            { label: "GALPÓN", value: "200 m²" },
            { label: "SALA DE RIEGO", value: "Automatizada" },
            { label: "CERCOS", value: "Perimetral completo" },
            { label: "CAMINOS INTERNOS", value: "Consolidados" },
            { label: "POZO DE AGUA", value: "No (riego por canal)" },
            { label: "TANQUE AUSTRALIANO", value: "50.000 litros" },
          ],
        },

        // --- 4. ENERGÍA Y PRODUCTIVIDAD ---
        energy: {
          label: "Energía y Productividad",
          groups: [
            {
              title: "Suministro Eléctrico",
              fields: [
                {
                  label: "TIPO DE ENERGÍA",
                  value: "Trifásica",
                  border: "border-yellow",
                },
                { label: "POTENCIA", value: "25 kW", border: "border-yellow" },
                { label: "TRANSFORMADOR", value: "Propio" },
                { label: "MEDIDOR", value: "Individual" },
              ],
            },
            {
              title: "Producción Vitivinícola",
              borderColor: "border-indigo-900", // Color oscuro (Vino/Noche)
              featured: [
                {
                  label: "PRODUCTIVIDAD",
                  value: "12.000 kg/ha",
                  subText: "Rendimiento por hectárea",
                },
                {
                  label: "PRECIO UVA 2024",
                  value: "0.45 USD/kg",
                  subText: "Precio de mercado",
                },
              ],
              fields: [
                {
                  label: "VARIEDADES",
                  value: ["Malbec", "Cabernet"],
                  border: "border-yellow",
                }, //
                { label: "EDAD DE VIÑEDOS", value: "8-12 años" },
              ],
            },
          ],
        },

        // --- 5. UBICACIÓN Y ACCESOS (Datos de lista) ---
        locationDetails: {
          label: "Ubicación y Accesos",
          map: {
            lat: -33.0162,
            lng: -68.8751,
          },
          groups: [
            {
              featured: true,
              fields: [
                { label: "ACCESO PRINCIPAL", value: "RP 15 + 2 km ripio" },
                { label: "DISTANCIA A MENDOZA", value: "35 km" },
              ],
            },
            {
              title: "Servicios Cercanos",
              fields: [
                { label: "Centro Urbano", value: "5 km" },
                { label: "Bodegas", value: "3-8 km" },
                { label: "Cooperativa", value: "6 km" },
                { label: "Escuela", value: "4 km" },
                { label: "Hospital", value: "12 km" },
                { label: "Aeropuerto", value: "45 km" },
              ],
            },
          ],
        },

        // --- 6. DOCUMENTACIÓN LEGAL ---
        legal: {
          label: "Documentación Legal",
          groups: [
            {
              fields: [
                { label: "ESCRITURA", value: "Al día" },
                { label: "MENSURA", value: "2020 (actualizada)" },
                { label: "PLANOS MUNICIPALES", value: "Aprobados" },
                { label: "IMPUESTOS", value: "Al día" },
                { label: "APTO CRÉDITO", value: "Sí" },
                { label: "INHIBICIONES", value: "Libre" },
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: 2,
    slug: "bodega-sinfin-maipu-mendoza-venta",
    type: "bodega", // Cambiado de 'finca' a 'bodega'
    price: 0, // Se sugiere usar 0 o null para que el frontend muestre "Consultar Precio"
    currency: "USD",
    hectares: 90, // Hectáreas propias (el activo inmobiliario directo) [cite: 12]

    // Datos aproximados de Maipú (la ubicación exacta no está en coordenadas en el PDF)
    location: {
      lat: -32.9786,
      lng: -68.7845,
      address: "Maipú, Mendoza (a 20 min de la Ciudad)", //
      province: "Mendoza",
      country: "AR",
    },

    images: [
      "/images/bodegas/sinfin/fachada.jpg",
      "/images/bodegas/sinfin/cavas.jpg",
      "/images/bodegas/sinfin/tanques.jpg",
      "/images/bodegas/sinfin/sala-eventos.jpg",
    ],

    content: {
      es: {
        title: "Bodega SinFin: Industria, Marcas y Enoturismo en Maipú",
        description:
          "Importante bodega operativa en venta bajo modalidad de 'llave en mano' o fondo de comercio. Ubicada en el corazón de Maipú, a solo 20 minutos de la capital de Mendoza , esta propiedad combina una impresionante capacidad industrial de 6 millones de litros [cite: 19] con una unidad de negocios de enoturismo y eventos totalmente consolidada.\n\nLa empresa, de trayectoria familiar desde 1975 , posee una infraestructura versátil que incluye tanques de acero inoxidable, piletas de hormigón epoxipadas y cavas subterráneas para barricas[cite: 20, 21, 52]. Además de su capacidad productiva, la bodega cuenta con marcas posicionadas en el mercado interno y externo, exportando a más de 10 países incluyendo EE.UU., China y Reino Unido[cite: 27].\n\nIdeal para inversores que buscan una operación en marcha con viñedos propios, gestión de terceros y múltiples canales de ingresos (granel premium, fraccionado y turismo).",

        sections: [
          { id: "resumen", label: "Resumen" },
          { id: "ficha-tecnica", label: "Ficha Técnica" },
          { id: "infraestructura", label: "Infraestructura" },
          { id: "productividad", label: "Productividad" },
          { id: "ubicacion", label: "Ubicación" },
          { id: "documentacion", label: "Documentación" },
          { id: "contacto-finca", label: "Contacto" },
        ],

        // --- 1. RESUMEN EJECUTIVO (Summary) ---
        summary: [
          {
            label: "Capacidad Total",
            value: "6 M",
            extra: "Litros", // [cite: 19]
          },
          {
            label: "Viñedos Propios",
            value: "90",
            extra: "Has", // [cite: 12]
          },
          {
            label: "Gestión Terceros",
            value: "350",
            extra: "Has", // [cite: 13]
          },
          {
            label: "Perfil",
            value: "Exportadora / Turística", // [cite: 6, 45]
          },
        ],

        // --- 2. FICHA TÉCNICA (Industrial y Elaboración) ---
        techSpecs: {
          label: "Capacidad Industrial",
          groups: [
            {
              title: "Vasija y Almacenamiento",
              fields: [
                {
                  label: "CAPACIDAD TOTAL",
                  value: "6.000.000 Litros",
                  border: "border-yellow",
                }, // [cite: 19]
                { label: "CEMENTO EPOXI", value: "5.740.000 Litros" }, // [cite: 20]
                { label: "ACERO INOXIDABLE", value: "200.000 Litros" }, // [cite: 21]
                { label: "CAVA DE BARRICAS", value: "60.000 Litros (Roble)" }, // [cite: 22]
                { label: "TIPO DE ROBLE", value: "Francés y Americano" }, // [cite: 22, 84]
              ],
            },
            {
              title: "Operatividad",
              fields: [
                { label: "ELABORACIÓN MÁX", value: "4.500.000 Lts/año" }, // [cite: 30]
                {
                  label: "TIPO DE ELABORACIÓN",
                  value: "Alta Gama y Granel Premium",
                }, // [cite: 3, 26]
                { label: "ESTADO", value: "En funcionamiento" },
                { label: "LABORATORIO", value: "Sí (Encargado propio)" }, // [cite: 175]
              ],
            },
          ],
        },

        // --- 3. INFRAESTRUCTURA DE TURISMO Y EDIFICIOS ---
        improvements: {
          label: "Instalaciones y Turismo",
          fields: [
            {
              label: "SALONES DE EVENTOS",
              value: "3 Espacios diferenciados", // [cite: 52]
              subText: "Jardines, Casa y Cava",
            },
            { label: "CAVA SUBTERRÁNEA", value: "Renovada para eventos" }, // [cite: 52]
            { label: "GASTRONOMÍA", value: "Cocina equipada / Catering" }, // [cite: 53]
            { label: "PROYECTO RESTAURANTE", value: "Proyectado a futuro" }, // [cite: 48]
            { label: "SALA DE DEGUSTACIÓN", value: "Sí, visitas guiadas" }, // [cite: 46]
            { label: "OFICINAS", value: "Administración completa" }, // [cite: 172]
            { label: "CASA PRINCIPAL", value: "Con piscina y viñedo" }, // [cite: 52]
          ],
        },

        // --- 4. UNIDADES DE NEGOCIO Y MERCADOS ---
        energy: {
          label: "Modelo de Negocio",
          groups: [
            {
              title: "Mercados y Comercialización",
              featured: [
                {
                  label: "EXPORTACIÓN",
                  value: "+10 Países",
                  subText: "USA, UK, China, Japón, etc.", // [cite: 27]
                },
                {
                  label: "PREMIOS",
                  value: "Oro (Bulk Wine)",
                  subText: "Ámsterdam 2018/2019", // [cite: 28]
                },
              ],
              fields: [
                { label: "MERCADO EXTERNO", value: "Consolidado (+15 años)" }, // [cite: 27]
                { label: "GRANEL PREMIUM", value: "Especialidad Malbec" }, // [cite: 28]
                { label: "VENTA DIRECTA", value: "Turismo y E-commerce" },
              ],
            },
            {
              title: "Abastecimiento de Uva",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "VIÑEDOS PROPIOS",
                  value: "90 has",
                  border: "border-yellow",
                }, // [cite: 12]
                { label: "TERCEROS GESTIONADOS", value: "350 has" }, // [cite: 13]
                { label: "ZONAS", value: "Maipú, Luján, Valle de Uco" }, // [cite: 14]
                {
                  label: "VARIETALES TINTOS",
                  value: ["Malbec", "Cab Franc", "Bonarda", "Merlot"],
                }, // [cite: 16]
                { label: "VARIETALES BLANCOS", value: ["Sauvignon Blanc"] }, // [cite: 16]
              ],
            },
          ],
        },

        // --- 5. UBICACIÓN Y ACCESOS ---
        locationDetails: {
          label: "Ubicación Estratégica",
          map: {
            lat: -32.9786,
            lng: -68.7845,
          },
          groups: [
            {
              featured: true,
              fields: [
                { label: "UBICACIÓN", value: "Maipú, Mendoza" }, //
                { label: "TIEMPO A CIUDAD", value: "20 minutos" }, //
              ],
            },
            {
              title: "Entorno",
              fields: [
                { label: "Zona", value: "Primera Zona Vitivinícola" },
                { label: "Accesibilidad", value: "Excelente (Asfalto)" },
                { label: "Turismo", value: "Circuito Caminos del Vino" },
              ],
            },
          ],
        },

        // --- 6. GESTIÓN Y LEGAL ---
        legal: {
          label: "Gestión y Organización",
          groups: [
            {
              fields: [
                { label: "ESTRUCTURA", value: "Organigrama completo" }, // [cite: 162]
                {
                  label: "ÁREAS",
                  value: ["Enología", "Marketing", "Comex", "Turismo"],
                }, // [cite: 163, 164, 171, 173]
                {
                  label: "HABILITACIONES",
                  value: "Vigentes (INV/Municipales)",
                },
                {
                  label: "TIPO DE VENTA",
                  value: "Fondo de Comercio / Activos",
                },
              ],
            },
          ],
        },
      },
    },
  },
];
