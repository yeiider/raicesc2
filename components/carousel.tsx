"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    src: "/images/CARRUSEL/mesa1.png",
    alt: "Internet de alta velocidad",
  },
  {
    src: "/images/CARRUSEL/mesa2.png",
    alt: "Televisión HD",
  },
  {
    src: "/images/CARRUSEL/mesa3.png",
    alt: "Planes combinados",
  },
  {
    src: "/images/CARRUSEL/mesa4.png",
    alt: "Soporte técnico 24/7",
  }
]

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Carousel container with rounded borders and 3D effect */}
        <div className="relative h-[250px] md:h-[350px] lg:h-[400px] w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] transform perspective-1000">
          {/* Carousel Images */}
          <div
            className="w-full h-full transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${carouselImages.length * 100}%`,
              display: "flex",
            }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="relative w-full h-full flex-shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-raicesBlue/20 to-raicesRed/20 z-10"></div>
                <Image
                  src={image.src || "/placeholder.svg?height=400&width=600&query=abstract digital network"}
                  alt={image.alt}
                  fill
                  className="object-cover transform transition-transform duration-700 hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center z-20">
                  <div className="container mx-auto px-8">
                    <div className="max-w-md transform transition-all duration-500 translate-y-0 opacity-100">
                      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg font-heading">
                        {image.alt}
                      </h2>
                      <p className="text-white text-base md:text-lg max-w-md drop-shadow-lg">
                        Descubre la mejor experiencia en conectividad con RAICES
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3D effect overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-inner"></div>

          {/* Left Arrow */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer z-30">
            <button
              onClick={prevSlide}
              className="h-10 w-10 flex items-center justify-center text-white bg-black/30 hover:bg-raicesRed/80 rounded-full p-1 transition-colors duration-300"
              aria-label="Anterior imagen"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer z-30">
            <button
              onClick={nextSlide}
              className="h-10 w-10 flex items-center justify-center text-white bg-black/30 hover:bg-raicesRed/80 rounded-full p-1 transition-colors duration-300"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
