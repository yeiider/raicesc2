import Image from "next/image"

export function TvEntertainmentShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Entretenimiento Sin Límites</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre un mundo de posibilidades con nuestra amplia selección de contenido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/dragon-tv-show-poster.png"
              alt="Series Premium"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white font-bold text-xl mb-2">Series Premium</h3>
              <p className="text-white/80 text-sm">
                Las series más aclamadas y los estrenos más esperados en tu pantalla
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/champions-league-night.png"
              alt="Deportes en Vivo"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white font-bold text-xl mb-2">Deportes en Vivo</h3>
              <p className="text-white/80 text-sm">
                Disfruta de los mejores eventos deportivos con una calidad de imagen excepcional
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/culinary-clash.png"
              alt="Entretenimiento Familiar"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white font-bold text-xl mb-2">Entretenimiento Familiar</h3>
              <p className="text-white/80 text-sm">
                Programas para toda la familia que garantizan momentos inolvidables
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
