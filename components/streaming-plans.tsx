"use client"

import { motion } from "framer-motion"
import { PlayCircle, Trophy, Clapperboard, Check, Sparkles } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const plans = [
  {
    id: "nuplin",
    name: "NUPLIN Flex",
    icon: PlayCircle,
    tagline: "Canales en vivo + contenido a la carta",
    accent: "raicesBlue",
    featured: true,
    features: [
      "Canales nacionales e internacionales en vivo",
      "Películas y series on demand",
      "Compatible con Smart TV, celular y tablet",
      "Múltiples perfiles para la familia",
    ],
  },
  {
    id: "dgo",
    name: "DGO Flex",
    icon: Trophy,
    tagline: "Lo mejor de DIRECTV GO y el deporte",
    accent: "raicesRed",
    featured: false,
    features: [
      "Deportes en vivo y grandes ligas",
      "Series y películas premium",
      "Contenido bajo demanda",
      "Disfrútalo donde estés",
    ],
  },
  {
    id: "goflex",
    name: "GoFlex + WIN+",
    icon: Clapperboard,
    tagline: "Entretenimiento y fútbol sin límites",
    accent: "raicesBlue",
    featured: false,
    features: [
      "WIN+ con el mejor fútbol colombiano",
      "Catálogo de entretenimiento GoFlex",
      "Agrega Paramount+, Netflix o Disney+",
      "Ideal para complementar tu internet",
    ],
  },
]

export function StreamingPlans() {
  return (
    <section className="bg-[#0a1024] py-16" id="planes-streaming">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <Sparkles className="h-4 w-4 text-sky-300" />
            Planes Flex de streaming
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold text-white md:text-4xl">
            Elige cómo quieres ver
          </h2>
          <p className="mt-3 text-pretty text-white/70">
            Contamos con planes DGO Flex y NUPLIN para que disfrutes tus canales, series y películas favoritas donde
            quieras.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            const isBlue = plan.accent === "raicesBlue"
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 backdrop-blur transition-colors ${
                  plan.featured
                    ? "border-raicesBlue/50 bg-white/10 ring-2 ring-raicesBlue/20"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-raicesBlue px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isBlue ? "bg-raicesBlue/10" : "bg-raicesRed/10"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isBlue ? "text-raicesBlue" : "text-raicesRed"}`} />
                </div>

                <h3 className="font-heading text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-white/60">{plan.tagline}</p>

                <ul className="mb-6 mt-4 flex-grow space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${isBlue ? "text-raicesBlue" : "text-raicesRed"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    window.open(
                      getWhatsAppLink(
                        `Hola, quiero información sobre el plan ${plan.name} de streaming. ¿Qué opciones tienen para mi zona?`,
                      ),
                      "_blank",
                    )
                  }
                  className={`w-full rounded-full py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] ${
                    isBlue
                      ? "bg-gradient-to-r from-raicesBlue to-sky-500 shadow-lg"
                      : "bg-gradient-to-r from-raicesRed to-red-500 shadow-lg"
                  }`}
                >
                  Consultar plan
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
