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
    slug: "bodega-sinfin-maipu-mendoza",
    type: "bodega",
    price: {
      value: null,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: 440,
    location: {
      lat: -33.0054,
      lng: -68.7497,
      address: "Maipú, Mendoza (a 20 min de la Ciudad)",
      province: "Mendoza",
      country: "AR",
    },
    images: [
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
      "/finca2.jpg",
      "/finca1.jpg",
    ],
    content: {
      "es-AR": {
        title: "Bodega SinFin: Capacidad Industrial y Enoturismo en Maipú",
        description: {
          text: "Excelente oportunidad de inversión en una bodega familiar con sólida trayectoria y fuerte posicionamiento internacional, ubicada en Maipú, Mendoza. Operativa desde 1975 en la producción de uvas y desde 2005 en la elaboración de vinos de alta gama, Bodega SinFin combina una gran escala industrial con una filosofía de calidad premium.\n\nLa propiedad cuenta con una capacidad total de vasija de 6.000.000 de litros y gestiona una superficie de 440 hectáreas de viñedos (propios y de terceros) distribuidos en los terruños más prestigiosos de la provincia. Se destaca por ser una de las pocas bodegas especializadas en 'Bulk Wine' (vino a granel) de alta gama, exportando a mercados exigentes como EE.UU., Reino Unido y China, habiendo sido premiada internacionalmente en Ámsterdam.\n\nAdemás de su perfil productivo, posee una unidad de enoturismo y eventos totalmente desarrollada, con salones, jardines y una cava subterránea histórica, generando un flujo de ingresos diversificado.",
          callout: {
            label: "PERFIL DE NEGOCIO",
            value: "Exportación Granel Premium / Enoturismo / Eventos",
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
            label: "Elaboración Máx",
            value: "4.5 M",
            extra: "Litros/Año",
          },
          {
            label: "Superficie Viñedos",
            value: "440",
            extra: "Hectáreas (Gestionadas)",
          },
          {
            label: "Estado",
            value: "En plena producción",
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
                },
                {
                  label: "BARRICAS ROBLE",
                  value: "60.000 Litros",
                  subText: "Roble Francés",
                },
              ],
            },
            {
              title: "Viñedos y Materia Prima",
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
                  label: "ZONAS DE CULTIVO",
                  value: "Maipú, Luján, Valle de Uco, Este",
                  subText: "Diversidad de orígenes",
                },
                {
                  label: "VARIETALES TINTOS",
                  value:
                    "Malbec, Cab. Franc, Cab. Sauv, Merlot, Bonarda, Syrah",
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
              label: "TURISMO",
              value: "Visitas y Degustaciones",
              subText: "Con maridajes (chocolates/picadas)",
            },
            {
              label: "ESPACIOS EVENTOS",
              value: "3 Salones diferenciados",
              subText: "Corporativos y Sociales",
            },
            {
              label: "CAVA SUBTERRÁNEA",
              value: "Piletas renovadas",
              subText: "Para eventos íntimos",
            },
            {
              label: "CASA DE FAMILIA",
              value: "Con piscina y viñedo",
              subText: "Estilo campestre",
            },
            {
              label: "GASTRONOMÍA",
              value: "Servicio propio",
              subText: "Proyección de restaurante",
            },
          ],
        },
        energy: {
          label: "Mercados y Productos",
          groups: [
            {
              title: "Mercado Externo (Granel)",
              fields: [
                {
                  label: "POSICIONAMIENTO",
                  value: "Granel Alta Gama",
                  class: "border-secondary",
                },
                {
                  label: "DESTINOS",
                  value: "EEUU, UK, China, Canadá",
                  subText: "Japón, Australia, Europa",
                },
                {
                  label: "RECONOCIMIENTOS",
                  value: "Oro - WBWE Ámsterdam",
                  subText: "Top 8 Bodegas (2018/2019)",
                },
              ],
            },
            {
              title: "Producto Fraccionado",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "ELABORACIÓN",
                  value: "4.500.000 Lts",
                  subText: "Máximo anual",
                },
              ],
              fields: [
                {
                  label: "Guarda",
                  value: [
                    "Malbec",
                    "Cabernet Franc",
                    "Bonarda",
                    "Sauvignon Blanc",
                  ],
                  class: "border-secondary",
                },
                {
                  label: "Gran Guarda",
                  value: ["Malbec", "Cabernet Franc", "Merlot"],
                },
                {
                  label: "Interminable",
                  value: ["Red Blend 1", "Blend de Malbec 2", "Red Blend 3"],
                },
                {
                  label: "Fugaz",
                  value: ["Rozado de Bequignol"],
                },
                {
                  label: "Presente",
                  value: ["Blend"],
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Ubicación",
          map: {
            lat: -33.0054,
            lng: -68.7497,
          },
          featured: [
            { label: "REGIÓN", value: "Maipú, Mendoza" },
            { label: "ACCESIBILIDAD", value: "20 min de Ciudad" },
          ],
          groups: [
            {
              title: "Entorno",
              fields: [
                { label: "Perfil de Zona", value: "Vitivinícola histórica" },
                { label: "Cercanía", value: "Rutas del Vino" },
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
                { label: "PERÍODO ANALIZADO", value: "2016 - 2025" },
                { label: "VOLUMEN PROMEDIO", value: "2.776.109 Lts" },
                {
                  label: "EBITDA PROM. HISTÓRICO",
                  value: "USD 193.082",
                  subText: "Promedio de la serie",
                },
                {
                  label: "ESTRUCTURA",
                  value: "Organigrama completo",
                  subText: "Gerencia, Enología, Comercial, RRHH",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title: "SinFin Winery: Industrial Capacity & Wine Tourism in Maipú",
        description: {
          text: "Excellent investment opportunity in a family-owned winery with a solid track record and strong international positioning, located in Maipú, Mendoza. Producing grapes since 1975 and high-end wines since 2005, Bodega SinFin combines large industrial scale with a premium quality philosophy.\n\nThe property boasts a total vessel capacity of 6,000,000 liters and manages a surface area of 440 hectares of vineyards (owned and third-party) distributed across the province's most prestigious terroirs. It stands out as one of the few wineries specializing in high-end 'Bulk Wine', exporting to demanding markets such as the USA, UK, and China, having been awarded internationally in Amsterdam.\n\nIn addition to its productive profile, it has a fully developed wine tourism and events unit, with halls, gardens, and a historic underground cellar, generating a diversified revenue stream.",
          callout: {
            label: "BUSINESS PROFILE",
            value: "Premium Bulk Export / Wine Tourism / Events",
          },
        },
        sections: [
          { id: "resumen", label: "Summary" },
          { id: "ficha-tecnica", label: "Capacity & Infrastructure" },
          { id: "infraestructura", label: "Wine Tourism & Events" },
          { id: "productividad", label: "Markets & Products" },
          { id: "ubicacion", label: "Location" },
          { id: "documentacion", label: "Operating Performance" },
          { id: "contacto-finca", label: "Contact" },
        ],
        summary: [
          {
            label: "Total Capacity",
            value: "6 M",
            extra: "Liters",
          },
          {
            label: "Max Production",
            value: "4.5 M",
            extra: "Liters/Year",
          },
          {
            label: "Vineyard Area",
            value: "440",
            extra: "Hectares (Managed)",
          },
          {
            label: "Status",
            value: "Fully operational",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Capacity & Infrastructure",
          groups: [
            {
              title: "Vessel Capacity",
              fields: [
                {
                  label: "TOTAL CAPACITY",
                  value: "6,000,000 Liters",
                  class: "border-secondary",
                },
                {
                  label: "CEMENT W/ EPOXY",
                  value: "5,740,000 Liters",
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
            {
              title: "Vineyards & Raw Material",
              fields: [
                {
                  label: "TOTAL AREA",
                  value: "440 has",
                },
                {
                  label: "OWNED VINEYARDS",
                  value: "90 has",
                  class: "border-blueo",
                },
                {
                  label: "THIRD-PARTY VINEYARDS",
                  value: "350 has",
                },
                {
                  label: "GROWING ZONES",
                  value: "Maipú, Luján, Uco Valley, East",
                  subText: "Diversity of origins",
                },
                {
                  label: "RED VARIETIES",
                  value:
                    "Malbec, Cab. Franc, Cab. Sauv, Merlot, Bonarda, Syrah",
                  class: "text-sm",
                },
                {
                  label: "WHITE VARIETIES",
                  value: "Sauvignon Blanc",
                  class: "text-sm",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Wine Tourism & Events",
          fields: [
            {
              label: "TOURISM",
              value: "Tours & Tastings",
              subText: "With pairings (chocolate/platters)",
            },
            {
              label: "EVENT SPACES",
              value: "3 Distinct Halls",
              subText: "Corporate & Social",
            },
            {
              label: "UNDERGROUND CELLAR",
              value: "Renovated pools",
              subText: "For intimate events",
            },
            {
              label: "FAMILY HOUSE",
              value: "With pool & vineyard",
              subText: "Country style",
            },
            {
              label: "GASTRONOMY",
              value: "In-house service",
              subText: "Restaurant projected",
            },
          ],
        },
        energy: {
          label: "Markets & Products",
          groups: [
            {
              title: "External Market (Bulk)",
              fields: [
                {
                  label: "POSITIONING",
                  value: "High-End Bulk",
                  class: "border-secondary",
                },
                {
                  label: "DESTINATIONS",
                  value: "USA, UK, China, Canada",
                  subText: "Japan, Australia, Europe",
                },
                {
                  label: "AWARDS",
                  value: "Gold - WBWE Amsterdam",
                  subText: "Top 8 Wineries (2018/2019)",
                },
              ],
            },
            {
              title: "Bottled Product",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "PRODUCTION",
                  value: "4,500,000 Lts",
                  subText: "Annual max",
                },
              ],
              fields: [
                {
                  label: "LINES",
                  value: ["Guarda", "Gran Guarda", "El Interminable"],
                  class: "border-secondary",
                },
                {
                  label: "HIGH END",
                  value: "SinFin Presente / Fugaz",
                  subText: "Exclusive Blends & Rosés",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Location",
          map: {
            lat: -33.0054,
            lng: -68.7497,
          },
          featured: [
            { label: "REGION", value: "Maipú, Mendoza" },
            { label: "ACCESSIBILITY", value: "20 min from City" },
          ],
          groups: [
            {
              title: "Surroundings",
              fields: [
                { label: "Area Profile", value: "Historic Wine Region" },
                { label: "Proximity", value: "Wine Routes" },
              ],
            },
          ],
        },
        legal: {
          label: "Operating Performance",
          groups: [
            {
              title: "Financial Summary (Historical)",
              fields: [
                { label: "PERIOD ANALYZED", value: "2016 - 2025" },
                { label: "AVG VOLUME", value: "2,776,109 Lts" },
                {
                  label: "AVG HISTORICAL EBITDA",
                  value: "USD 193,082",
                  subText: "Series average",
                },
                {
                  label: "STRUCTURE",
                  value: "Full Organigram",
                  subText: "Management, Enology, Commercial, HR",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title: "Bodega SinFin: Capacidade Industrial e Enoturismo em Maipú",
        description: {
          text: "Excelente oportunidade de investimento em uma vinícola familiar com sólida trajetória e forte posicionamento internacional, localizada em Maipú, Mendoza. Operando desde 1975 na produção de uvas e desde 2005 na elaboração de vinhos de alta gama, a Bodega SinFin combina grande escala industrial com uma filosofia de qualidade premium.\n\nA propriedade possui uma capacidade total de vasilha de 6.000.000 de litros e administra uma superfície de 440 hectares de vinhedos (próprios e de terceiros) distribuídos nos terroirs mais prestigiados da província. Destaca-se por ser uma das poucas vinícolas especializadas em 'Bulk Wine' (vinho a granel) de alta gama, exportando para mercados exigentes como EUA, Reino Unido e China, tendo sido premiada internacionalmente em Amsterdã.\n\nAlém de seu perfil produtivo, possui uma unidade de enoturismo e eventos totalmente desenvolvida, com salões, jardins e uma adega subterrânea histórica, gerando um fluxo de receitas diversificado.",
          callout: {
            label: "PERFIL DE NEGÓCIO",
            value: "Exportação Granel Premium / Enoturismo / Eventos",
          },
        },
        sections: [
          { id: "resumen", label: "Resumo" },
          { id: "ficha-tecnica", label: "Capacidade e Infraestrutura" },
          { id: "infraestructura", label: "Enoturismo e Eventos" },
          { id: "productividad", label: "Mercados e Produtos" },
          { id: "ubicacion", label: "Localização" },
          { id: "documentacion", label: "Desempenho Operacional" },
          { id: "contacto-finca", label: "Contato" },
        ],
        summary: [
          {
            label: "Capacidade Total",
            value: "6 M",
            extra: "Litros",
          },
          {
            label: "Elaboração Máx",
            value: "4.5 M",
            extra: "Litros/Ano",
          },
          {
            label: "Área de Vinhedos",
            value: "440",
            extra: "Hectares (Gerenciados)",
          },
          {
            label: "Status",
            value: "Em plena produção",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Capacidade e Infraestrutura",
          groups: [
            {
              title: "Capacidade de Vasilha",
              fields: [
                {
                  label: "CAPACIDADE TOTAL",
                  value: "6.000.000 Litros",
                  class: "border-secondary",
                },
                {
                  label: "CIMENTO C/ EPÓXI",
                  value: "5.740.000 Litros",
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
            {
              title: "Vinhedos e Matéria-Prima",
              fields: [
                {
                  label: "ÁREA TOTAL",
                  value: "440 has",
                },
                {
                  label: "VINHEDOS PRÓPRIOS",
                  value: "90 has",
                  class: "border-blueo",
                },
                {
                  label: "VINHEDOS TERCEIROS",
                  value: "350 has",
                },
                {
                  label: "ZONAS DE CULTIVO",
                  value: "Maipú, Luján, Vale de Uco, Leste",
                  subText: "Diversidade de origens",
                },
                {
                  label: "VARIEDADES TINTAS",
                  value:
                    "Malbec, Cab. Franc, Cab. Sauv, Merlot, Bonarda, Syrah",
                  class: "text-sm",
                },
                {
                  label: "VARIEDADES BRANCAS",
                  value: "Sauvignon Blanc",
                  class: "text-sm",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Enoturismo e Eventos",
          fields: [
            {
              label: "TURISMO",
              value: "Visitas e Degustações",
              subText: "Com harmonizações (chocolates/tábuas)",
            },
            {
              label: "ESPAÇOS EVENTOS",
              value: "3 Salões diferenciados",
              subText: "Corporativos e Sociais",
            },
            {
              label: "ADEGA SUBTERRÂNEA",
              value: "Piscinas renovadas",
              subText: "Para eventos íntimos",
            },
            {
              label: "CASA DE FAMÍLIA",
              value: "Com piscina e vinhedo",
              subText: "Estilo campestre",
            },
            {
              label: "GASTRONOMIA",
              value: "Serviço próprio",
              subText: "Restaurante projetado",
            },
          ],
        },
        energy: {
          label: "Mercados e Produtos",
          groups: [
            {
              title: "Mercado Externo (Granel)",
              fields: [
                {
                  label: "POSICIONAMENTO",
                  value: "Granel Alta Gama",
                  class: "border-secondary",
                },
                {
                  label: "DESTINOS",
                  value: "EUA, Reino Unido, China, Canadá",
                  subText: "Japão, Austrália, Europa",
                },
                {
                  label: "PRÊMIOS",
                  value: "Ouro - WBWE Amsterdã",
                  subText: "Top 8 Vinícolas (2018/2019)",
                },
              ],
            },
            {
              title: "Produto Engarrafado",
              borderColor: "border-indigo-900",
              featured: [
                {
                  label: "ELABORAÇÃO",
                  value: "4.500.000 Lts",
                  subText: "Máximo anual",
                },
              ],
              fields: [
                {
                  label: "LINHAS",
                  value: ["Guarda", "Gran Guarda", "El Interminable"],
                  class: "border-secondary",
                },
                {
                  label: "ALTA GAMA",
                  value: "SinFin Presente / Fugaz",
                  subText: "Blends e Rosés exclusivos",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Localização",
          map: {
            lat: -33.0054,
            lng: -68.7497,
          },
          featured: [
            { label: "REGIÃO", value: "Maipú, Mendoza" },
            { label: "ACESSIBILIDADE", value: "20 min da Cidade" },
          ],
          groups: [
            {
              title: "Arredores",
              fields: [
                { label: "Perfil da Zona", value: "Vitivinícola histórica" },
                { label: "Proximidade", value: "Rotas do Vinho" },
              ],
            },
          ],
        },
        legal: {
          label: "Desempenho Operacional",
          groups: [
            {
              title: "Resumo Financeiro (Histórico)",
              fields: [
                { label: "PERÍODO ANALISADO", value: "2016 - 2025" },
                { label: "VOLUME MÉDIO", value: "2.776.109 Lts" },
                {
                  label: "EBITDA MÉDIO HISTÓRICO",
                  value: "USD 193.082",
                  subText: "Média da série",
                },
                {
                  label: "ESTRUTURA",
                  value: "Organograma completo",
                  subText: "Gerência, Enologia, Comercial, RH",
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: "bodega-casir-dos-santos-maipu-mendoza",
    type: "bodega",
    price: {
      value: null,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: null,
    location: {
      lat: -33.0525,
      lng: -68.8045,
      address: "Videla Aranda, Maipú",
      province: "Mendoza",
      country: "AR",
    },
    images: [
      "/casir1.jpg",
      "/casir2.jpg",
      "/casir3.jpg",
      "/casir4.jpg",
      "/casir5.jpg",
    ],
    content: {
      "es-AR": {
        title: "Bodega Casir dos Santos: Historia (1862) y Vinos de Alta Gama",
        description: {
          text: "Oportunidad de inversión en una de las bodegas en funcionamiento más antiguas de Mendoza. Fundada originalmente en 1862 (antigua Viña Maipú), Casir dos Santos combina más de un siglo de patrimonio vitivinícola con una visión moderna de enología de precisión.\n\nLa propiedad destaca por su enfoque multi-terroir, gestionando viñedos en las tres zonas más prestigiosas de la provincia: Lunlunta (Maipú), Agrelo (Luján de Cuyo) y Valle de Uco. Esta diversidad permite obtener la mejor expresión varietal para sus líneas de vinos premium (Estate, Reserve, Gran Corte y la innovadora línea Avatar), todas reconocidas internacionalmente con puntajes superiores a 90 puntos por críticos como James Suckling, Tim Atkin y Robert Parker.\n\nBajo la dirección enológica de Lucas Moran, la bodega ha modernizado sus procesos sin perder su esencia histórica, utilizando tecnología de vanguardia y barricas de roble francés para la crianza. Es una propiedad ideal para inversores que buscan una marca consolidada, con historia, capacidad productiva y un portfolio de productos ya posicionado en el mercado de alta gama.",
          callout: {
            label: "VALOR DIFERENCIAL",
            value: "Bodega Histórica (1862) / 3 Terroirs Premium / Muchos Reconocimientos",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumen",
          },
          {
            id: "ficha-tecnica",
            label: "Nuestros Viñedos",
          },
          {
            id: "infraestructura",
            label: "Portfolio y Puntajes",
          },
          {
            id: "productividad",
            label: "Infraestructura",
          },
          {
            id: "ubicacion",
            label: "Ubicación",
          },
          {
            id: "contacto-finca",
            label: "Contacto",
          },
        ],
        summary: [
          {
            label: "Fundación",
            value: "1862",
            extra: "Una de las más antiguas",
          },
          {
            label: "Enólogo",
            value: "Lucas Moran",
            extra: "22 Vendimias",
          },
          {
            label: "Viñedos en",
            value: "3",
            extra: "Maipú, Agrelo, Uco",
          },
          {
            label: "Estado",
            value: "En Producción",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Nuestros Viñedos (Terroirs)",
          groups: [
            {
              title: "Finca Lunlunta (Maipú)",
              fields: [
                {
                  label: "UBICACIÓN",
                  value: "Zona baja de los Andes",
                },
                {
                  label: "ALTITUD",
                  value: "1.050 msnm",
                },
                {
                  label: "DISTANCIA",
                  value: "20 km de Mendoza",
                },
              ],
            },
            {
              title: "Finca Agrelo (Luján de Cuyo)",
              fields: [
                {
                  label: "UBICACIÓN",
                  value: "El Valle",
                },
                {
                  label: "ALTITUD",
                  value: "950 msnm",
                  class: "border-secondary",
                },
                {
                  label: "DISTANCIA",
                  value: "40 km al Sur",
                },
              ],
            },
            {
              title: "Valle de Uco",
              fields: [
                {
                  label: "UBICACIÓN",
                  value: "Ladera Sup. Andes",
                },
                {
                  label: "ALTITUD",
                  value: "1.250 msnm",
                  class: "border-blueo",
                },
                {
                  label: "DISTANCIA",
                  value: "100 km al Suroeste",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Portfolio y Puntajes",
          groups: [
            {
              title: "Líneas de Vinos",

              fields: [
                {
                  label: "ESTATE",
                  value: ["Malbec", "Cabernet Sauvignon", "Petit Verdot"],
                },
                {
                  label: "RESERVE",
                  value: [
                    "Malbec",
                    "Cabernet Sauvignon",
                    "Petit Verdot",
                    "Chardonnay",
                  ],
                },
                {
                  label: "CORTE",
                  value: ["Red Blend"],
                },
                {
                  label: "Nuevos Lanzamientos",
                  value: ["Inspiración Blend de Tintas", "Malbec Elijo Creer", "Reserve Chardonnay"],
                },
              ],
            },
            {
              title: "Linea Avatar",
              featured: [
                {
                  label: "LÍNEA AVATAR",
                  value: "Concepto Innovador",
                  subText: "Malbec, Cab, Syrah, Bonarda",
                },
              ],
              fields: [
                {
                  label: "Variedades Disponibles",
                  value: [
                    "Torrentés",
                    "Chardonnay",
                    "Malbec",
                    "Cabernet Sauvignon",
                    "Bonarda",
                  ],
                },
                {
                  label: "Ultra Range",
                  value: ["Malbec", "Cabernet Sauvignon", "Syrah"],
                },
                {
                  label: "Extra Brut",
                  value: ["Pínk Pínot Noír"],
                },
                {
                  label: "Revolución Range",
                  value: ["Malbec", "Cabernet Sauvignon", "Petit Verdot"],
                },
              ],
            },
            {
              title: "Reconocimientos",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Estate Malbec 2022",
                  value: "90 pts",
                  subText: "Descorchados",
                },
                {
                  label: "Avatar Malbec 2022 - 2023",
                  value: "90 pts (2022) - 90 pts (2023)",
                  subText: "James Suckling - Descorchados",
                },
                {
                  label: "Reserve Malbec 2017",
                  value: "92 pts",
                  subText: "Tim Atkin Mw",
                },
                {
                  label: "Reserve Cabernet 2017",
                  value: "90 pts",
                  subText: "Tim Atkin Mw",
                },
                {
                  label: "Gran Corte 2015",
                  value: "93 pts",
                  subText: "James Suckling",
                },
                {
                  label: "Inspiración 2021 Blend de Tintas",
                  value: "91 pts",
                  subText: "James Suckling",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Infraestructura",
          fields: [
            {
              label: "EDIFICIO",
              value: "Histórico (1862)",
              subText: "Conservado y renovado",
            },
            {
              label: "TECNOLOGÍA",
              value: "Enología de precisión",
            },
            {
              label: "CRIANZA",
              value: "Barricas Roble Francés",
              subText: "Sala de barricas",
            },
            {
              label: "CAPITAL HUMANO",
              value: "Equipo experto",
              subText: "Gerencia y operarios",
            },
          ],
        },
        locationDetails: {
          label: "Ubicación",
          map: {
            lat: -33.0525,
            lng: -68.8045,
          },
          featured: [
            {
              label: "BODEGA",
              value: "Maipú, Mendoza",
            },
            {
              label: "ACCESIBILIDAD",
              value: "Cercana a Ciudad",
            },
          ],
          groups: [
            {
              title: "Distancias a la Bodega",
              fields: [
                {
                  label: "Mendoza Capital",
                  value: "20-25 min",
                },
                {
                  label: "Aeropuerto",
                  value: "35 min",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentación",
          groups: [
            {
              fields: [
                {
                  label: "ESTADO",
                  value: "A consultar",
                },
                {
                  label: "HABILITACIÓN",
                  value: "Vigente (INV)",
                },
              ],
            },
          ],
        },
      },
    },
  },
];
