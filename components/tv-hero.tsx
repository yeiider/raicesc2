import Image from "next/image"
import { Play, Tv, Zap } from "lucide-react"

export function TvHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black py-24 md:py-32 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-raicesRed/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-raicesBlue/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-raicesRed via-purple-600 to-raicesBlue rounded-2xl blur-lg opacity-70"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/modern-living-entertainment.png"
                  alt="Televisión HD"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
                    <Play className="h-8 w-8 text-white fill-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
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
              Disfruta de más de 90 canales en alta definición con la mejor calidad de imagen y sonido. Entretenimiento
              para toda la familia en un solo lugar.
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
              <button className="bg-white hover:bg-gray-100 text-raicesBlue font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Ver Planes
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-8 rounded-lg transition-colors">
                Programación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
