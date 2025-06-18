"use client"

import type React from "react"

import { useState } from "react"
import { X, MapPin, Check, AlertCircle, User, Mail, Phone, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Define las áreas de cobertura
const coverageAreas = {
  cali: ["Ciudad Pacífica", "Bochalema", "Cachipaí", "Viveros", "Ciudad Meléndez"],
  jamundi: ["El Castillo", "Ciudad Country", "Sachamate", "Parque Natura"],
  puertoTejada: ["Ciudad del Sur"],
  norteCauca: ["Santander de Quilichao", "Guachené", "Caloto", "Padilla"],
}

// Add this function at the top of the component, after the coverageAreas definition
const getAreaName = (areaKey: string) => {
  const areaNames: { [key: string]: string } = {
    cali: "Cali",
    jamundi: "Jamundí",
    puertoTejada: "Puerto Tejada",
    norteCauca: "Norte del Cauca",
  }
  return areaNames[areaKey] || areaKey
}

type FreeTrialFormProps = {
  onClose: () => void
}

export function FreeTrialForm({ onClose }: FreeTrialFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedArea, setSelectedArea] = useState("cali")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<{
    name?: string
    email?: string
    phone?: string
    location?: string
    terms?: string
  }>({})

  const validateForm = () => {
    const errors: {
      name?: string
      email?: string
      phone?: string
      location?: string
      terms?: string
    } = {}

    if (!name.trim()) errors.name = "El nombre es requerido"
    if (!email.trim()) errors.email = "El correo es requerido"
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Correo electrónico inválido"
    if (!phone.trim()) errors.phone = "El celular es requerido"
    else if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) errors.phone = "Formato de celular inválido"
    if (!selectedLocation) errors.location = "Debes seleccionar una ubicación"
    if (!acceptedTerms) errors.terms = "Debes aceptar la política de tratamiento de datos"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Replace the existing handleSubmit function with this updated version:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      // Enviar datos al API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "free-trial",
          data: {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            location: selectedLocation,
            area: getAreaName(selectedArea),
          },
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Cerrar el formulario después de 3 segundos
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        console.error("Error enviando formulario")
        // Aún así mostrar el mensaje de éxito al usuario
        setSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 3000)
      }
    } catch (error) {
      console.error("Error:", error)
      // Mostrar mensaje de éxito al usuario aunque haya error
      setSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    }
  }

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
          {/* Botón de cerrar */}
          <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Cerrar"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Encabezado - Ahora ocupa el lado izquierdo en desktop */}
            <div className="md:w-1/3 bg-gradient-to-r from-raicesBlue to-blue-600 p-6 rounded-l-2xl md:rounded-r-none rounded-t-2xl md:rounded-t-none">
              <h2 className="text-2xl font-bold text-white font-heading">Prueba RAICES 30 días gratis</h2>
              <p className="text-white/90 text-sm mt-1">
                Completa el formulario y te contactaremos para coordinar tu instalación
              </p>

              {/* Imagen decorativa */}
              <div className="hidden md:block mt-8">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
                  <div className="flex items-center justify-center h-full">
                    <Wifi className="h-20 w-20 text-white/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido del formulario - Ahora ocupa el lado derecho en desktop */}
            <div className="md:w-2/3 p-6">
              {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Nombre completo */}
                      <div>
                        <Label htmlFor="name" className="text-gray-700 flex items-center">
                          <User className="h-4 w-4 mr-1.5 text-gray-500" />
                          Nombre completo
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`mt-1 ${formErrors.name ? "border-red-300" : "border-gray-300"}`}
                        />
                        {formErrors.name && (
                            <div className="flex items-center mt-1 text-red-500 text-xs">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              <p>{formErrors.name}</p>
                            </div>
                        )}
                      </div>

                      {/* Celular */}
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 flex items-center">
                          <Phone className="h-4 w-4 mr-1.5 text-gray-500" />
                          Celular
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`mt-1 ${formErrors.phone ? "border-red-300" : "border-gray-300"}`}
                            placeholder="Ej: 3165259832"
                        />
                        {formErrors.phone && (
                            <div className="flex items-center mt-1 text-red-500 text-xs">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              <p>{formErrors.phone}</p>
                            </div>
                        )}
                      </div>

                      {/* Correo electrónico - Ocupa todo el ancho */}
                      <div className="md:col-span-2">
                        <Label htmlFor="email" className="text-gray-700 flex items-center">
                          <Mail className="h-4 w-4 mr-1.5 text-gray-500" />
                          Correo electrónico
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`mt-1 ${formErrors.email ? "border-red-300" : "border-gray-300"}`}
                        />
                        {formErrors.email && (
                            <div className="flex items-center mt-1 text-red-500 text-xs">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              <p>{formErrors.email}</p>
                            </div>
                        )}
                      </div>
                    </div>

                    {/* Selección de ubicación */}
                    <div className="mt-4">
                      <Label className="text-gray-700 flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5 text-gray-500" />
                        Selecciona tu ubicación
                      </Label>

                      <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                        <div className="flex border-b">
                          <button
                              type="button"
                              onClick={() => setSelectedArea("cali")}
                              className={`flex-1 py-2 px-3 text-sm ${
                                  selectedArea === "cali" ? "bg-blue-50 text-raicesBlue font-medium" : "text-gray-600"
                              }`}
                          >
                            Cali
                          </button>
                          <button
                              type="button"
                              onClick={() => setSelectedArea("jamundi")}
                              className={`flex-1 py-2 px-3 text-sm ${
                                  selectedArea === "jamundi" ? "bg-blue-50 text-raicesBlue font-medium" : "text-gray-600"
                              }`}
                          >
                            Jamundí
                          </button>
                          <button
                              type="button"
                              onClick={() => setSelectedArea("norteCauca")}
                              className={`flex-1 py-2 px-3 text-sm ${
                                  selectedArea === "norteCauca" ? "bg-blue-50 text-raicesBlue font-medium" : "text-gray-600"
                              }`}
                          >
                            Norte Cauca
                          </button>
                        </div>

                        <div className="p-3 max-h-32 overflow-y-auto bg-gray-50">
                          <RadioGroup value={selectedLocation || ""} onValueChange={setSelectedLocation}>
                            <div className="grid grid-cols-2 gap-2">
                              {coverageAreas[selectedArea as keyof typeof coverageAreas].map((location) => (
                                  <div
                                      key={location}
                                      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                                          selectedLocation === location
                                              ? "bg-blue-50 border border-blue-100"
                                              : "hover:bg-gray-100 border border-transparent"
                                      }`}
                                      onClick={() => setSelectedLocation(location)}
                                  >
                                    <RadioGroupItem value={location} id={location} className="text-raicesBlue" />
                                    <Label htmlFor={location} className="cursor-pointer text-sm">
                                      {location}
                                    </Label>
                                  </div>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      {formErrors.location && (
                          <div className="flex items-center mt-1 text-red-500 text-xs">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            <p>{formErrors.location}</p>
                          </div>
                      )}
                    </div>

                    {/* Aceptación de términos y botón de envío en la misma fila */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                            id="terms"
                            checked={acceptedTerms}
                            onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                            className={`mt-1 ${formErrors.terms ? "border-red-500 data-[state=checked]:bg-red-500" : ""}`}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                              htmlFor="terms"
                              className={`text-sm font-normal ${formErrors.terms ? "text-red-500" : "text-gray-700"}`}
                          >
                            Acepto la{" "}
                            <a href="#" className="text-raicesBlue hover:underline">
                              política de tratamiento de datos
                            </a>
                          </Label>
                          {formErrors.terms && (
                              <div className="flex items-center mt-1 text-red-500 text-xs">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                <p>{formErrors.terms}</p>
                              </div>
                          )}
                        </div>
                      </div>

                      <Button type="submit" className="bg-raicesBlue hover:bg-blue-700 md:w-auto w-full">
                        Solicitar prueba gratuita
                      </Button>
                    </div>
                  </form>
              ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">¡Solicitud enviada!</h3>
                    <p className="text-gray-600">
                      Nos pondremos en contacto contigo pronto para coordinar la instalación de tu prueba gratuita.
                    </p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}
