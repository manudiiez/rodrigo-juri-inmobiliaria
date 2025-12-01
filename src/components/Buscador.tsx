"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Buscador() {
  const [activeTab, setActiveTab] = useState("comprar");
  const [search, setSearch] = useState("Valle de Uco, Mendoza");
  const route = useRouter();

  return (
    <div className="w-full pt-3 lg:pl-4 bg-bordeaux-dark">
      {/* Tabs */}
      <div className="flex flex-wrap gap-8 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-slate-300">
        {/* Tab activo */}
        <button
          type="button"
          className={`relative pb-2 ${
            activeTab === "comprar"
              ? "text-white"
              : "hover:text-white transition-colors cursor-pointer"
          }`}
          onClick={() => setActiveTab("comprar")}
        >
          Comprar
          {activeTab === "comprar" && (
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#E2B34C]" />
          )}
        </button>

        <button
          type="button"
          className={`relative pb-2 hover:text-white transition-colors cursor-pointer`}
          onClick={() => route.push('/vender')}
        >
          Vender
        </button>

        <button
          type="button"
          className={`relative pb-2 hover:text-white transition-colors cursor-pointer`}
          onClick={() => route.push('/vender#contacto')}
        >
          Contactar
        </button>
      </div>

      {/* Buscador */}
      <div className="mt-6 flex items-center gap-3 border-b border-slate-500 pb-3">
        {/* Icono lupa */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-slate-300"
          >
            <path
              d="M10.5 4a6.5 6.5 0 0 1 5.184 10.398l3.959 3.958a1 1 0 0 1-1.414 1.414l-3.958-3.959A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Input / país */}
        <input
          type="text"
          value={search}
          placeholder="Buscar ubicación"
          className="flex-1 bg-transparent text-base md:text-lg outline-none placeholder:text-slate-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Flecha derecha */}
        <button
          type="button"
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-500 hover:bg-slate-100/10 transition-colors cursor-pointer"
          onClick={() => route.push(`/propiedades?search=${search}`)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-slate-200"
          >
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
