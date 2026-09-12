"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Users, Building2, Gamepad2, ArrowRight } from "lucide-react"
import Link from "next/link"

const profiles = [
  {
    id: "small",
    icon: Home,
    title: "Hogar pequeño",
    desc: "1 a 2 personas, redes sociales, navegación y streaming básico.",
    plan: "Plan Básico",
    speed: "300 Megas",
    accent: "from-sky-400 to-raicesBlue",
  },
  {
    id: "family",
    icon: Users,
    title: "Familia conectada",
    desc: "3 a 5 dispositivos, videollamadas y streaming en HD simultáneo.",
    plan: "Plan Premium",
    speed: "500 Megas",
    accent: "from-raicesRed to-orange-500",
    recommended: true,
  },
  {
    id: "power",
    icon: Gamepad2,
    title: "Gamers y creadores",
    desc: "Juegos online, transmisiones en vivo y descargas pesadas.",
    plan: "Plan Oro",
    speed: "900 Megas",
    accent: "from-amber-400 to-yellow-500",
  },
  {
    id: "business",
    icon: Building2,
    title: "Trabajo y negocio",
    desc: "Muchos dispositivos conectados y alta demanda todo el día.",
    plan: "Plan Oro",
    speed: "900 Megas",
    accent: "from-emerald-400 to-teal-500",
  },
]

export function PlanHelper() {
  const [selected, setSelected] = useState<string>("family")
  const active = profiles.find((p) => p.id === selected)!

  return (
    <section className="relative overflow-hidden bg-transparent py-20" id="ayuda-plan">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-raicesBlue/10 px-5 py-1.5 text-sm font-semibold text-raicesBlue">
            Guía rápida
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl font-heading">
            ¿Cómo saber qué plan necesito?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Elige el perfil que más se parece a tu hogar y te recomendamos el plan ideal.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Profile selector */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {profiles.map((p) => {
              const Icon = p.icon
              const isActive = selected === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`relative flex flex-col items-start rounded-2xl border p-5 text-left transition-all ${
                    isActive
                      ? "border-transparent shadow-xl"
                      : "border-white/60 bg-white/70 backdrop-blur-md hover:border-raicesBlue/40 hover:shadow-md"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-10`}
                    />
                  )}
                  <div
                    className={`relative mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} shadow-md`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="relative font-bold text-foreground">{p.title}</h3>
                  <p className="relative mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </button>
              )
            })}
          </div>

          {/* Recommendation card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="sticky top-24 overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-raicesBlue to-[#0a1628] p-8 text-white shadow-2xl"
              >
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${active.accent} opacity-40 blur-2xl`}
                />
                <p className="relative text-sm font-medium text-white/60">Te recomendamos</p>
                <h3 className="relative mt-1 text-3xl font-black font-heading">{active.plan}</h3>
                <div
                  className={`relative mt-4 inline-flex items-center rounded-full bg-gradient-to-r ${active.accent} px-4 py-1.5 text-sm font-bold`}
                >
                  {active.speed}
                </div>
                <p className="relative mt-5 text-sm text-white/75">{active.desc}</p>
                <Link
                  href="#planes"
                  className="group relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-raicesBlue transition-transform hover:scale-[1.02]"
                >
                  Ver este plan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
