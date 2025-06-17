"use client"

import { useState } from "react"
import { Check, Tv, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const plans = [
  {
    id: 1,
    name: "Plan Básico",
    speed: 200,
    price: 65000,
    features: ["200 Megas de Internet", "Televisión con canales HD", "Soporte técnico", "Instalación gratuita"],
  },
  {
    id: 2,
    name: "Plan Recomendado",
    speed: 300,
    price: 85000,
    popular: true,
    features: [
      "300 Megas de Internet",
      "Televisión con canales HD y Premium",
      "Soporte técnico prioritario",
      "Instalación gratuita",
      "Router WiFi 6",
    ],
  },
  {
    id: 3,
    name: "Plan Avanzado",
    speed: 400,
    price: 105000,
    features: [
      "400 Megas de Internet",
      "Televisión con canales HD y Premium",
      "Soporte técnico VIP",
      "Instalación gratuita",
      "Router WiFi 6",
      "Canales deportivos",
    ],
  },
  {
    id: 4,
    name: "Plan Premium",
    speed: 500,
    price: 125000,
    features: [
      "500 Megas de Internet",
      "Televisión con todos los canales",
      "Soporte técnico VIP 24/7",
      "Instalación gratuita",
      "Router WiFi 6 de última generación",
      "Canales deportivos y películas",
      "Servicio técnico prioritario",
    ],
  },
]

export function Plans() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50" id="planes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Nuestros Planes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra el plan perfecto para ti y tu familia. Todos nuestros planes incluyen internet de alta velocidad y
            televisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`overflow-hidden transition-all duration-300 hover-scale flex flex-col ${
                plan.popular ? "relative" : ""
              } ${hoveredPlan === plan.id ? "shadow-xl" : "shadow-md"} bg-white rounded-xl border-0`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Decorative top pattern */}
              <div
                className={`h-2 w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-raicesBlue via-blue-400 to-raicesBlue"
                    : "bg-gradient-to-r from-raicesRed via-red-400 to-raicesRed"
                }`}
              ></div>

              {plan.popular && (
                <div className="absolute top-0 right-0 bg-raicesBlue text-white text-xs font-medium px-3 py-1 rounded-bl-lg shadow-md transform translate-y-0">
                  Más Popular
                </div>
              )}

              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-xl font-bold font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">Internet + Televisión</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col pt-2">
                {/* Speed section with consistent height */}
                <div className="flex items-center h-16">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${
                      plan.popular ? "bg-blue-100" : "bg-red-100"
                    }`}
                  >
                    <Zap className={`h-6 w-6 ${plan.popular ? "text-raicesBlue" : "text-raicesRed"}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none">{plan.speed}</div>
                    <div className="text-sm text-gray-500">Megas</div>
                  </div>
                </div>

                {/* TV section with consistent height */}
                <div className="flex items-center h-16 mb-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${
                      plan.popular ? "bg-blue-100" : "bg-red-100"
                    }`}
                  >
                    <Tv className={`h-6 w-6 ${plan.popular ? "text-raicesBlue" : "text-raicesRed"}`} />
                  </div>
                  <div>
                    <div className="text-lg font-medium leading-none">Televisión</div>
                    <div className="text-sm text-gray-500">Canales HD</div>
                  </div>
                </div>

                {/* Price section with new typography */}
                <div className="my-6 text-center">
                  <div className="inline-block relative">
                    <span className="text-sm font-medium text-gray-500 absolute -top-3 -left-2">$</span>
                    <span
                      className={`text-4xl font-heading font-bold ${
                        plan.popular ? "text-raicesBlue" : "text-gray-800"
                      }`}
                    >
                      {Math.floor(plan.price / 1000)}
                    </span>
                    <span className="text-xl font-medium text-gray-700">
                      .{(plan.price % 1000).toString().padStart(3, "0")}
                    </span>
                    <span className="text-sm font-medium text-gray-500 ml-1">/mes</span>
                  </div>
                </div>

                {/* Features list with lighter styling */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check
                          className={`h-4 w-4 ${
                            plan.popular ? "text-raicesBlue" : "text-raicesRed"
                          } mr-2 flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Single button */}
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        `Hola, estoy interesado en probar 30 días gratis el ${plan.name}. ¿Podrían brindarme más información?`,
                      ),
                      "_blank",
                    )
                  }}
                  className={`w-full py-2 px-3 rounded-lg font-medium text-white transition-all duration-300 text-sm ${
                    plan.popular
                      ? "bg-gradient-to-r from-raicesBlue to-blue-500 hover:from-blue-600 hover:to-raicesBlue"
                      : "bg-gradient-to-r from-raicesRed to-red-500 hover:from-red-600 hover:to-raicesRed"
                  }`}
                >
                  Probar 30 días gratis
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
