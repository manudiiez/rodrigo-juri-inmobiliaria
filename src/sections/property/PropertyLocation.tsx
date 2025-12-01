interface UbicacionYAccesos {
  accesoPrincipal: string;
  distanciaAMendozaKm: number;
  coordenadas: {
    lat: number;
    lng: number;
  };
}

interface ServiciosCercanos {
  centroUrbanoKm: number;
  bodegasKm: string;
  cooperativaKm: number;
  escuelaKm: number;
  hospitalKm: number;
  aeropuertoKm: number;
}

interface PropertyLocationProps {
  ubicacionYAccesos: UbicacionYAccesos;
  serviciosCercanos: ServiciosCercanos;
}

export default function PropertyLocation({
  ubicacionYAccesos,
  serviciosCercanos,
}: PropertyLocationProps) {
  return (
    <section id="ubicacion" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
        Ubicación y Accesos
      </h2>

      {/* Mapa placeholder */}
      <div className="bg-gray-200 h-96 flex items-center justify-center mb-8">
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-500">Mapa interactivo</p>
          <p className="text-xs text-gray-400 mt-1">
            Lat: {ubicacionYAccesos.coordenadas.lat}, Lng:{" "}
            {ubicacionYAccesos.coordenadas.lng}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Acceso Principal
          </p>
          <p className="text-lg text-gray-900">
            {ubicacionYAccesos.accesoPrincipal}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Distancia a Mendoza
          </p>
          <p className="text-lg text-gray-900">
            {ubicacionYAccesos.distanciaAMendozaKm} km
          </p>
        </div>
      </div>

      <h4 className="text-xl font-light text-gray-900 mb-4">
        Servicios Cercanos
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-700">Centro Urbano</span>
          <span className="text-gray-900 font-medium">
            {serviciosCercanos.centroUrbanoKm} km
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-700">Bodegas</span>
          <span className="text-gray-900 font-medium">
            {serviciosCercanos.bodegasKm}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-700">Cooperativa</span>
          <span className="text-gray-900 font-medium">
            {serviciosCercanos.cooperativaKm} km
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-700">Escuela</span>
          <span className="text-gray-900 font-medium">
            {serviciosCercanos.escuelaKm} km
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-700">Hospital</span>
          <span className="text-gray-900 font-medium">
            {serviciosCercanos.hospitalKm} km
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-700">Aeropuerto</span>
          <span className="text-gray-900 font-medium">
            {serviciosCercanos.aeropuertoKm} km
          </span>
        </div>
      </div>
    </section>
  );
}
