"use client"

import Image from "next/image"
import { Users, ArrowRight, Check } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function CompactReferralProgram() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-raicesBlue to-blue-600 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Información principal - Ocupa 1/3 en desktop */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">Programa de Referidos</h2>
              </div>

              <p className="text-white/90 text-base mb-6">
                Recomienda RAICES a tus amigos y familiares. Por cada referido que contrate nuestros servicios, ambos
                recibirán un mes gratis.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold text-white mb-2">¿Cómo participar?</h3>
                <p className="text-white/90 text-sm">
                  <span className="font-bold">¡Es muy simple!</span> Tu amigo solo debe mencionar tu nombre completo al
                  contratar cualquier plan.
                </p>
              </div>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, me gustaría participar en el programa de referidos. ¿Podrían confirmarme que solo necesito compartir mi nombre completo?",
                    ),
                    "_blank",
                  )
                }}
                className="bg-white hover:bg-gray-100 text-raicesBlue font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span>Participar Ahora</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Pasos visuales - Ocupa 2/3 en desktop */}
            <div className="col-span-2 bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Paso 1 */}
                <div className="bg-gray-50 rounded-lg p-4 relative hover:shadow-md transition-shadow">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-raicesBlue flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                  <div className="mb-3 h-32 relative rounded-lg overflow-hidden">
                    <Image src="/referral-share-app.png" alt="Comparte tu nombre" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Comparte tu nombre</h3>
                  <p className="text-gray-600 text-sm">
                    Simplemente comparte tu nombre completo con amigos y familiares.
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="bg-gray-50 rounded-lg p-4 relative hover:shadow-md transition-shadow">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-raicesBlue flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                  <div className="mb-3 h-32 relative rounded-lg overflow-hidden">
                    <Image src="/signing-up-online.png" alt="Tu amigo contrata" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Tu amigo contrata</h3>
                  <p className="text-gray-600 text-sm">Tu amigo solo menciona tu nombre al contratar cualquier plan.</p>
                </div>

                {/* Paso 3 */}
                <div className="bg-gray-50 rounded-lg p-4 relative hover:shadow-md transition-shadow">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-raicesBlue flex items-center justify-center text-white font-bold shadow-md">
                    3
                  </div>
                  <div className="mb-3 h-32 relative rounded-lg overflow-hidden">
                    <Image src="/connected-celebration.png" alt="Ambos ganan" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Ambos ganan</h3>
                  <p className="text-gray-600 text-sm">Ambos reciben un mes gratis automáticamente. ¡Sin límites!</p>
                </div>
              </div>

              {/* Beneficios adicionales */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-2 flex-shrink-0">
                    <Check className="h-4 w-4 text-raicesBlue" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Sin códigos complicados</span> - Solo tu nombre completo
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-2 flex-shrink-0">
                    <Check className="h-4 w-4 text-raicesBlue" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Sin límite de referidos</span> - Refiere a cuantos quieras
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-2 flex-shrink-0">
                    <Check className="h-4 w-4 text-raicesBlue" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Beneficio inmediato</span> - Se aplica en la siguiente factura
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-2 flex-shrink-0">
                    <Check className="h-4 w-4 text-raicesBlue" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Válido para todos los planes</span> - Internet, TV o combinados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
