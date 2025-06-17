"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function OfertasShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ofertas Exclusivas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprovecha estas increíbles promociones por tiempo limitado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Oferta 1 - Simplified design */}
          <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <Image
              src="/security-camera-offer.png"
              alt="Cámara de Seguridad Gratis"
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-raicesBlue text-white text-xs font-bold px-3 py-1 rounded-full">
              DESTACADO
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-bold text-xl mb-2">Cámara de Seguridad GRATIS</h3>
              <p className="text-white/90 text-sm mb-4 line-clamp-2">
                Contrata nuestro plan de 500 Megas y recibe GRATIS una cámara de videovigilancia WiFi HD.
              </p>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta de la cámara de seguridad gratis. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="flex items-center text-white bg-raicesRed hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Aprovechar Oferta</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Oferta 2 - Simplified design */}
          <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <Image
              src="/50-percent-discount.png"
              alt="50% de Descuento"
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              NUEVO
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-bold text-xl mb-2">50% OFF Primer Mes</h3>
              <p className="text-white/90 text-sm mb-4 line-clamp-2">
                Contrata cualquiera de nuestros planes combinados y obtén un 50% de descuento en tu primer mes.
              </p>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta del 50% de descuento en el primer mes. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="flex items-center text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Aprovechar Oferta</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
