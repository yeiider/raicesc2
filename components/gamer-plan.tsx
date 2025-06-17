"use client"

import Image from "next/image"
import { Gamepad2, Zap, Clock, Wifi, Shield } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function GamerPlan() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/gamer-setup.png')] bg-cover bg-center"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-raicesRed/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-raicesBlue/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-raicesRed via-purple-600 to-raicesBlue rounded-2xl blur-lg opacity-70"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/ultimate-gaming-battlestation.png"
                  alt="Setup Gamer"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/rgb-gaming-setup.png"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <Gamepad2 className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Plan Gamer 400</h2>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Diseñado especialmente para gamers que exigen el máximo rendimiento. Baja latencia, alta velocidad y
              estabilidad garantizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-raicesRed/20 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-raicesRed" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">400 Megas Simétricos</h3>
                    <p className="text-sm text-gray-300">Misma velocidad de subida y bajada</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-raicesBlue/20 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-raicesBlue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Baja Latencia</h3>
                    <p className="text-sm text-gray-300">Menos de 20ms para gaming competitivo</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                    <Wifi className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Router Gaming</h3>
                    <p className="text-sm text-gray-300">Optimizado para juegos online</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Soporte Prioritario</h3>
                    <p className="text-sm text-gray-300">Asistencia técnica 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="text-4xl font-bold text-white mr-4">
                $105.000<span className="text-sm font-normal text-gray-400">/mes</span>
              </div>
              <div className="bg-raicesRed/20 text-raicesRed text-sm font-medium px-3 py-1 rounded-full">
                Instalación Gratuita
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en contratar el Plan Gamer 400. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="bg-gradient-to-r from-raicesRed to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contratar Ahora
              </button>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, me gustaría conocer más detalles sobre el Plan Gamer 400. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
