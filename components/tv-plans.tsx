"use client"

import { Check, Tv, Zap, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function TvPlans() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Nuestros Planes de Televisión</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades de entretenimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Solo TV */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col bg-white rounded-xl border-0 shadow-md transform hover:scale-105">
            <div className="h-2 w-full bg-gradient-to-r from-raicesRed via-red-400 to-raicesRed"></div>
            <CardHeader className="pt-6 pb-2">
              <CardTitle className="text-xl font-bold font-heading">Solo TV</CardTitle>
              <CardDescription className="text-sm text-gray-500">Televisión HD</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col pt-2">
              <div className="flex items-center h-16">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <Tv className="h-6 w-6 text-raicesRed" />
                </div>
                <div>
                  <div className="text-lg font-medium leading-none">90+ Canales HD</div>
                  <div className="text-sm text-gray-500">Alta definición</div>
                </div>
              </div>

              <div className="my-6 text-center">
                <div className="inline-block relative">
                  <span className="text-sm font-medium text-gray-500 absolute -top-3 -left-2">$</span>
                  <span className="text-4xl font-heading font-bold text-gray-800">23</span>
                  <span className="text-xl font-medium text-gray-700">.000</span>
                  <span className="text-sm font-medium text-gray-500 ml-1">/mes</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesRed mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">90+ canales en HD</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesRed mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Canales nacionales e internacionales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesRed mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Soporte técnico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesRed mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Instalación gratuita</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en contratar el plan Solo TV. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-raicesRed to-red-500 hover:from-red-600 hover:to-raicesRed"
              >
                Contratar Ahora
              </button>
            </CardContent>
          </Card>

          {/* Plan TV + Internet 200 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col bg-white rounded-xl border-0 shadow-md transform hover:scale-105 relative">
            <div className="h-2 w-full bg-gradient-to-r from-raicesBlue via-blue-400 to-raicesBlue"></div>
            <div className="absolute top-0 right-0 bg-raicesBlue text-white text-xs font-medium px-3 py-1 rounded-bl-lg shadow-md transform translate-y-0">
              Más Popular
            </div>
            <CardHeader className="pt-6 pb-2">
              <CardTitle className="text-xl font-bold font-heading">TV + Internet 200</CardTitle>
              <CardDescription className="text-sm text-gray-500">Combo básico</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col pt-2">
              <div className="flex items-center h-16">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Package className="h-6 w-6 text-raicesBlue" />
                </div>
                <div>
                  <div className="text-lg font-medium leading-none">90+ Canales + 200 Megas</div>
                  <div className="text-sm text-gray-500">Combo perfecto</div>
                </div>
              </div>

              <div className="my-6 text-center">
                <div className="inline-block relative">
                  <span className="text-sm font-medium text-gray-500 absolute -top-3 -left-2">$</span>
                  <span className="text-4xl font-heading font-bold text-raicesBlue">65</span>
                  <span className="text-xl font-medium text-gray-700">.000</span>
                  <span className="text-sm font-medium text-gray-500 ml-1">/mes</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesBlue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">90+ canales en HD</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesBlue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Internet de 200 Megas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesBlue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Router WiFi incluido</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesBlue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Soporte técnico prioritario</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-raicesBlue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Instalación gratuita</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en contratar el plan TV + Internet 200. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-raicesBlue to-blue-500 hover:from-blue-600 hover:to-raicesBlue"
              >
                Contratar Ahora
              </button>
            </CardContent>
          </Card>

          {/* Plan TV + Internet 300 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col bg-white rounded-xl border-0 shadow-md transform hover:scale-105">
            <div className="h-2 w-full bg-gradient-to-r from-purple-600 via-raicesBlue to-raicesRed"></div>
            <CardHeader className="pt-6 pb-2">
              <CardTitle className="text-xl font-bold font-heading">TV + Internet 300</CardTitle>
              <CardDescription className="text-sm text-gray-500">Combo premium</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col pt-2">
              <div className="flex items-center h-16">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-lg font-medium leading-none">90+ Canales + 300 Megas</div>
                  <div className="text-sm text-gray-500">Máximo rendimiento</div>
                </div>
              </div>

              <div className="my-6 text-center">
                <div className="inline-block relative">
                  <span className="text-sm font-medium text-gray-500 absolute -top-3 -left-2">$</span>
                  <span className="text-4xl font-heading font-bold text-purple-600">85</span>
                  <span className="text-xl font-medium text-gray-700">.000</span>
                  <span className="text-sm font-medium text-gray-500 ml-1">/mes</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">90+ canales en HD</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Internet de 300 Megas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Router WiFi 6</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Soporte técnico VIP</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Instalación gratuita prioritaria</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en contratar el plan TV + Internet 300. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-raicesBlue hover:from-purple-700 hover:to-blue-600"
              >
                Contratar Ahora
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            *Precios sujetos a verificación de cobertura. Consulta términos y condiciones.
          </p>
        </div>
      </div>
    </section>
  )
}
