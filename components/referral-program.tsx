"use client"

import Image from "next/image"
import { Users, Gift, ArrowRight } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function ReferralProgram() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-raicesBlue to-blue-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white font-heading">Programa de Referidos</h2>
              </div>

              <p className="text-white/90 text-lg mb-8">
                Recomienda RAICES a tus amigos y familiares y obtén beneficios exclusivos. Por cada referido que
                contrate nuestros servicios, ambos recibirán un mes gratis. ¡Es increíblemente sencillo!
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">¿Cómo funciona?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white font-medium">1</span>
                    </div>
                    <p className="text-white/90">
                      Comparte tu nombre completo con amigos y familiares que aún no tengan RAICES.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white font-medium">2</span>
                    </div>
                    <p className="text-white/90">
                      Tu amigo solo debe mencionar tu nombre completo al contratar cualquier plan. ¡Así de fácil!
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white font-medium">3</span>
                    </div>
                    <p className="text-white/90">
                      Ambos recibirán un mes gratis automáticamente. ¡No hay límite de referidos!
                    </p>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        "Hola, me gustaría participar en el programa de referidos. ¿Podrían confirmarme que solo necesito compartir mi nombre completo?",
                      ),
                      "_blank",
                    )
                  }}
                  className="bg-white hover:bg-gray-100 text-raicesBlue font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Participar Ahora
                </button>
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        "Hola, me gustaría obtener más información sobre el programa de referidos. ¿Podrían explicarme cómo funciona?",
                      ),
                      "_blank",
                    )
                  }}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-8 rounded-lg transition-colors flex items-center"
                >
                  <span>Más Información</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative h-full">
              <Image
                src="/referral-program.png"
                alt="Programa de referidos"
                width={600}
                height={600}
                className="object-cover h-full w-full"
              />
              <div className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <Gift className="h-5 w-5 text-raicesRed mr-2" />
                  <h3 className="font-bold text-gray-800">¡Un mes GRATIS!</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Solo comparte tu nombre completo. Sin códigos complicados, sin aplicaciones. ¡Así de simple!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
