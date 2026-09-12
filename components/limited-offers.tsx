"use client"

import { motion } from "framer-motion"
import { Zap, Camera, Smartphone, Tv2, Clock, Flame, Check } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const offers = [
  {
    id: 1,
    tag: "WiFi Inteligente",
    speed: 400,
    price: 85000,
    featured: false,
    combos: [
      { icon: Camera, title: "1 Cámara de monitoreo", desc: "Con acceso a la aplicación Raíces CAM" },
      { icon: Tv2, title: "NUPLIN Flex", desc: "Streaming de canales y contenido a la carta" },
    ],
    perks: ["Velocidad garantizada por cable", "Disponible para estratos 1 al 6", "Router WiFi incluido"],
  },
  {
    id: 2,
    tag: "WiFi Inteligente",
    speed: 900,
    price: 120000,
    featured: true,
    combos: [
      { icon: Camera, title: "1 Cámara de monitoreo", desc: "Con acceso a la aplicación Raíces CAM" },
      { icon: Tv2, title: "NUPLIN + WIN+", desc: "Streaming con el mejor fútbol y deportes" },
    ],
    perks: ["Velocidad garantizada por cable", "Disponible para estratos 1 al 6", "Router WiFi 6 de alto rendimiento"],
  },
]

const money = (value: number) => {
  const thousands = Math.floor(value / 1000)
  const rest = (value % 1000).toString().padStart(3, "0")
  return { thousands, rest }
}

export function LimitedOffers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-raicesBlue to-[#0f2f6b] py-16" id="ofertas">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-raicesRed/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-raicesRed px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
          >
            <Flame className="h-4 w-4" />
            ¡Imperdible!
          </motion.span>
          <h2 className="text-balance font-heading text-3xl font-extrabold text-white md:text-4xl">
            Ofertas por tiempo limitado
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 text-pretty text-sm font-medium text-sky-200">
            <Clock className="h-4 w-4" />
            Combina internet inteligente con seguridad o streaming al mejor precio
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {offers.map((offer, i) => {
            const price = money(offer.price)
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ${
                  offer.featured ? "ring-4 ring-raicesRed" : "ring-1 ring-white/10"
                }`}
              >
                {offer.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-raicesRed px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Más completo
                  </span>
                )}

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-raicesBlue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-raicesBlue">
                  <Zap className="h-3.5 w-3.5" />
                  {offer.tag}
                </span>

                <div className="mt-3 flex items-end gap-2">
                  <span className="font-heading text-6xl font-black leading-none text-gray-900">{offer.speed}</span>
                  <div className="mb-1.5 leading-none">
                    <span className="block font-heading text-xl font-extrabold text-raicesRed">MEGAS</span>
                    <span className="text-sm text-gray-500">Para tu hogar</span>
                  </div>
                </div>

                {/* combos */}
                <div className="mt-5 space-y-3">
                  {offer.combos.map((combo, idx) => {
                    const Icon = combo.icon
                    return (
                      <div key={combo.title}>
                        <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-raicesBlue/10">
                            <Icon className="h-5 w-5 text-raicesBlue" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{combo.title}</p>
                            <p className="text-xs text-gray-500">{combo.desc}</p>
                          </div>
                        </div>
                        {idx === 0 && (
                          <div className="my-1 flex items-center justify-center">
                            <span className="rounded-full bg-raicesRed px-3 py-0.5 text-[10px] font-bold uppercase text-white">
                              o
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* price */}
                <div className="mt-5 flex items-end gap-1">
                  <span className="mb-1 text-lg font-medium text-gray-400">$</span>
                  <span className="font-heading text-5xl font-black leading-none text-raicesBlue">
                    {price.thousands}
                  </span>
                  <span className="mb-1 text-xl font-bold text-gray-600">.{price.rest}</span>
                  <span className="mb-1.5 ml-1 flex flex-col text-[10px] font-semibold uppercase leading-tight text-gray-400">
                    <span>Mensual</span>
                    <span>IVA incluido</span>
                  </span>
                </div>

                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  {offer.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-raicesRed" />
                      <span>
                        {perk.includes("garantizada") ? (
                          <>
                            Velocidad <strong className="font-semibold text-gray-800">garantizada por cable</strong>
                          </>
                        ) : (
                          perk
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    window.open(
                      getWhatsAppLink(
                        `Hola, me interesa la oferta de ${offer.speed} Megas por $${price.thousands}.${price.rest}. ¿Podrían darme más información?`,
                      ),
                      "_blank",
                    )
                  }
                  className={`mt-5 w-full rounded-full py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] ${
                    offer.featured
                      ? "bg-gradient-to-r from-raicesRed to-red-500 shadow-lg"
                      : "bg-gradient-to-r from-raicesBlue to-sky-500 shadow-lg"
                  }`}
                >
                  Quiero esta oferta
                </button>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-sky-200/80">
          <Smartphone className="h-3.5 w-3.5" />
          Aplican términos y condiciones. Velocidades y coberturas son valores de referencia.
        </p>
      </div>
    </section>
  )
}
