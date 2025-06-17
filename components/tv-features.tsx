import Image from "next/image"
import { Tv, Zap, Smartphone, Layers } from "lucide-react"

export function TvFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              La mejor experiencia de <span className="text-raicesRed">televisión</span> para tu hogar
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Disfruta de una experiencia visual incomparable con nuestra televisión HD. Imágenes nítidas, colores
              vibrantes y sonido envolvente para que no te pierdas ni un detalle de tus programas favoritos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Tv className="h-6 w-6 text-raicesRed" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Calidad HD</h3>
                  <p className="text-sm text-gray-600">
                    Disfruta de imágenes con resolución Full HD 1080p para una experiencia visual inigualable.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-raicesBlue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Sin Interrupciones</h3>
                  <p className="text-sm text-gray-600">
                    Señal estable incluso en condiciones climáticas adversas, a diferencia de los servicios satelitales.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Guía Interactiva</h3>
                  <p className="text-sm text-gray-600">
                    Navega fácilmente por la programación con nuestra guía intuitiva y encuentra rápidamente lo que
                    quieres ver.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Canales Temáticos</h3>
                  <p className="text-sm text-gray-600">
                    Amplia variedad de canales organizados por categorías para todos los gustos y edades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-raicesRed to-raicesBlue rounded-3xl blur-lg opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?key=4tw7x"
                alt="Experiencia de televisión HD"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-raicesRed/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-raicesBlue/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
