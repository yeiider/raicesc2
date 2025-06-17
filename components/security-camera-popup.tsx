"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export function SecurityCameraPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <Card className="w-full max-w-md relative bg-white shadow-2xl rounded-xl overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-white transition-colors"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        {/* Banner superior con imagen de fondo */}
        <div className="relative h-48 w-full">
          <Image src="/security-camera-offer.png" alt="Cámara de seguridad" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex flex-col justify-end p-6">
            <div className="absolute -top-1 left-0 bg-raicesRed text-white text-xs font-bold px-6 py-1.5 rounded-br-lg shadow-md transform rotate-0 z-10">
              ¡OFERTA EXCLUSIVA!
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 mt-4">Cámara de Seguridad GRATIS</h2>
            <div className="flex items-center text-amber-300 text-sm">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              <span>Válido hasta el 31 de octubre</span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          {!submitted ? (
            <>
              {/* Descripción con iconos */}
              <p className="text-gray-700 mb-4">
                Contrata nuestro plan de 500 Megas y recibe <span className="font-bold text-raicesRed">GRATIS</span> una
                cámara de videovigilancia WiFi HD 1080p.
              </p>

              {/* Lista de beneficios */}
              <div className="bg-gray-50 rounded-lg p-3 mb-5">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">Visión nocturna de alta calidad</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">Control desde tu smartphone</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">Instalación profesional incluida</span>
                  </li>
                </ul>
              </div>

              {/* Formulario simplificado */}
              <div className="space-y-4">
                <Input
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="text-sm"
                />
                <Button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        "Hola, estoy interesado en la oferta de la cámara de seguridad gratis con el plan de 500 Megas. ¿Podrían brindarme más información?",
                      ),
                      "_blank",
                    )
                  }}
                  className="w-full bg-raicesBlue hover:bg-blue-700 text-white text-sm"
                >
                  ¡Quiero mi cámara gratis!
                </Button>
                <p className="text-xs text-gray-500 text-center">Te llamaremos para brindarte más información.</p>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <h3 className="text-lg font-bold text-green-600 mb-2">¡Gracias!</h3>
              <p className="text-sm text-gray-600">Te llamaremos pronto para brindarte más información.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
