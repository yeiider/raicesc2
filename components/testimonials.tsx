"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    location: "Ciudad Pacífica",
    rating: 5,
    comment:
      "Desde que contratamos RAICES, la velocidad de internet es increíble. Mis hijos pueden estudiar en línea sin interrupciones y yo puedo trabajar desde casa sin problemas.",
    avatar: "/thoughtful-gaze.png",
  },
  {
    id: 2,
    name: "María Gómez",
    location: "Santander de Quilichao",
    rating: 5,
    comment:
      "El servicio técnico es excelente. Tuve un problema y lo resolvieron el mismo día. La atención al cliente es de primera.",
    avatar: "/serene-gaze.png",
  },
  {
    id: 3,
    name: "Juan Pérez",
    location: "Puerto Tejada",
    rating: 4,
    comment:
      "Excelente relación calidad-precio. El plan de 300 megas cumple perfectamente con lo prometido y la televisión tiene todos los canales que necesitamos.",
    avatar: "/thoughtful-gaze.png",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de familias ya disfrutan de nuestra conectividad. Conoce sus experiencias.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Carousel container */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 italic text-sm">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
