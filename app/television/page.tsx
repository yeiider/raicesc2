"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StreamingPlans } from "@/components/streaming-plans"
import { StreamingServices } from "@/components/streaming-services"
import { PlayCircle, Trophy, Smartphone, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const heroHighlights = [
  { icon: PlayCircle, title: "DGO Flex y NUPLIN", desc: "Canales en vivo y contenido on demand" },
  { icon: Trophy, title: "Deportes y WIN+", desc: "No te pierdas el mejor fútbol" },
  { icon: Smartphone, title: "En todos tus dispositivos", desc: "Smart TV, celular y tablet" },
]

export default function TelevisionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f4d] via-raicesBlue to-[#0a1f4d] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-raicesRed/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              <PlayCircle className="h-4 w-4" />
              Streaming Raíces
            </span>
            <h1 className="text-balance font-heading text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              Tu entretenimiento, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">sin límites</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-sky-100">
              Con Raíces disfrutas de streaming, televisión y las plataformas que más te gustan. Contamos con planes DGO
              Flex y NUPLIN, y puedes consultar por Netflix, Disney+ y muchos más.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() =>
                  window.open(
                    getWhatsAppLink("Hola, quiero conocer los planes de streaming DGO Flex y NUPLIN de Raíces."),
                    "_blank",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-raicesBlue shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Ver planes
              </button>
              <button
                onClick={() =>
                  window.open(
                    getWhatsAppLink("Hola, quiero consultar la disponibilidad de plataformas de streaming en mi zona."),
                    "_blank",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar servicios
              </button>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-raicesRed to-red-500 shadow">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-sky-100/80">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <StreamingPlans />
      <StreamingServices />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
