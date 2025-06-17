"use client"

import Image from "next/image"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function ReferralVisual() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Programa de Referidos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recomienda RAICES a tus amigos y familiares y obtén beneficios exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/referral-share-app.png"
              alt="Comparte tu nombre"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-raicesBlue flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-bold text-xl mb-2">Comparte tu Nombre</h3>
              <p className="text-white/80 text-sm">
                Simplemente comparte tu nombre completo con amigos y familiares que aún no tengan RAICES.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/signing-up-online.png"
              alt="Tu amigo contrata"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-raicesBlue flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-bold text-xl mb-2">Tu Amigo Contrata</h3>
              <p className="text-white/80 text-sm">
                Tu amigo solo debe mencionar tu nombre completo al contratar cualquier plan. ¡Así de fácil!
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/connected-celebration.png"
              alt="Ambos ganan"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-raicesBlue flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-bold text-xl mb-2">Ambos Ganan</h3>
              <p className="text-white/80 text-sm">
                Ambos recibirán un mes gratis automáticamente. ¡No hay límite de referidos!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              window.open(
                getWhatsAppLink(
                  "Hola, me gustaría participar en el programa de referidos. ¿Podrían confirmarme que solo necesito compartir mi nombre completo?",
                ),
                "_blank",
              )
            }}
            className="bg-raicesBlue hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
          >
            Participar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}
