"use client"

import { Clock } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function OfertasHero() {
  return (
    <section className="relative bg-gradient-to-r from-raicesBlue to-blue-700 py-16 md:py-24 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium text-sm">Ofertas por tiempo limitado</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-md">
            Ofertas y Promociones <span className="text-yellow-300">Exclusivas</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Aprovecha nuestras promociones especiales y obtén beneficios únicos al contratar nuestros servicios de
            internet y televisión.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                window.open(
                  getWhatsAppLink(
                    "Hola, estoy interesado en conocer todas las ofertas disponibles. ¿Podrían brindarme más información?",
                  ),
                  "_blank",
                )
              }}
              className="bg-white hover:bg-gray-100 text-raicesBlue font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Todas las Ofertas
            </button>
            <button
              onClick={() => {
                window.open(
                  getWhatsAppLink(
                    "Hola, me gustaría consultar la disponibilidad de las ofertas en mi zona. Mi dirección es: ",
                  ),
                  "_blank",
                )
              }}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  )
}
