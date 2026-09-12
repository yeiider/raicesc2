"use client"

import { motion } from "framer-motion"
import { Camera, Check, Tv, ShieldCheck } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const securityPlans = [
  {
    name: "Básico",
    speed: 300,
    price: 85000,
    cameras: 1,
    recommended: false,
    features: [
      "1 cámara de seguridad",
      "Instalación incluida",
      "App Raíces CAM (iOS / Android)",
      "Almacenamiento en la nube",
      "Soporte y atención al cliente",
      "Cláusula de permanencia 6 meses",
    ],
  },
  {
    name: "Plus",
    speed: 500,
    price: 125000,
    cameras: 2,
    recommended: true,
    features: [
      "2 cámaras de seguridad",
      "Instalación incluida",
      "App Raíces CAM (iOS / Android)",
      "Almacenamiento en la nube",
      "Soporte y atención al cliente",
      "Cláusula de permanencia 6 meses",
    ],
  },
  {
    name: "Premium",
    speed: 600,
    price: 145000,
    cameras: 3,
    recommended: false,
    features: [
      "3 cámaras de seguridad",
      "Instalación incluida",
      "App Raíces CAM (iOS / Android)",
      "Almacenamiento en la nube",
      "Soporte y atención al cliente",
      "Cláusula de permanencia 6 meses",
    ],
  },
]

export function SecurityPlans() {
  return (
    <section id="planes-seguridad" className="relative overflow-hidden bg-[#0a1024] py-20 text-white scroll-mt-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-raicesRed" />
            Nueva línea · Hogar + Seguridad
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
            Planes Internet + Seguridad
          </h2>
          <p className="mt-3 text-pretty text-white/70">
            Combina conectividad de fibra óptica, televisión y cámaras inteligentes en un solo plan. Todos incluyen
            televisión.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {securityPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 backdrop-blur-md transition-shadow ${
                plan.recommended
                  ? "border-raicesRed/60 bg-white/10 shadow-2xl shadow-raicesRed/20"
                  : "border-white/10 bg-white/5 hover:shadow-xl"
              }`}
            >
              {plan.recommended && (
                <span className="absolute right-5 top-5 rounded-full bg-raicesRed px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Más popular
                </span>
              )}

              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  {plan.speed} Mbps
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  <Tv className="h-3.5 w-3.5" /> Incluye TV
                </span>
              </div>

              <h3 className="font-heading text-2xl font-extrabold">{plan.name}</h3>

              <div className="mt-3 flex items-center gap-2 text-raicesRed">
                {Array.from({ length: plan.cameras }).map((_, idx) => (
                  <Camera key={idx} className="h-5 w-5" />
                ))}
                <span className="text-sm font-medium text-white/70">
                  {plan.cameras} {plan.cameras === 1 ? "cámara" : "cámaras"}
                </span>
              </div>

              <div className="my-5">
                <span className="align-top text-lg font-medium text-white/60">$</span>
                <span className="font-heading text-4xl font-extrabold">{Math.floor(plan.price / 1000)}</span>
                <span className="text-xl font-medium text-white/70">.000</span>
                <span className="ml-1 text-sm text-white/50">/mes</span>
              </div>

              <ul className="mb-6 flex-grow space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.open(
                    getWhatsAppLink(
                      `Hola, estoy interesado en el Plan ${plan.name} de Internet + Seguridad (${plan.speed} Mbps). ¿Podrían darme más información?`,
                    ),
                    "_blank",
                  )
                }
                className={`w-full rounded-full py-3 font-semibold text-white transition-transform hover:scale-[1.03] ${
                  plan.recommended
                    ? "bg-raicesRed shadow-lg"
                    : "bg-gradient-to-r from-raicesBlue to-sky-500"
                }`}
              >
                Lo quiero
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/50">Servicio sujeto a cobertura de la zona.</p>
      </div>
    </section>
  )
}
