"use client"

import { useState } from "react"
import { Check, Zap, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlanSubscriptionForm } from "@/components/plan-subscription-form"

const plans = [
  {
    id: 1,
    name: "Plan Básico",
    tagline: "Tu mundo sin pausas",
    speed: 200,
    price: 65000,
    features: [
      "200 Megas de Velocidad",
      "Televisión con canales en HD",
      "Soporte técnico especializado",
      "Sin Cláusula de permanencia",
    ],
    icon: Zap,
  },
  {
    id: 2,
    name: "Plan Premium",
    tagline: "Conexión al siguiente nivel",
    speed: 500,
    price: 85000,
    popular: true,
    features: [
      "500 Megas de Velocidad",
      "Televisión con canales en HD",
      "Soporte técnico especializado",
      "Sin Cláusula de permanencia",
    ],
    icon: TrendingUp,
    idealFor: "Hogares con varios dispositivos, videollamadas en alta calidad",
  },
  {
    id: 3,
    name: "Plan Oro",
    tagline: "Máxima potencia para tu mundo digital",
    speed: 900,
    price: 105000,
    features: [
      "900 Megas de Velocidad",
      "Televisión con canales en HD",
      "Soporte técnico especializado",
      "Sin Cláusula de permanencia",
    ],
    icon: Sparkles,
    idealFor: "Creadores de contenido, empresas, gamers y hogares con alto consumo digital",
  },
]

export function Plans() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="planes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg animate-pulse">
            <Sparkles className="h-4 w-4" />
            ¡OFERTA ÚNICA POR TIEMPO LIMITADO!
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading bg-gradient-to-r from-raicesBlue via-blue-600 to-raicesBlue bg-clip-text text-transparent">
            ¡TÚ CONEXIÓN SIN LÍMITES!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Aprovecha esta oportunidad exclusiva. Planes diseñados para llevarte al siguiente nivel con la mejor
            velocidad y calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={plan.id}
                className={`overflow-hidden transition-all duration-300 hover-scale flex flex-col ${
                  plan.popular ? "relative ring-4 ring-yellow-400 ring-offset-4" : ""
                } ${hoveredPlan === plan.id ? "shadow-2xl scale-105" : "shadow-xl"} bg-white rounded-2xl border-0`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <div className="relative h-3 w-full">
                  <div
                    className={`absolute inset-0 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
                        : plan.id === 3
                          ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
                          : "bg-gradient-to-r from-raicesBlue via-blue-400 to-raicesBlue"
                    }`}
                  ></div>
                </div>

                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-sm font-bold px-4 py-2 rounded-bl-2xl shadow-lg z-10 flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    MÁS POPULAR
                  </div>
                )}

                <CardHeader className="pt-8 pb-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                        plan.popular
                          ? "bg-gradient-to-br from-yellow-400 to-yellow-500"
                          : plan.id === 3
                            ? "bg-gradient-to-br from-blue-600 to-blue-500"
                            : "bg-gradient-to-br from-raicesBlue to-blue-500"
                      }`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold font-heading mb-1">{plan.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 font-medium">{plan.tagline}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col pt-2 px-6 pb-6">
                  <div className="text-center mb-6">
                    <div className="inline-block relative">
                      <div
                        className={`text-6xl font-black font-heading ${
                          plan.popular
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"
                            : plan.id === 3
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
                              : "bg-gradient-to-r from-raicesBlue to-blue-600 bg-clip-text text-transparent"
                        }`}
                      >
                        {plan.speed}
                      </div>
                      <div className="text-xl font-bold text-gray-700 -mt-2">MBPS</div>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="inline-block relative bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-4 rounded-2xl shadow-inner">
                      <span className="text-lg font-bold text-gray-500 absolute -top-2 left-2">$</span>
                      <span className={`text-5xl font-heading font-black text-gray-900`}>
                        {Math.floor(plan.price / 1000)}
                      </span>
                      <span className="text-2xl font-bold text-gray-700">
                        .{(plan.price % 1000).toString().padStart(3, "0")}
                      </span>
                      <span className="text-base font-semibold text-gray-600 ml-1">/mes</span>
                    </div>
                  </div>

                  {/* Features list with enhanced styling */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 mb-4 flex-grow border border-gray-100">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div
                            className={`rounded-full p-1 mr-3 flex-shrink-0 ${
                              plan.popular ? "bg-yellow-100" : plan.id === 3 ? "bg-blue-100" : "bg-blue-50"
                            }`}
                          >
                            <Check
                              className={`h-4 w-4 ${
                                plan.popular ? "text-yellow-600" : plan.id === 3 ? "text-blue-600" : "text-raicesBlue"
                              }`}
                            />
                          </div>
                          <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.idealFor && (
                    <div className="mb-4 text-center">
                      <p className="text-xs text-gray-500 italic">
                        <span className="font-semibold">Ideal para:</span> {plan.idealFor}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => handleContractPlan(plan)}
                    className={`w-full py-4 px-4 rounded-xl font-bold text-white transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700"
                        : plan.id === 3
                          ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                          : "bg-gradient-to-r from-raicesBlue to-blue-600 hover:from-blue-600 hover:to-raicesBlue"
                    }`}
                  >
                    ¡CONTRATAR AHORA! 🚀
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-bold text-gray-700 mb-2">⚡ ¡No dejes pasar esta oportunidad única!</p>
          <p className="text-base text-gray-600">
            Oferta por tiempo limitado. Contrata hoy y disfruta de la mejor conexión.
          </p>
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
