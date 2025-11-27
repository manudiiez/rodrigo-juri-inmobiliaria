'use client';

import { useState, useMemo } from 'react';
import FilterBar, { PropertyFilters } from './FilterBar';
import PropertyCard from './PropertyCard';

// Mock data - Replace with actual API call
const allProperties = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80'
    ],
    title: 'Finca Premium con Viñedo Productivo',
    price: '$12.500.000',
    beds: 5,
    baths: 4,
    totalArea: '500 ha',
    location: 'Tupungato, Valle de Uco, Mendoza',
    description: 'Finca premium con 500 hectáreas de las cuales 180 están plantadas con viñedos de alta calidad enológica. Incluye bodega operativa, casa principal de lujo, casa de huéspedes y todas las instalaciones necesarias para producción vitivinícola de excelencia.',
    type: 'Finca',
    soilType: 'Franco-Arenoso',
    irrigation: 'Riego por Goteo',
    features: ['Viñedo Productivo 180ha', 'Bodega Equipada', 'Casa Principal', 'Casa de Huéspedes', 'Piscina', 'Establo'],
    isPromoted: true,
    priceValue: 12500000
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80'
    ],
    title: 'Terreno Exclusivo con Vista a Los Andes',
    price: '$2.800.000',
    totalArea: '150 ha',
    location: 'San Carlos, Valle de Uco, Mendoza',
    description: 'Terreno excepcional con 150 hectáreas totalmente aptas para desarrollo vitivinícola. Acceso directo por ruta pavimentada, todos los servicios disponibles y vistas panorámicas incomparables a la cordillera de Los Andes.',
    type: 'Terreno',
    soilType: 'Franco',
    irrigation: 'Derechos de Riego',
    features: ['Vista a Los Andes', 'Acceso Pavimentado', 'Derechos de Agua', 'Luz Trifásica', 'Gas Natural', 'Apto Viñedo'],
    isPromoted: true,
    priceValue: 2800000
  },
  {
    id: 3,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472549-e86e8a4b8a7d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ],
    title: 'Campo Ganadero con Instalaciones Completas',
    price: '$4.200.000',
    beds: 4,
    baths: 3,
    totalArea: '800 ha',
    location: 'Tunuyán, Valle de Uco, Mendoza',
    description: 'Campo ganadero de 800 hectáreas en plena producción con instalaciones modernas. Corrales de última generación, manga, báscula electrónica y casa principal completamente equipada. Ideal para producción ganadera intensiva y agricultura.',
    type: 'Campo',
    soilType: 'Franco-Limoso',
    irrigation: 'Canal de Riego',
    features: ['Corrales Modernos', 'Manga y Báscula', 'Casa Principal 4 Hab', 'Galpones 2000m²', '5 Pozos de Agua', 'Alambrado Completo'],
    isPromoted: false,
    priceValue: 4200000
  },
  {
    id: 4,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80'
    ],
    title: 'Finca Boutique con Bodega y Lodge',
    price: '$8.900.000',
    beds: 8,
    baths: 6,
    totalArea: '250 ha',
    location: 'San Carlos, Valle de Uco, Mendoza',
    description: 'Finca boutique de 250 hectáreas en pleno funcionamiento con bodega moderna, 120 hectáreas de viñedos premium y lodge enoturístico de 6 suites. Negocio consolidado con producción propia certificada y enoturismo de alta gama.',
    type: 'Finca',
    soilType: 'Franco-Arcilloso',
    irrigation: 'Riego Tecnificado',
    features: ['Bodega Operativa', 'Lodge 6 Suites', 'Viñedos Premium 120ha', 'Restaurante Gourmet', 'Spa', 'Helipuerto'],
    isPromoted: true,
    priceValue: 8900000
  },
  {
    id: 5,
    images: [
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80'
    ],
    title: 'Terreno Desarrollo Vitivinícola Premium',
    price: '$1.950.000',
    totalArea: '80 ha',
    location: 'Tupungato, Valle de Uco, Mendoza',
    description: 'Terreno de 80 hectáreas ideal para desarrollo vitivinícola en zona de alta calidad enológica. Suelo franco con óptimo drenaje y microclima excepcional. Proyecto técnico aprobado para plantación de 60 hectáreas de viñedos premium.',
    type: 'Terreno',
    soilType: 'Franco con Drenaje',
    irrigation: 'Pozo y Canal',
    features: ['Zona Enológica Premium', 'Proyecto Aprobado 60ha', 'Derechos de Agua', 'Acceso Asfaltado', 'Luz Disponible', 'Estudios Completos'],
    isPromoted: false,
    priceValue: 1950000
  },
  {
    id: 6,
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
      'https://images.unsplash.com/photo-1542652694-40abf526446e?w=1200&q=80',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1200&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80'
    ],
    title: 'Campo Mixto con Río y Forestación',
    price: '$3.600.000',
    beds: 3,
    baths: 2,
    totalArea: '650 ha',
    location: 'San Rafael, Mendoza',
    description: 'Campo mixto de 650 hectáreas con 400 hectáreas de forestación productiva, río cristalino que atraviesa la propiedad, y 250 hectáreas aptas para agricultura. Casa de campo completamente remodelada con todas las comodidades.',
    type: 'Campo',
    soilType: 'Mixto',
    irrigation: 'Río Natural',
    features: ['Río Propio 2km', 'Forestación 400ha', 'Casa Remodelada 3 Hab', 'Galpones 1500m²', 'Tranqueras', 'Caminos Internos'],
    isPromoted: false,
    priceValue: 3600000
  },
  {
    id: 7,
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-e92ec0086845?w=1200&q=80'
    ],
    title: 'Finca Colonial Restaurada con Historia',
    price: '$6.500.000',
    beds: 6,
    baths: 5,
    totalArea: '180 ha',
    location: 'Luján de Cuyo, Mendoza',
    description: 'Finca histórica de 180 hectáreas del siglo XIX completamente restaurada, manteniendo su arquitectura colonial original. Cuenta con 90 hectáreas de viñedos centenarios, bodega histórica restaurada y un parque patrimonial con árboles añosos.',
    type: 'Finca',
    soilType: 'Aluvial',
    irrigation: 'Sistema Mixto',
    features: ['Arquitectura Colonial S.XIX', 'Bodega Histórica', 'Viñedos Centenarios 90ha', 'Parque 15ha', 'Casa 6 Hab', 'Capilla'],
    isPromoted: false,
    priceValue: 6500000
  },
  {
    id: 8,
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80'
    ],
    title: 'Terreno Urbano con Proyecto Aprobado',
    price: '$850.000',
    totalArea: '12 ha',
    location: 'Chacras de Coria, Mendoza',
    description: 'Terreno urbano de 12 hectáreas con todos los servicios instalados y proyecto aprobado para desarrollo residencial de 30 lotes premium. Ubicación estratégica a minutos de bodegas reconocidas y zona comercial consolidada.',
    type: 'Terreno',
    soilType: 'Urbano',
    irrigation: 'Red Municipal',
    features: ['Proyecto 30 Lotes', 'Todos los Servicios', 'Zona Premium', 'Acceso Asfaltado', 'Cerca de Bodegas', 'Comercio Cercano'],
    isPromoted: false,
    priceValue: 850000
  }
];

