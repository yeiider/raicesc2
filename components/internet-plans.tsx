"use client"

import { motion } from "framer-motion"
import { Check, Zap, Tv, Wifi, Wrench } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const internetPlans = [
  {
    id: 1,
    name: "Plan Básico",
    speed: 200,
    price: 65000,
    recommended: false,
    features: [
      "200 Megas de velocidad",
      "Televisión con canales en HD",
      "Router WiFi incluido",
      "Instalación gratuita",
      "Soporte técnico especializado",
      "Sin cláusula de permanencia",
    ],
    idealFor: "Navegación, redes sociales y streaming en un par de dispositivos",
  },
  {
    id: 2,
    name: "Plan Premium",
    speed: 500,
    price: 85000,
    recommended: true,
    features: [
      "500 Megas de velocidad",
      "Televisión con canales en HD",
      "Router WiFi 6",
      "Instalación gratuita",
      "Soporte técnico especializado",
      "Sin cláusula de permanencia",
    ],
    idealFor: "Hogares con varios dispositivos y videollamadas en alta calidad",
  },
  {
    id: 3,
    name: "Plan Oro",
    speed: 900,
    price: 105000,
    recommended: false,
    features: [
      "900 Megas de velocidad",
      "Televisión con canales en HD",
      "Router WiFi 6 de alto rendimiento",
      "Instalación gratuita",
      "Soporte técnico especializado",
      "Sin cláusula de permanencia",
    ],
    idealFor: "Creadores de contenido, gamers y hogares con alto consumo digital",
  },
]

const iconFor = (feature: string) => {
  if (feature.toLowerCase().includes("televisión")) return Tv
  if (feature.toLowerCase().includes("router") || feature.toLowerCase().includes("wifi")) return Wifi
  if (feature.toLowerCase().includes("instalación")) return Wrench
  return Check
}

export function InternetPlans() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-20" id="planes-internet">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-raicesBlue/20 bg-raicesBlue/5 px-4 py-1.5 text-sm font-semibold text-raicesBlue">
            <Zap className="h-4 w-4" />
            Planes de Internet Hogar
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold text-gray-900 md:text-4xl">
            Elige tu velocidad ideal
          </h2>
          <p className="mt-3 text-pretty text-gray-600">
            Todos nuestros planes incluyen fibra óptica de alta velocidad y televisión con canales en HD.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {internetPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl ${
                plan.recommended ? "border-raicesBlue/50 ring-2 ring-raicesBlue/20" : "border-gray-100"
              }`}
            >
              {plan.recommended && (
                <span className="absolute right-5 top-5 rounded-full bg-raicesBlue px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Más popular
                </span>
              )}

              <h3 className="font-heading text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500">Internet de fibra óptica</p>

              <div className="mt-4 flex items-end gap-2">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    plan.recommended ? "bg-raicesBlue/10" : "bg-raicesRed/10"
                  }`}
                >
                  <Zap className={`h-7 w-7 ${plan.recommended ? "text-raicesBlue" : "text-raicesRed"}`} />
                </div>
                <div className="leading-none">
                  <span className="font-heading text-4xl font-extrabold text-gray-900">{plan.speed}</span>
                  <span className="ml-1 text-sm font-medium text-gray-500">Megas</span>
                </div>
              </div>

              <div className="my-5">
                <span className="align-top text-lg font-medium text-gray-400">$</span>
                <span
                  className={`font-heading text-4xl font-extrabold ${
                    plan.recommended ? "text-raicesBlue" : "text-gray-900"
                  }`}
                >
                  {Math.floor(plan.price / 1000)}
                </span>
                <span className="text-xl font-medium text-gray-600">
                  .{(plan.price % 1000).toString().padStart(3, "0")}
                </span>
                <span className="ml-1 text-sm text-gray-400">/mes</span>
              </div>

              <ul className="mb-4 flex-grow space-y-2.5">
                {plan.features.map((feature) => {
                  const Icon = iconFor(feature)
                  return (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Icon
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.recommended ? "text-raicesBlue" : "text-raicesRed"
                        }`}
                      />
                      {feature}
                    </li>
                  )
                })}
              </ul>

              <p className="mb-5 rounded-xl bg-gray-50 p-3 text-xs italic text-gray-500">
                <span className="font-semibold not-italic">Ideal para:</span> {plan.idealFor}
              </p>

              <button
                onClick={() =>
                  window.open(
                    getWhatsAppLink(
                      `Hola, estoy interesado en el ${plan.name} de Internet. ¿Podrían brindarme más información?`,
                    ),
                    "_blank",
                  )
                }
                className={`w-full rounded-full py-3 font-semibold text-white transition-transform hover:scale-[1.03] ${
                  plan.recommended
                    ? "bg-gradient-to-r from-raicesBlue to-sky-500 shadow-lg"
                    : "bg-gradient-to-r from-raicesRed to-red-500"
                }`}
              >
                Obtener plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
