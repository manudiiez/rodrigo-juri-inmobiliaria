export const properties = [
  // {
  //   slug: "finca-los-alamos-vinedos-lujan",
  //   type: "finca",
  //   price: {
  //     value: 777000, //
  //     currency: "USD",
  //     pricePerHectare: 18500,
  //   },
  //   hectares: 42, //

  //   // Datos para el Mapa Interactivo
  //   location: {
  //     lat: -33.0162,
  //     lng: -68.8751,
  //     address: "Luján de Cuyo, Mendoza",
  //     province: "Mendoza",
  //     country: "AR",
  //     state: "Tupungato",
  //   },

  //   images: [
  //     { url: "/finca1.jpg" },
  //     { url: "/finca2.jpg" },
  //     { url: "/finca1.jpg" },
  //     { url: "/finca2.jpg" },
  //     { url: "/finca1.jpg" },
  //     { url: "/finca2.jpg" },
  //   ],

  //   content: {
  //     "es-AR": {
  //       title: "Finca Los Álamos con Viñedos",

  //       description: {
  //         text: "Excepcional finca con viñedos en venta en Valle de Uco, cerca de Tupungato, provincia de Mendoza. Esta propiedad de 42 hectáreas representa una oportunidad única para inversores o amantes del vino que buscan combinar producción vitivinícola de calidad con un estilo de vida campestre de lujo.\n\n  La finca cuenta con viñedos de alta calidad plantados con las mejores variedades de la región, principalmente Malbec y Cabernet Sauvignon. El sistema de riego por goteo tecnificado instalado en 2018 garantiza la máxima eficiencia hídrica y calidad de producción.\n\n  Con una productividad de 12.000 kg/ha y precios de uva en 0.45 USD/kg, esta propiedad representa una excelente oportunidad de inversión con retornos comprobados.",
  //         callout: {
  //           label: "APTITUD PRODUCTIVA",
  //           value: "Viñedos premium / Olivos",
  //         },
  //       },

  //       sections: [
  //         { id: "resumen", label: "Resumen" },
  //         { id: "ficha-tecnica", label: "Ficha Técnica" },
  //         { id: "infraestructura", label: "Infraestructura" },
  //         { id: "productividad", label: "Productividad" },
  //         { id: "ubicacion", label: "Ubicación" },
  //         { id: "documentacion", label: "Documentación" },
  //         { id: "contacto-finca", label: "Contacto" },
  //       ],

  //       // --- 1. FICHA TÉCNICA (Suelo y Clima) ---
  //       summary: [
  //         {
  //           label: "Superficie Total",
  //           value: "42 has",
  //         },
  //         {
  //           label: "PRECIO POR HECTÁREA",
  //           value: "18,500",
  //           extra: "USD/has",
  //         },
  //         {
  //           label: "ALTITUD",
  //           value: "950",
  //           extra: "msnm",
  //         },
  //         {
  //           label: "ESTADO ACTUAL",
  //           value: "En producción",
  //           class: "text-lg mt-4",
  //         },
  //       ],
  //       // --- 1. FICHA TÉCNICA (Suelo y Clima) ---
  //       techSpecs: {
  //         label: "Ficha Técnica",
  //         groups: [
  //           {
  //             title: "Suelo y Clima",
  //             fields: [
  //               {
  //                 label: "TIPO DE SUELO",
  //                 value: "Franco-arcilloso",
  //               },
  //               {
  //                 label: "TEXTURA",
  //                 value: "Equilibrada",
  //               },
  //               {
  //                 label: "PH DEL SUELO",
  //                 value: "7.2 (neutro)",
  //               },
  //               {
  //                 label: "MATERIA ORGÁNICA",
  //                 value: "2.8%",
  //               },
  //               {
  //                 label: "PENDIENTE",
  //                 value: "2-5% (suave)",
  //               },
  //               {
  //                 label: "DRENAJE",
  //                 value: "Bueno",
  //               },
  //               {
  //                 label: "GRADOS DÍA",
  //                 value: "1450 (ideal viñedos)",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "HELADAS",
  //                 value: "Tardías (octubre)",
  //               },
  //             ],
  //           },
  //           {
  //             title: "Agua y Riego",
  //             fields: [
  //               {
  //                 label: "DERECHO DE AGUA",
  //                 value: "1,2 l/s/ha",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "CAUDAL TOTAL",
  //                 value: "50 l/s",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "FUENTE",
  //                 value: "Río Mendoza",
  //               },
  //               {
  //                 label: "TURNO DE RIEGO",
  //                 value: "Cada 15 días",
  //               },
  //               {
  //                 label: "CONDUCTIVIDAD ELÉCTRICA",
  //                 value: "0.8 dS/m",
  //                 subText: "(excelente)",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "PH DEL AGUA",
  //                 value: "7.5",
  //               },
  //               {
  //                 label: "SISTEMA DE RIEGO",
  //                 value: "Goteo tecnificado",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "AÑO DE INSTALACIÓN",
  //                 value: "2018",
  //               },
  //             ],
  //           },
  //         ],
  //       },

  //       // --- 3. INSTALACIONES Y MEJORAS ---
  //       improvements: {
  //         label: "Instalaciones y Mejoras",
  //         fields: [
  //           {
  //             label: "CASA PRINCIPAL",
  //             value: "120 m² (3 dormitorios)",
  //             subText: "Estado: Muy bueno",
  //           },
  //           { label: "GALPÓN", value: "200 m²" },
  //           {
  //             label: "SALA DE RIEGO",
  //             value: "Automatizada",
  //           },
  //           {
  //             label: "CERCOS",
  //             value: "Perimetral completo",
  //           },
  //           {
  //             label: "CAMINOS INTERNOS",
  //             value: "Consolidados",
  //           },
  //           {
  //             label: "POZO DE AGUA",
  //             value: "No (riego por canal)",
  //           },
  //           {
  //             label: "TANQUE AUSTRALIANO",
  //             value: "50.000 litros",
  //           },
  //         ],
  //       },

  //       // --- 4. ENERGÍA Y PRODUCTIVIDAD ---
  //       energy: {
  //         label: "Energía y Productividad",
  //         groups: [
  //           {
  //             title: "Suministro Eléctrico",
  //             fields: [
  //               {
  //                 label: "TIPO DE ENERGÍA",
  //                 value: "Trifásica",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "POTENCIA",
  //                 value: "25 kW",
  //                 class: "border-secondary",
  //               },
  //               { label: "TRANSFORMADOR", value: "Propio" },
  //               { label: "MEDIDOR", value: "Individual" },
  //             ],
  //           },
  //           {
  //             title: "Producción Vitivinícola",
  //             borderColor: "border-indigo-900", // Color oscuro (Vino/Noche)
  //             featured: [
  //               {
  //                 label: "PRODUCTIVIDAD",
  //                 value: "12.000 kg/ha",
  //                 subText: "Rendimiento por hectárea",
  //               },
  //               {
  //                 label: "PRECIO UVA 2024",
  //                 value: "0.45 USD/kg",
  //                 subText: "Precio de mercado",
  //               },
  //             ],
  //             fields: [
  //               {
  //                 label: "VARIEDADES",
  //                 value: ["Malbec", "Cabernet"],
  //                 class: "border-secondary",
  //               }, //
  //               { label: "EDAD DE VIÑEDOS", value: "8-12 años" },
  //             ],
  //           },
  //         ],
  //       },

  //       // --- 5. UBICACIÓN Y ACCESOS (Datos de lista) ---
  //       locationDetails: {
  //         label: "Ubicación y Accesos",
  //         map: {
  //           lat: -33.0162,
  //           lng: -68.8751,
  //         },
  //         featured: [
  //           { label: "ACCESO PRINCIPAL", value: "RP 15 + 2 km ripio" },
  //           { label: "DISTANCIA A MENDOZA", value: "35 km" },
  //         ],
  //         groups: [
  //           {
  //             title: "Servicios Cercanos",
  //             fields: [
  //               { label: "Centro Urbano", value: "5 km" },
  //               { label: "Bodegas", value: "3-8 km" },
  //               { label: "Cooperativa", value: "6 km" },
  //               { label: "Escuela", value: "4 km" },
  //               { label: "Hospital", value: "12 km" },
  //               { label: "Aeropuerto", value: "45 km" },
  //             ],
  //           },
  //         ],
  //       },

  //       // --- 6. DOCUMENTACIÓN LEGAL ---
  //       legal: {
  //         label: "Documentación Legal",
  //         groups: [
  //           {
  //             fields: [
  //               { label: "ESCRITURA", value: "Al día" },
  //               { label: "MENSURA", value: "2020 (actualizada)" },
  //               { label: "PLANOS MUNICIPALES", value: "Aprobados" },
  //               { label: "IMPUESTOS", value: "Al día" },
  //               { label: "APTO CRÉDITO", value: "Sí" },
  //               { label: "INHIBICIONES", value: "Libre" },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //     "en-US": {
  //       title: "Los Álamos Estate with Vineyards",

  //       description: {
  //         text: "Exceptional vineyard estate for sale in Valle de Uco, near Tupungato, Mendoza province. This 42-hectare property represents a unique opportunity for investors or wine lovers looking to combine quality wine production with a luxury country lifestyle.\n\nThe estate features high-quality vineyards planted with the region's best varieties, mainly Malbec and Cabernet Sauvignon. The technified drip irrigation system installed in 2018 ensures maximum water efficiency and production quality.\n\nWith a productivity of 12,000 kg/ha and grape prices at 0.45 USD/kg, this property represents an excellent investment opportunity with proven returns.",
  //         callout: {
  //           label: "PRODUCTIVE APTITUDE",
  //           value: "Premium Vineyards / Olive groves",
  //         },
  //       },

  //       sections: [
  //         { id: "resumen", label: "Summary" },
  //         { id: "ficha-tecnica", label: "Technical Sheet" },
  //         { id: "infraestructura", label: "Infrastructure" },
  //         { id: "productividad", label: "Productivity" },
  //         { id: "ubicacion", label: "Location" },
  //         { id: "documentacion", label: "Documentation" },
  //         { id: "contacto-finca", label: "Contact" },
  //       ],

  //       summary: [
  //         {
  //           label: "Total Area",
  //           value: "42 has",
  //         },
  //         {
  //           label: "PRICE PER HECTARE",
  //           value: "18,500",
  //           extra: "USD/has",
  //         },
  //         {
  //           label: "ALTITUDE",
  //           value: "950",
  //           extra: "masl",
  //         },
  //         {
  //           label: "CURRENT STATUS",
  //           value: "In production",
  //           class: "text-lg mt-4",
  //         },
  //       ],

  //       techSpecs: {
  //         label: "Technical Sheet",
  //         groups: [
  //           {
  //             title: "Soil and Climate",
  //             fields: [
  //               {
  //                 label: "SOIL TYPE",
  //                 value: "Sandy-clay",
  //               },
  //               {
  //                 label: "TEXTURE",
  //                 value: "Balanced",
  //               },
  //               {
  //                 label: "SOIL PH",
  //                 value: "7.2 (neutral)",
  //               },
  //               {
  //                 label: "ORGANIC MATTER",
  //                 value: "2.8%",
  //               },
  //               {
  //                 label: "SLOPE",
  //                 value: "2-5% (gentle)",
  //               },
  //               {
  //                 label: "DRAINAGE",
  //                 value: "Good",
  //               },
  //               {
  //                 label: "DEGREE DAYS",
  //                 value: "1450 (ideal vineyards)",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "FROST",
  //                 value: "Late (October)",
  //               },
  //             ],
  //           },
  //           {
  //             title: "Water and Irrigation",
  //             fields: [
  //               {
  //                 label: "WATER RIGHTS",
  //                 value: "1.2 l/s/ha",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "TOTAL FLOW",
  //                 value: "50 l/s",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "SOURCE",
  //                 value: "Mendoza River",
  //               },
  //               {
  //                 label: "IRRIGATION TURN",
  //                 value: "Every 15 days",
  //               },
  //               {
  //                 label: "ELECTRICAL CONDUCTIVITY",
  //                 value: "0.8 dS/m",
  //                 subText: "(excellent)",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "WATER PH",
  //                 value: "7.5",
  //               },
  //               {
  //                 label: "IRRIGATION SYSTEM",
  //                 value: "Technified drip",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "INSTALLATION YEAR",
  //                 value: "2018",
  //               },
  //             ],
  //           },
  //         ],
  //       },

  //       improvements: {
  //         label: "Facilities and Improvements",
  //         fields: [
  //           {
  //             label: "MAIN HOUSE",
  //             value: "120 m² (3 bedrooms)",
  //             subText: "Condition: Very good",
  //           },
  //           { label: "WAREHOUSE", value: "200 m²" },
  //           {
  //             label: "IRRIGATION ROOM",
  //             value: "Automated",
  //           },
  //           {
  //             label: "FENCING",
  //             value: "Complete perimeter",
  //           },
  //           {
  //             label: "INTERNAL ROADS",
  //             value: "Consolidated",
  //           },
  //           {
  //             label: "WATER WELL",
  //             value: "No (canal irrigation)",
  //           },
  //           {
  //             label: "AUSTRALIAN TANK",
  //             value: "50,000 liters",
  //           },
  //         ],
  //       },

  //       energy: {
  //         label: "Energy and Productivity",
  //         groups: [
  //           {
  //             title: "Electrical Supply",
  //             fields: [
  //               {
  //                 label: "ENERGY TYPE",
  //                 value: "Three-phase",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "POWER",
  //                 value: "25 kW",
  //                 class: "border-secondary",
  //               },
  //               { label: "TRANSFORMER", value: "Private" },
  //               { label: "METER", value: "Individual" },
  //             ],
  //           },
  //           {
  //             title: "Wine Production",
  //             borderColor: "border-indigo-900",
  //             featured: [
  //               {
  //                 label: "PRODUCTIVITY",
  //                 value: "12,000 kg/ha",
  //                 subText: "Yield per hectare",
  //               },
  //               {
  //                 label: "2024 GRAPE PRICE",
  //                 value: "0.45 USD/kg",
  //                 subText: "Market price",
  //               },
  //             ],
  //             fields: [
  //               {
  //                 label: "VARIETIES",
  //                 value: ["Malbec", "Cabernet"],
  //                 class: "border-secondary",
  //               },
  //               { label: "VINEYARD AGE", value: "8-12 years" },
  //             ],
  //           },
  //         ],
  //       },

  //       locationDetails: {
  //         label: "Location and Access",
  //         map: {
  //           lat: -33.0162,
  //           lng: -68.8751,
  //         },
  //         featured: [
  //           { label: "MAIN ACCESS", value: "RP 15 + 2 km gravel road" },
  //           { label: "DISTANCE TO MENDOZA", value: "35 km" },
  //         ],
  //         groups: [
  //           {
  //             title: "Nearby Services",
  //             fields: [
  //               { label: "Urban Center", value: "5 km" },
  //               { label: "Wineries", value: "3-8 km" },
  //               { label: "Cooperative", value: "6 km" },
  //               { label: "School", value: "4 km" },
  //               { label: "Hospital", value: "12 km" },
  //               { label: "Airport", value: "45 km" },
  //             ],
  //           },
  //         ],
  //       },

  //       legal: {
  //         label: "Legal Documentation",
  //         groups: [
  //           {
  //             fields: [
  //               { label: "DEED", value: "Up to date" },
  //               { label: "SURVEY", value: "2020 (updated)" },
  //               { label: "MUNICIPAL PLANS", value: "Approved" },
  //               { label: "TAXES", value: "Up to date" },
  //               { label: "CREDIT ELIGIBLE", value: "Yes" },
  //               { label: "LIENS", value: "Free" },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //     "pt-BR": {
  //       title: "Fazenda Los Álamos com Vinhedos",

  //       description: {
  //         text: "Excepcional fazenda com vinhedos à venda no Valle de Uco, perto de Tupungato, província de Mendoza. Esta propriedade de 42 hectares representa uma oportunidade única para investidores ou amantes do vinho que buscam combinar produção vitivinícola de qualidade com um estilo de vida campestre de luxo.\n\nA fazenda possui vinhedos de alta qualidade plantados com as melhores variedades da região, principalmente Malbec e Cabernet Sauvignon. O sistema de irrigação por gotejamento tecnificado instalado em 2018 garante máxima eficiência hídrica e qualidade de produção.\n\nCom uma produtividade de 12.000 kg/ha e preços de uva em 0,45 USD/kg, esta propriedade representa uma excelente oportunidade de investimento com retornos comprovados.",
  //         callout: {
  //           label: "APTIDÃO PRODUTIVA",
  //           value: "Vinhedos premium / Oliveiras",
  //         },
  //       },

  //       sections: [
  //         { id: "resumen", label: "Resumo" },
  //         { id: "ficha-tecnica", label: "Ficha Técnica" },
  //         { id: "infraestructura", label: "Infraestrutura" },
  //         { id: "productividad", label: "Produtividade" },
  //         { id: "ubicacion", label: "Localização" },
  //         { id: "documentacion", label: "Documentação" },
  //         { id: "contacto-finca", label: "Contato" },
  //       ],

  //       summary: [
  //         {
  //           label: "Área Total",
  //           value: "42 has",
  //         },
  //         {
  //           label: "PREÇO POR HECTARE",
  //           value: "18.500",
  //           extra: "USD/has",
  //         },
  //         {
  //           label: "ALTITUDE",
  //           value: "950",
  //           extra: "msnm",
  //         },
  //         {
  //           label: "STATUS ATUAL",
  //           value: "Em produção",
  //           class: "text-lg mt-4",
  //         },
  //       ],

  //       techSpecs: {
  //         label: "Ficha Técnica",
  //         groups: [
  //           {
  //             title: "Solo e Clima",
  //             fields: [
  //               {
  //                 label: "TIPO DE SOLO",
  //                 value: "Franco-argiloso",
  //               },
  //               {
  //                 label: "TEXTURA",
  //                 value: "Equilibrada",
  //               },
  //               {
  //                 label: "PH DO SOLO",
  //                 value: "7.2 (neutro)",
  //               },
  //               {
  //                 label: "MATÉRIA ORGÂNICA",
  //                 value: "2.8%",
  //               },
  //               {
  //                 label: "DECLIVE",
  //                 value: "2-5% (suave)",
  //               },
  //               {
  //                 label: "DRENAGEM",
  //                 value: "Boa",
  //               },
  //               {
  //                 label: "GRAUS DIA",
  //                 value: "1450 (ideal vinhedos)",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "GEADAS",
  //                 value: "Tardias (outubro)",
  //               },
  //             ],
  //           },
  //           {
  //             title: "Água e Irrigação",
  //             fields: [
  //               {
  //                 label: "DIREITO DE ÁGUA",
  //                 value: "1,2 l/s/ha",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "VAZÃO TOTAL",
  //                 value: "50 l/s",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "FONTE",
  //                 value: "Rio Mendoza",
  //               },
  //               {
  //                 label: "TURNO DE IRRIGAÇÃO",
  //                 value: "A cada 15 dias",
  //               },
  //               {
  //                 label: "CONDUTIVIDADE ELÉTRICA",
  //                 value: "0.8 dS/m",
  //                 subText: "(excelente)",
  //                 class: "border-blueo",
  //               },
  //               {
  //                 label: "PH DA ÁGUA",
  //                 value: "7.5",
  //               },
  //               {
  //                 label: "SISTEMA DE IRRIGAÇÃO",
  //                 value: "Gotejamento tecnificado",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "ANO DE INSTALAÇÃO",
  //                 value: "2018",
  //               },
  //             ],
  //           },
  //         ],
  //       },

  //       improvements: {
  //         label: "Instalações e Melhorias",
  //         fields: [
  //           {
  //             label: "CASA PRINCIPAL",
  //             value: "120 m² (3 quartos)",
  //             subText: "Estado: Muito bom",
  //           },
  //           { label: "GALPÃO", value: "200 m²" },
  //           {
  //             label: "SALA DE IRRIGAÇÃO",
  //             value: "Automatizada",
  //           },
  //           {
  //             label: "CERCAS",
  //             value: "Perímetro completo",
  //           },
  //           {
  //             label: "CAMINHOS INTERNOS",
  //             value: "Consolidados",
  //           },
  //           {
  //             label: "POÇO DE ÁGUA",
  //             value: "Não (irrigação por canal)",
  //           },
  //           {
  //             label: "TANQUE AUSTRALIANO",
  //             value: "50.000 litros",
  //           },
  //         ],
  //       },

  //       energy: {
  //         label: "Energia e Produtividade",
  //         groups: [
  //           {
  //             title: "Fornecimento Elétrico",
  //             fields: [
  //               {
  //                 label: "TIPO DE ENERGIA",
  //                 value: "Trifásica",
  //                 class: "border-secondary",
  //               },
  //               {
  //                 label: "POTÊNCIA",
  //                 value: "25 kW",
  //                 class: "border-secondary",
  //               },
  //               { label: "TRANSFORMADOR", value: "Próprio" },
  //               { label: "MEDIDOR", value: "Individual" },
  //             ],
  //           },
  //           {
  //             title: "Produção Vitivinícola",
  //             borderColor: "border-indigo-900",
  //             featured: [
  //               {
  //                 label: "PRODUTIVIDADE",
  //                 value: "12.000 kg/ha",
  //                 subText: "Rendimento por hectare",
  //               },
  //               {
  //                 label: "PREÇO UVA 2024",
  //                 value: "0.45 USD/kg",
  //                 subText: "Preço de mercado",
  //               },
  //             ],
  //             fields: [
  //               {
  //                 label: "VARIEDADES",
  //                 value: ["Malbec", "Cabernet"],
  //                 class: "border-secondary",
  //               },
  //               { label: "IDADE DOS VINHEDOS", value: "8-12 anos" },
  //             ],
  //           },
  //         ],
  //       },

  //       locationDetails: {
  //         label: "Localização e Acessos",
  //         map: {
  //           lat: -33.0162,
  //           lng: -68.8751,
  //         },
  //         featured: [
  //           { label: "ACESSO PRINCIPAL", value: "RP 15 + 2 km cascalho" },
  //           { label: "DISTÂNCIA A MENDOZA", value: "35 km" },
  //         ],
  //         groups: [
  //           {
  //             title: "Serviços Próximos",
  //             fields: [
  //               { label: "Centro Urbano", value: "5 km" },
  //               { label: "Vinícolas", value: "3-8 km" },
  //               { label: "Cooperativa", value: "6 km" },
  //               { label: "Escola", value: "4 km" },
  //               { label: "Hospital", value: "12 km" },
  //               { label: "Aeroporto", value: "45 km" },
  //             ],
  //           },
  //         ],
  //       },

  //       legal: {
  //         label: "Documentação Legal",
  //         groups: [
  //           {
  //             fields: [
  //               { label: "ESCRITURA", value: "Em dia" },
  //               { label: "MEDIÇÃO", value: "2020 (atualizada)" },
  //               { label: "PLANOS MUNICIPAIS", value: "Aprovados" },
  //               { label: "IMPOSTOS", value: "Em dia" },
  //               { label: "APTO CRÉDITO", value: "Sim" },
  //               { label: "ÔNUS", value: "Livre" },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
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
      state: "Maipú",
    },
    images: [
      {
        url: "/images/sinfin/bodega-sinfin-1.png",
        class: "object-cover object-bottom",
      },
      {
        url: "/images/sinfin/bodega-sinfin-10.png",
        class: "object-cover object-bottom",
      },
      {
        url: "/images/sinfin/bodega-sinfin-2.png",
        class: "object-cover object-bottom",
      },
      {
        url: "/images/sinfin/bodega-sinfin-3.png",
        class: "object-contain",
      },
      {
        url: "/images/sinfin/bodega-sinfin-4.png",
        class: "object-contain",
      },
      {
        url: "/images/sinfin/bodega-sinfin-5.png",
        class: "object-contain",
      },
      {
        url: "/images/sinfin/bodega-sinfin-6.png",
        class: "object-contain",
      },
      {
        url: "/images/sinfin/bodega-sinfin-7.png",
        class: "object-contain",
      },
      {
        url: "/images/sinfin/bodega-sinfin-8.png",
        class: "object-contain",
      },
      {
        url: "/images/sinfin/bodega-sinfin-9.png",
        class: "object-contain",
      },
    ],
    content: {
      "es-AR": {
        title: "Bodega Sin Fin: Capacidad Industrial y Enoturismo en Maipú",
        description: {
          text: "Excelente oportunidad de inversión en una bodega familiar con sólida trayectoria y fuerte posicionamiento internacional, ubicada en Maipú, Mendoza. Operativa desde 1975 en la producción de uvas y desde 2005 en la elaboración de vinos de alta gama, Bodega Sin Fin combina una gran escala industrial con una filosofía de calidad premium.\n\nLa propiedad cuenta con una capacidad total de vasija de 6.000.000 de litros y gestiona una superficie de 440 hectáreas de viñedos (propios y de terceros) distribuidos en los terruños más prestigiosos de la provincia. Se destaca por ser una de las pocas bodegas especializadas en 'Bulk Wine' (vino a granel) de alta gama, exportando a mercados exigentes como EE.UU., Reino Unido y China, habiendo sido premiada internacionalmente en Ámsterdam.\n\nAdemás de su perfil productivo, posee una unidad de enoturismo y eventos totalmente desarrollada, con salones, jardines y una cava subterránea histórica, generando un flujo de ingresos diversificado.",
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
                  value:
                    "Maipú, Luján de Cuyo, Valle de Uco, Rivadavia, San Martín, Santa Rosa y Junín",
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
          groups: [
            {
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
          label: "Documentos",
          groups: [
            {
              title: "Resumen Financiero (Histórico)",
              fields: [
                {
                  label: "ESTRUCTURA",
                  value: "Organigrama completo",
                  subText: "Gerencia, Enología, Comercial, RRHH",
                },
                {
                  label: "Presentación",
                  value: "Ver documento adjunto",
                  link: "/docs/bodega-sinfin.pdf",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title: "Sin Fin Winery: Industrial Capacity and Wine Tourism in Maipú",
        description: {
          text: "Excellent investment opportunity in a family winery with a solid track record and strong international positioning, located in Maipú, Mendoza. Operational since 1975 in grape production and since 2005 in high-end winemaking, Sin Fin Winery combines large industrial scale with a premium quality philosophy.\n\nThe property has a total vessel capacity of 6,000,000 liters and manages 440 hectares of vineyards (owned and third-party) distributed across the most prestigious terroirs of the province. It stands out as one of the few wineries specializing in high-end 'Bulk Wine', exporting to demanding markets such as the USA, UK, and China, having been internationally awarded in Amsterdam.\n\nIn addition to its production profile, it has a fully developed wine tourism and events unit, with halls, gardens, and a historic underground cellar, generating a diversified income stream.",
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
          { id: "documentacion", label: "Operational Performance" },
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
            value: "In full production",
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
                  label: "EPOXY-LINED CEMENT",
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
              title: "Vineyards & Raw Materials",
              fields: [
                {
                  label: "TOTAL AREA",
                  value: "440 ha",
                },
                {
                  label: "OWNED VINEYARDS",
                  value: "90 ha",
                  class: "border-blueo",
                },
                {
                  label: "THIRD-PARTY VINEYARDS",
                  value: "350 ha",
                },
                {
                  label: "CULTIVATION ZONES",
                  value:
                    "Maipú, Luján de Cuyo, Valle de Uco, Rivadavia, San Martín, Santa Rosa y Junín",
                  subText: "Diversity of origins",
                },
                {
                  label: "RED VARIETALS",
                  value:
                    "Malbec, Cab. Franc, Cab. Sauv, Merlot, Bonarda, Syrah",
                  class: "text-sm",
                },
                {
                  label: "WHITE VARIETALS",
                  value: "Sauvignon Blanc",
                  class: "text-sm",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Wine Tourism & Events",
          groups: [
            {
              fields: [
                {
                  label: "TOURISM",
                  value: "Visits and Tastings",
                  subText: "With pairings (chocolates/charcuterie)",
                },
                {
                  label: "EVENT SPACES",
                  value: "3 Differentiated halls",
                  subText: "Corporate and Social",
                },
                {
                  label: "UNDERGROUND CELLAR",
                  value: "Renovated pools",
                  subText: "For intimate events",
                },
                {
                  label: "FAMILY HOUSE",
                  value: "With pool and vineyard",
                  subText: "Country style",
                },
                {
                  label: "GASTRONOMY",
                  value: "In-house service",
                  subText: "Restaurant projection",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Markets & Products",
          groups: [
            {
              title: "Export Market (Bulk)",
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
                  subText: "Maximum annual",
                },
              ],
              fields: [
                {
                  label: "Reserve",
                  value: [
                    "Malbec",
                    "Cabernet Franc",
                    "Bonarda",
                    "Sauvignon Blanc",
                  ],
                  class: "border-secondary",
                },
                {
                  label: "Grand Reserve",
                  value: ["Malbec", "Cabernet Franc", "Merlot"],
                },
                {
                  label: "Interminable",
                  value: ["Red Blend 1", "Malbec Blend 2", "Red Blend 3"],
                },
                {
                  label: "Fugaz",
                  value: ["Bequignol Rosé"],
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
                { label: "Zone Profile", value: "Historic wine region" },
                { label: "Proximity", value: "Wine Routes" },
              ],
            },
          ],
        },
        legal: {
          label: "Documents",
          groups: [
            {
              title: "Financial Summary (Historical)",
              fields: [
                {
                  label: "STRUCTURE",
                  value: "Complete organizational chart",
                  subText: "Management, Enology, Commercial, HR",
                },
                {
                  label: "Presentation",
                  value: "See attached document",
                  link: "/docs/bodega-sinfin.pdf",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title: "Vinícola Sin Fin: Capacidade Industrial e Enoturismo em Maipú",
        description: {
          text: "Excelente oportunidade de investimento em uma vinícola familiar com sólida trajetória e forte posicionamento internacional, localizada em Maipú, Mendoza. Operacional desde 1975 na produção de uvas e desde 2005 na elaboração de vinhos de alta gama, a Vinícola Sin Fin combina grande escala industrial com uma filosofia de qualidade premium.\n\nA propriedade conta com uma capacidade total de vasilhame de 6.000.000 de litros e administra uma superfície de 440 hectares de vinhedos (próprios e de terceiros) distribuídos nos terroirs mais prestigiosos da província. Destaca-se por ser uma das poucas vinícolas especializadas em 'Bulk Wine' (vinho a granel) de alta gama, exportando para mercados exigentes como EUA, Reino Unido e China, tendo sido premiada internacionalmente em Amsterdã.\n\nAlém do seu perfil produtivo, possui uma unidade de enoturismo e eventos totalmente desenvolvida, com salões, jardins e uma adega subterrânea histórica, gerando um fluxo de receitas diversificado.",
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
            value: "4,5 M",
            extra: "Litros/Ano",
          },
          {
            label: "Área de Vinhedos",
            value: "440",
            extra: "Hectares (Administrados)",
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
              title: "Capacidade de Vasilhame",
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
                  label: "BARRICAS DE CARVALHO",
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
                  value: "440 ha",
                },
                {
                  label: "VINHEDOS PRÓPRIOS",
                  value: "90 ha",
                  class: "border-blueo",
                },
                {
                  label: "VINHEDOS DE TERCEIROS",
                  value: "350 ha",
                },
                {
                  label: "ZONAS DE CULTIVO",
                  value:
                    "Maipú, Luján de Cuyo, Valle de Uco, Rivadavia, San Martín, Santa Rosa y Junín",
                  subText: "Diversidade de origens",
                },
                {
                  label: "VARIETAIS TINTOS",
                  value:
                    "Malbec, Cab. Franc, Cab. Sauv, Merlot, Bonarda, Syrah",
                  class: "text-sm",
                },
                {
                  label: "VARIETAIS BRANCOS",
                  value: "Sauvignon Blanc",
                  class: "text-sm",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Enoturismo e Eventos",
          groups: [
            {
              fields: [
                {
                  label: "TURISMO",
                  value: "Visitas e Degustações",
                  subText: "Com harmonizações (chocolates/tábuas)",
                },
                {
                  label: "ESPAÇOS PARA EVENTOS",
                  value: "3 Salões diferenciados",
                  subText: "Corporativos e Sociais",
                },
                {
                  label: "ADEGA SUBTERRÂNEA",
                  value: "Tanques renovados",
                  subText: "Para eventos íntimos",
                },
                {
                  label: "CASA DA FAMÍLIA",
                  value: "Com piscina e vinhedo",
                  subText: "Estilo campestre",
                },
                {
                  label: "GASTRONOMIA",
                  value: "Serviço próprio",
                  subText: "Projeção de restaurante",
                },
              ],
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
                  value: "EUA, UK, China, Canadá",
                  subText: "Japão, Austrália, Europa",
                },
                {
                  label: "RECONHECIMENTOS",
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
                  label: "Reserva",
                  value: [
                    "Malbec",
                    "Cabernet Franc",
                    "Bonarda",
                    "Sauvignon Blanc",
                  ],
                  class: "border-secondary",
                },
                {
                  label: "Grande Reserva",
                  value: ["Malbec", "Cabernet Franc", "Merlot"],
                },
                {
                  label: "Interminable",
                  value: ["Red Blend 1", "Blend de Malbec 2", "Red Blend 3"],
                },
                {
                  label: "Fugaz",
                  value: ["Rosé de Bequignol"],
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
              title: "Entorno",
              fields: [
                { label: "Perfil da Zona", value: "Vitivinícola histórica" },
                { label: "Proximidade", value: "Rotas do Vinho" },
              ],
            },
          ],
        },
        legal: {
          label: "Documentos",
          groups: [
            {
              title: "Resumo Financeiro (Histórico)",
              fields: [
                {
                  label: "ESTRUTURA",
                  value: "Organograma completo",
                  subText: "Gerência, Enologia, Comercial, RH",
                },
                {
                  label: "Apresentação",
                  value: "Ver documento anexo",
                  link: "/docs/bodega-sinfin.pdf",
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
      address: "Maipú, Mendoza",
      province: "Mendoza",
      country: "AR",
      state: "Maipú",
    },
    images: [
      {
        url: "/images/casirdossantos/bodega-casirdossantos-1.jpg",
        class: "object-cover",
      },
      {
        url: "/images/casirdossantos/bodega-casirdossantos-2.png",
        class: "object-contain",
      },
      {
        url: "/images/casirdossantos/bodega-casirdossantos-3.png",
        class: "object-contain",
      },
      {
        url: "/images/casirdossantos/bodega-casirdossantos-4.png",
        class: "object-contain",
      },
      {
        url: "/images/casirdossantos/bodega-casirdossantos-5.png",
        class: "object-contain",
      },
      {
        url: "/images/casirdossantos/bodega-casirdossantos-6.png",
        class: "object-contain",
      },
      {
        url: "/images/casirdossantos/bodega-casirdossantos-7.png",
        class: "object-contain",
      },
    ],
    content: {
      "es-AR": {
        title: "Bodega Casir dos Santos: Historia (1862) y Vinos de Alta Gama",
        description: {
          text: "Oportunidad de inversión en una de las bodegas en funcionamiento más antiguas de Mendoza. Fundada originalmente en 1862 (antigua Viña Maipú), Casir dos Santos combina más de un siglo de patrimonio vitivinícola con una visión moderna de enología de precisión.\n\nLa propiedad destaca por su enfoque multi-terroir, gestionando viñedos en las tres zonas más prestigiosas de la provincia: Lunlunta (Maipú), Agrelo (Luján de Cuyo) y Valle de Uco. Esta diversidad permite obtener la mejor expresión varietal para sus líneas de vinos premium (Estate, Reserve, Gran Corte y la innovadora línea Avatar), todas reconocidas internacionalmente con puntajes superiores a 90 puntos por críticos como James Suckling, Tim Atkin y Robert Parker.\n\nBajo la dirección enológica de Lucas Moran, la bodega ha modernizado sus procesos sin perder su esencia histórica, utilizando tecnología de vanguardia y barricas de roble francés para la crianza. Es una propiedad ideal para inversores que buscan una marca consolidada, con historia, capacidad productiva y un portfolio de productos ya posicionado en el mercado de alta gama.",
          callout: {
            label: "VALOR DIFERENCIAL",
            value:
              "Bodega Histórica (1862) / 3 Terroirs Premium / Muchos Reconocimientos",
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
            label: "Infraestructura",
          },
          {
            id: "productividad",
            label: "Portfolio y Puntajes",
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
                  value: [
                    "Inspiración Blend de Tintas",
                    "Malbec Elijo Creer",
                    "Reserve Chardonnay",
                  ],
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
          groups: [
            {
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
                  label: "NUESTROS VIÑEDOS",
                  value: "Lunlinta, Agrelo, Valle de Uco",
                },
              ],
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
          label: "Documentos",
          groups: [
            {
              fields: [
                {
                  label: "Mas Informacion",
                  value: "Ver presentacion vinos",
                  link: "/docs/Presentación-Bodega-Casir-dos-Santos-ESP.pdf",
                },
                {
                  label: "Estado",
                  value: "En Producción",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title: "Casir dos Santos Winery: History (1862) and High-End Wines",
        description: {
          text: "Investment opportunity in one of the oldest operating wineries in Mendoza. Originally founded in 1862 (formerly Viña Maipú), Casir dos Santos combines over a century of winemaking heritage with a modern vision of precision enology.\n\nThe property stands out for its multi-terroir approach, managing vineyards in the three most prestigious zones of the province: Lunlunta (Maipú), Agrelo (Luján de Cuyo), and Uco Valley. This diversity allows obtaining the best varietal expression for their premium wine lines (Estate, Reserve, Gran Corte, and the innovative Avatar line), all internationally recognized with scores above 90 points by critics such as James Suckling, Tim Atkin, and Robert Parker.\n\nUnder the enological direction of Lucas Moran, the winery has modernized its processes without losing its historic essence, using cutting-edge technology and French oak barrels for aging. It is an ideal property for investors seeking an established brand, with history, production capacity, and a product portfolio already positioned in the high-end market.",
          callout: {
            label: "DIFFERENTIAL VALUE",
            value: "Historic Winery (1862) / 3 Premium Terroirs / Many Awards",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Summary",
          },
          {
            id: "ficha-tecnica",
            label: "Our Vineyards",
          },
          {
            id: "infraestructura",
            label: "Infrastructure",
          },
          {
            id: "productividad",
            label: "Portfolio & Scores",
          },
          {
            id: "ubicacion",
            label: "Location",
          },
          {
            id: "contacto-finca",
            label: "Contact",
          },
        ],
        summary: [
          {
            label: "Founded",
            value: "1862",
            extra: "One of the oldest",
          },
          {
            label: "Winemaker",
            value: "Lucas Moran",
            extra: "22 Harvests",
          },
          {
            label: "Vineyards in",
            value: "3",
            extra: "Maipú, Agrelo, Uco",
          },
          {
            label: "Status",
            value: "In Production",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Our Vineyards (Terroirs)",
          groups: [
            {
              title: "Lunlunta Estate (Maipú)",
              fields: [
                {
                  label: "LOCATION",
                  value: "Lower Andes zone",
                },
                {
                  label: "ALTITUDE",
                  value: "1,050 masl",
                },
                {
                  label: "DISTANCE",
                  value: "20 km from Mendoza",
                },
              ],
            },
            {
              title: "Agrelo Estate (Luján de Cuyo)",
              fields: [
                {
                  label: "LOCATION",
                  value: "The Valley",
                },
                {
                  label: "ALTITUDE",
                  value: "950 masl",
                  class: "border-secondary",
                },
                {
                  label: "DISTANCE",
                  value: "40 km South",
                },
              ],
            },
            {
              title: "Uco Valley",
              fields: [
                {
                  label: "LOCATION",
                  value: "Upper Andes Slope",
                },
                {
                  label: "ALTITUDE",
                  value: "1,250 masl",
                  class: "border-blueo",
                },
                {
                  label: "DISTANCE",
                  value: "100 km Southwest",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Portfolio & Scores",
          groups: [
            {
              title: "Wine Lines",
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
                  label: "New Releases",
                  value: [
                    "Inspiración Red Blend",
                    "Malbec Elijo Creer",
                    "Reserve Chardonnay",
                  ],
                },
              ],
            },
            {
              title: "Avatar Line",
              featured: [
                {
                  label: "AVATAR LINE",
                  value: "Innovative Concept",
                  subText: "Malbec, Cab, Syrah, Bonarda",
                },
              ],
              fields: [
                {
                  label: "Available Varietals",
                  value: [
                    "Torrontés",
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
                  value: ["Pink Pinot Noir"],
                },
                {
                  label: "Revolución Range",
                  value: ["Malbec", "Cabernet Sauvignon", "Petit Verdot"],
                },
              ],
            },
            {
              title: "Awards",
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
                  subText: "Tim Atkin MW",
                },
                {
                  label: "Reserve Cabernet 2017",
                  value: "90 pts",
                  subText: "Tim Atkin MW",
                },
                {
                  label: "Gran Corte 2015",
                  value: "93 pts",
                  subText: "James Suckling",
                },
                {
                  label: "Inspiración 2021 Red Blend",
                  value: "91 pts",
                  subText: "James Suckling",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Infrastructure",
          fields: [
            {
              label: "BUILDING",
              value: "Historic (1862)",
              subText: "Preserved and renovated",
            },
            {
              label: "TECHNOLOGY",
              value: "Precision enology",
            },
            {
              label: "AGING",
              value: "French Oak Barrels",
              subText: "Barrel room",
            },
            {
              label: "OUR VINEYARDS",
              value: "Lunlunta, Agrelo, Uco Valley",
            },
          ],
        },
        locationDetails: {
          label: "Location",
          map: {
            lat: -33.0525,
            lng: -68.8045,
          },
          featured: [
            {
              label: "WINERY",
              value: "Maipú, Mendoza",
            },
            {
              label: "ACCESSIBILITY",
              value: "Close to City",
            },
          ],
          groups: [
            {
              title: "Distances to the Winery",
              fields: [
                {
                  label: "Mendoza City",
                  value: "20-25 min",
                },
                {
                  label: "Airport",
                  value: "35 min",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documents",
          groups: [
            {
              fields: [
                {
                  label: "More Information",
                  value: "See wine presentation",
                  link: "/docs/Presentación-Bodega-Casir-dos-Santos-ESP.pdf",
                },
                {
                  label: "Status",
                  value: "In Production",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title:
          "Vinícola Casir dos Santos: História (1862) e Vinhos de Alta Gama",
        description: {
          text: "Oportunidade de investimento em uma das vinícolas em funcionamento mais antigas de Mendoza. Fundada originalmente em 1862 (antiga Viña Maipú), Casir dos Santos combina mais de um século de patrimônio vitivinícola com uma visão moderna de enologia de precisão.\n\nA propriedade destaca-se pela sua abordagem multi-terroir, administrando vinhedos nas três zonas mais prestigiosas da província: Lunlunta (Maipú), Agrelo (Luján de Cuyo) e Vale de Uco. Esta diversidade permite obter a melhor expressão varietal para suas linhas de vinhos premium (Estate, Reserve, Gran Corte e a inovadora linha Avatar), todas reconhecidas internacionalmente com pontuações superiores a 90 pontos por críticos como James Suckling, Tim Atkin e Robert Parker.\n\nSob a direção enológica de Lucas Moran, a vinícola modernizou seus processos sem perder sua essência histórica, utilizando tecnologia de ponta e barricas de carvalho francês para a maturação. É uma propriedade ideal para investidores que buscam uma marca consolidada, com história, capacidade produtiva e um portfólio de produtos já posicionado no mercado de alta gama.",
          callout: {
            label: "VALOR DIFERENCIAL",
            value:
              "Vinícola Histórica (1862) / 3 Terroirs Premium / Muitos Reconhecimentos",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumo",
          },
          {
            id: "ficha-tecnica",
            label: "Nossos Vinhedos",
          },
          {
            id: "infraestructura",
            label: "Infraestrutura",
          },
          {
            id: "productividad",
            label: "Portfólio e Pontuações",
          },
          {
            id: "ubicacion",
            label: "Localização",
          },
          {
            id: "contacto-finca",
            label: "Contato",
          },
        ],
        summary: [
          {
            label: "Fundação",
            value: "1862",
            extra: "Uma das mais antigas",
          },
          {
            label: "Enólogo",
            value: "Lucas Moran",
            extra: "22 Safras",
          },
          {
            label: "Vinhedos em",
            value: "3",
            extra: "Maipú, Agrelo, Uco",
          },
          {
            label: "Status",
            value: "Em Produção",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Nossos Vinhedos (Terroirs)",
          groups: [
            {
              title: "Fazenda Lunlunta (Maipú)",
              fields: [
                {
                  label: "LOCALIZAÇÃO",
                  value: "Zona baixa dos Andes",
                },
                {
                  label: "ALTITUDE",
                  value: "1.050 m.a.n.m.",
                },
                {
                  label: "DISTÂNCIA",
                  value: "20 km de Mendoza",
                },
              ],
            },
            {
              title: "Fazenda Agrelo (Luján de Cuyo)",
              fields: [
                {
                  label: "LOCALIZAÇÃO",
                  value: "O Vale",
                },
                {
                  label: "ALTITUDE",
                  value: "950 m.a.n.m.",
                  class: "border-secondary",
                },
                {
                  label: "DISTÂNCIA",
                  value: "40 km ao Sul",
                },
              ],
            },
            {
              title: "Vale de Uco",
              fields: [
                {
                  label: "LOCALIZAÇÃO",
                  value: "Encosta Superior dos Andes",
                },
                {
                  label: "ALTITUDE",
                  value: "1.250 m.a.n.m.",
                  class: "border-blueo",
                },
                {
                  label: "DISTÂNCIA",
                  value: "100 km a Sudoeste",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Portfólio e Pontuações",
          groups: [
            {
              title: "Linhas de Vinhos",
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
                  label: "Novos Lançamentos",
                  value: [
                    "Inspiración Blend de Tintos",
                    "Malbec Elijo Creer",
                    "Reserve Chardonnay",
                  ],
                },
              ],
            },
            {
              title: "Linha Avatar",
              featured: [
                {
                  label: "LINHA AVATAR",
                  value: "Conceito Inovador",
                  subText: "Malbec, Cab, Syrah, Bonarda",
                },
              ],
              fields: [
                {
                  label: "Variedades Disponíveis",
                  value: [
                    "Torrontés",
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
                  value: ["Pink Pinot Noir"],
                },
                {
                  label: "Revolución Range",
                  value: ["Malbec", "Cabernet Sauvignon", "Petit Verdot"],
                },
              ],
            },
            {
              title: "Reconhecimentos",
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
                  subText: "Tim Atkin MW",
                },
                {
                  label: "Reserve Cabernet 2017",
                  value: "90 pts",
                  subText: "Tim Atkin MW",
                },
                {
                  label: "Gran Corte 2015",
                  value: "93 pts",
                  subText: "James Suckling",
                },
                {
                  label: "Inspiración 2021 Blend de Tintos",
                  value: "91 pts",
                  subText: "James Suckling",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Infraestrutura",
          fields: [
            {
              label: "EDIFÍCIO",
              value: "Histórico (1862)",
              subText: "Conservado e renovado",
            },
            {
              label: "TECNOLOGIA",
              value: "Enologia de precisão",
            },
            {
              label: "MATURAÇÃO",
              value: "Barricas de Carvalho Francês",
              subText: "Sala de barricas",
            },
            {
              label: "NOSSOS VINHEDOS",
              value: "Lunlunta, Agrelo, Vale de Uco",
            },
          ],
        },
        locationDetails: {
          label: "Localização",
          map: {
            lat: -33.0525,
            lng: -68.8045,
          },
          featured: [
            {
              label: "VINÍCOLA",
              value: "Maipú, Mendoza",
            },
            {
              label: "ACESSIBILIDADE",
              value: "Próxima à Cidade",
            },
          ],
          groups: [
            {
              title: "Distâncias até a Vinícola",
              fields: [
                {
                  label: "Mendoza Capital",
                  value: "20-25 min",
                },
                {
                  label: "Aeroporto",
                  value: "35 min",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentos",
          groups: [
            {
              fields: [
                {
                  label: "Mais Informações",
                  value: "Ver apresentação dos vinhos",
                  link: "/docs/Presentación-Bodega-Casir-dos-Santos-ESP.pdf",
                },
                {
                  label: "Status",
                  value: "Em Produção",
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: "campo-la-junta-malargue-mendoza",
    type: "campo",
    price: {
      value: null,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: 1305,
    location: {
      lat: null,
      lng: null,
      address: "La Junta, Malargüe (Al Este de Ruta Nacional 40)",
      province: "Mendoza",
      country: "AR",
      state: "Malargüe",
    },
    images: [
      {
        url: "/images/lajunta/campo-lajunta-1.png",
        class: "object-cover",
      },
      {
        url: "/images/lajunta/campo-lajunta-2.png",
        class: "object-cover",
      },
      {
        url: "/images/lajunta/campo-lajunta-3.png",
        class: "object-cover",
      },
      {
        url: "/images/lajunta/campo-lajunta-4.png",
        class: "object-cover",
      },
      {
        url: "/images/lajunta/campo-lajunta-5.png",
        class: "object-cover",
      },
    ],
    content: {
      "es-AR": {
        title: "Campo en Malargüe - La Junta",
        description: {
          text: "Excelente oportunidad de inversión en Malargüe, Mendoza. Se trata de una fracción de campo de 1.305 hectáreas totales ubicada en el distrito de La Junta, al oeste de la Ruta Nacional 40.\n\nEl campo destaca por su disponibilidad hídrica e infraestructura base. Posee Derecho de Riego Definitivo para 213 hectáreas y factibilidad para realizar perforaciones adicionales. Actualmente cuenta con 450 hectáreas desmontadas listas para trabajar y 855 hectáreas de campo natural. La propiedad está totalmente alambrada en su perímetro, dispone de energía eléctrica conectada y una casa patronal, encontrándose lista para escriturar y transferir.",
          callout: {
            label: "INFRAESTRUCTURA",
            value: "Riego Definitivo / Energía Eléctrica / Casa",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumen",
          },
          {
            id: "ficha-tecnica",
            label: "Superficies y Riego",
          },
          {
            id: "infraestructura",
            label: "Mejoras e Instalaciones",
          },
          {
            id: "ubicacion",
            label: "Ubicación y Accesos",
          },
          {
            id: "documentacion",
            label: "Legal",
          },
          {
            id: "contacto-finca",
            label: "Contacto",
          },
        ],
        summary: [
          {
            label: "Superficie Total",
            value: "1.305",
            extra: "Hectáreas",
          },
          {
            label: "Derecho de Riego",
            value: "213",
            extra: "Hectáreas (Definitivo)",
          },
          {
            label: "Sup. Desmontada",
            value: "450",
            extra: "Hectáreas",
          },
          {
            label: "Estado",
            value: "Listo para transferir",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Superficies y Riego",
          groups: [
            {
              title: "Distribución de la Tierra",
              fields: [
                {
                  label: "SUPERFICIE TOTAL",
                  value: "1.305 Has",
                  class: "border-secondary",
                },
                {
                  label: "HECTÁREAS DESMONTADAS",
                  value: "450 Has",
                  subText: "Suelo trabajado",
                },
                {
                  label: "CAMPO NATURAL",
                  value: "855 Has",
                  subText: "Monte nativo",
                },
              ],
            },
            {
              title: "Recurso Hídrico",
              fields: [
                {
                  label: "DERECHO DE RIEGO",
                  value: "213 Has",
                  subText: "Definitivo",
                  class: "border-blueo",
                },
                {
                  label: "AGUA SUBTERRÁNEA",
                  value: "Factible",
                  subText: "Apto para perforaciones",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Mejoras e Instalaciones",
          groups: [
            {
              fields: [
                {
                  label: "VIVIENDA",
                  value: "Casa Patronal",
                  subText: "Construcción existente",
                },
                {
                  label: "ENERGÍA",
                  value: "Red Eléctrica",
                  subText: "Conectada al predio",
                },
                {
                  label: "PERÍMETRO",
                  value: "Alambrado Total",
                  subText: "Cierre completo del campo",
                },
                {
                  label: "ACCESO",
                  value: "Tranquera",
                  subText: "Ingreso consolidado",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Aptitud Productiva",
          groups: [
            {
              title: "Potencial",
              fields: [
                {
                  label: "APTITUD",
                  value: "Mixta",
                  subText: "Ganadera / Agrícola bajo riego",
                },
                {
                  label: "DISPONIBILIDAD",
                  value: "Inmediata",
                  subText: "Infraestructura operativa",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Ubicación y Accesos",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "ZONA",
              value: "La Junta",
            },
            {
              label: "DEPARTAMENTO",
              value: "Malargüe",
            },
          ],
          groups: [
            {
              title: "Referencias",
              fields: [
                {
                  label: "Ruta Nacional 40",
                  value: "Al Oeste",
                  subText: "Principal vía de acceso",
                },
                {
                  label: "Malargüe Ciudad",
                  value: "25 km",
                  subText: "Villa Cabecera",
                },
                {
                  label: "Acceso Asfaltado",
                  value: "10 km",
                  subText: "Desde RN40 hacia La Junta",
                },
                {
                  label: "Acceso Ripio",
                  value: "500 metros",
                  subText: "Tramo final a tranquera",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentación",
          groups: [
            {
              title: "Estado Dominial",
              fields: [
                {
                  label: "SITUACIÓN",
                  value: "Listo para Transferir",
                  class: "border-secondary",
                },
                {
                  label: "MENSURA",
                  value: "Plano Disponible",
                  subText: "N° 19/2001",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title: "Land in Malargüe - La Junta",
        description: {
          text: "Excellent investment opportunity in Malargüe, Mendoza. A 1,305-hectare land tract located in the La Junta district, west of National Route 40.\n\nThe property stands out for its water availability and basic infrastructure. It holds Permanent Water Rights for 213 hectares and feasibility for additional drilling. Currently, it has 450 cleared hectares ready for work and 855 hectares of natural land. The property is fully fenced, has connected electrical power and a main house, and is ready for title transfer.",
          callout: {
            label: "INFRASTRUCTURE",
            value: "Permanent Irrigation / Electricity / House",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Summary",
          },
          {
            id: "ficha-tecnica",
            label: "Surfaces & Irrigation",
          },
          {
            id: "infraestructura",
            label: "Improvements & Facilities",
          },
          {
            id: "ubicacion",
            label: "Location & Access",
          },
          {
            id: "documentacion",
            label: "Legal",
          },
          {
            id: "contacto-finca",
            label: "Contact",
          },
        ],
        summary: [
          {
            label: "Total Area",
            value: "1,305",
            extra: "Hectares",
          },
          {
            label: "Water Rights",
            value: "213",
            extra: "Hectares (Permanent)",
          },
          {
            label: "Cleared Area",
            value: "450",
            extra: "Hectares",
          },
          {
            label: "Status",
            value: "Ready to transfer",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Surfaces & Irrigation",
          groups: [
            {
              title: "Land Distribution",
              fields: [
                {
                  label: "TOTAL AREA",
                  value: "1,305 Ha",
                  class: "border-secondary",
                },
                {
                  label: "CLEARED HECTARES",
                  value: "450 Ha",
                  subText: "Worked soil",
                },
                {
                  label: "NATURAL LAND",
                  value: "855 Ha",
                  subText: "Native bush",
                },
              ],
            },
            {
              title: "Water Resources",
              fields: [
                {
                  label: "WATER RIGHTS",
                  value: "213 Ha",
                  subText: "Permanent",
                  class: "border-blueo",
                },
                {
                  label: "GROUNDWATER",
                  value: "Feasible",
                  subText: "Suitable for drilling",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Improvements & Facilities",
          fields: [
            {
              label: "HOUSING",
              value: "Main House",
              subText: "Existing structure",
            },
            {
              label: "ENERGY",
              value: "Power Grid",
              subText: "Connected to site",
            },
            {
              label: "PERIMETER",
              value: "Fully Fenced",
              subText: "Complete enclosure",
            },
            {
              label: "ACCESS",
              value: "Farm Gate",
              subText: "Consolidated entrance",
            },
          ],
        },
        energy: {
          label: "Productive Aptitude",
          groups: [
            {
              title: "Potential",
              fields: [
                {
                  label: "APTITUDE",
                  value: "Mixed",
                  subText: "Livestock / Agricultural under irrigation",
                },
                {
                  label: "AVAILABILITY",
                  value: "Immediate",
                  subText: "Operational infrastructure",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Location & Access",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "ZONE",
              value: "La Junta",
            },
            {
              label: "DEPARTMENT",
              value: "Malargüe",
            },
          ],
          groups: [
            {
              title: "References",
              fields: [
                {
                  label: "National Route 40",
                  value: "To the West",
                  subText: "Main access road",
                },
                {
                  label: "Malargüe City",
                  value: "25 km",
                  subText: "Head town",
                },
                {
                  label: "Paved Access",
                  value: "10 km",
                  subText: "From RN40 to La Junta",
                },
                {
                  label: "Gravel Access",
                  value: "500 meters",
                  subText: "Final stretch to gate",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentation",
          groups: [
            {
              title: "Ownership Status",
              fields: [
                {
                  label: "SITUATION",
                  value: "Ready to Transfer",
                  class: "border-secondary",
                },
                {
                  label: "SURVEY",
                  value: "Blueprint Available",
                  subText: "No. 19/2001",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title: "Campo em Malargüe - La Junta",
        description: {
          text: "Excelente oportunidade de investimento em Malargüe, Mendoza. Trata-se de uma fração de campo com um total de 1.305 hectares localizada no distrito de La Junta, a oeste da Rota Nacional 40.\n\nO campo destaca-se pela sua disponibilidade hídrica e infraestrutura básica. Possui Direito de Irrigação Definitivo para 213 hectares e viabilidade para realizar perfurações adicionais. Atualmente conta com 450 hectares limpos e prontos para trabalhar, e 855 hectares de campo natural. A propriedade está totalmente cercada em seu perímetro, dispõe de energia elétrica conectada e uma casa sede, encontrando-se pronta para escriturar e transferir.",
          callout: {
            label: "INFRAESTRUTURA",
            value: "Irrigação Definitiva / Energia Elétrica / Casa",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumo",
          },
          {
            id: "ficha-tecnica",
            label: "Superfícies e Irrigação",
          },
          {
            id: "infraestructura",
            label: "Benfeitorias e Instalações",
          },
          {
            id: "ubicacion",
            label: "Localização e Acessos",
          },
          {
            id: "documentacion",
            label: "Legal",
          },
          {
            id: "contacto-finca",
            label: "Contato",
          },
        ],
        summary: [
          {
            label: "Área Total",
            value: "1.305",
            extra: "Hectares",
          },
          {
            label: "Direito de Irrigação",
            value: "213",
            extra: "Hectares (Definitivo)",
          },
          {
            label: "Área Limpa",
            value: "450",
            extra: "Hectares",
          },
          {
            label: "Estado",
            value: "Pronto para transferir",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Superfícies e Irrigação",
          groups: [
            {
              title: "Distribuição de Terras",
              fields: [
                {
                  label: "ÁREA TOTAL",
                  value: "1.305 Ha",
                  class: "border-secondary",
                },
                {
                  label: "HECTARES LIMPOS",
                  value: "450 Ha",
                  subText: "Solo trabalhado",
                },
                {
                  label: "CAMPO NATURAL",
                  value: "855 Ha",
                  subText: "Mata nativa",
                },
              ],
            },
            {
              title: "Recursos Hídricos",
              fields: [
                {
                  label: "DIREITO DE IRRIGAÇÃO",
                  value: "213 Ha",
                  subText: "Definitivo",
                  class: "border-blueo",
                },
                {
                  label: "ÁGUA SUBTERRÂNEA",
                  value: "Viável",
                  subText: "Apto para perfurações",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Benfeitorias e Instalações",
          fields: [
            {
              label: "MORADIA",
              value: "Casa Sede",
              subText: "Construção existente",
            },
            {
              label: "ENERGIA",
              value: "Rede Elétrica",
              subText: "Conectada à propriedade",
            },
            {
              label: "PERÍMETRO",
              value: "Totalmente Cercado",
              subText: "Fechamento completo",
            },
            {
              label: "ACESSO",
              value: "Porteira",
              subText: "Entrada consolidada",
            },
          ],
        },
        energy: {
          label: "Aptidão Produtiva",
          groups: [
            {
              title: "Potencial",
              fields: [
                {
                  label: "APTIDÃO",
                  value: "Mista",
                  subText: "Pecuária / Agrícola sob irrigação",
                },
                {
                  label: "DISPONIBILIDADE",
                  value: "Imediata",
                  subText: "Infraestrutura operacional",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Localização e Acessos",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "ZONA",
              value: "La Junta",
            },
            {
              label: "DEPARTAMENTO",
              value: "Malargüe",
            },
          ],
          groups: [
            {
              title: "Referências",
              fields: [
                {
                  label: "Rota Nacional 40",
                  value: "A Oeste",
                  subText: "Principal via de acesso",
                },
                {
                  label: "Cidade de Malargüe",
                  value: "25 km",
                  subText: "Cidade Principal",
                },
                {
                  label: "Acesso Asfaltado",
                  value: "10 km",
                  subText: "Da RN40 até La Junta",
                },
                {
                  label: "Acesso de Cascalho",
                  value: "500 metros",
                  subText: "Trecho final até a porteira",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentação",
          groups: [
            {
              title: "Estado Dominial",
              fields: [
                {
                  label: "SITUAÇÃO",
                  value: "Pronto para Transferir",
                  class: "border-secondary",
                },
                {
                  label: "MEDIÇÃO",
                  value: "Planta Disponível",
                  subText: "N° 19/2001",
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: "finca-productiva-ciruelas-vinedos-mendoza",
    type: "finca",
    price: {
      value: 500000,
      currency: "USD",
      pricePerHectare: null,
    },
    hectares: 41.5,
    location: {
      lat: null,
      lng: null,
      address: "Zona Productiva (Consultar Ubicación Exacta)",
      province: "Mendoza",
      country: "AR",
      state: null,
    },
    images: [
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-1.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-2.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-3.jpeg",
        class: "object-contain",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-4.jpeg",
        class: "object-contain",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-5.jpeg",
        class: "object-contain",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-6.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-7.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-8.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-9.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-10.jpeg",
        class: "object-cover",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-11.jpeg",
        class: "object-contain",
      },
      {
        url: "/images/fincasanrafaelmaquinaria/finca-sanrafael-maquinaria-12.jpeg",
        class: "object-contain",
      },
    ],
    content: {
      "es-AR": {
        title: "Finca en San Rafael - Maquinaria Incluida",
        description: {
          text: "Excelente oportunidad de inversión en finca productiva de 41,5 hectáreas, ofrecida bajo modalidad 'a tranquera cerrada' (incluye maquinaria y herramientas) y con posibilidad de financiación. La propiedad se encuentra en plena producción con 31 hectáreas de ciruelos y 10,5 hectáreas de viñedos, totalmente cubiertos con malla antigranizo en buen estado de conservación.\n\nLa infraestructura operativa es completa: cuenta con un pozo electrificado para el abastecimiento de agua y un sistema de riego con canales y acequias internas en óptimas condiciones. Además, dispone de un parque de maquinaria extenso que incluye tractores (New Holland y John Deere) y múltiples implementos agrícolas, permitiendo la operación inmediata sin inversiones adicionales en equipamiento.\n\nEn cuanto a construcciones, la finca posee tres viviendas de material (Casa Este, Centro y Oeste) que suman más de 300 m2 cubiertos, junto con un galpón y tinglado de 150 m2 totales. El entorno es netamente agrícola, rodeado de fincas en producción.",
          callout: {
            label: "OPORTUNIDAD",
            value: "Venta con Financiación / Maquinaria Incluida",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumen",
          },
          {
            id: "ficha-tecnica",
            label: "Cultivos y Riego",
          },
          {
            id: "infraestructura",
            label: "Construcciones",
          },
          {
            id: "productividad",
            label: "Maquinaria y Equipos",
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
            label: "Precio",
            value: "500.000",
            extra: "USD (Financiado)",
          },
          {
            label: "Superficie Cultivada",
            value: "41,5",
            extra: "Hectáreas",
          },
          {
            label: "Construcciones",
            value: "5",
          },
          {
            label: "Equipos",
            value: "Maquinaria Incluida",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Cultivos y Riego",
          groups: [
            {
              title: "Superficies Productivas",
              fields: [
                {
                  label: "CIRUELOS",
                  value: "31 ha",
                  class: "border-secondary",
                },
                {
                  label: "VIÑEDOS",
                  value: "10,5 ha",
                },
                {
                  label: "PROTECCIÓN",
                  value: "Malla Antigranizo",
                  subText: "Estructura completa",
                },
                {
                  label: "ESTADO MALLA",
                  value: "7 años antig.",
                  subText: "Mitad de vida útil",
                },
              ],
            },
            {
              title: "Recurso Hídrico",
              fields: [
                {
                  label: "FUENTE",
                  value: "Pozo Electrificado",
                },
                {
                  label: "DISTRIBUCIÓN",
                  value: "Acequias y Canales",
                  subText: "Buenas condiciones",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Infraestructura Edilicia",
          groups: [
            {
              fields: [
                {
                  label: "CASA ESTE",
                  value: "100 m2",
                  subText: "60 años antigüedad",
                },
                {
                  label: "CASA CENTRO",
                  value: "110 m2",
                  subText: "70 años antigüedad",
                },
                {
                  label: "CASA OESTE",
                  value: "100 m2",
                  subText: "Casa + Dpto (40 años)",
                },
                {
                  label: "GALPÓN",
                  value: "75 m2",
                  subText: "Ladrillo y chapa (10 años)",
                },
                {
                  label: "TINGLADO",
                  value: "75 m2",
                  subText: "Estructura abierta (10 años)",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Maquinaria y Equipos (Incluidos)",
          groups: [
            {
              title: "Tractores",
              fields: [
                {
                  label: "TRACTOR 1",
                  value: "New Holland",
                  class: "border-secondary",
                },
                {
                  label: "TRACTOR 2",
                  value: "John Deere",
                },
              ],
            },
            {
              title: "Implementos",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Suelo",
                  value: [
                    "Arado 2 cuerpos",
                    "Rotovator 1.20m",
                    "Rastra 16 discos",
                    "Niveleta 1.20m",
                  ],
                },
                {
                  label: "Curación",
                  value: ["Sulfatadora Pehuenche", "Máquina Herbicida"],
                },
                {
                  label: "Varios",
                  value: [
                    "Carro",
                    "Herramientas de mano",
                    "Implementos varios",
                  ],
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Ubicación y Entorno",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "ZONA",
              value: "Agrícola",
            },
            {
              label: "ENTORNO",
              value: "Fincas Productivas",
            },
          ],
          groups: [
            {
              title: "Características del Entorno",
              fields: [
                {
                  label: "Vecindario",
                  value: "Propiedades similares",
                  subText: "Estados buenos y regulares",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentación",
          groups: [
            {
              title: "Condiciones de Venta",
              fields: [
                {
                  label: "PRECIO",
                  value: "USD 500.000",
                  class: "border-blueo",
                },
                {
                  label: "FINANCIACIÓN",
                  value: "Disponible",
                  subText: "Consultar condiciones",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title: "Productive Farm: Plums, Vineyards & Machinery Included",
        description: {
          text: "Excellent investment opportunity in a 41.5-hectare productive farm, offered as a 'turnkey' sale (machinery and tools included) with financing options available. The property is in full production with 31 hectares of plums and 10.5 hectares of vineyards, completely covered with anti-hail netting in good condition.\n\nThe operational infrastructure is complete: it features an electrified well for water supply and an internal irrigation system with canals and ditches in optimal condition. Additionally, it includes an extensive machinery fleet featuring tractors (New Holland and John Deere) and multiple agricultural implements, allowing for immediate operation without additional equipment investment.\n\nRegarding construction, the farm has three brick houses (East, Center, and West) totaling over 300 m2, along with a warehouse and shed totaling 150 m2. The surroundings are purely agricultural, bordered by other producing farms.",
          callout: {
            label: "OPPORTUNITY",
            value: "Sale with Financing / Machinery Included",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Summary",
          },
          {
            id: "ficha-tecnica",
            label: "Crops & Irrigation",
          },
          {
            id: "infraestructura",
            label: "Buildings",
          },
          {
            id: "productividad",
            label: "Machinery & Equipment",
          },
          {
            id: "ubicacion",
            label: "Location",
          },
          {
            id: "contacto-finca",
            label: "Contact",
          },
        ],
        summary: [
          {
            label: "Price",
            value: "500,000",
            extra: "USD (Financed)",
          },
          {
            label: "Cultivated Area",
            value: "41.5",
            extra: "Hectares",
          },
          {
            label: "Protection",
            value: "100%",
            extra: "Anti-hail Netting",
          },
          {
            label: "Status",
            value: "Machinery Included",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Crops & Irrigation",
          groups: [
            {
              title: "Productive Areas",
              fields: [
                {
                  label: "PLUMS",
                  value: "31 ha",
                  class: "border-secondary",
                },
                {
                  label: "VINEYARDS",
                  value: "10.5 ha",
                },
                {
                  label: "PROTECTION",
                  value: "Anti-hail Netting",
                  subText: "Complete structure",
                },
                {
                  label: "NET CONDITION",
                  value: "7 years old",
                  subText: "Half useful life",
                },
              ],
            },
            {
              title: "Water Resources",
              fields: [
                {
                  label: "SOURCE",
                  value: "Electrified Well",
                },
                {
                  label: "DISTRIBUTION",
                  value: "Ditches and Canals",
                  subText: "Good conditions",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Building Infrastructure",
          fields: [
            {
              label: "EAST HOUSE",
              value: "100 m2",
              subText: "60 years old",
            },
            {
              label: "CENTER HOUSE",
              value: "110 m2",
              subText: "70 years old",
            },
            {
              label: "WEST HOUSE",
              value: "100 m2",
              subText: "House + Apt (40 years)",
            },
            {
              label: "WAREHOUSE",
              value: "75 m2",
              subText: "Brick/Zinc (10 years)",
            },
            {
              label: "SHED",
              value: "75 m2",
              subText: "Open structure (10 years)",
            },
          ],
        },
        energy: {
          label: "Machinery & Equipment (Included)",
          groups: [
            {
              title: "Tractors",
              fields: [
                {
                  label: "TRACTOR 1",
                  value: "New Holland",
                  class: "border-secondary",
                },
                {
                  label: "TRACTOR 2",
                  value: "John Deere",
                },
              ],
            },
            {
              title: "Implements",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Soil",
                  value: [
                    "2-body Plow",
                    "Rotovator 1.20m",
                    "16-disc Harrow",
                    "Leveler 1.20m",
                  ],
                },
                {
                  label: "Treatment",
                  value: ["Pehuenche Sulfator", "Herbicide Machine"],
                },
                {
                  label: "Misc",
                  value: ["Cart", "Hand tools", "Various implements"],
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Location & Surroundings",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "ZONE",
              value: "Agricultural",
            },
            {
              label: "SURROUNDINGS",
              value: "Productive Farms",
            },
          ],
          groups: [
            {
              title: "Environment Features",
              fields: [
                {
                  label: "Neighborhood",
                  value: "Similar properties",
                  subText: "Good and regular conditions",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documents",
          groups: [
            {
              title: "Sales Conditions",
              fields: [
                {
                  label: "PRICE",
                  value: "USD 500,000",
                  class: "border-blueo",
                },
                {
                  label: "FINANCING",
                  value: "Available",
                  subText: "Consult terms",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title: "Fazenda Produtiva: Ameixeiras, Vinhedos e Maquinário Incluído",
        description: {
          text: "Excelente oportunidade de investimento em fazenda produtiva de 41,5 hectares, oferecida na modalidade 'porteira fechada' (inclui máquinas e ferramentas) e com possibilidade de financiamento. A propriedade encontra-se em plena produção com 31 hectares de ameixeiras e 10,5 hectares de vinhedos, totalmente cobertos com tela antigranizo em bom estado de conservação.\n\nA infraestrutura operacional é completa: conta com um poço eletrificado para o abastecimento de água e um sistema de irrigação com canais e valas internas em ótimas condições. Além disso, dispõe de uma frota de maquinário extensa que inclui tratores (New Holland e John Deere) e múltiplos implementos agrícolas, permitindo a operação imediata sem investimentos adicionais em equipamentos.\n\nQuanto às construções, a fazenda possui três casas de alvenaria (Casa Leste, Centro e Oeste) somando mais de 300 m2 cobertos, juntamente com um galpão e armazém de 150 m2 totais. O entorno é puramente agrícola, cercado por fazendas em produção.",
          callout: {
            label: "OPORTUNIDADE",
            value: "Venda Financiada / Maquinário Incluído",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumo",
          },
          {
            id: "ficha-tecnica",
            label: "Cultivos e Irrigação",
          },
          {
            id: "infraestructura",
            label: "Construções",
          },
          {
            id: "productividad",
            label: "Maquinário e Equipamentos",
          },
          {
            id: "ubicacion",
            label: "Localização",
          },
          {
            id: "contacto-finca",
            label: "Contato",
          },
        ],
        summary: [
          {
            label: "Preço",
            value: "500.000",
            extra: "USD (Financiado)",
          },
          {
            label: "Área Cultivada",
            value: "41,5",
            extra: "Hectares",
          },
          {
            label: "Proteção",
            value: "100%",
            extra: "Tela Antigranizo",
          },
          {
            label: "Status",
            value: "Maquinário Incluído",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Cultivos e Irrigação",
          groups: [
            {
              title: "Superfícies Produtivas",
              fields: [
                {
                  label: "AMEIXEIRAS",
                  value: "31 ha",
                  class: "border-secondary",
                },
                {
                  label: "VINHEDOS",
                  value: "10,5 ha",
                },
                {
                  label: "PROTEÇÃO",
                  value: "Tela Antigranizo",
                  subText: "Estrutura completa",
                },
                {
                  label: "ESTADO TELA",
                  value: "7 anos antig.",
                  subText: "Metade da vida útil",
                },
              ],
            },
            {
              title: "Recurso Hídrico",
              fields: [
                {
                  label: "FONTE",
                  value: "Poço Eletrificado",
                },
                {
                  label: "DISTRIBUIÇÃO",
                  value: "Valas e Canais",
                  subText: "Boas condições",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Infraestrutura Predial",
          fields: [
            {
              label: "CASA LESTE",
              value: "100 m2",
              subText: "60 anos antiguidade",
            },
            {
              label: "CASA CENTRO",
              value: "110 m2",
              subText: "70 anos antiguidade",
            },
            {
              label: "CASA OESTE",
              value: "100 m2",
              subText: "Casa + Apto (40 anos)",
            },
            {
              label: "GALPÃO",
              value: "75 m2",
              subText: "Tijolo e zinco (10 anos)",
            },
            {
              label: "ARMAZÉM",
              value: "75 m2",
              subText: "Estrutura aberta (10 anos)",
            },
          ],
        },
        energy: {
          label: "Maquinário e Equipamentos (Incluídos)",
          groups: [
            {
              title: "Tratores",
              fields: [
                {
                  label: "TRATOR 1",
                  value: "New Holland",
                  class: "border-secondary",
                },
                {
                  label: "TRATOR 2",
                  value: "John Deere",
                },
              ],
            },
            {
              title: "Implementos",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Solo",
                  value: [
                    "Arado 2 corpos",
                    "Rotovator 1.20m",
                    "Grade 16 discos",
                    "Niveladora 1.20m",
                  ],
                },
                {
                  label: "Tratamento",
                  value: ["Pulverizador Pehuenche", "Máquina Herbicida"],
                },
                {
                  label: "Diversos",
                  value: [
                    "Carreta",
                    "Ferramentas manuais",
                    "Implementos variados",
                  ],
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Localização e Entorno",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "ZONA",
              value: "Agrícola",
            },
            {
              label: "ENTORNO",
              value: "Fazendas Produtivas",
            },
          ],
          groups: [
            {
              title: "Características do Entorno",
              fields: [
                {
                  label: "Vizinhança",
                  value: "Propriedades similares",
                  subText: "Estados bons e regulares",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Documentação",
          groups: [
            {
              title: "Condições de Venda",
              fields: [
                {
                  label: "PREÇO",
                  value: "USD 500.000",
                  class: "border-blueo",
                },
                {
                  label: "FINANCIAMENTO",
                  value: "Disponível",
                  subText: "Consultar condições",
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: "bodega-penedo-borges-alto-agrelo-lujan-de-cuyo",
    type: "bodega",
    price: {
      value: 4987000,
      currency: "USD",
      pricePerHectare: 71242,
    },
    hectares: 70,
    location: {
      lat: null,
      lng: null,
      address: "Ruta Internacional No 7, Km 8, Alto Agrelo",
      province: "Mendoza",
      country: "AR",
      state: "Luján de Cuyo",
    },
    images: [],
    content: {
      "es-AR": {
        title:
          "Bodega Penedo Borges - Luján de Cuyo, Mendoza",
        description: {
          text: 'Oportunidad de inversión en "Bodega Penedo Borges", un activo vitivinícola consolidado ubicado estratégicamente sobre la Ruta Internacional 7 en Alto Agrelo, Luján de Cuyo. La propiedad abarca 70 hectáreas totales, con 49.4 hectáreas netas de viñedos de alta calidad en plena producción y una infraestructura edilicia completa de 1.587 m² cubiertos.\n\nLa bodega destaca por su equipamiento tecnológico de marcas líderes (Pellenc, Siprem, Mencarelli) y una capacidad de vasija diversificada en acero inoxidable, hormigón y una importante sala de barricas. El área de enoturismo y oficinas, de 400 m², ofrece instalaciones modernas con vistas a la Cordillera, complementadas por un perfil sustentable que incluye 84 paneles solares y planta de tratamiento de efluentes.\n\nLa venta incluye la totalidad de los activos tangibles: tierras (cultivadas e incultas), construcciones civiles, maquinaria de bodega, implementos agrícolas (incluyendo tractor John Deere), mobiliario y el proyecto de expansión aprobado para nuevas naves de vendimia. Es una operación "llave en mano" de activos físicos (no incluye marcas) ideal para escalar la producción en uno de los terroirs más valorados de Mendoza.',
          callout: {
            label: "ACTIVO INTEGRAL",
            value: "70 Has / Bodega Equipada / Maquinaria / Turismo",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumen",
          },
          {
            id: "ficha-tecnica",
            label: "Capacidad y Maquinaria",
          },
          {
            id: "infraestructura",
            label: "Superficies e Instalaciones",
          },
          {
            id: "productividad",
            label: "Detalle de Viñedos",
          },
          {
            id: "ubicacion",
            label: "Ubicación",
          },
          {
            id: "documentacion",
            label: "Desglose de Tasación",
          },
          {
            id: "contacto-finca",
            label: "Contacto",
          },
        ],
        summary: [
          {
            label: "Precio Total",
            value: "4.987.000",
            extra: "USD (Tasación)",
          },
          {
            label: "Superficie Total",
            value: "70",
            extra: "Hectáreas",
          },
          {
            label: "Viñedos",
            value: "49.4",
            extra: "Hectáreas Cultivadas",
          },
          {
            label: "Edificación",
            value: "1.587",
            extra: "m² Cubiertos",
          },
          {
            label: "Energía",
            value: "84",
            extra: "Paneles Solares",
          },
          {
            label: "Agua",
            value: "Pozo 150m",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Capacidad y Maquinaria",
          groups: [
            {
              title: "Detalle de Vasijas (Acero Inoxidable)",
              fields: [
                {
                  label: "Tanques 100 hL",
                  value: "7 Unidades",
                  class: "border-secondary",
                },
                {
                  label: "Tanques 75 hL",
                  value: "6 Unidades",
                },
                {
                  label: "Tanques 50 hL",
                  value: "4 Unidades",
                },
                {
                  label: "Tanques 40 hL",
                  value: "1 Unidad",
                },
                {
                  label: "Tanques 35 hL",
                  value: "2 Unidades",
                },
                {
                  label: "Tanques 25 hL",
                  value: "2 Unidades",
                },
              ],
            },
            {
              title: "Otras Vasijas",
              fields: [
                {
                  label: "Recipientes Concreto",
                  value: "2 Unidades",
                },
                {
                  label: "Tanques Plásticos",
                  value: "31 Unidades",
                  subText: "10x10hL, 12x11hL, 9x9hL",
                },
                {
                  label: "Barricas (Inv. 2025)",
                  value: "225 Unidades",
                  subText: "Más stock años anteriores",
                },
              ],
            },
            {
              title: "Maquinaria de Bodega",
              fields: [
                {
                  label: "Recepción/Prensado",
                  value: "Prensa Neumática SIPREM 20",
                  subText: "Despalilladora Pellenc Winery + Tolva tornillo",
                },
                {
                  label: "Movimiento",
                  value: "2 Bombas Mencarelli + 1 Francesca F5 T",
                  subText: "Cintas de Selección y Elevación SIPREM",
                },
                {
                  label: "Frío/Servicios",
                  value: "Equipo Frío 75.000 Frig + Frío 21 (15CV)",
                  subText: "Equipo Bombeo Frío-Agua + Piping",
                },
                {
                  label: "Fraccionamiento",
                  value: "Etiquetadora/Capsuladora ENOS T3",
                  subText: "Lavadora botellas MPF SIRIA 12 + Cinta EB",
                },
                {
                  label: "Logística Interna",
                  value: "Autoelevador UTILEV 2.6 ton",
                  subText: "Apilador eléctrico + Hidrolavadora GHIMAQ",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Superficies e Instalaciones",
          groups: [
            {
              fields: [
                {
                  label: "Turismo y Oficinas",
                  value: "400 m²",
                  subText: "Mobiliario incluido",
                },
                {
                  label: "Nave Bodega",
                  value: "297 m²",
                  subText: "Cubierto, semi y playones",
                },
                {
                  label: "Cava",
                  value: "340 m²",
                  subText: "Con Equipo Humidificación y Montacargas",
                },
                {
                  label: "Depósitos",
                  value: "400 m²",
                  subText: "2 Galpones",
                },
                {
                  label: "Vendimia/Máquinas",
                  value: "150 m²",
                },
                {
                  label: "Galpones Finca",
                  value: "350 m²",
                  subText: "Galpón 1 (250m2) + Galpón 2 (100m2)",
                },
                {
                  label: "Energía Solar",
                  value: "84 Paneles",
                  subText: "1 x 2,5 mt cada uno + Calefones Solares",
                },
                {
                  label: "Proyecto Ampliación",
                  value: "+204 m²",
                  subText: "2 Naves nuevas y Plataforma Vendimia",
                },
              ],
            },
          ],
        },
        energy: {
          label: "Detalle de Viñedos",
          groups: [
            {
              title: "Plantaciones Antiguas (Año 2000-2007)",
              fields: [
                {
                  label: "Malbec (2000)",
                  value: "Espaldero Alto",
                  class: "border-secondary",
                  subText: "1.5m x 2.5m (120,000 m2)",
                },
                {
                  label: "Cab. Sauvignon (2000)",
                  value: "Espaldero Alto",
                  subText: "1.5m x 2.5m (90,000 m2)",
                },
                {
                  label: "Malbec (2007)",
                  value: "Espaldero Alto",
                  subText: "1.0m x 2.5m (120,000 m2)",
                },
                {
                  label: "Otras 2007",
                  value: "Syrah, Sauvignon Blanc, Chardonnay",
                  subText: "30,000 - 60,000 m2 c/u",
                },
              ],
            },
            {
              title: "Plantaciones Nuevas (2011-2022)",
              fields: [
                {
                  label: "Petit Verdot (2011)",
                  value: "20,000 m2",
                  subText: "1.5m x 2.5m",
                },
                {
                  label: "Cabernet Franc",
                  value: "2011 y 2022",
                  subText: "10,000 m2 (2011) + 11,000 m2 (2022)",
                },
                {
                  label: "Semillón (2022)",
                  value: "3,000 m2",
                  subText: "1.0m x 2.5m",
                },
              ],
            },
            {
              title: "Equipamiento Agrícola",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Tractor",
                  value: "John Deere 5603",
                  subText: "1 Unidad",
                },
                {
                  label: "Pozo de Agua",
                  value: "150 mts profundidad",
                  subText: "Bomba Grundfos 125 Hp",
                },
                {
                  label: "Reservorio",
                  value: "1 Estanque",
                  subText: "Equipo de riego incluido",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Ubicación",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "Zona",
              value: "Alto Agrelo",
            },
            {
              label: "Acceso",
              value: "Ruta Internacional 7",
            },
          ],
          groups: [
            {
              title: "Detalles",
              fields: [
                {
                  label: "Departamento",
                  value: "Luján de Cuyo",
                },
                {
                  label: "Provincia",
                  value: "Mendoza",
                },
                {
                  label: "Entorno",
                  value: "Corredor Bioceánico y Turístico",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Desglose de Tasación",
          groups: [
            {
              title: "Valores Asignados (USD)",
              fields: [
                {
                  label: "FINCA (Cultivada)",
                  value: "2.000.000 USD",
                  subText: "50 Has x 40.000 USD/Ha",
                },
                {
                  label: "EDIFICIOS BODEGA",
                  value: "1.587.000 USD",
                  subText: "1.587 m2 x 1.000 USD/m2",
                },
                {
                  label: "HERRAMIENTAS/ACCESORIOS",
                  value: "1.200.000 USD",
                  subText: "Tanques, Máquinas, Muebles",
                },
                {
                  label: "PARTE INCULTA",
                  value: "200.000 USD",
                  subText: "10 Has x 20.000 USD/Ha",
                },
                {
                  label: "TOTAL TASACIÓN",
                  value: "4.987.000 USD",
                },
                {
                  label: "Nota Importante",
                  value: "Venta de Activos Tangibles",
                  subText: "NO incluye marcas ni portafolios de vino",
                },
              ],
            },
          ],
        },
      },
      "en-US": {
        title:
          "Penedo Borges Winery: Productive Infrastructure & Tourism in Alto Agrelo",
        description: {
          text: 'Investment opportunity in "Penedo Borges Winery", a consolidated wine asset strategically located on International Route 7 in Alto Agrelo, Luján de Cuyo. The property covers 70 total hectares, with 49.4 net hectares of high-quality vineyards in full production and a complete building infrastructure of 1,587 m² (covered).\n\nThe winery stands out for its technological equipment from leading brands (Pellenc, Siprem, Mencarelli) and a diversified vessel capacity in stainless steel, concrete, and a significant barrel room. The tourism and office area, spanning 400 m², offers modern facilities with views of the Andes, complemented by a sustainable profile that includes 84 solar panels and an effluent treatment plant.\n\nThe sale includes all tangible assets: land (cultivated and uncultivated), civil constructions, winery machinery, agricultural implements (including a John Deere tractor), furniture, and the approved expansion project for new harvest halls. It is a "turnkey" operation of physical assets (brands not included), ideal for scaling production in one of Mendoza\'s most valued terroirs.',
          callout: {
            label: "COMPREHENSIVE ASSET",
            value: "70 Ha + Equipped Winery + Machinery + Tourism",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Summary",
          },
          {
            id: "ficha-tecnica",
            label: "Capacity & Machinery",
          },
          {
            id: "infraestructura",
            label: "Surfaces & Facilities",
          },
          {
            id: "productividad",
            label: "Vineyard Details",
          },
          {
            id: "ubicacion",
            label: "Location",
          },
          {
            id: "documentacion",
            label: "Valuation Breakdown",
          },
          {
            id: "contacto-finca",
            label: "Contact",
          },
        ],
        summary: [
          {
            label: "Total Price",
            value: "4,987,000",
            extra: "USD (Valuation)",
          },
          {
            label: "Total Area",
            value: "70",
            extra: "Hectares",
          },
          {
            label: "Vineyards",
            value: "49.4",
            extra: "Cultivated Hectares",
          },
          {
            label: "Building",
            value: "1,587",
            extra: "Covered m²",
          },
          {
            label: "Energy",
            value: "84",
            extra: "Solar Panels",
          },
          {
            label: "Water",
            value: "Well 150m",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Capacity & Machinery",
          groups: [
            {
              title: "Vessel Detail (Stainless Steel)",
              fields: [
                {
                  label: "100 hL Tanks",
                  value: "7 Units",
                  class: "border-secondary",
                },
                {
                  label: "75 hL Tanks",
                  value: "6 Units",
                },
                {
                  label: "50 hL Tanks",
                  value: "4 Units",
                },
                {
                  label: "40 hL Tanks",
                  value: "1 Unit",
                },
                {
                  label: "35 hL Tanks",
                  value: "2 Units",
                },
                {
                  label: "25 hL Tanks",
                  value: "2 Units",
                },
              ],
            },
            {
              title: "Other Vessels",
              fields: [
                {
                  label: "Concrete Containers",
                  value: "2 Units",
                },
                {
                  label: "Plastic Tanks",
                  value: "31 Units",
                  subText: "10x10hL, 12x11hL, 9x9hL",
                },
                {
                  label: "Barrels (2025 Inv.)",
                  value: "225 Units",
                  subText: "Plus previous years' stock",
                },
              ],
            },
            {
              title: "Winery Machinery",
              fields: [
                {
                  label: "Reception/Pressing",
                  value: "SIPREM 20 Pneumatic Press",
                  subText: "Pellenc Winery Destemmer + Screw Hopper",
                },
                {
                  label: "Movement",
                  value: "2 Mencarelli Pumps + 1 Francesca F5 T",
                  subText: "SIPREM Selection and Elevation Belts",
                },
                {
                  label: "Cooling/Services",
                  value: "75,000 Frig Cooling Unit + Frio 21 (15CV)",
                  subText: "Cold-Water Pumping Equipment + Piping",
                },
                {
                  label: "Bottling",
                  value: "ENOS T3 Labeler/Capsuler",
                  subText: "MPF SIRIA 12 Bottle Washer + EB Belt",
                },
                {
                  label: "Internal Logistics",
                  value: "UTILEV 2.6 ton Forklift",
                  subText: "Electric Stacker + GHIMAQ Pressure Washer",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Surfaces & Facilities",
          fields: [
            {
              label: "Tourism & Offices",
              value: "400 m²",
              subText: "Furniture included",
            },
            {
              label: "Winery Hall",
              value: "297 m²",
              subText: "Covered, semi, and yards",
            },
            {
              label: "Cellar (Cava)",
              value: "340 m²",
              subText: "With Humidification Equipment and Freight Elevator",
            },
            {
              label: "Warehouses",
              value: "400 m²",
              subText: "2 Sheds",
            },
            {
              label: "Harvest/Machines",
              value: "150 m²",
            },
            {
              label: "Farm Sheds",
              value: "350 m²",
              subText: "Shed 1 (250m2) + Shed 2 (100m2)",
            },
            {
              label: "Solar Energy",
              value: "84 Panels",
              subText: "1 x 2.5 mt each + Solar Water Heaters",
            },
            {
              label: "Expansion Project",
              value: "+204 m²",
              subText: "2 New halls and Harvest Platform",
            },
          ],
        },
        energy: {
          label: "Vineyard Details",
          groups: [
            {
              title: "Old Plantings (Year 2000-2007)",
              fields: [
                {
                  label: "Malbec (2000)",
                  value: "High Trellis",
                  class: "border-secondary",
                  subText: "1.5m x 2.5m (120,000 m2)",
                },
                {
                  label: "Cab. Sauvignon (2000)",
                  value: "High Trellis",
                  subText: "1.5m x 2.5m (90,000 m2)",
                },
                {
                  label: "Malbec (2007)",
                  value: "High Trellis",
                  subText: "1.0m x 2.5m (120,000 m2)",
                },
                {
                  label: "Others 2007",
                  value: "Syrah, Sauvignon Blanc, Chardonnay",
                  subText: "30,000 - 60,000 m2 each",
                },
              ],
            },
            {
              title: "New Plantings (2011-2022)",
              fields: [
                {
                  label: "Petit Verdot (2011)",
                  value: "20,000 m2",
                  subText: "1.5m x 2.5m",
                },
                {
                  label: "Cabernet Franc",
                  value: "2011 & 2022",
                  subText: "10,000 m2 (2011) + 11,000 m2 (2022)",
                },
                {
                  label: "Semillon (2022)",
                  value: "3,000 m2",
                  subText: "1.0m x 2.5m",
                },
              ],
            },
            {
              title: "Agricultural Equipment",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Tractor",
                  value: "John Deere 5603",
                  subText: "1 Unit",
                },
                {
                  label: "Water Well",
                  value: "150 mts depth",
                  subText: "Grundfos 125 Hp Pump",
                },
                {
                  label: "Reservoir",
                  value: "1 Pond",
                  subText: "Irrigation equipment included",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Location",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "Zone",
              value: "Alto Agrelo",
            },
            {
              label: "Access",
              value: "International Route 7",
            },
          ],
          groups: [
            {
              title: "Details",
              fields: [
                {
                  label: "Department",
                  value: "Luján de Cuyo",
                },
                {
                  label: "Province",
                  value: "Mendoza",
                },
                {
                  label: "Surroundings",
                  value: "Bio-oceanic & Tourism Corridor",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Valuation Breakdown",
          groups: [
            {
              title: "Assigned Values (USD)",
              fields: [
                {
                  label: "VINEYARD (Cultivated)",
                  value: "2,000,000 USD",
                  subText: "50 Ha x 40,000 USD/Ha",
                },
                {
                  label: "WINERY BUILDINGS",
                  value: "1,587,000 USD",
                  subText: "1,587 m2 x 1,000 USD/m2",
                },
                {
                  label: "TOOLS/ACCESSORIES",
                  value: "1,200,000 USD",
                  subText: "Tanks, Machinery, Furniture",
                },
                {
                  label: "UNCULTIVATED LAND",
                  value: "200,000 USD",
                  subText: "10 Ha x 20,000 USD/Ha",
                },
                {
                  label: "TOTAL VALUATION",
                  value: "4,987,000 USD",
                },
                {
                  label: "Important Note",
                  value: "Sale of Tangible Assets",
                  subText: "Does NOT include brands or wine portfolios",
                },
              ],
            },
          ],
        },
      },
      "pt-BR": {
        title:
          "Vinícola Penedo Borges: Infraestrutura Produtiva e Enoturismo em Alto Agrelo",
        description: {
          text: 'Oportunidade de investimento na "Vinícola Penedo Borges", um ativo vitivinícola consolidado localizado estrategicamente na Rota Internacional 7 em Alto Agrelo, Luján de Cuyo. A propriedade abrange 70 hectares totais, com 49,4 hectares líquidos de vinhedos de alta qualidade em plena produção e uma infraestrutura de construção completa de 1.587 m² cobertos.\n\nA vinícola se destaca pelo seu equipamento tecnológico de marcas líderes (Pellenc, Siprem, Mencarelli) e uma capacidade de vasilhame diversificada em aço inoxidável, concreto e uma importante sala de barricas. A área de enoturismo e escritórios, de 400 m², oferece instalações modernas com vista para a Cordilheira, complementadas por um perfil sustentável que inclui 84 painéis solares e estação de tratamento de efluentes.\n\nA venda inclui a totalidade dos ativos tangíveis: terras (cultivadas e incultas), construções civis, maquinaria de vinícola, implementos agrícolas (incluindo trator John Deere), mobiliário e o projeto de expansão aprovado para novos galpões de vindima. É uma operação "chave na mão" de ativos físicos (não inclui marcas) ideal para escalar a produção em um dos terroirs mais valorizados de Mendoza.',
          callout: {
            label: "ATIVO INTEGRAL",
            value: "70 Ha + Vinícola Equipada + Maquinaria + Turismo",
          },
        },
        sections: [
          {
            id: "resumen",
            label: "Resumo",
          },
          {
            id: "ficha-tecnica",
            label: "Capacidade e Maquinaria",
          },
          {
            id: "infraestructura",
            label: "Superfícies e Instalações",
          },
          {
            id: "productividad",
            label: "Detalhe de Vinhedos",
          },
          {
            id: "ubicacion",
            label: "Localização",
          },
          {
            id: "documentacion",
            label: "Detalhamento da Avaliação",
          },
          {
            id: "contacto-finca",
            label: "Contato",
          },
        ],
        summary: [
          {
            label: "Preço Total",
            value: "4.987.000",
            extra: "USD (Avaliação)",
          },
          {
            label: "Área Total",
            value: "70",
            extra: "Hectares",
          },
          {
            label: "Vinhedos",
            value: "49.4",
            extra: "Hectares Cultivados",
          },
          {
            label: "Edificação",
            value: "1.587",
            extra: "m² Cobertos",
          },
          {
            label: "Energia",
            value: "84",
            extra: "Painéis Solares",
          },
          {
            label: "Água",
            value: "Poço 150m",
            class: "text-lg mt-4",
          },
        ],
        techSpecs: {
          label: "Capacidade e Maquinaria",
          groups: [
            {
              title: "Detalhe de Vasilhame (Aço Inoxidável)",
              fields: [
                {
                  label: "Tanques 100 hL",
                  value: "7 Unidades",
                  class: "border-secondary",
                },
                {
                  label: "Tanques 75 hL",
                  value: "6 Unidades",
                },
                {
                  label: "Tanques 50 hL",
                  value: "4 Unidades",
                },
                {
                  label: "Tanques 40 hL",
                  value: "1 Unidade",
                },
                {
                  label: "Tanques 35 hL",
                  value: "2 Unidades",
                },
                {
                  label: "Tanques 25 hL",
                  value: "2 Unidades",
                },
              ],
            },
            {
              title: "Outros Vasilhames",
              fields: [
                {
                  label: "Recipientes Concreto",
                  value: "2 Unidades",
                },
                {
                  label: "Tanques Plásticos",
                  value: "31 Unidades",
                  subText: "10x10hL, 12x11hL, 9x9hL",
                },
                {
                  label: "Barricas (Inv. 2025)",
                  value: "225 Unidades",
                  subText: "Mais estoque de anos anteriores",
                },
              ],
            },
            {
              title: "Maquinaria de Vinícola",
              fields: [
                {
                  label: "Recepção/Prensagem",
                  value: "Prensa Pneumática SIPREM 20",
                  subText: "Desengaçadeira Pellenc Winery + Tremonha parafuso",
                },
                {
                  label: "Movimento",
                  value: "2 Bombas Mencarelli + 1 Francesca F5 T",
                  subText: "Esteiras de Seleção e Elevação SIPREM",
                },
                {
                  label: "Frio/Serviços",
                  value: "Equip. Frio 75.000 Frig + Frio 21 (15CV)",
                  subText: "Equip. Bombeamento Frio-Água + Tubulação",
                },
                {
                  label: "Engarrafamento",
                  value: "Rotuladora/Capsuladora ENOS T3",
                  subText: "Lavadora garrafas MPF SIRIA 12 + Esteira EB",
                },
                {
                  label: "Logística Interna",
                  value: "Empilhadeira UTILEV 2.6 ton",
                  subText: "Empilhadeira elétrica + Lavadora pressão GHIMAQ",
                },
              ],
            },
          ],
        },
        improvements: {
          label: "Superfícies e Instalações",
          fields: [
            {
              label: "Turismo e Escritórios",
              value: "400 m²",
              subText: "Mobiliário incluído",
            },
            {
              label: "Galpão Vinícola",
              value: "297 m²",
              subText: "Coberto, semi e pátios",
            },
            {
              label: "Adega (Cava)",
              value: "340 m²",
              subText: "Com Equip. Umidificação e Monta-cargas",
            },
            {
              label: "Depósitos",
              value: "400 m²",
              subText: "2 Galpões",
            },
            {
              label: "Vindima/Máquinas",
              value: "150 m²",
            },
            {
              label: "Galpões Fazenda",
              value: "350 m²",
              subText: "Galpão 1 (250m2) + Galpão 2 (100m2)",
            },
            {
              label: "Energia Solar",
              value: "84 Painéis",
              subText: "1 x 2,5 mt cada + Aquecedores Solares",
            },
            {
              label: "Projeto Expansão",
              value: "+204 m²",
              subText: "2 Novos galpões e Plataforma Vindima",
            },
          ],
        },
        energy: {
          label: "Detalhe de Vinhedos",
          groups: [
            {
              title: "Plantações Antigas (Ano 2000-2007)",
              fields: [
                {
                  label: "Malbec (2000)",
                  value: "Espaldeira Alta",
                  class: "border-secondary",
                  subText: "1.5m x 2.5m (120,000 m2)",
                },
                {
                  label: "Cab. Sauvignon (2000)",
                  value: "Espaldeira Alta",
                  subText: "1.5m x 2.5m (90,000 m2)",
                },
                {
                  label: "Malbec (2007)",
                  value: "Espaldeira Alta",
                  subText: "1.0m x 2.5m (120,000 m2)",
                },
                {
                  label: "Outras 2007",
                  value: "Syrah, Sauvignon Blanc, Chardonnay",
                  subText: "30,000 - 60,000 m2 cada",
                },
              ],
            },
            {
              title: "Plantações Novas (2011-2022)",
              fields: [
                {
                  label: "Petit Verdot (2011)",
                  value: "20,000 m2",
                  subText: "1.5m x 2.5m",
                },
                {
                  label: "Cabernet Franc",
                  value: "2011 e 2022",
                  subText: "10,000 m2 (2011) + 11,000 m2 (2022)",
                },
                {
                  label: "Semillón (2022)",
                  value: "3,000 m2",
                  subText: "1.0m x 2.5m",
                },
              ],
            },
            {
              title: "Equipamento Agrícola",
              borderColor: "border-indigo-900",
              fields: [
                {
                  label: "Trator",
                  value: "John Deere 5603",
                  subText: "1 Unidade",
                },
                {
                  label: "Poço de Água",
                  value: "150 mts profundidade",
                  subText: "Bomba Grundfos 125 Hp",
                },
                {
                  label: "Reservatório",
                  value: "1 Tanque",
                  subText: "Equipamento de irrigação incluído",
                },
              ],
            },
          ],
        },
        locationDetails: {
          label: "Localização",
          map: {
            lat: null,
            lng: null,
          },
          featured: [
            {
              label: "Zona",
              value: "Alto Agrelo",
            },
            {
              label: "Acesso",
              value: "Rota Internacional 7",
            },
          ],
          groups: [
            {
              title: "Detalhes",
              fields: [
                {
                  label: "Departamento",
                  value: "Luján de Cuyo",
                },
                {
                  label: "Província",
                  value: "Mendoza",
                },
                {
                  label: "Entorno",
                  value: "Corredor Bioceânico e Turístico",
                },
              ],
            },
          ],
        },
        legal: {
          label: "Detalhamento da Avaliação",
          groups: [
            {
              title: "Valores Atribuídos (USD)",
              fields: [
                {
                  label: "VINHEDO (Cultivado)",
                  value: "2.000.000 USD",
                  subText: "50 Ha x 40.000 USD/Ha",
                },
                {
                  label: "EDIFÍCIOS VINÍCOLA",
                  value: "1.587.000 USD",
                  subText: "1.587 m2 x 1.000 USD/m2",
                },
                {
                  label: "FERRAMENTAS/ACESSÓRIOS",
                  value: "1.200.000 USD",
                  subText: "Tanques, Máquinas, Móveis",
                },
                {
                  label: "TERRA INCULTA",
                  value: "200.000 USD",
                  subText: "10 Ha x 20.000 USD/Ha",
                },
                {
                  label: "TOTAL AVALIAÇÃO",
                  value: "4.987.000 USD",
                },
                {
                  label: "Nota Importante",
                  value: "Venda de Ativos Tangíveis",
                  subText: "NÃO inclui marcas nem portfólios de vinho",
                },
              ],
            },
          ],
        },
      },
    },
  },
];
