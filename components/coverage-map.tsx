import Image from "next/image"
import { MapPin, Check, Info } from "lucide-react"

export function CoverageMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Cobertura de Nuestro Servicio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las zonas donde ofrecemos nuestros servicios de internet de alta velocidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-raicesBlue to-raicesRed rounded-2xl blur-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/colombia-internet-coverage.png"
                  alt="Mapa de cobertura"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-raicesBlue font-heading">Zonas de Cobertura</h3>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-raicesRed mr-3" />
                  <h4 className="text-xl font-bold">Ciudad Pacífica</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Cobertura completa en todos los barrios. Disponibilidad de todos los planes, incluyendo el Plan
                  Premium 500.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 200
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 300
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan Gamer 400
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan Premium 500
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-raicesRed mr-3" />
                  <h4 className="text-xl font-bold">Santander de Quilichao</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Cobertura en el centro y principales barrios. Disponibilidad de todos los planes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 200
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 300
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan Gamer 400
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan Premium 500
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-raicesRed mr-3" />
                  <h4 className="text-xl font-bold">Puerto Tejada - Ciudad del Sur</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Cobertura en zonas principales. Disponibilidad de planes hasta 400 Megas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 200
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 300
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan Gamer 400
                  </span>
                  <span className="bg-gray-200 text-gray-500 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    Plan Premium 500
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-raicesRed mr-3" />
                  <h4 className="text-xl font-bold">Caloto y Guachené</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Cobertura en zonas centrales. Disponibilidad de planes hasta 300 Megas en Guachené y hasta 400 Megas
                  en Caloto.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 200
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Plan 300
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Info className="h-3 w-3 mr-1" /> Plan Gamer 400 (Solo Caloto)
                  </span>
                  <span className="bg-gray-200 text-gray-500 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    Plan Premium 500
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-raicesBlue mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  ¿No encuentras tu ubicación? Contáctanos para verificar la disponibilidad en tu zona. Estamos
                  expandiendo nuestra cobertura constantemente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
