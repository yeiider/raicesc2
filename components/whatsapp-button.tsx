"use client"

import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Número de WhatsApp y mensaje predefinido
  const phoneNumber = "573148586751" // Formato internacional sin el "+"
  const message = "Hola, estoy interesado en los servicios de RAICES. ¿Podrían brindarme más información?"

  // URL de WhatsApp con el número y mensaje
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Mostrar el botón después de un breve retraso para una mejor experiencia de usuario
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Manejar la animación de pulso
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 1000)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20c35e] transition-all duration-300 ${
        isAnimating ? "animate-pulse scale-110" : ""
      } group`}
      aria-label="Contactar por WhatsApp"
    >
      {/* Logo oficial de WhatsApp */}
      <div className="relative w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-full h-full">
          <defs>
            <linearGradient id="a" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#57d163" />
              <stop offset="1" stopColor="#23b33a" />
            </linearGradient>
          </defs>
          <path
            fill="#fff"
            d="M87.4 50.5c-20.1 0-36.5 16.4-36.5 36.5 0 8 2.6 15.4 7 21.5l-4.6 16.7 17.2-4.5c5.8 3.8 12.7 6 20.1 6 20.1 0 36.5-16.4 36.5-36.5-.2-20.3-16.6-36.7-36.7-36.7z"
          />
          <path
            fill="#fff"
            d="M87.4 25.2c-34.1 0-61.8 27.7-61.8 61.8 0 13.5 4.4 26.1 11.9 36.3L27 161.8l39.1-10.2c9.8 6.4 21.4 10.1 33.9 10.1 34.1 0 61.8-27.7 61.8-61.8-.1-34.1-27.8-61.8-61.9-61.8h-12.5z"
          />
          <path
            fill="url(#a)"
            d="M87.4 25.2c-34.1 0-61.8 27.7-61.8 61.8 0 13.5 4.4 26.1 11.9 36.3L27 161.8l39.1-10.2c9.8 6.4 21.4 10.1 33.9 10.1 34.1 0 61.8-27.7 61.8-61.8-.1-34.1-27.8-61.8-61.9-61.8h-12.5zm0 25.3c20.1 0 36.5 16.4 36.5 36.5 0 20.1-16.4 36.5-36.5 36.5-7.4 0-14.3-2.2-20.1-6l-17.2 4.5 4.6-16.7c-4.4-6.1-7-13.5-7-21.5 0-20 16.4-36.3 36.5-36.3h3.2z"
          />
          <path
            fill="#fff"
            d="M72.2 68.6c-.8-1.7-1.5-1.8-2.2-1.8-.6 0-1.2 0-1.9 0s-1.7.2-2.6 1.3c-.9 1.1-3.4 3.3-3.4 8.1s3.5 9.4 4 10 6.7 10.2 16.2 14.3c8 3.5 9.7 2.8 11.4 2.6s5.7-2.3 6.5-4.5-.8-8.5-1.7-9.3c-.9-.8-1.9-1.3-4-2.3s-12.1-6-14-6.6c-1.9-.7-3.2-1-4.6.9-1.4 2-5.3 6.6-6.5 8-.7.8-1.8 1.3-3.8.3-2.1-1-8.7-3.2-16.6-10.2-6.1-5.5-10.3-12.2-11.5-14.3-1.2-2.1-.1-3.2.9-4.2.9-.9 2-2.3 3-3.5.9-1.2 1.2-2 1.9-3.3.6-1.3.3-2.5-.2-3.5s-4.3-10.6-6-14.5c-1.6-3.8-3.2-3.3-4.4-3.3-1.1 0-2.4-.2-3.7-.2-2.8 0-5.9 1.1-7.4 3.4-5.6 8.5 3.8 28.1 6.9 33.8 8.3 15 20.3 23.2 30.6 26.8 4.3 1.5 10.6 3.2 15.6 2.4 3.3-.6 10.2-4.2 11.6-8.3 1.4-4.1 1.4-7.5.9-8.3-.5-.6-1.7-1.1-3.7-1.8z"
          />
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chatea con nosotros
      </span>

      {/* Efecto de onda */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  )
}
