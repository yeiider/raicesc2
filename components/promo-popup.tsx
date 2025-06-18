"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && phone.trim()) {
      try {
        // Enviar datos al API
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "promo",
            data: {
              name: name.trim(),
              phone: phone.trim(),
            },
          }),
        })

        if (response.ok) {
          setSubmitted(true)
          // Cerrar el popup después de 3 segundos
          setTimeout(() => {
            setIsOpen(false)
          }, 3000)
        } else {
          console.error("Error enviando formulario")
          // Aún así mostrar el mensaje de éxito al usuario
          setSubmitted(true)
          setTimeout(() => {
            setIsOpen(false)
          }, 3000)
        }
      } catch (error) {
        console.error("Error:", error)
        // Mostrar mensaje de éxito al usuario aunque haya error
        setSubmitted(true)
        setTimeout(() => {
          setIsOpen(false)
        }, 3000)
      }
    }
  }

  if (!isOpen) return null

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <Card className="w-full max-w-sm relative shadow-xl border-0 bg-white rounded-2xl overflow-hidden">
          {/* Compact header */}
          <div className="bg-raicesBlue text-white p-4 relative">
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white/80 hover:text-white rounded-full p-1"
            >
              <X size={16} />
            </button>

            <div className="text-center">
              <div className="text-xs font-semibold text-blue-200 mb-2">PROMOCIÓN ESPECIAL</div>

              {/* Enhanced 30 DÍAS GRATIS */}
              <div className="relative">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-yellow-300/20 rounded-lg blur-sm animate-pulse"></div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <div className="flex items-center justify-center gap-3">
                  <span
                      className="text-5xl font-black leading-none"
                      style={{
                        background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      }}
                  >
                    30
                  </span>
                    <div className="flex flex-col justify-center">
                      <div className="text-base font-bold text-yellow-300 leading-tight">DÍAS</div>
                      <div className="text-base font-bold text-yellow-300 leading-tight">GRATIS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="p-4">
            {!submitted ? (
                <>
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-600 mb-3">Internet de alta velocidad + instalación gratuita</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full h-10 text-sm"
                    />
                    <Input
                        type="tel"
                        placeholder="Tu número de teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full h-10 text-sm"
                    />
                    <Button
                        type="submit"
                        className="w-full h-10 bg-raicesRed hover:bg-red-600 text-white font-semibold text-sm"
                    >
                      <Gift size={16} className="mr-2" />
                      Quiero 30 días gratis
                    </Button>
                  </form>

                  <p className="text-xs text-gray-400 text-center mt-3">Sin compromiso • Cancela cuando quieras</p>
                </>
            ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mb-2">¡Listo!</h3>
                  <p className="text-sm text-gray-600">Te llamaremos pronto para activar tu promoción.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
  )
}
