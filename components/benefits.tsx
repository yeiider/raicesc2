"use client"

import { Check, Clock, Gift } from "lucide-react"
import Image from "next/image"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform perspective-1000">
          {/* Fondo con efecto 3D */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-raicesBlue to-blue-700 transform rotate-x-1 z-0"></div>

          {/* Elementos decorativos para efecto 3D */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-400/10 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10 blur-md"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center p-2">
            {/* Imagen con efecto 3D */}
            <div className="md:w-1/3 p-6 flex justify-center">
              <div className="relative w-64 h-64 md:w-full md:h-auto transform transition-transform hover:scale-105 hover:rotate-2">
                <div className="absolute inset-0 bg-white/10 rounded-xl -m-2 blur-sm"></div>
                <Image
                  src="/interconnected-roots-network.png"
                  alt="Beneficios de RAICES"
                  width={300}
                  height={300}
                  className="object-contain relative z-10 drop-shadow-xl"
                />
              </div>
            </div>

            {/* Contenido con efecto de profundidad */}
            <div className="md:w-2/3 p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white drop-shadow-md">
                La mejor elección para tu conectividad
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Descubre por qué miles de familias confían en RAICES para mantenerse conectados con lo que más importa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Tarjetas con efecto 3D */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Sin Cláusula de Permanencia</h3>
                      <p className="text-sm text-white/80">Libertad total sin compromisos a largo plazo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Instalación Rápida</h3>
                      <p className="text-sm text-white/80">Conectamos tu hogar en tiempo récord</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Gift className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Ofertas Todo el Tiempo</h3>
                      <p className="text-sm text-white/80">Promociones exclusivas para nuestros clientes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        "Hola, estoy interesado en contratar los servicios de RAICES. ¿Podrían brindarme más información sobre los planes disponibles?",
                      ),
                      "_blank",
                    )
                  }}
                  className="bg-white text-raicesBlue py-3 px-8 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-0.5"
                >
                  Contrata Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