export default function PropertiesListPage() {
  const [filters, setFilters] = useState<PropertyFilters>({
    type: 'all',
    priceRange: 'all',
    sortBy: 'premium'
  });

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...allProperties];

    // Filter by type
    if (filters.type !== 'all') {
      result = result.filter(prop => prop.type.toLowerCase() === filters.type);
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(v => {
        if (v.includes('+')) return [parseInt(v.replace('+', '')), Infinity];
        return parseInt(v);
      }).flat();

      result = result.filter(prop => {
        const price = prop.priceValue;
        return price >= min && (max === Infinity || price <= max);
      });
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-desc':
        result.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case 'price-asc':
        result.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case 'newest':
        // Keep original order (newest first)
        break;
      case 'premium':
      default:
        result.sort((a, b) => (b.isPromoted ? 1 : 0) - (a.isPromoted ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Filter Bar */}
      <FilterBar
        onFilterChange={setFilters}
        totalResults={filteredProperties.length}
      />

      {/* Properties List */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-8">
        <div className="space-y-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-2xl font-serif text-gray-900 mb-2">No se encontraron propiedades</h3>
            <p className="text-gray-600">Intenta ajustar los filtros para ver más resultados</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12 pb-12">
            <button className="px-8 py-4 bg-white border-2 border-bordeaux-dark text-bordeaux-dark rounded-lg hover:bg-bordeaux-dark hover:text-white transition-all duration-300 font-medium">
              Cargar Más Propiedades
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
