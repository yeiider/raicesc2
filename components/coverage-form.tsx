"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  X,
  MapPin,
  Check,
  Search,
  ArrowRight,
  ArrowLeft,
  Shield,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import { motion, AnimatePresence } from "framer-motion"

// Define the coverage areas
const coverageAreas = {
  cali: ["Ciudad Pacífica", "Bochalema", "Cachipaí", "Viveros", "Ciudad Meléndez"],
  jamundi: ["Castillo", "Ciudad Country", "Sachamate", "Parque Natura"],
  cauca: ["Guachené", "Ciudad del Sur", "Caloto", "Santander de Quilichao"],
}

type CoverageFormProps = {
  onClose: () => void
}

export function CoverageForm({ onClose }: CoverageFormProps) {
  const [selectedTab, setSelectedTab] = useState("cali")
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [formErrors, setFormErrors] = useState<{
    name?: string
    email?: string
    phone?: string
    terms?: string
  }>({})
  const [isValidating, setIsValidating] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds

  // Timer for countdown
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Filter locations based on search term
  const filteredLocations = searchTerm
    ? [...coverageAreas.cali, ...coverageAreas.jamundi, ...coverageAreas.cauca].filter((location) =>
        location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : coverageAreas[selectedTab as keyof typeof coverageAreas]

  const validateForm = () => {
    setIsValidating(true)
    const errors: {
      name?: string
      email?: string
      phone?: string
      terms?: string
    } = {}

    if (!name.trim()) errors.name = "El nombre es requerido"
    if (!email.trim()) errors.email = "El correo es requerido"
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Correo electrónico inválido"
    if (!phone.trim()) errors.phone = "El celular es requerido"
    else if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) errors.phone = "Formato de celular inválido"
    if (!acceptedTerms) errors.terms = "Debes aceptar la política de tratamiento de datos"

    setFormErrors(errors)

    setTimeout(() => {
      setIsValidating(false)
    }, 500)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitted(true)

    // In a real application, you would send this data to your backend
    setTimeout(() => {
      // Reset form after submission
      setName("")
      setPhone("")
      setEmail("")
      setAddress("")
      setSelectedLocation(null)
      setStep(1)
      setAcceptedTerms(false)

      // Close the form after a delay
      setTimeout(() => {
        onClose()
      }, 3000)
    }, 1000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const shimmerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: [0, 1, 0],
      x: [100, 0, -100],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 2,
        ease: "linear",
        repeatDelay: 3,
      },
    },
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 z-10 bg-black/20 hover:bg-black/30 rounded-full p-1.5 backdrop-blur-sm transition-all duration-200"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Progress indicator */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200 z-10">
          <motion.div
            initial={{ width: submitted ? "100%" : step === 1 ? "50%" : "100%" }}
            animate={{ width: submitted ? "100%" : step === 1 ? "50%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
          >
            <motion.div
              variants={shimmerVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 bg-white/30 skew-x-12"
            />
          </motion.div>
        </div>

        {/* Header with decorative elements */}
        <div className="bg-gradient-to-r from-raicesBlue to-blue-600 p-8 rounded-t-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-md"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 backdrop-blur-sm">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">Prueba RAICES 30 días gratis</h2>
            </div>
            <div className="flex items-center ml-13 pl-0.5 mt-2">
              <Clock className="h-4 w-4 text-white/80 mr-2" />
              <p className="text-white/90">
                Oferta por tiempo limitado -
                <span className="font-bold ml-1 text-white">{formatTime(timeLeft)} restantes</span>
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <div className="p-6 md:p-8">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                      <MapPin className="h-4 w-4 text-raicesBlue" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">Verifica la cobertura</h3>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-6">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        type="text"
                        placeholder="Buscar tu ubicación..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 rounded-lg"
                      />
                    </div>

                    {searchTerm ? (
                      <div className="bg-gray-50 rounded-xl p-4 max-h-60 overflow-y-auto border border-gray-100 shadow-inner">
                        {filteredLocations.length > 0 ? (
                          <RadioGroup value={selectedLocation || ""} onValueChange={setSelectedLocation}>
                            {filteredLocations.map((location) => (
                              <div
                                key={location}
                                className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-colors ${
                                  selectedLocation === location
                                    ? "bg-blue-50 border border-blue-100"
                                    : "hover:bg-gray-100 border border-transparent"
                                }`}
                                onClick={() => setSelectedLocation(location)}
                              >
                                <RadioGroupItem value={location} id={location} className="text-raicesBlue" />
                                <Label htmlFor={location} className="flex items-center cursor-pointer w-full">
                                  <MapPin size={16} className="text-raicesBlue mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">{location}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        ) : (
                          <div className="text-center py-8">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                              <MapPin size={20} className="text-gray-400" />
                            </div>
                            <p className="text-gray-500">
                              No se encontraron ubicaciones. Por favor, intenta con otro término.
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Tabs
                        defaultValue="cali"
                        value={selectedTab}
                        onValueChange={setSelectedTab}
                        className="bg-white rounded-xl shadow-sm border border-gray-100"
                      >
                        <TabsList className="grid grid-cols-3 p-1 bg-gray-50 rounded-t-xl border-b border-gray-100">
                          <TabsTrigger
                            value="cali"
                            className="data-[state=active]:bg-white data-[state=active]:text-raicesBlue data-[state=active]:shadow-sm rounded-lg"
                          >
                            Cali
                          </TabsTrigger>
                          <TabsTrigger
                            value="jamundi"
                            className="data-[state=active]:bg-white data-[state=active]:text-raicesBlue data-[state=active]:shadow-sm rounded-lg"
                          >
                            Jamundí
                          </TabsTrigger>
                          <TabsTrigger
                            value="cauca"
                            className="data-[state=active]:bg-white data-[state=active]:text-raicesBlue data-[state=active]:shadow-sm rounded-lg"
                          >
                            Norte del Cauca
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="cali" className="p-4 max-h-60 overflow-y-auto">
                          <RadioGroup value={selectedLocation || ""} onValueChange={setSelectedLocation}>
                            {coverageAreas.cali.map((location) => (
                              <div
                                key={location}
                                className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                  selectedLocation === location
                                    ? "bg-blue-50 border border-blue-100"
                                    : "hover:bg-gray-100 border border-transparent"
                                }`}
                                onClick={() => setSelectedLocation(location)}
                              >
                                <RadioGroupItem value={location} id={location} className="text-raicesBlue" />
                                <Label htmlFor={location} className="flex items-center cursor-pointer w-full">
                                  <MapPin size={16} className="text-raicesBlue mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">{location}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </TabsContent>

                        <TabsContent value="jamundi" className="p-4 max-h-60 overflow-y-auto">
                          <RadioGroup value={selectedLocation || ""} onValueChange={setSelectedLocation}>
                            {coverageAreas.jamundi.map((location) => (
                              <div
                                key={location}
                                className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-colors ${
                                  selectedLocation === location
                                    ? "bg-blue-50 border border-blue-100"
                                    : "hover:bg-gray-100 border border-transparent"
                                }`}
                                onClick={() => setSelectedLocation(location)}
                              >
                                <RadioGroupItem value={location} id={location} className="text-raicesBlue" />
                                <Label htmlFor={location} className="flex items-center cursor-pointer w-full">
                                  <MapPin size={16} className="text-raicesBlue mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">{location}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </TabsContent>

                        <TabsContent value="cauca" className="p-4 max-h-60 overflow-y-auto">
                          <RadioGroup value={selectedLocation || ""} onValueChange={setSelectedLocation}>
                            {coverageAreas.cauca.map((location) => (
                              <div
                                key={location}
                                className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-colors ${
                                  selectedLocation === location
                                    ? "bg-blue-50 border border-blue-100"
                                    : "hover:bg-gray-100 border border-transparent"
                                }`}
                                onClick={() => setSelectedLocation(location)}
                              >
                                <RadioGroupItem value={location} id={location} className="text-raicesBlue" />
                                <Label htmlFor={location} className="flex items-center cursor-pointer w-full">
                                  <MapPin size={16} className="text-raicesBlue mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">{location}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </TabsContent>
                      </Tabs>
                    )}
                  </motion.div>

                  {selectedLocation && (
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 shadow-inner"
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1.5 mr-3">
                          <Check className="h-4 w-4 text-raicesBlue" />
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-800">¡Buenas noticias!</h4>
                          <p className="text-blue-700 text-sm">
                            Tenemos cobertura en {selectedLocation}. Continúa para solicitar tu prueba gratuita.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants} className="flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedLocation}
                      className={`bg-raicesBlue hover:bg-blue-700 transition-all duration-200 flex items-center ${
                        !selectedLocation ? "opacity-50 cursor-not-allowed" : "shadow-md hover:shadow-lg"
                      }`}
                    >
                      <span>Continuar</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-raicesBlue" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">Completa tus datos</h3>
                  </motion.div>

                  <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 flex items-center">
                          <User className="h-4 w-4 mr-1.5 text-gray-500" />
                          Nombre completo
                        </Label>
                        <div className="relative">
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 rounded-lg ${
                              formErrors.name ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                            }`}
                          />
                          {formErrors.name && (
                            <div className="flex items-center mt-1 text-red-500 text-xs">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              <p>{formErrors.name}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 flex items-center">
                          <Phone className="h-4 w-4 mr-1.5 text-gray-500" />
                          Celular
                        </Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 rounded-lg ${
                              formErrors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                            }`}
                            placeholder="Ej: 3165259832"
                          />
                          {formErrors.phone && (
                            <div className="flex items-center mt-1 text-red-500 text-xs">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              <p>{formErrors.phone}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 flex items-center">
                        <Mail className="h-4 w-4 mr-1.5 text-gray-500" />
                        Correo electrónico
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 rounded-lg ${
                            formErrors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                          }`}
                          placeholder="ejemplo@correo.com"
                        />
                        {formErrors.email && (
                          <div className="flex items-center mt-1 text-red-500 text-xs">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            <p>{formErrors.email}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-gray-700 flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5 text-gray-500" />
                        Dirección exacta
                      </Label>
                      <Input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 rounded-lg"
                        placeholder="Ej: Carrera 121 #42-93"
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-inner">
                      <div className="flex items-center">
                        <MapPin size={16} className="text-raicesBlue mr-2 flex-shrink-0" />
                        <p className="text-sm text-blue-700">
                          <strong>Ubicación seleccionada:</strong> {selectedLocation}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={acceptedTerms}
                          onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                          className={`mt-1 ${formErrors.terms ? "border-red-500 data-[state=checked]:bg-red-500" : "data-[state=checked]:bg-raicesBlue"}`}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="terms"
                            className={`text-sm font-normal ${formErrors.terms ? "text-red-500" : "text-gray-700"}`}
                          >
                            Acepto la{" "}
                            <a href="#" className="text-raicesBlue hover:underline">
                              política de tratamiento de datos personales
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
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        onClick={() => setStep(1)}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        <span>Volver</span>
                      </Button>

                      <Button
                        type="submit"
                        disabled={isValidating}
                        className="bg-raicesBlue hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center relative overflow-hidden group"
                      >
                        <span className="relative z-10">Solicitar prueba gratuita</span>
                        <ChevronRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 skew-x-12"
                          initial={{ x: -100, opacity: 0 }}
                          animate={{
                            x: [100, 0, -100],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                            repeatDelay: 1,
                          }}
                        />
                      </Button>
                    </div>
                  </motion.form>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Check className="h-10 w-10 text-raicesBlue" />
              </div>
              <h3 className="text-2xl font-bold text-raicesBlue mb-3 font-heading">¡Solicitud enviada con éxito!</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Nos pondremos en contacto contigo en las próximas 24 horas para coordinar la instalación de tu prueba
                gratuita.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    window.open(
                      getWhatsAppLink(
                        `Hola, acabo de solicitar la prueba gratuita de 30 días en ${selectedLocation}. Mi nombre es ${name} y mi dirección es ${address}. ¿Podrían confirmarme cuándo podrían realizar la instalación?`,
                      ),
                      "_blank",
                    )
                  }}
                  className="bg-raicesBlue hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactar por WhatsApp
                </Button>
                <Button onClick={onClose} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Cerrar
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer with security message */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center justify-center text-xs text-gray-500 rounded-b-2xl">
          <Shield className="h-3 w-3 mr-1.5 text-gray-400" />
          <span>Tus datos están protegidos y solo serán utilizados para contactarte sobre esta promoción</span>
        </div>
      </motion.div>
    </div>
  )
}
