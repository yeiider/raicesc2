"use client"

import { Clock, Calendar, Check, Gift, Tv, Wifi, Smartphone } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function LimitedTimeOffers() {
  return (
    <section className="py-16 bg-gray-50" id="todas-ofertas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Ofertas por tiempo limitado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Todas las Promociones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No dejes pasar estas increíbles ofertas. ¡El tiempo corre!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Oferta 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-raicesBlue">Cámara de Seguridad GRATIS</h3>
                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Válido hasta el 31 de octubre</span>
                  </div>
                </div>
                <div className="bg-raicesBlue text-white text-xs font-medium px-3 py-1 rounded-full">Destacado</div>
              </div>

              <p className="text-gray-600 mb-4">
                Contrata nuestro plan de 500 Megas y recibe GRATIS una cámara de videovigilancia WiFi HD valorada en
                $150.000.
              </p>

              <div className="flex items-center text-gray-700 mb-4">
                <Wifi className="h-5 w-5 text-raicesBlue mr-2" />
                <span className="font-medium">Plan Premium 500 Megas</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Cámara HD 1080p con visión nocturna</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Conexión WiFi y control desde smartphone</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Instalación incluida</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta de la cámara de seguridad gratis. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-raicesBlue to-blue-600 hover:from-blue-600 hover:to-raicesBlue"
              >
                Aprovechar Oferta
              </button>
            </div>
          </div>

          {/* Oferta 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-raicesRed">Instalación GRATIS</h3>
                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Válido hasta el 15 de noviembre</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                Contrata cualquiera de nuestros planes y obtén la instalación completamente gratis. ¡Ahorra hasta
                $80.000!
              </p>

              <div className="flex items-center text-gray-700 mb-4">
                <Tv className="h-5 w-5 text-raicesRed mr-2" />
                <span className="font-medium">Todos los planes</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Instalación profesional sin costo</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Configuración de equipos incluida</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Activación inmediata del servicio</span>
                </li>
              </ul>

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
            </div>
          </div>

          {/* Oferta 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-600">50% OFF Primer Mes</h3>
                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Válido hasta el 30 de noviembre</span>
                  </div>
                </div>
                <div className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">Nuevo</div>
              </div>

              <p className="text-gray-600 mb-4">
                Contrata cualquiera de nuestros planes combinados y obtén un 50% de descuento en tu primer mes.
              </p>

              <div className="flex items-center text-gray-700 mb-4">
                <Gift className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium">Planes Internet + TV</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">50% de descuento en la primera factura</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Aplicable a todos los planes combinados</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Sin cláusula de permanencia</span>
                </li>
              </ul>

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
            </div>
          </div>

          {/* Oferta 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Router WiFi 6 Gratis</h3>
                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Válido hasta el 20 de noviembre</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                Contrata nuestro plan de 300 Megas o superior y recibe gratis un router WiFi 6 de última generación.
              </p>

              <div className="flex items-center text-gray-700 mb-4">
                <Wifi className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium">Planes desde 300 Megas</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Router WiFi 6 de última generación</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Mayor cobertura y velocidad en toda tu casa</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Configuración profesional incluida</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta del Router WiFi 6 gratis. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
              >
                Aprovechar Oferta
              </button>
            </div>
          </div>

          {/* Oferta 5 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-amber-600">Chromecast Gratis</h3>
                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Válido hasta el 25 de noviembre</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                Contrata nuestro plan TV + Internet 300 y recibe un Chromecast para disfrutar de tu contenido favorito
                en la TV.
              </p>

              <div className="flex items-center text-gray-700 mb-4">
                <Smartphone className="h-5 w-5 text-amber-600 mr-2" />
                <span className="font-medium">Plan TV + Internet 300</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Chromecast original de Google</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Transmite contenido desde tu smartphone a la TV</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Compatible con Netflix, YouTube, Disney+ y más</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta del Chromecast gratis. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
              >
                Aprovechar Oferta
              </button>
            </div>
          </div>

          {/* Oferta 6 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-600">2 Meses Gratis de HBO Max</h3>
                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Válido hasta el 31 de diciembre</span>
                  </div>
                </div>
                <div className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">Exclusivo</div>
              </div>

              <p className="text-gray-600 mb-4">
                Contrata cualquier plan combinado y disfruta de 2 meses gratis de HBO Max para ver tus series y
                películas favoritas.
              </p>

              <div className="flex items-center text-gray-700 mb-4">
                <Tv className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="font-medium">Planes Internet + TV</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">2 meses de suscripción a HBO Max</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Acceso a todo el catálogo de contenido</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-gray-600">Disponible en múltiples dispositivos</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en la oferta de 2 meses gratis de HBO Max. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }}
                className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
              >
                Aprovechar Oferta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
