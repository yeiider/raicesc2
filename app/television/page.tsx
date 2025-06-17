"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { Check, Tv, Zap, Film, Trophy, Music, Package } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

// Importar los nuevos componentes
import { TvPremiumFeatures } from "@/components/tv-premium-features"
import { TvEntertainmentShowcase } from "@/components/tv-entertainment-showcase"

export default function TelevisionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/vibrant-media-center.png" alt="TV Background" fill className="object-cover" />
        </div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-raicesRed/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-raicesBlue/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-raicesRed via-purple-600 to-raicesBlue rounded-2xl blur-lg opacity-70"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/sleek-entertainment-center.png"
                    alt="Televisión HD"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-md">
                Televisión HD{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-raicesRed to-raicesBlue">
                  Premium
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Disfruta de más de 90 canales en alta definición con la mejor calidad de imagen y sonido.
                Entretenimiento para toda la familia en un solo lugar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-raicesRed/20 flex items-center justify-center mr-3">
                      <Tv className="h-5 w-5 text-raicesRed" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">90+ Canales HD</h3>
                      <p className="text-sm text-gray-300">Deportes, películas, series y más</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-raicesBlue/20 flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-raicesBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Calidad Superior</h3>
                      <p className="text-sm text-gray-300">Imagen nítida y sonido envolvente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        "Hola, estoy interesado en los planes de televisión. ¿Podrían brindarme más información?",
                      ),
                      "_blank",
                    )
                  }}
                  className="bg-white hover:bg-gray-100 text-raicesBlue font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Ver Planes
                </button>
                <button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        "Hola, me gustaría conocer la programación de los canales de televisión. ¿Podrían brindarme más información?",
                      ),
                      "_blank",
                    )
                  }}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Programación
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TvEntertainmentShowcase />
      <TvPremiumFeatures />

      {/* Canales Section */}
      <section className="py-16 bg-white" id="canales">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Más de 90 Canales HD</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra amplia selección de canales organizados por categorías para encontrar tus favoritos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <Film className="h-6 w-6 text-raicesRed" />
                </div>
                <h3 className="text-xl font-bold">Películas y Series</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesRed mr-2" />
                  <span>HBO, HBO 2, HBO Plus</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesRed mr-2" />
                  <span>TNT, Space, Cinecanal</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesRed mr-2" />
                  <span>Warner, Sony, Universal</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesRed mr-2" />
                  <span>FX, AXN, AMC</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Trophy className="h-6 w-6 text-raicesBlue" />
                </div>
                <h3 className="text-xl font-bold">Deportes</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesBlue mr-2" />
                  <span>ESPN, ESPN 2, ESPN 3</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesBlue mr-2" />
                  <span>Fox Sports, Fox Sports 2</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesBlue mr-2" />
                  <span>Win Sports, Win Sports+</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-raicesBlue mr-2" />
                  <span>TyC Sports, DIRECTV Sports</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Music className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Música y Entretenimiento</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span>MTV, HTV, VH1</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span>E! Entertainment, TBS</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span>Comedy Central, Lifetime</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span>MTV Hits, Telehit</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                window.open(
                  getWhatsAppLink(
                    "Hola, me gustaría ver la lista completa de canales disponibles. ¿Podrían brindarme esta información?",
                  ),
                  "_blank",
                )
              }}
              className="bg-raicesBlue hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Ver Lista Completa de Canales
            </button>
          </div>
        </div>
      </section>

      {/* Recomendaciones Section */}
      <section className="py-16 bg-gray-50" id="recomendaciones">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Recomendaciones de la Semana</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No te pierdas los programas más destacados en nuestra programación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programa 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <div className="absolute top-0 right-0 bg-raicesRed text-white text-xs font-medium px-3 py-1 rounded-bl-lg z-10">
                  HBO
                </div>
                <Image src="/dragon-tv-show-poster.png" alt="La Casa del Dragón" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white font-bold text-xl">La Casa del Dragón</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Domingo • 21:00</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4.8/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Precuela de Game of Thrones que narra la historia de la Casa Targaryen, 300 años antes de los eventos
                  de la serie original.
                </p>
              </div>
            </div>

            {/* Programa 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <div className="absolute top-0 right-0 bg-raicesRed text-white text-xs font-medium px-3 py-1 rounded-bl-lg z-10">
                  ESPN
                </div>
                <Image src="/champions-league-night.png" alt="Champions League" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white font-bold text-xl">Champions League</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Martes y Miércoles • 14:45</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4.9/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Los mejores equipos de fútbol de Europa se enfrentan en el torneo de clubes más prestigioso del mundo.
                </p>
              </div>
            </div>

            {/* Programa 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <div className="absolute top-0 right-0 bg-raicesRed text-white text-xs font-medium px-3 py-1 rounded-bl-lg z-10">
                  RCN
                </div>
                <Image src="/culinary-clash.png" alt="MasterChef Colombia" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white font-bold text-xl">MasterChef Colombia</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Lunes a Viernes • 20:00</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4.5/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Competencia culinaria donde aficionados y chefs amateurs compiten por convertirse en el mejor cocinero
                  del país.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                window.open(
                  getWhatsAppLink(
                    "Hola, me gustaría conocer la programación completa de los canales. ¿Podrían brindarme esta información?",
                  ),
                  "_blank",
                )
              }}
              className="bg-raicesBlue hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Ver Programación Completa
            </button>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-16 bg-white" id="planes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Nuestros Planes de Televisión</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades de entretenimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Solo TV */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:scale-105">
              <div className="h-2 w-full bg-gradient-to-r from-raicesRed via-red-400 to-raicesRed"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Solo TV</h3>
                <p className="text-sm text-gray-500 mb-4">Televisión HD</p>

                <div className="flex items-center h-16 mb-4">
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

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
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
              </div>
            </div>

            {/* Plan TV + Internet 200 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:scale-105 relative">
              <div className="h-2 w-full bg-gradient-to-r from-raicesBlue via-blue-400 to-raicesBlue"></div>
              <div className="absolute top-0 right-0 bg-raicesBlue text-white text-xs font-medium px-3 py-1 rounded-bl-lg shadow-md transform translate-y-0">
                Más Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">TV + Internet 200</h3>
                <p className="text-sm text-gray-500 mb-4">Combo básico</p>

                <div className="flex items-center h-16 mb-4">
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

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
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
              </div>
            </div>

            {/* Plan TV + Internet 300 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:scale-105">
              <div className="h-2 w-full bg-gradient-to-r from-purple-600 via-raicesBlue to-raicesRed"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">TV + Internet 300</h3>
                <p className="text-sm text-gray-500 mb-4">Combo premium</p>

                <div className="flex items-center h-16 mb-4">
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

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
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
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              *Precios sujetos a verificación de cobertura. Consulta términos y condiciones.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
