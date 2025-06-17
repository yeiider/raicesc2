"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film, Music, Trophy, Heart, Globe, BookOpen, Baby, Tv } from "lucide-react"

// Lista de canales por categoría
const channelsByCategory = {
  entretenimiento: [
    "Warner Channel",
    "Sony",
    "Universal TV",
    "FX",
    "AXN",
    "TNT",
    "Comedy Central",
    "Fox",
    "E! Entertainment",
    "TBS",
    "A&E",
    "Lifetime",
    "AMC",
    "TruTV",
  ],
  peliculas: [
    "HBO",
    "HBO 2",
    "HBO Plus",
    "HBO Family",
    "HBO Signature",
    "HBO Mundi",
    "HBO Pop",
    "Cinemax",
    "TNT",
    "Space",
    "Cinecanal",
    "Studio Universal",
    "Paramount Network",
    "Golden",
  ],
  deportes: [
    "ESPN",
    "ESPN 2",
    "ESPN 3",
    "ESPN 4",
    "Fox Sports",
    "Fox Sports 2",
    "Fox Sports 3",
    "TyC Sports",
    "DIRECTV Sports",
    "Win Sports",
    "Win Sports+",
    "Golf Channel",
    "NBA TV",
  ],
  infantil: [
    "Disney Channel",
    "Disney Junior",
    "Disney XD",
    "Nickelodeon",
    "Nick Jr.",
    "Cartoon Network",
    "Discovery Kids",
    "Boomerang",
    "Tooncast",
    "Baby TV",
    "NatGeo Kids",
  ],
  cultural: [
    "National Geographic",
    "Discovery Channel",
    "History Channel",
    "Animal Planet",
    "Discovery H&H",
    "Discovery Science",
    "Discovery Turbo",
    "Discovery World",
    "TLC",
    "El Gourmet",
    "Film & Arts",
  ],
  musica: ["MTV", "HTV", "VH1", "MTV Hits", "MTV Live", "Telehit", "Telehit Urbano", "Concert Channel"],
  noticias: [
    "CNN en Español",
    "CNN International",
    "BBC World News",
    "DW",
    "France 24",
    "RT",
    "Euronews",
    "Bloomberg",
    "Caracol Noticias",
    "RCN Noticias",
    "NTN24",
  ],
  nacionales: [
    "Caracol",
    "RCN",
    "Canal Uno",
    "Señal Colombia",
    "Canal Institucional",
    "City TV",
    "Teleantioquia",
    "Telecaribe",
    "Telepacífico",
    "Canal Capital",
    "Canal TRO",
  ],
}

export function TvChannels() {
  const [activeCategory, setActiveCategory] = useState("entretenimiento")

  const categoryIcons = {
    entretenimiento: <Tv className="h-5 w-5" />,
    peliculas: <Film className="h-5 w-5" />,
    deportes: <Trophy className="h-5 w-5" />,
    infantil: <Baby className="h-5 w-5" />,
    cultural: <BookOpen className="h-5 w-5" />,
    musica: <Music className="h-5 w-5" />,
    noticias: <Globe className="h-5 w-5" />,
    nacionales: <Heart className="h-5 w-5" />,
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Más de 90 Canales HD</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia selección de canales organizados por categorías para encontrar tus favoritos
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-inner">
          <Tabs defaultValue="entretenimiento" className="w-full" onValueChange={setActiveCategory}>
            <div className="overflow-x-auto pb-4">
              <TabsList className="h-auto p-1 flex flex-nowrap min-w-max">
                {Object.keys(channelsByCategory).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={`flex items-center gap-2 px-4 py-2 capitalize ${
                      activeCategory === category ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    {categoryIcons[category]}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(channelsByCategory).map(([category, channels]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {channels.map((channel, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-500">{channel.charAt(0)}</span>
                      </div>
                      <h3 className="font-medium text-gray-800 text-sm">{channel}</h3>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            *La disponibilidad de canales puede variar según la ubicación y el plan contratado.
          </p>
        </div>
      </div>
    </section>
  )
}
