"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InternetPlans } from "@/components/internet-plans"
import { FiberExplanation } from "@/components/fiber-explanation"
import { GamerPlan } from "@/components/gamer-plan"
import { CompactCoverage } from "@/components/compact-coverage"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import Image from "next/image"

export default function InternetPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Reducido en tamaño */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Imagen de fondo tecnológica/futurista */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/futuristic-network.png"
            alt="Tecnología futurista - Tu conexión al futuro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div> {/* Overlay para mejorar legibilidad */}
        </div>

        {/* Efectos decorativos */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-cyan-500/20 blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading leading-tight drop-shadow-md">
              Tu Conexión al{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Futuro</span>
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl">
              Conecta tu hogar con la mejor tecnología de fibra óptica. Disfruta de velocidad inigualable, estabilidad
              garantizada y soporte técnico 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en los planes de internet. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Planes
              </button>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, me gustaría conocer más sobre la tecnología de fibra óptica que ofrecen. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Conocer Más
              </button>
            </div>
          </div>
        </div>

        {/* Elementos decorativos adicionales */}
        <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      </section>

      <FiberExplanation />
      <InternetPlans />
      <GamerPlan />
      <CompactCoverage />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
