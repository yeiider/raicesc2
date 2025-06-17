"use client"

import { useState } from "react"
import { Check, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const internetPlans = [
  {
    id: 1,
    name: "Plan 200 Megas",
    speed: 200,
    price: 65000,
    features: [
      "200 Megas de velocidad",
      "Ideal para 1-2 personas",
      "Navegación y streaming básico",
      "Router WiFi incluido",
      "Soporte técnico",
      "Instalación gratuita",
    ],
    coverage: ["Ciudad Pacífica", "Santander de Quilichao", "Puerto Tejada"],
    recommended: false,
  },
  {
    id: 2,
    name: "Plan 300 Megas",
    speed: 300,
    price: 85000,
    features: [
      "300 Megas de velocidad",
      "Ideal para 3-5 personas",
      "Streaming en HD/4K",
      "Router WiFi 6",
      "Soporte técnico prioritario",
      "Instalación gratuita",
      "IP fija opcional",
    ],
    coverage: ["Ciudad Pacífica", "Santander de Quilichao", "Puerto Tejada", "Caloto", "Guachené"],
    recommended: true,
  },
  {
    id: 3,
    name: "Plan Gamer 400",
    speed: 400,
    price: 105000,
    features: [
      "400 Megas de velocidad",
      "Ideal para gamers",
      "Baja latencia garantizada",
      "Router WiFi 6 de alto rendimiento",
      "Soporte técnico VIP",
      "Instalación gratuita",
      "IP fija incluida",
      "Priorización de tráfico gaming",
    ],
    coverage: ["Ciudad Pacífica", "Santander de Quilichao", "Puerto Tejada", "Caloto"],
    recommended: false,
    isGamer: true,
  },
  {
    id: 4,
    name: "Plan Premium 500",
    speed: 500,
    price: 125000,
    features: [
      "500 Megas de velocidad",
      "Ideal para profesionales y familias numerosas",
      "Máxima velocidad disponible",
      "Router WiFi 6 de última generación",
      "Soporte técnico VIP 24/7",
      "Instalación gratuita prioritaria",
      "IP fija incluida",
      "Servicio técnico a domicilio prioritario",
    ],
    coverage: ["Ciudad Pacífica", "Santander de Quilichao"],
    recommended: false,
  },
]

export function InternetPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  // const [showCoverage, setShowCoverage] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50" id="planes-internet">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Nuestros Planes de Internet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra el plan perfecto para ti y tu familia. Todos nuestros planes incluyen internet de fibra óptica de
            alta velocidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internetPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`overflow-hidden transition-all duration-300 hover-scale flex flex-col ${
                plan.recommended ? "relative" : ""
              } ${hoveredPlan === plan.id ? "shadow-xl" : "shadow-md"} bg-white rounded-xl border-0`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Decorative top pattern */}
              <div
                className={`h-2 w-full ${
                  plan.isGamer
                    ? "bg-gradient-to-r from-purple-600 via-raicesRed to-raicesBlue"
                    : plan.recommended
                      ? "bg-gradient-to-r from-raicesBlue via-blue-400 to-raicesBlue"
                      : "bg-gradient-to-r from-raicesRed via-red-400 to-raicesRed"
                }`}
              ></div>

              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-raicesBlue text-white text-xs font-medium px-3 py-1 rounded-bl-lg shadow-md transform translate-y-0">
                  Más Popular
                </div>
              )}

              {plan.isGamer && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg shadow-md transform translate-y-0">
                  Para Gamers
                </div>
              )}

              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-xl font-bold font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">Internet de Fibra Óptica</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col pt-2">
                {/* Speed section with consistent height */}
                <div className="flex items-center h-16">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${
                      plan.isGamer ? "bg-purple-100" : plan.recommended ? "bg-blue-100" : "bg-red-100"
                    }`}
                  >
                    <Zap
                      className={`h-6 w-6 ${
                        plan.isGamer ? "text-purple-600" : plan.recommended ? "text-raicesBlue" : "text-raicesRed"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none">{plan.speed}</div>
                    <div className="text-sm text-gray-500">Megas</div>
                  </div>
                </div>

                {/* Price section with new typography */}
                <div className="my-6 text-center">
                  <div className="inline-block relative">
                    <span className="text-sm font-medium text-gray-500 absolute -top-3 -left-2">$</span>
                    <span
                      className={`text-4xl font-heading font-bold ${
                        plan.isGamer ? "text-purple-600" : plan.recommended ? "text-raicesBlue" : "text-gray-800"
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
                            plan.isGamer ? "text-purple-600" : plan.recommended ? "text-raicesBlue" : "text-raicesRed"
                          } mr-2 flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coverage button */}
                {/* <button
                  onClick={() => setShowCoverage(showCoverage === plan.id ? null : plan.id)}
                  className={`w-full py-2 px-4 rounded-lg font-medium text-white mb-3 transition-all duration-300 ${
                    plan.isGamer
                      ? "bg-purple-600 hover:bg-purple-700"
                      : plan.recommended
                        ? "bg-raicesBlue hover:bg-blue-600"
                        : "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  {showCoverage === plan.id ? "Ocultar Cobertura" : "Ver Cobertura"}
                </button> */}

                {/* Coverage info */}
                {/* {showCoverage === plan.id && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-200">
                    <h4 className="font-medium text-sm mb-2">Disponible en:</h4>
                    <ul className="space-y-1">
                      {plan.coverage.map((location, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="h-3 w-3 text-green-500 mr-2" />
                          <span>{location}</span>
                        </li>
                      ))}
                      {["Ciudad Pacífica", "Santander de Quilichao", "Puerto Tejada", "Caloto", "Guachené", "Padilla"]
                        .filter((location) => !plan.coverage.includes(location))
                        .map((location, index) => (
                          <li key={`unavailable-${index}`} className="flex items-center text-sm text-gray-400">
                            <X className="h-3 w-3 text-red-400 mr-2" />
                            <span>{location}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )} */}

                {/* Button with consistent styling */}
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        `Hola, estoy interesado en probar gratis por 30 días el ${plan.name} de Internet. ¿Podrían brindarme más información?`,
                      ),
                      "_blank",
                    )
                  }}
                  className={`w-full py-2 px-3 text-sm rounded-lg font-medium text-white transition-all duration-300 ${
                    plan.isGamer
                      ? "bg-gradient-to-r from-purple-600 to-raicesBlue hover:from-purple-700 hover:to-blue-600"
                      : plan.recommended
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
