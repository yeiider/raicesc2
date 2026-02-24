"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CheckCircle, Loader2, User, Mail, Phone, MapPin, Building2, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface PlanSubscriptionFormProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan: {
    name: string
    speed: string
    price: string
  }
}

export function PlanSubscriptionForm({ isOpen, onClose, selectedPlan }: PlanSubscriptionFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: "",
    ciudad: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/cotizaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.correo,
          telefono: formData.telefono,
          direccion: formData.direccion,
          ciudad: formData.ciudad,
          plan: `${selectedPlan.name} - ${selectedPlan.speed} - ${selectedPlan.price}`,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds and close
        setTimeout(() => {
          setFormData({
            nombre: "",
            apellido: "",
            correo: "",
            telefono: "",
            direccion: "",
            ciudad: "",
          })
          setIsSubmitted(false)
          onClose()
        }, 3000)
      } else {
        if (response.status === 422 && data.status === "duplicate") {
          setError("Ya existe una solicitud con este número de teléfono. Nos pondremos en contacto contigo pronto.")
        } else {
          setError(data.message || "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
        }
      }
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
      console.error("Error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        direccion: "",
        ciudad: "",
      })
      setError("")
      setIsSubmitted(false)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header with gradient and plan info */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-3 backdrop-blur-sm border-2 border-yellow-400/30">
                      <Sparkles className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">¡Oferta Exclusiva!</h2>
                      <p className="text-blue-100 text-sm">Completa tus datos para contratar</p>
                    </div>
                  </div>

                  {/* Selected plan badge */}
                  <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm mb-1">Plan seleccionado:</p>
                        <p className="text-white font-bold text-xl">{selectedPlan.name}</p>
                        <p className="text-yellow-300 font-semibold">{selectedPlan.speed}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-100 text-sm mb-1">Precio mensual:</p>
                        <p className="text-white font-bold text-2xl">{selectedPlan.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form content */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-gray-700 flex items-center font-medium">
                        <User className="h-4 w-4 mr-2 text-blue-600" />
                        Nombre *
                      </Label>
                      <Input
                        id="nombre"
                        type="text"
                        required
                        placeholder="Ej: Juan"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="apellido" className="text-gray-700 flex items-center font-medium">
                        <User className="h-4 w-4 mr-2 text-blue-600" />
                        Apellido *
                      </Label>
                      <Input
                        id="apellido"
                        type="text"
                        required
                        placeholder="Ej: Pérez"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange("apellido", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="correo" className="text-gray-700 flex items-center font-medium">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      Correo electrónico *
                    </Label>
                    <Input
                      id="correo"
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.correo}
                      onChange={(e) => handleInputChange("correo", e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-gray-700 flex items-center font-medium">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Teléfono *
                    </Label>
                    <Input
                      id="telefono"
                      type="tel"
                      required
                      placeholder="Ej: 3201234567"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion" className="text-gray-700 flex items-center font-medium">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      Dirección *
                    </Label>
                    <Input
                      id="direccion"
                      type="text"
                      required
                      placeholder="Ej: Carrera 121 #42-93"
                      value={formData.direccion}
                      onChange={(e) => handleInputChange("direccion", e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ciudad" className="text-gray-700 flex items-center font-medium">
                      <Building2 className="h-4 w-4 mr-2 text-blue-600" />
                      Ciudad *
                    </Label>
                    <Input
                      id="ciudad"
                      type="text"
                      required
                      placeholder="Ej: Cali"
                      value={formData.ciudad}
                      onChange={(e) => handleInputChange("ciudad", e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mt-6">
                    <div className="flex items-start">
                      <Sparkles className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-yellow-900 font-semibold text-sm">¡Oferta por tiempo limitado!</p>
                        <p className="text-yellow-800 text-xs mt-1">
                          Aprovecha esta oportunidad única. Nos contactaremos contigo en las próximas 24 horas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        ¡Contratar ahora!
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¡Solicitud enviada con éxito!</h3>
              <p className="text-gray-600 mb-2">
                Gracias por elegir el <span className="font-semibold text-blue-600">{selectedPlan.name}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Nos pondremos en contacto contigo en las próximas 24 horas para coordinar la instalación.
              </p>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-800 text-sm">
                  <strong>¿Qué sigue?</strong>
                  <br />
                  Revisaremos tu solicitud y te contactaremos para confirmar los detalles de instalación.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
