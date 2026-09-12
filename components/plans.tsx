"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Zap, Sparkles, TrendingUp } from "lucide-react"
import { PlanSubscriptionForm } from "@/components/plan-subscription-form"

const plans = [
  {
    id: 1,
    name: "Plan Básico",
    tagline: "Tu mundo sin pausas",
    speed: 300,
    price: 65000,
    features: ["Televisión en HD", "Soporte especializado", "Sin permanencia"],
    icon: Zap,
    accent: "from-sky-400 to-raicesBlue",
    glow: "bg-sky-400/30",
  },
  {
    id: 2,
    name: "Plan Premium",
    tagline: "Conexión al siguiente nivel",
    speed: 500,
    price: 85000,
    popular: true,
    features: ["Televisión en HD", "Soporte especializado", "Sin permanencia", "WiFi optimizado"],
    icon: TrendingUp,
    accent: "from-raicesRed to-orange-500",
    glow: "bg-raicesRed/30",
  },
  {
    id: 3,
    name: "Plan Oro",
    tagline: "Máxima potencia digital",
    speed: 900,
    price: 105000,
    features: ["Televisión en HD", "Soporte especializado", "Sin permanencia", "Ideal para gamers"],
    icon: Sparkles,
    accent: "from-amber-400 to-yellow-500",
    glow: "bg-amber-400/30",
  },
]

export function Plans() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedPlanData, setSelectedPlanData] = useState<{
    name: string
    speed: string
    price: string
  } | null>(null)

  const handleContractPlan = (plan: (typeof plans)[0]) => {
    setSelectedPlanData({
      name: plan.name,
      speed: `${plan.speed} MBPS`,
      price: `$${plan.price.toLocaleString()}`,
    })
    setIsFormOpen(true)
  }

  return (
    <section
      className="relative overflow-hidden py-20"
      id="planes"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #14264f 45%, #1e3a6e 100%)",
      }}
    >
      {/* Interactive animated color blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-raicesRed/25 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -30, 0] }}
        transition={{ duration: 17, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Oferta por tiempo limitado
          </span>
          <h2 className="text-balance text-3xl font-bold text-white md:text-5xl font-heading">
            Tu conexión sin límites
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-white/70">
            Planes de internet de fibra óptica diseñados para toda la familia.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col rounded-3xl border p-6 backdrop-blur-xl transition-shadow ${
                  plan.popular
                    ? "border-raicesRed/40 bg-white/[0.09] shadow-2xl shadow-raicesRed/20"
                    : "border-white/15 bg-white/[0.06] hover:shadow-xl"
                }`}
              >
                {/* per-card glow */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${plan.glow}`}
                />

                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-raicesRed to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    MÁS POPULAR
                  </span>
                )}

                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent} shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">{plan.name}</h3>
                    <p className="text-xs text-white/60">{plan.tagline}</p>
                  </div>
                </div>

                <div className="relative mt-6 flex items-end gap-1">
                  <span
                    className={`bg-gradient-to-r ${plan.accent} bg-clip-text text-5xl font-black text-transparent`}
                  >
                    {plan.speed}
                  </span>
                  <span className="mb-1.5 text-sm font-bold text-white/70">Megas</span>
                </div>

                <div className="relative mt-2 flex items-baseline gap-1 text-white">
                  <span className="text-sm font-semibold text-white/60">$</span>
                  <span className="text-3xl font-black">{plan.price.toLocaleString("es-CO")}</span>
                  <span className="text-sm font-medium text-white/60">/mes</span>
                </div>

                <ul className="relative mt-6 flex-grow space-y-2.5">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-white/80">
                      <span className={`rounded-full bg-gradient-to-br ${plan.accent} p-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleContractPlan(plan)}
                  className={`relative mt-6 w-full rounded-xl bg-gradient-to-r ${plan.accent} py-3 font-bold text-white shadow-lg transition-transform hover:scale-[1.03]`}
                >
                  Contratar ahora
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {selectedPlanData && (
        <PlanSubscriptionForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          selectedPlan={selectedPlanData}
        />
      )}
    </section>
  )
}
