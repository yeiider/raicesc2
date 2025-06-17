"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Clock } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

// Definición de las ofertas para mantener todo centralizado
const offers = [
  {
    id: 1,
    title: "Cámara de Seguridad GRATIS",
    description:
      "Contrata nuestro plan de 500 Megas y recibe GRATIS una cámara de videovigilancia WiFi HD valorada en $150.000.",
    validUntil: "31 de octubre",
    image: "/security-camera-offer.png",
    tag: "DESTACADO",
    tagColor: "bg-raicesBlue",
    buttonColor: "bg-raicesBlue hover:bg-blue-600",
    whatsappMessage:
      "Hola, estoy interesado en la oferta de la cámara de seguridad gratis. ¿Podrían brindarme más información?",
  },
  {
    id: 2,
    title: "Instalación GRATIS",
    description:
      "Contrata cualquiera de nuestros planes y obtén la instalación completamente gratis. ¡Ahorra hasta $80.000!",
    validUntil: "15 de noviembre",
    image: "/free-installation.png",
    tag: "AHORRO",
    tagColor: "bg-raicesBlue",
    buttonColor: "bg-raicesBlue hover:bg-blue-600",
    whatsappMessage: "Hola, estoy interesado en la oferta de instalación gratis. ¿Podrían brindarme más información?",
  },
  {
    id: 3,
    title: "50% OFF Primer Mes",
    description: "Contrata cualquiera de nuestros planes combinados y obtén un 50% de descuento en tu primer mes.",
    validUntil: "30 de noviembre",
    image: "/50-percent-discount.png",
    tag: "NUEVO",
    tagColor: "bg-raicesBlue",
    buttonColor: "bg-raicesBlue hover:bg-blue-600",
    whatsappMessage:
      "Hola, estoy interesado en la oferta del 50% de descuento en el primer mes. ¿Podrían brindarme más información?",
  },
  {
    id: 4,
    title: "Router WiFi 6 Gratis",
    description: "Contrata nuestro plan de 300 Megas o superior y recibe gratis un router WiFi 6 de última generación.",
    validUntil: "20 de noviembre",
    image: "/modern-wifi-router.png",
    tag: "EXCLUSIVO",
    tagColor: "bg-raicesBlue",
    buttonColor: "bg-raicesBlue hover:bg-blue-600",
    whatsappMessage:
      "Hola, estoy interesado en la oferta del Router WiFi 6 gratis. ¿Podrían brindarme más información?",
  },
  {
    id: 5,
    title: "Chromecast Gratis",
    description:
      "Contrata nuestro plan TV + Internet 300 y recibe un Chromecast para disfrutar de tu contenido favorito en la TV.",
    validUntil: "25 de noviembre",
    image: "/chromecast-streaming-device.png",
    tag: "REGALO",
    tagColor: "bg-raicesBlue",
    buttonColor: "bg-raicesBlue hover:bg-blue-600",
    whatsappMessage: "Hola, estoy interesado en la oferta del Chromecast gratis. ¿Podrían brindarme más información?",
  },
  {
    id: 6,
    title: "2 Meses Gratis de HBO Max",
    description:
      "Contrata cualquier plan combinado y disfruta de 2 meses gratis de HBO Max para ver tus series y películas favoritas.",
    validUntil: "31 de diciembre",
    image: "/streaming-entertainment-hbo.png",
    tag: "ENTRETENIMIENTO",
    tagColor: "bg-raicesBlue",
    buttonColor: "bg-raicesBlue hover:bg-blue-600",
    whatsappMessage:
      "Hola, estoy interesado en la oferta de 2 meses gratis de HBO Max. ¿Podrían brindarme más información?",
  },
]

export function OffersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleOffers, setVisibleOffers] = useState(3) // Por defecto mostramos 3 ofertas en pantallas grandes

  // Determinar cuántas ofertas mostrar según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleOffers(1) // Móvil
      } else if (window.innerWidth < 1024) {
        setVisibleOffers(2) // Tablet
      } else {
        setVisibleOffers(3) // Desktop
      }
    }

    handleResize() // Ejecutar al inicio
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => {
      const nextIndex = current + 1
      return nextIndex >= offers.length - visibleOffers + 1 ? 0 : nextIndex
    })
  }, [visibleOffers])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => {
      const prevIndex = current - 1
      return prevIndex < 0 ? offers.length - visibleOffers : prevIndex
    })
  }, [visibleOffers])

  // Auto-avance del carrusel
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
          <div className="inline-flex items-center bg-blue-100 text-raicesBlue px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Ofertas por tiempo limitado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Promociones Exclusivas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprovecha estas increíbles ofertas disponibles por tiempo limitado
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Contenedor del carrusel */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleOffers)}%)` }}
            >
              {offers.map((offer) => (
                <div key={offer.id} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleOffers}%` }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                    <div className="relative h-48">
                      <div
                        className={`absolute top-2 right-2 ${offer.tagColor} text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10`}
                      >
                        {offer.tag}
                      </div>
                      <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{offer.title}</h3>
                      <div className="flex items-center text-amber-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Válido hasta el {offer.validUntil}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{offer.description}</p>
                      <button
                        onClick={() => {
                          window.open(getWhatsAppLink(offer.whatsappMessage), "_blank")
                        }}
                        className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center ${offer.buttonColor}`}
                      >
                        <span>Aprovechar Oferta</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-raicesBlue focus:outline-none transition-colors duration-300"
            aria-label="Oferta anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-raicesBlue focus:outline-none transition-colors duration-300"
            aria-label="Oferta siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: offers.length - visibleOffers + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-raicesBlue" : "bg-gray-300"
                }`}
                aria-label={`Ver oferta ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
