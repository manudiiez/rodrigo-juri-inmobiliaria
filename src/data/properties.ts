export const properties = [
  {
    slug: "finca-los-alamos-vinedos-lujan",
    type: "finca",
    price: {
      value: 777000, //
      currency: "USD",
      pricePerHectare: 18500,
    },
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
      "/finca2.jpg",
    ],

    content: {
      es: {
        title: "Finca Los Álamos con Viñedos",

        description: {
          text: "Excepcional finca con viñedos en venta en Valle de Uco, cerca de Tupungato, provincia de Mendoza. Esta propiedad de 42 hectáreas representa una oportunidad única para inversores o amantes del vino que buscan combinar producción vitivinícola de calidad con un estilo de vida campestre de lujo.\n\n  La finca cuenta con viñedos de alta calidad plantados con las mejores variedades de la región, principalmente Malbec y Cabernet Sauvignon. El sistema de riego por goteo tecnificado instalado en 2018 garantiza la máxima eficiencia hídrica y calidad de producción.\n\n  Con una productividad de 12.000 kg/ha y precios de uva en 0.45 USD/kg, esta propiedad representa una excelente oportunidad de inversión con retornos comprobados.",
          callout: {
            label: "APTITUD PRODUCTIVA",
            value: "Viñedos premium / Olivos",
          },
        },

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
            class: "text-lg mt-4",
          },
        ],
        // --- 1. FICHA TÉCNICA (Suelo y Clima) ---
        techSpecs: {
          label: "Ficha Técnica",
          groups: [
            {
              title: "Suelo y Clima",
              fields: [
                {
                  label: "TIPO DE SUELO",
                  value: "Franco-arcilloso",
                },
                {
                  label: "TEXTURA",
                  value: "Equilibrada",
                },
                {
                  label: "PH DEL SUELO",
                  value: "7.2 (neutro)",
                },
                {
                  label: "MATERIA ORGÁNICA",
                  value: "2.8%",
                },
                {
                  label: "PENDIENTE",
                  value: "2-5% (suave)",
                },
                {
                  label: "DRENAJE",
                  value: "Bueno",
                },
                {
                  label: "GRADOS DÍA",
                  value: "1450 (ideal viñedos)",
                  class: "border-secondary",
                },
                {
                  label: "HELADAS",
                  value: "Tardías (octubre)",
                },
              ],
            },
            {
              title: "Agua y Riego",
              fields: [
                {
                  label: "DERECHO DE AGUA",
                  value: "1,2 l/s/ha",
                  class: "border-blueo",
                },
                {
                  label: "CAUDAL TOTAL",
                  value: "50 l/s",
                  class: "border-blueo",
                },
                {
                  label: "FUENTE",
                  value: "Río Mendoza",
                },
                {
                  label: "TURNO DE RIEGO",
                  value: "Cada 15 días",
                },
                {
                  label: "CONDUCTIVIDAD ELÉCTRICA",
                  value: "0.8 dS/m",
                  subText: "(excelente)",
                  class: "border-blueo",
                },
                {
                  label: "PH DEL AGUA",
                  value: "7.5",
                },
                {
                  label: "SISTEMA DE RIEGO",
                  value: "Goteo tecnificado",
                  class: "border-secondary",
                },
                {
                  label: "AÑO DE INSTALACIÓN",
                  value: "2018",
                },
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
            {
              label: "SALA DE RIEGO",
              value: "Automatizada",
            },
            {
              label: "CERCOS",
              value: "Perimetral completo",
            },
            {
              label: "CAMINOS INTERNOS",
              value: "Consolidados",
            },
            {
              label: "POZO DE AGUA",
              value: "No (riego por canal)",
            },
            {
              label: "TANQUE AUSTRALIANO",
              value: "50.000 litros",
            },
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
                  class: "border-secondary",
                },
                {
                  label: "POTENCIA",
                  value: "25 kW",
                  class: "border-secondary",
                },
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
                  class: "border-secondary",
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
          featured: [
            { label: "ACCESO PRINCIPAL", value: "RP 15 + 2 km ripio" },
            { label: "DISTANCIA A MENDOZA", value: "35 km" },
          ],
          groups: [
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
    slug: "bodega-sinfin-maipu-mendoza",
    type: "bodega",
    price: {
      value: null,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: 440,
    location: {
      lat: -32.9765,
      lng: -68.7892,
      address: "Maipú, Mendoza (a 20 min de la Ciudad)",
      province: "Mendoza",
      country: "AR",
    },
    images: [
      "/bodega-sinfin-1.png",
      "/bodega-sinfin-2.png",
      "/bodega-sinfin-3.png",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
    ],
    content: {
      es: {
        title: "Bodega SinFin - Maipú",
        description: {
          text: "Bodega familiar ubicada en Maipú, Mendoza, con una trayectoria que data de 1975 en la producción de uvas y desde 2005 en la elaboración de vinos de alta gama. La bodega combina una sólida capacidad industrial con una filosofía centrada en que el vino trasciende y emociona.\n\nPosee una capacidad total de vasija de 6.000.000 de litros y gestiona 440 hectáreas de viñedos (propios y de terceros) distribuidos en los mejores terruiros de Mendoza. Se destaca por su fuerte presencia en el mercado externo (granel de alta calidad y fraccionado) y una propuesta de enoturismo integral con espacios para eventos corporativos y sociales.",
          callout: {
            label: "PERFIL",
            value: "Vinos Alta Gama / Exportación / Enoturismo",
          },
        },
        sections: [
          { id: "resumen", label: "Resumen" },
          { id: "ficha-tecnica", label: "Capacidad e Infraestructura" },
          { id: "infraestructura", label: "Enoturismo y Eventos" },
          { id: "productividad", label: "Mercados y Productos" },
          { id: "ubicacion", label: "Ubicación" },
          { id: "documentacion", label: "Desempeño Operativo" },
          { id: "contacto-finca", label: "Contacto" },
        ],

        summary: [
          {
            label: "Capacidad Total",
            value: "6 M",
            extra: "Litros",
          },
          {
            label: "Elaboración Anual",
            value: "4.5 M",
            extra: "Litros (máx)",
          },
          {
            label: "Viñedos Gestionados",
            value: "440",
            extra: "Hectáreas",
          },
          {
            label: "Estado",
            value: "En funcionamiento",
            class: "text-lg mt-4",
          },
        ],

        techSpecs: {
          label: "Capacidad e Infraestructura",
          groups: [
            {
              title: "Capacidad de Vasija",
              fields: [
                {
                  label: "CAPACIDAD TOTAL",
                  value: "6.000.000 Litros",
                  class: "border-secondary",
                },
                {
                  label: "CEMENTO C/ EPOXI",
                  value: "5.740.000 Litros",
                },
                {
                  label: "ACERO INOXIDABLE",
                  value: "200.000 Litros",
                  subText: "Tanques con control de temperatura",
                },
                {
                  label: "BARRICAS ROBLE",
                  value: "60.000 Litros",
                  subText: "Roble Francés",
                },
              ],
            },
            {
              title: "Viñedos y Terroir",
              fields: [
                {
                  label: "SUPERFICIE TOTAL",
                  value: "440 has",
                },
                {
                  label: "VIÑEDOS PROPIOS",
                  value: "90 has",
                  class: "border-blueo",
                },
                {
                  label: "VIÑEDOS TERCEROS",
                  value: "350 has",
                },
                {
                  label: "UBICACIONES",
                  value: "Maipú, Luján, Valle de Uco, Este",
                  subText: "Diversidad de terroirs",
                },
                {
                  label: "VARIETALES TINTOS",
                  value:
                    "Malbec, Cab. Franc, Cab. Sauv, Bonarda, Merlot, Petit Verdot",
                  class: "text-sm",
                },
                {
                  label: "VARIETALES BLANCOS",
                  value: "Sauvignon Blanc",
                  class: "text-sm",
                },
              ],
            },
          ],
        },

        improvements: {
          label: "Enoturismo y Eventos",
          fields: [
            {
              label: "PROPUESTA",
              value: "Visitas guiadas y Degustaciones",
              subText: "Maridajes con chocolates y picadas",
            },
            {
              label: "SALONES",
              value: "3 Espacios Diferenciados",
            },
            {
              label: "ESPACIO JARDINES",
              value: "Fuente de agua y jardines",
              subText: "Para eventos al aire libre",
            },
            {
              label: "CAVA SUBTERRÁNEA",
              value: "Antiguas piletas renovadas",
              subText: "Para eventos íntimos y originales",
            },
            {
              label: "CASA DE FAMILIA",
              value: "Con piscina y parrillas",
              subText: "Rodeada de viñedos",
            },
            {
              label: "GASTRONOMÍA",
              value: "Catering propio de primer nivel",
            },
          ],
        },

        energy: {
          label: "Negocio y Mercados",
          groups: [
            {
              title: "Mercado Externo",
              fields: [
                {
                  label: "EXPERIENCIA EXPORT",
                  value: "+15 años",
                  class: "border-secondary",
                },
                {
                  label: "MERCADOS PRINCIPALES",
                  value: "EEUU, Canadá, China, UK",
                  subText: "También Brasil, Japón, Suiza, Irlanda",
                },
                {
                  label: "GRANEL ALTA GAMA",
                  value: "Especialidad",
                  subText: "Premiada en Ámsterdam (Bulk Wine)",
                },
              ],
            },
            {
              title: "Líneas de Producto",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "ELABORACIÓN MÁX",
                  value: "4.500.000 Lts",
                  subText: "Potencial anual",
                },
              ],
              fields: [
                {
                  label: "MARCAS",
                  value: [
                    "SinFin",
                    "Guarda",
                    "Gran Guarda",
                    "El Interminable",
                    "Fugaz",
                    "Presente",
                  ],
                  class: "border-secondary",
                },
                {
                  label: "INNOVACIÓN",
                  value: "Rosado de Bequignol, Blends de Terroir",
                },
              ],
            },
          ],
        },

        locationDetails: {
          label: "Ubicación",
          map: {
            lat: -32.9765,
            lng: -68.7892,
          },
          featured: [
            { label: "ZONA", value: "Maipú, Primera Zona" },
            { label: "DISTANCIA A CIUDAD", value: "20 minutos" },
          ],
          groups: [
            {
              title: "Accesibilidad",
              fields: [
                {
                  label: "Rutas",
                  value: "Acceso directo por rutas principales",
                },
                {
                  label: "Entorno",
                  value: "Rodeado de olivares y viñedos históricos",
                },
              ],
            },
          ],
        },

        legal: {
          label: "Desempeño Operativo",
          groups: [
            {
              title: "Resumen Financiero (Histórico)",
              fields: [
                { label: "VOLUMEN PROM. ELABORADO", value: "2.776.109 Lts" },
                { label: "EBITDA PROMEDIO (Histórico)", value: "USD 193.082" },
                { label: "ANÁLISIS", value: "2016 - 2025" },
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: "bodega-casir-dos-santos-maipu",
    type: "bodega",
    price: {
      value: null,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: null,
    location: {
      lat: -33.0234,
      lng: -68.7905,
      address: "Maipú, Mendoza (Lunlunta)",
      province: "Mendoza",
      country: "AR",
    },
    images: [
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
    ],
    content: {
      es: {
        title: "Bodega Casir dos Santos",
        description: {
          text: "Bodega histórica fundada en 1862 (antiguamente Bodega Viña Maipú), siendo una de las más antiguas en funcionamiento de la provincia de Mendoza. Casir dos Santos combina más de un siglo de tradición vitivinícola con una visión moderna y tecnológica.\n\nBajo la dirección enológica de Lucas Moran, la bodega elabora vinos de alta gama provenientes de tres terroirs privilegiados: Lunlunta (Maipú), Agrelo (Luján de Cuyo) y Valle de Uco. Su filosofía se centra en cuidar cada paso del proceso sin dejar variables al azar, buscando la máxima expresión de cada región.",
          callout: {
            label: "LEGADO",
            value: "Fundada en 1862 / Vinos de Terroir",
          },
        },
        sections: [
          { id: "resumen", label: "Resumen" },
          { id: "ficha-tecnica", label: "Viñedos y Terroir" },
          { id: "infraestructura", label: "Portafolio de Vinos" },
          { id: "productividad", label: "Equipo Enológico" },
          { id: "ubicacion", label: "Ubicación" },
          { id: "documentacion", label: "Información Institucional" },
          { id: "contacto-finca", label: "Contacto" },
        ],


        summary: [
          {
            label: "Fundación",
            value: "1862",
            extra: "Más de 150 años",
          },
          {
            label: "Origen",
            value: "Maipú",
            extra: "Lunlunta",
          },
          {
            label: "Enólogo",
            value: "Lucas Moran",
            extra: "22 Vendimias",
          },
          {
            label: "Estado",
            value: "En Producción",
            class: "text-lg mt-4",
          },
        ],

        techSpecs: {
          label: "Viñedos y Terroirs",
          groups: [
            {
              title: "Zonas de Cultivo",
              fields: [
                {
                  label: "LUNLUNTA (Maipú)",
                  value: "950 msnm",
                  subText: "La zona baja del Río Mendoza (20 km de la ciudad)",
                  class: "border-secondary",
                },
                {
                  label: "AGRELO (Luján)",
                  value: "1.050 msnm",
                  subText: "El Valle (40 km de la ciudad)",
                },
                {
                  label: "VALLE DE UCO",
                  value: "1.250 msnm",
                  subText:
                    "La ladera superior de los Andes (100 km de la ciudad)",
                },
              ],
            },
            {
              title: "Dirección Enológica",
              fields: [
                {
                  label: "DIRECTOR",
                  value: "Lucas Moran",
                  class: "border-blueo",
                },
                {
                  label: "EXPERIENCIA",
                  value: "+22 Cosechas",
                  subText: "Ex Don Bosco y Ciencias Agrarias",
                },
                {
                  label: "FILOSOFÍA",
                  value: "Intervención precisa",
                  subText: "Tecnología y compromiso experto",
                },
              ],
            },
          ],
        },

        improvements: {
          label: "Portafolio de Vinos",
          fields: [
            {
              label: "LÍNEA ESTATE",
              value: "Malbec, Cab. Sauvignon, Petit Verdot",
              subText: "Vinos de Finca",
            },
            {
              label: "LÍNEA RESERVE",
              value: "Malbec, Cab. Sauvignon, Petit Verdot, Chardonnay",
              subText: "Crianza en barrica",
            },
            {
              label: "GRAN CORTE",
              value: "Red Blend",
              subText: "Icono de la bodega",
            },
            {
              label: "AVATAR WINES",
              value: "Línea Joven y Moderna",
              subText:
                "Varietales, Ultra Range (Syrah/Malbec/Cab) y Extra Brut (Pink Pinot Noir)",
            },
            {
              label: "EDICIONES ESPECIALES",
              value:
                "Inspiración (Blend de Enólogas), Elijo Creer (Malbec 2023)",
            },
          ],
        },

        energy: {
          label: "Reconocimientos y Puntajes",
          groups: [
            {
              title: "Puntajes Destacados",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "GRAN CORTE",
                  value: "95 Pts",
                  subText: "James Suckling",
                },
                {
                  label: "RESERVE MALBEC",
                  value: "93 Pts",
                  subText: "James Suckling",
                },
              ],
              fields: [
                {
                  label: "Tim Atkin",
                  value: "92 Pts (Reserve Malbec)",
                  class: "border-secondary",
                },
                {
                  label: "Robert Parker",
                  value: "91 Pts (Gran Corte)",
                  class: "border-secondary",
                },
                {
                  label: "Descorchados",
                  value: "90 Pts (Estate Malbec 2022)",
                },
                {
                  label: "IWSC",
                  value: "93 Pts",
                },
              ],
            },
          ],
        },

        locationDetails: {
          label: "Ubicación",
          map: {
            lat: -33.0234,
            lng: -68.7905,
          },
          featured: [
            { label: "REGIÓN", value: "Primera Zona (Maipú)" },
            { label: "PAISAJE", value: "Vistas a la Cordillera" },
          ],
          groups: [
            {
              title: "Contexto",
              fields: [
                { label: "Entorno", value: "Viñedos históricos y olivos" },
                { label: "Acceso", value: "Ruta del Vino de Maipú" },
              ],
            },
          ],
        },

        legal: {
          label: "Información Institucional",
          groups: [
            {
              fields: [
                { label: "MARCA", value: "Casir dos Santos" },
                { label: "REDES", value: "@bodegacasirdossantos" },
                { label: "PROPIETARIOS", value: "Familia Casir dos Santos" },
              ],
            },
          ],
        },
      },
    },
  },
];
