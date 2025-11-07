"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2  gap-16 sm:gap-8">
          {/* Left Content */}
          <div className="space-y-8 pt-12">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight text-gray-900">
              {/* {t("title")} */}
              Compra la finca
              <br />
              <span className="block mt-2">De tus sueños.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              harum eos accusantium amet nemo est?
            </p>

            <button className="px-10 py-3 bg-black text-white rounded hover:bg-bordeaux transition-colors font-medium text-lg cursor-pointer">
              Comenzar
            </button>

            {/* Statistics */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  153
                  <span className="text-bordeaux-dark ml-2">+</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Fincas en venta
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-gray-900">
                  20
                  <span className="text-bordeaux-dark ml-2">+</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Clientes felices
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-gray-900">
                  5<span className="text-bordeaux-dark ml-2">+</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Años como el mejor vendedor
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[650px]">
            <div className="relative h-full w-full">
              <div className="h-full w-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <img src="./images/hero.jpg" alt="" className="w-full h-full object-cover object-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
