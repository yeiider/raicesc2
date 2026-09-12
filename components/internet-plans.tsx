"use client"

import { motion } from "framer-motion"
import { Check, Zap, Tv, Wifi } from "lucide-react"
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
      "Soporte técnico especializado",
      "Sin cláusula de permanencia",
    ],
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
      "Soporte técnico especializado",
      "Sin cláusula de permanencia",
    ],
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
      "Soporte técnico especializado",
      "Sin cláusula de permanencia",
    ],
  },
]

const iconFor = (feature: string) => {
  if (feature.toLowerCase().includes("televisión")) return Tv
  if (feature.toLowerCase().includes("router") || feature.toLowerCase().includes("wifi")) return Wifi
  return Check
}

export function InternetPlans() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-12" id="planes-internet">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-raicesBlue/20 bg-raicesBlue/5 px-4 py-1.5 text-sm font-semibold text-raicesBlue">
            <Zap className="h-4 w-4" />
            Planes de Internet Hogar
          </span>
          <h2 className="text-balance font-heading text-2xl font-extrabold text-gray-900 md:text-3xl">
            Elige tu velocidad ideal
          </h2>
          <p className="mt-2 text-pretty text-sm text-gray-600">
            Todos incluyen fibra óptica de alta velocidad y televisión con canales en HD.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {internetPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-md transition-shadow hover:shadow-xl ${
                plan.recommended ? "border-raicesBlue/50 ring-2 ring-raicesBlue/20" : "border-gray-100"
              }`}
            >
              {plan.recommended && (
                <span className="absolute right-4 top-4 rounded-full bg-raicesBlue px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}

              <h3 className="font-heading text-lg font-bold text-gray-900">{plan.name}</h3>

              <div className="mt-2 flex items-end gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    plan.recommended ? "bg-raicesBlue/10" : "bg-raicesRed/10"
                  }`}
                >
                  <Zap className={`h-5 w-5 ${plan.recommended ? "text-raicesBlue" : "text-raicesRed"}`} />
                </div>
                <div className="leading-none">
                  <span className="font-heading text-3xl font-extrabold text-gray-900">{plan.speed}</span>
                  <span className="ml-1 text-xs font-medium text-gray-500">Megas</span>
                </div>
              </div>

              <div className="my-4">
                <span className="align-top text-base font-medium text-gray-400">$</span>
                <span
                  className={`font-heading text-3xl font-extrabold ${
                    plan.recommended ? "text-raicesBlue" : "text-gray-900"
                  }`}
                >
                  {Math.floor(plan.price / 1000)}
                </span>
                <span className="text-lg font-medium text-gray-600">
                  .{(plan.price % 1000).toString().padStart(3, "0")}
                </span>
                <span className="ml-1 text-xs text-gray-400">/mes</span>
              </div>

              <ul className="mb-4 flex-grow space-y-2">
                {plan.features.map((feature) => {
                  const Icon = iconFor(feature)
                  return (
                    <li key={feature} className="flex items-start gap-2 text-xs text-gray-600">
                      <Icon
                        className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${
                          plan.recommended ? "text-raicesBlue" : "text-raicesRed"
                        }`}
                      />
                      {feature}
                    </li>
                  )
                })}
              </ul>

              <button
                onClick={() =>
                  window.open(
                    getWhatsAppLink(
                      `Hola, estoy interesado en el ${plan.name} de Internet. ¿Podrían brindarme más información?`,
                    ),
                    "_blank",
                  )
                }
                className={`w-full rounded-full py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] ${
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

        <p className="mt-6 text-center text-xs text-gray-400">Aplican términos y condiciones.</p>
      </div>
    </section>
  )
}
