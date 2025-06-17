import Image from "next/image"
import { Clock, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Programas recomendados con información ficticia
const recommendedShows = [
  {
    id: 1,
    title: "La Casa del Dragón",
    channel: "HBO",
    time: "21:00",
    day: "Domingo",
    rating: 4.8,
    description:
      "Precuela de Game of Thrones que narra la historia de la Casa Targaryen, 300 años antes de los eventos de la serie original.",
  },
  {
    id: 2,
    title: "MasterChef Colombia",
    channel: "RCN",
    time: "20:00",
    day: "Lunes a Viernes",
    rating: 4.5,
    description:
      "Competencia culinaria donde aficionados y chefs amateurs compiten por convertirse en el mejor cocinero del país.",
  },
  {
    id: 3,
    title: "Champions League",
    channel: "ESPN",
    time: "14:45",
    day: "Martes y Miércoles",
    rating: 4.9,
    description:
      "Los mejores equipos de fútbol de Europa se enfrentan en el torneo de clubes más prestigioso del mundo.",
  },
  {
    id: 4,
    title: "Stranger Things",
    channel: "Warner Channel",
    time: "22:00",
    day: "Jueves",
    rating: 4.7,
    description:
      "Un grupo de niños se enfrenta a fuerzas sobrenaturales y experimentos secretos del gobierno en un pequeño pueblo de Indiana.",
  },
  {
    id: 5,
    title: "National Geographic Explorer",
    channel: "National Geographic",
    time: "19:00",
    day: "Sábado",
    rating: 4.6,
    description:
      "Documental que explora los rincones más remotos del planeta, revelando maravillas naturales y fenómenos sorprendentes.",
  },
  {
    id: 6,
    title: "La Voz Kids",
    channel: "Caracol",
    time: "20:00",
    day: "Domingo",
    rating: 4.4,
    description:
      "Concurso musical donde niños talentosos compiten bajo la guía de reconocidos artistas para convertirse en la mejor voz infantil.",
  },
]

export function TvRecommendations() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Recomendaciones de la Semana</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No te pierdas los programas más destacados en nuestra programación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedShows.map((show) => (
            <Card
              key={show.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-0 right-0 bg-raicesRed text-white text-xs font-medium px-3 py-1 rounded-bl-lg z-10">
                  {show.channel}
                </div>
                <Image
                  src={`/placeholder.svg?key=xacrf&height=200&width=400&query=TV show ${show.title}`}
                  alt={show.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white font-bold text-xl">{show.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-raicesBlue mr-1" />
                    <span className="text-sm text-gray-600">
                      {show.time} • {show.day}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{show.rating}/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{show.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-raicesBlue hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Ver Programación Completa
          </button>
        </div>
      </div>
    </section>
  )
}
