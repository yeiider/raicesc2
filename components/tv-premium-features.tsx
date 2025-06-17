import Image from "next/image"
import { Tv, Zap, Smartphone } from "lucide-react"

export function TvPremiumFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Experiencia Premium</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Disfruta de una experiencia de entretenimiento inigualable con nuestra televisión HD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-raicesRed to-raicesBlue rounded-3xl blur-lg opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/sleek-entertainment-center.png"
                alt="Centro de entretenimiento"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                <Tv className="h-6 w-6 text-raicesRed" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-xl">Calidad HD Garantizada</h3>
                <p className="text-gray-600">
                  Disfruta de imágenes nítidas y colores vibrantes con nuestra señal HD estable. Cada detalle cobra vida
                  en tu pantalla.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                <Zap className="h-6 w-6 text-raicesBlue" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-xl">Señal Estable</h3>
                <p className="text-gray-600">
                  Olvídate de las interrupciones por mal clima. Nuestra tecnología garantiza una señal estable incluso
                  en condiciones climáticas adversas.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <Smartphone className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-xl">Guía Interactiva</h3>
                <p className="text-gray-600">
                  Navega fácilmente por la programación con nuestra guía intuitiva y encuentra rápidamente lo que
                  quieres ver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
