"use client"

import Image from "next/image"
import { Zap, Tv, Wifi, Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function SpecialOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ofertas Destacadas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras promociones más populares y aprovecha estos beneficios exclusivos por tiempo limitado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Oferta 1: Cámara de Seguridad */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col bg-white rounded-xl border-0 shadow-md transform hover:scale-105">
            <div className="h-2 w-full bg-gradient-to-r from-raicesBlue via-blue-400 to-purple-600"></div>
            <div className="relative h-48">
              <div className="absolute top-2 right-2 bg-raicesBlue text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10">
                Destacado
              </div>
              <Image src="/security-camera-offer.png" alt="Cámara de seguridad" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold font-heading">Cámara de Seguridad GRATIS</CardTitle>
              <CardDescription className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-amber-600" />
                <span className="text-amber-600">Válido hasta el 31 de octubre</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">
                Contrata nuestro plan de 500 Megas y recibe GRATIS una cámara de videovigilancia WiFi HD.
              </p>
              <div className="flex items-center text-raicesBlue font-medium">
                <Zap className="h-5 w-5 mr-2" />
                <span>Plan Premium 500 Megas</span>
              </div>
            </CardContent>
            <CardFooter>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta de la cámara de seguridad gratis con el plan de 500 Megas. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-raicesBlue to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Aprovechar Oferta
              </button>
            </CardFooter>
          </Card>

          {/* Oferta 2: Instalación Gratis */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col bg-white rounded-xl border-0 shadow-md transform hover:scale-105">
            <div className="h-2 w-full bg-gradient-to-r from-raicesRed via-red-400 to-raicesRed"></div>
            <div className="relative h-48">
              <Image src="/free-installation.png" alt="Instalación gratis" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold font-heading">Instalación GRATIS</CardTitle>
              <CardDescription className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-amber-600" />
                <span className="text-amber-600">Válido hasta el 15 de noviembre</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">
                Contrata cualquiera de nuestros planes y obtén la instalación completamente gratis. ¡Ahorra hasta
                $80.000!
              </p>
              <div className="flex items-center text-raicesRed font-medium">
                <Wifi className="h-5 w-5 mr-2" />
                <span>Todos los planes de Internet</span>
              </div>
            </CardContent>
            <CardFooter>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta de instalación gratis. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-raicesRed to-red-500 hover:from-red-600 hover:to-raicesRed"
              >
                Aprovechar Oferta
              </button>
            </CardFooter>
          </Card>

          {/* Oferta 3: 50% Descuento */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col bg-white rounded-xl border-0 shadow-md transform hover:scale-105">
            <div className="h-2 w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500"></div>
            <div className="relative h-48">
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10">
                Nuevo
              </div>
              <Image src="/50-percent-discount.png" alt="50% de descuento" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold font-heading">50% OFF Primer Mes</CardTitle>
              <CardDescription className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-amber-600" />
                <span className="text-amber-600">Válido hasta el 30 de noviembre</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">
                Contrata cualquiera de nuestros planes combinados y obtén un 50% de descuento en tu primer mes.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <Tv className="h-5 w-5 mr-2" />
                <span>Planes Internet + TV</span>
              </div>
            </CardContent>
            <CardFooter>
              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta del 50% de descuento en el primer mes. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Aprovechar Oferta
              </button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#todas-ofertas"
            className="inline-flex items-center text-raicesBlue hover:text-blue-700 font-medium"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("todas-ofertas")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span>Ver todas las ofertas</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
