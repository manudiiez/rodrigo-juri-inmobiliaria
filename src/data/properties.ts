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
      "es-AR": {
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
      "en-US": {
        title: "Los Álamos Estate with Vineyards",

        description: {
          text: "Exceptional vineyard estate for sale in Valle de Uco, near Tupungato, Mendoza province. This 42-hectare property represents a unique opportunity for investors or wine lovers looking to combine quality wine production with a luxury country lifestyle.\n\nThe estate features high-quality vineyards planted with the region's best varieties, mainly Malbec and Cabernet Sauvignon. The technified drip irrigation system installed in 2018 ensures maximum water efficiency and production quality.\n\nWith a productivity of 12,000 kg/ha and grape prices at 0.45 USD/kg, this property represents an excellent investment opportunity with proven returns.",
          callout: {
            label: "PRODUCTIVE APTITUDE",
            value: "Premium Vineyards / Olive groves",
          },
        },

        sections: [
          { id: "resumen", label: "Summary" },
          { id: "ficha-tecnica", label: "Technical Sheet" },
          { id: "infraestructura", label: "Infrastructure" },
          { id: "productividad", label: "Productivity" },
          { id: "ubicacion", label: "Location" },
          { id: "documentacion", label: "Documentation" },
          { id: "contacto-finca", label: "Contact" },
        ],

        summary: [
          {
            label: "Total Area",
            value: "42 has",
          },
          {
            label: "PRICE PER HECTARE",
            value: "18,500",
            extra: "USD/has",
          },
          {
            label: "ALTITUDE",
            value: "950",
            extra: "masl",
          },
          {
            label: "CURRENT STATUS",
            value: "In production",
            class: "text-lg mt-4",
          },
        ],

        techSpecs: {
          label: "Technical Sheet",
          groups: [
            {
              title: "Soil and Climate",
              fields: [
                {
                  label: "SOIL TYPE",
                  value: "Sandy-clay",
                },
                {
                  label: "TEXTURE",
                  value: "Balanced",
                },
                {
                  label: "SOIL PH",
                  value: "7.2 (neutral)",
                },
                {
                  label: "ORGANIC MATTER",
                  value: "2.8%",
                },
                {
                  label: "SLOPE",
                  value: "2-5% (gentle)",
                },
                {
                  label: "DRAINAGE",
                  value: "Good",
                },
                {
                  label: "DEGREE DAYS",
                  value: "1450 (ideal vineyards)",
                  class: "border-secondary",
                },
                {
                  label: "FROST",
                  value: "Late (October)",
                },
              ],
            },
            {
              title: "Water and Irrigation",
              fields: [
                {
                  label: "WATER RIGHTS",
                  value: "1.2 l/s/ha",
                  class: "border-blueo",
                },
                {
                  label: "TOTAL FLOW",
                  value: "50 l/s",
                  class: "border-blueo",
                },
                {
                  label: "SOURCE",
                  value: "Mendoza River",
                },
                {
                  label: "IRRIGATION TURN",
                  value: "Every 15 days",
                },
                {
                  label: "ELECTRICAL CONDUCTIVITY",
                  value: "0.8 dS/m",
                  subText: "(excellent)",
                  class: "border-blueo",
                },
                {
                  label: "WATER PH",
                  value: "7.5",
                },
                {
                  label: "IRRIGATION SYSTEM",
                  value: "Technified drip",
                  class: "border-secondary",
                },
                {
                  label: "INSTALLATION YEAR",
                  value: "2018",
                },
              ],
            },
          ],
        },

        improvements: {
          label: "Facilities and Improvements",
          fields: [
            {
              label: "MAIN HOUSE",
              value: "120 m² (3 bedrooms)",
              subText: "Condition: Very good",
            },
            { label: "WAREHOUSE", value: "200 m²" },
            {
              label: "IRRIGATION ROOM",
              value: "Automated",
            },
            {
              label: "FENCING",
              value: "Complete perimeter",
            },
            {
              label: "INTERNAL ROADS",
              value: "Consolidated",
            },
            {
              label: "WATER WELL",
              value: "No (canal irrigation)",
            },
            {
              label: "AUSTRALIAN TANK",
              value: "50,000 liters",
            },
          ],
        },

        energy: {
          label: "Energy and Productivity",
          groups: [
            {
              title: "Electrical Supply",
              fields: [
                {
                  label: "ENERGY TYPE",
                  value: "Three-phase",
                  class: "border-secondary",
                },
                {
                  label: "POWER",
                  value: "25 kW",
                  class: "border-secondary",
                },
                { label: "TRANSFORMER", value: "Private" },
                { label: "METER", value: "Individual" },
              ],
            },
            {
              title: "Wine Production",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "PRODUCTIVITY",
                  value: "12,000 kg/ha",
                  subText: "Yield per hectare",
                },
                {
                  label: "2024 GRAPE PRICE",
                  value: "0.45 USD/kg",
                  subText: "Market price",
                },
              ],
              fields: [
                {
                  label: "VARIETIES",
                  value: ["Malbec", "Cabernet"],
                  class: "border-secondary",
                },
                { label: "VINEYARD AGE", value: "8-12 years" },
              ],
            },
          ],
        },

        locationDetails: {
          label: "Location and Access",
          map: {
            lat: -33.0162,
            lng: -68.8751,
          },
          featured: [
            { label: "MAIN ACCESS", value: "RP 15 + 2 km gravel road" },
            { label: "DISTANCE TO MENDOZA", value: "35 km" },
          ],
          groups: [
            {
              title: "Nearby Services",
              fields: [
                { label: "Urban Center", value: "5 km" },
                { label: "Wineries", value: "3-8 km" },
                { label: "Cooperative", value: "6 km" },
                { label: "School", value: "4 km" },
                { label: "Hospital", value: "12 km" },
                { label: "Airport", value: "45 km" },
              ],
            },
          ],
        },

        legal: {
          label: "Legal Documentation",
          groups: [
            {
              fields: [
                { label: "DEED", value: "Up to date" },
                { label: "SURVEY", value: "2020 (updated)" },
                { label: "MUNICIPAL PLANS", value: "Approved" },
                { label: "TAXES", value: "Up to date" },
                { label: "CREDIT ELIGIBLE", value: "Yes" },
                { label: "LIENS", value: "Free" },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title: "Fazenda Los Álamos com Vinhedos",

        description: {
          text: "Excepcional fazenda com vinhedos à venda no Valle de Uco, perto de Tupungato, província de Mendoza. Esta propriedade de 42 hectares representa uma oportunidade única para investidores ou amantes do vinho que buscam combinar produção vitivinícola de qualidade com um estilo de vida campestre de luxo.\n\nA fazenda possui vinhedos de alta qualidade plantados com as melhores variedades da região, principalmente Malbec e Cabernet Sauvignon. O sistema de irrigação por gotejamento tecnificado instalado em 2018 garante máxima eficiência hídrica e qualidade de produção.\n\nCom uma produtividade de 12.000 kg/ha e preços de uva em 0,45 USD/kg, esta propriedade representa uma excelente oportunidade de investimento com retornos comprovados.",
          callout: {
            label: "APTIDÃO PRODUTIVA",
            value: "Vinhedos premium / Oliveiras",
          },
        },

        sections: [
          { id: "resumen", label: "Resumo" },
          { id: "ficha-tecnica", label: "Ficha Técnica" },
          { id: "infraestructura", label: "Infraestrutura" },
          { id: "productividad", label: "Produtividade" },
          { id: "ubicacion", label: "Localização" },
          { id: "documentacion", label: "Documentação" },
          { id: "contacto-finca", label: "Contato" },
        ],

        summary: [
          {
            label: "Área Total",
            value: "42 has",
          },
          {
            label: "PREÇO POR HECTARE",
            value: "18.500",
            extra: "USD/has",
          },
          {
            label: "ALTITUDE",
            value: "950",
            extra: "msnm",
          },
          {
            label: "STATUS ATUAL",
            value: "Em produção",
            class: "text-lg mt-4",
          },
        ],

        techSpecs: {
          label: "Ficha Técnica",
          groups: [
            {
              title: "Solo e Clima",
              fields: [
                {
                  label: "TIPO DE SOLO",
                  value: "Franco-argiloso",
                },
                {
                  label: "TEXTURA",
                  value: "Equilibrada",
                },
                {
                  label: "PH DO SOLO",
                  value: "7.2 (neutro)",
                },
                {
                  label: "MATÉRIA ORGÂNICA",
                  value: "2.8%",
                },
                {
                  label: "DECLIVE",
                  value: "2-5% (suave)",
                },
                {
                  label: "DRENAGEM",
                  value: "Boa",
                },
                {
                  label: "GRAUS DIA",
                  value: "1450 (ideal vinhedos)",
                  class: "border-secondary",
                },
                {
                  label: "GEADAS",
                  value: "Tardias (outubro)",
                },
              ],
            },
            {
              title: "Água e Irrigação",
              fields: [
                {
                  label: "DIREITO DE ÁGUA",
                  value: "1,2 l/s/ha",
                  class: "border-blueo",
                },
                {
                  label: "VAZÃO TOTAL",
                  value: "50 l/s",
                  class: "border-blueo",
                },
                {
                  label: "FONTE",
                  value: "Rio Mendoza",
                },
                {
                  label: "TURNO DE IRRIGAÇÃO",
                  value: "A cada 15 dias",
                },
                {
                  label: "CONDUTIVIDADE ELÉTRICA",
                  value: "0.8 dS/m",
                  subText: "(excelente)",
                  class: "border-blueo",
                },
                {
                  label: "PH DA ÁGUA",
                  value: "7.5",
                },
                {
                  label: "SISTEMA DE IRRIGAÇÃO",
                  value: "Gotejamento tecnificado",
                  class: "border-secondary",
                },
                {
                  label: "ANO DE INSTALAÇÃO",
                  value: "2018",
                },
              ],
            },
          ],
        },

        improvements: {
          label: "Instalações e Melhorias",
          fields: [
            {
              label: "CASA PRINCIPAL",
              value: "120 m² (3 quartos)",
              subText: "Estado: Muito bom",
            },
            { label: "GALPÃO", value: "200 m²" },
            {
              label: "SALA DE IRRIGAÇÃO",
              value: "Automatizada",
            },
            {
              label: "CERCAS",
              value: "Perímetro completo",
            },
            {
              label: "CAMINHOS INTERNOS",
              value: "Consolidados",
            },
            {
              label: "POÇO DE ÁGUA",
              value: "Não (irrigação por canal)",
            },
            {
              label: "TANQUE AUSTRALIANO",
              value: "50.000 litros",
            },
          ],
        },

        energy: {
          label: "Energia e Produtividade",
          groups: [
            {
              title: "Fornecimento Elétrico",
              fields: [
                {
                  label: "TIPO DE ENERGIA",
                  value: "Trifásica",
                  class: "border-secondary",
                },
                {
                  label: "POTÊNCIA",
                  value: "25 kW",
                  class: "border-secondary",
                },
                { label: "TRANSFORMADOR", value: "Próprio" },
                { label: "MEDIDOR", value: "Individual" },
              ],
            },
            {
              title: "Produção Vitivinícola",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "PRODUTIVIDADE",
                  value: "12.000 kg/ha",
                  subText: "Rendimento por hectare",
                },
                {
                  label: "PREÇO UVA 2024",
                  value: "0.45 USD/kg",
                  subText: "Preço de mercado",
                },
              ],
              fields: [
                {
                  label: "VARIEDADES",
                  value: ["Malbec", "Cabernet"],
                  class: "border-secondary",
                },
                { label: "IDADE DOS VINHEDOS", value: "8-12 anos" },
              ],
            },
          ],
        },

        locationDetails: {
          label: "Localização e Acessos",
          map: {
            lat: -33.0162,
            lng: -68.8751,
          },
          featured: [
            { label: "ACESSO PRINCIPAL", value: "RP 15 + 2 km cascalho" },
            { label: "DISTÂNCIA A MENDOZA", value: "35 km" },
          ],
          groups: [
            {
              title: "Serviços Próximos",
              fields: [
                { label: "Centro Urbano", value: "5 km" },
                { label: "Vinícolas", value: "3-8 km" },
                { label: "Cooperativa", value: "6 km" },
                { label: "Escola", value: "4 km" },
                { label: "Hospital", value: "12 km" },
                { label: "Aeroporto", value: "45 km" },
              ],
            },
          ],
        },

        legal: {
          label: "Documentação Legal",
          groups: [
            {
              fields: [
                { label: "ESCRITURA", value: "Em dia" },
                { label: "MEDIÇÃO", value: "2020 (atualizada)" },
                { label: "PLANOS MUNICIPAIS", value: "Aprovados" },
                { label: "IMPOSTOS", value: "Em dia" },
                { label: "APTO CRÉDITO", value: "Sim" },
                { label: "ÔNUS", value: "Livre" },
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
  {
    slug: "bodega-sinfin-maipu-mendoza-2",
    type: "bodega",
    price: {
      value: null,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: 90,
    location: {
      lat: -32.9778,
      lng: -68.7812,
      address: "Ruta 50, Maipú, Mendoza",
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
      "es-AR": {
        title: "Bodega SinFin: Inversión Productiva y Turística en Maipú",
        description: {
          text: "Excelente oportunidad de inversión en una bodega familiar consolidada, ubicada estratégicamente en Maipú, a solo 20 minutos de la Ciudad de Mendoza. Bodega SinFin combina una impresionante capacidad industrial con una propuesta enoturística de primer nivel.\n\nLa propiedad cuenta con 90 hectáreas de viñedos propios (parte de un esquema productivo de 440 ha) y una capacidad total de vasija de 6.000.000 de litros, destacándose por sus instalaciones de cemento con epoxi y acero inoxidable. La bodega posee una sólida trayectoria en la elaboración de vinos de alta gama y granel premium, exportando a mercados exigentes como EE.UU., Reino Unido y Asia.\n\nAdemás de su perfil productivo, el inmueble incluye infraestructura para turismo y eventos corporativos o sociales, con salones, jardines y una cava subterránea histórica, ofreciendo un potencial de negocio diversificado y rentable.",
          callout: {
            label: "PERFIL",
            value: "Vinos Alta Gama / Exportación / Enoturismo",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumen",
          },
          {
            id: "ficha-tecnica",
            label: "Ficha Técnica",
          },
          {
            id: "infraestructura",
            label: "Infraestructura",
          },
          {
            id: "productividad",
            label: "Negocios y Mercados",
          },
          {
            id: "ubicacion",
            label: "Ubicación",
          },
          {
            id: "documentacion",
            label: "Documentación",
          },
          {
            id: "contacto-finca",
            label: "Contacto",
          },
        ],
        summary: [
          {
            label: "Superficie Propia",
            value: "90 has",
          },
          {
            label: "Capacidad Vasija",
            value: "6 M",
            extra: "Litros",
          },
          {
            label: "Elaboración Anual",
            value: "4.5 M",
            extra: "Litros (Max)",
          },
          {
            label: "ESTADO",
            value: "En funcionamiento",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Ficha Técnica",
          groups: [
            {
              title: "Viñedos y Zonas",
              fields: [
                {
                  label: "VIÑEDOS PROPIOS",
                  value: "90 has",
                },
                {
                  label: "VIÑEDOS TERCEROS",
                  value: "350 has",
                },
                {
                  label: "ZONAS CULTIVO",
                  value: "Maipú, Luján, Valle de Uco",
                },
                {
                  label: "VARIEDADES TINTAS",
                  value: "Malbec, Cab. Franc, Bonarda, Merlot",
                },
                {
                  label: "VARIEDADES BLANCAS",
                  value: "Sauvignon Blanc",
                },
                {
                  label: "OTRAS VARIEDADES",
                  value: "Syrah, Petit Verdot, Pinot Noir",
                },
                {
                  label: "ANTIGÜEDAD",
                  value: "Producción desde 1975",
                },
              ],
            },
            {
              title: "Capacidad de Vasija",
              fields: [
                {
                  label: "CAPACIDAD TOTAL",
                  value: "6.000.000 Litros",
                  class: "border-blueo",
                },
                {
                  label: "CEMENTO C/ EPOXI",
                  value: "5.740.000 Litros",
                  class: "border-secondary",
                },
                {
                  label: "ACERO INOXIDABLE",
                  value: "200.000 Litros",
                },
                {
                  label: "BARRICAS ROBLE",
                  value: "60.000 Litros",
                  subText: "Roble Francés",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Instalaciones y Mejoras",
          fields: [
            {
              label: "ENOTURISMO",
              value: "Visitas y Degustaciones",
              subText: "Salas equipadas",
            },
            {
              label: "SALONES EVENTOS",
              value: "3 Espacios diferenciados",
            },
            {
              label: "CAVA SUBTERRÁNEA",
              value: "Renovada para eventos",
            },
            {
              label: "JARDINES",
              value: "Con fuente de agua",
            },
            {
              label: "CASA DE FAMILIA",
              value: "Con piscina y parrillas",
            },
            {
              label: "GASTRONOMÍA",
              value: "Cocina para eventos",
            },
            {
              label: "PROYECTO",
              value: "Futuro Restaurante",
            },
          ],
        },
        energy: {
          label: "Negocio y Mercados",
          groups: [
            {
              title: "Perfil Comercial",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "ELABORACIÓN MAX",
                  value: "4.500.000 Lts",
                  subText: "Anual",
                },
                {
                  label: "MERCADOS",
                  value: "Local e Internacional",
                },
              ],
              fields: [
                {
                  label: "EXPORTACIÓN",
                  value: "EE.UU, Canadá, China, UK",
                },
                {
                  label: "GRANEL PREMIUM",
                  value: "Especialidad Malbec",
                },
                {
                  label: "PREMIOS",
                  value: "Oro (WBWE Amsterdam)",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Ubicación y Accesos",
          map: {
            lat: -32.9778,
            lng: -68.7812,
          },
          featured: [
            {
              label: "ZONA",
              value: "Maipú, Mendoza",
            },
            {
              label: "DISTANCIA CIUDAD",
              value: "20 Minutos",
            },
          ],
          groups: [
            {
              title: "Contexto",
              fields: [
                {
                  label: "Entorno",
                  value: "Zona vitivinícola tradicional",
                },
                {
                  label: "Accesibilidad",
                  value: "Excelente (Cercano a Ciudad)",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentación Legal",
          groups: [
            {
              fields: [
                {
                  label: "ESTADO",
                  value: "Sociedad Activa",
                },
                {
                  label: "AUDITORÍA",
                  value: "Balances Disponibles",
                },
                {
                  label: "ORGANIGRAMA",
                  value: "Estructura gerencial completa",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title: "Bodega SinFin: Productive Winery & Tourism Investment",
        description: {
          text: "Excellent investment opportunity in an established family winery, strategically located in Maipú, just 20 minutes from Mendoza City. Bodega SinFin combines impressive industrial capacity with a top-tier wine tourism proposal.\n\nThe property features 90 hectares of owned vineyards (part of a 440-ha productive scheme) and a total vessel capacity of 6,000,000 liters, highlighted by its epoxy-lined concrete and stainless steel facilities. The winery has a solid track record in producing high-end wines and premium bulk wine, exporting to demanding markets such as the USA, UK, and Asia.\n\nIn addition to its productive profile, the property includes infrastructure for tourism and corporate or social events, with halls, gardens, and a historic underground cellar, offering a diversified and profitable business potential.",
          callout: {
            label: "TOTAL CAPACITY",
            value: "6,000,000 Liters",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Summary",
          },
          {
            id: "ficha-tecnica",
            label: "Technical Sheet",
          },
          {
            id: "infraestructura",
            label: "Infrastructure",
          },
          {
            id: "productividad",
            label: "Productivity",
          },
          {
            id: "ubicacion",
            label: "Location",
          },
          {
            id: "documentacion",
            label: "Documentation",
          },
          {
            id: "contacto-finca",
            label: "Contact",
          },
        ],
        summary: [
          {
            label: "Owned Area",
            value: "90 has",
          },
          {
            label: "Vessel Capacity",
            value: "6 M",
            extra: "Liters",
          },
          {
            label: "Annual Production",
            value: "4.5 M",
            extra: "Liters (Max)",
          },
          {
            label: "Location",
            value: "Maipú",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Technical Sheet",
          groups: [
            {
              title: "Vineyards and Zones",
              fields: [
                {
                  label: "OWNED VINEYARDS",
                  value: "90 has",
                },
                {
                  label: "THIRD-PARTY VINEYARDS",
                  value: "350 has",
                },
                {
                  label: "CULTIVATION ZONES",
                  value: "Maipú, Luján, Uco Valley",
                },
                {
                  label: "RED VARIETIES",
                  value: "Malbec, Cab. Franc, Bonarda, Merlot",
                },
                {
                  label: "WHITE VARIETIES",
                  value: "Sauvignon Blanc",
                },
                {
                  label: "OTHER VARIETIES",
                  value: "Syrah, Petit Verdot, Pinot Noir",
                },
                {
                  label: "AGE",
                  value: "Production since 1975",
                },
              ],
            },
            {
              title: "Vessel Capacity",
              fields: [
                {
                  label: "TOTAL CAPACITY",
                  value: "6,000,000 Liters",
                  class: "border-blueo",
                },
                {
                  label: "EPOXY CONCRETE",
                  value: "5,740,000 Liters",
                  class: "border-secondary",
                },
                {
                  label: "STAINLESS STEEL",
                  value: "200,000 Liters",
                },
                {
                  label: "OAK BARRELS",
                  value: "60,000 Liters",
                  subText: "French Oak",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Facilities and Improvements",
          fields: [
            {
              label: "WINE TOURISM",
              value: "Tours and Tastings",
              subText: "Equipped rooms",
            },
            {
              label: "EVENT HALLS",
              value: "3 Distinct spaces",
            },
            {
              label: "UNDERGROUND CELLAR",
              value: "Renovated for events",
            },
            {
              label: "GARDENS",
              value: "With water fountain",
            },
            {
              label: "FAMILY HOUSE",
              value: "With pool and BBQ",
            },
            {
              label: "GASTRONOMY",
              value: "Event kitchen",
            },
            {
              label: "PROJECT",
              value: "Future Restaurant",
            },
          ],
        },
        energy: {
          label: "Business and Markets",
          groups: [
            {
              title: "Commercial Profile",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "MAX PRODUCTION",
                  value: "4,500,000 Lts",
                  subText: "Annual",
                },
                {
                  label: "MARKETS",
                  value: "Local and International",
                },
              ],
              fields: [
                {
                  label: "EXPORTS",
                  value: "USA, Canada, China, UK",
                },
                {
                  label: "PREMIUM BULK",
                  value: "Malbec Specialty",
                },
                {
                  label: "AWARDS",
                  value: "Gold (WBWE Amsterdam)",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Location and Access",
          map: {
            lat: -32.9778,
            lng: -68.7812,
          },
          featured: [
            {
              label: "ZONE",
              value: "Maipú, Mendoza",
            },
            {
              label: "CITY DISTANCE",
              value: "20 Minutes",
            },
          ],
          groups: [
            {
              title: "Context",
              fields: [
                {
                  label: "Environment",
                  value: "Traditional wine zone",
                },
                {
                  label: "Accessibility",
                  value: "Excellent (Near City)",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Legal Documentation",
          groups: [
            {
              fields: [
                {
                  label: "STATUS",
                  value: "Active Company",
                },
                {
                  label: "AUDIT",
                  value: "Available Balance Sheets",
                },
                {
                  label: "ORG CHART",
                  value: "Complete mgmt structure",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title: "Bodega SinFin: Investimento Produtivo e Turístico em Maipú",
        description: {
          text: "Excelente oportunidade de investimento em uma vinícola familiar consolidada, localizada estrategicamente em Maipú, a apenas 20 minutos da cidade de Mendoza. A Bodega SinFin combina uma impressionante capacidade industrial com uma proposta de enoturismo de alto nível.\n\nA propriedade conta com 90 hectares de vinhedos próprios (parte de um esquema produtivo de 440 ha) e uma capacidade total de armazenamento de 6.000.000 de litros, destacando-se por suas instalações de cimento com epóxi e aço inoxidável. A vinícola possui uma sólida trajetória na elaboração de vinhos de alta gama e granel premium, exportando para mercados exigentes como EUA, Reino Unido e Ásia.\n\nAlém de seu perfil produtivo, o imóvel inclui infraestrutura para turismo e eventos corporativos ou sociais, com salões, jardins e uma cava subterrânea histórica, oferecendo um potencial de negócio diversificado e rentável.",
          callout: {
            label: "CAPACIDADE TOTAL",
            value: "6.000.000 Litros",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumo",
          },
          {
            id: "ficha-tecnica",
            label: "Ficha Técnica",
          },
          {
            id: "infraestructura",
            label: "Infraestrutura",
          },
          {
            id: "productividad",
            label: "Produtividade",
          },
          {
            id: "ubicacion",
            label: "Localização",
          },
          {
            id: "documentacion",
            label: "Documentação",
          },
          {
            id: "contacto-finca",
            label: "Contato",
          },
        ],
        summary: [
          {
            label: "Superfície Própria",
            value: "90 has",
          },
          {
            label: "Capacidade Tanques",
            value: "6 M",
            extra: "Litros",
          },
          {
            label: "Elaboração Anual",
            value: "4.5 M",
            extra: "Litros (Max)",
          },
          {
            label: "Localização",
            value: "Maipú",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Ficha Técnica",
          groups: [
            {
              title: "Vinhedos e Zonas",
              fields: [
                {
                  label: "VINHEDOS PRÓPRIOS",
                  value: "90 has",
                },
                {
                  label: "VINHEDOS TERCEIROS",
                  value: "350 has",
                },
                {
                  label: "ZONAS CULTIVO",
                  value: "Maipú, Luján, Valle de Uco",
                },
                {
                  label: "VARIEDADES TINTAS",
                  value: "Malbec, Cab. Franc, Bonarda, Merlot",
                },
                {
                  label: "VARIEDADES BRANCAS",
                  value: "Sauvignon Blanc",
                },
                {
                  label: "OUTRAS VARIEDADES",
                  value: "Syrah, Petit Verdot, Pinot Noir",
                },
                {
                  label: "ANTIGUIDADE",
                  value: "Produção desde 1975",
                },
              ],
            },
            {
              title: "Capacidade de Tanques",
              fields: [
                {
                  label: "CAPACIDADE TOTAL",
                  value: "6.000.000 Litros",
                  class: "border-blueo",
                },
                {
                  label: "CIMENTO C/ EPÓXI",
                  value: "5.740.000 Litros",
                  class: "border-secondary",
                },
                {
                  label: "AÇO INOXIDÁVEL",
                  value: "200.000 Litros",
                },
                {
                  label: "BARRICAS CARVALHO",
                  value: "60.000 Litros",
                  subText: "Carvalho Francês",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Instalações e Melhorias",
          fields: [
            {
              label: "ENOTURISMO",
              value: "Visitas e Degustações",
              subText: "Salas equipadas",
            },
            {
              label: "SALÕES EVENTOS",
              value: "3 Espaços diferenciados",
            },
            {
              label: "CAVA SUBTERRÂNEA",
              value: "Renovada para eventos",
            },
            {
              label: "JARDINS",
              value: "Com fonte de água",
            },
            {
              label: "CASA DE FAMÍLIA",
              value: "Com piscina e churrasqueiras",
            },
            {
              label: "GASTRONOMIA",
              value: "Cozinha para eventos",
            },
            {
              label: "PROJETO",
              value: "Futuro Restaurante",
            },
          ],
        },
        energy: {
          label: "Negócios e Mercados",
          groups: [
            {
              title: "Perfil Comercial",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "ELABORAÇÃO MAX",
                  value: "4.500.000 Lts",
                  subText: "Anual",
                },
                {
                  label: "MERCADOS",
                  value: "Local e Internacional",
                },
              ],
              fields: [
                {
                  label: "EXPORTAÇÃO",
                  value: "EUA, Canadá, China, UK",
                },
                {
                  label: "GRANEL PREMIUM",
                  value: "Especialidade Malbec",
                },
                {
                  label: "PRÊMIOS",
                  value: "Ouro (WBWE Amsterdam)",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Localização e Acessos",
          map: {
            lat: -32.9778,
            lng: -68.7812,
          },
          featured: [
            {
              label: "ZONA",
              value: "Maipú, Mendoza",
            },
            {
              label: "DISTÂNCIA CIDADE",
              value: "20 Minutos",
            },
          ],
          groups: [
            {
              title: "Contexto",
              fields: [
                {
                  label: "Ambiente",
                  value: "Zona vitivinícola tradicional",
                },
                {
                  label: "Acessibilidade",
                  value: "Excelente (Perto da Cidade)",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentação Legal",
          groups: [
            {
              fields: [
                {
                  label: "STATUS",
                  value: "Sociedade Ativa",
                },
                {
                  label: "AUDITORIA",
                  value: "Balanços Disponíveis",
                },
                {
                  label: "ORGANOGRAMA",
                  value: "Estrutura gerencial completa",
                },
              ],
            },
          ],
        },
      },
    },
  },
];
