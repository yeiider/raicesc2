"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { User, Lock, Mail, Phone, Eye, EyeOff, CreditCard, MessageSquare, CheckCircle } from "lucide-react"

export default function PortalPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [registrationStep, setRegistrationStep] = useState(1)
  const [verificationMethod, setVerificationMethod] = useState<"email" | "sms">("email")
  const [verificationCode, setVerificationCode] = useState("")
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
    phone: "",
    cedula: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", formData.username, formData.password)
    // Simular login exitoso y redirigir al dashboard
    router.push("/portal/dashboard")
  }

  const handleRegistrationStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration Step 1:", formData)
    setRegistrationStep(2)
  }

  const handleSendCode = () => {
    setIsCodeSent(true)
    console.log(
      `Sending verification code via ${verificationMethod} to:`,
      verificationMethod === "email" ? formData.email : formData.phone,
    )
  }

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular verificación del código
    if (verificationCode === "123456") {
      setIsVerified(true)
      setRegistrationStep(3)
    } else {
      alert("Código incorrecto. Intenta con: 123456")
    }
  }

  const handleCreatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }
    console.log("Registration completed:", {
      ...formData,
      username: formData.cedula, // La cédula será el usuario
    })
    alert("¡Registro completado exitosamente!")
    setIsLogin(true)
    setRegistrationStep(1)
  }

  const resetRegistration = () => {
    setRegistrationStep(1)
    setIsCodeSent(false)
    setIsVerified(false)
    setVerificationCode("")
    setFormData({
      username: "",
      password: "",
      email: "",
      fullName: "",
      phone: "",
      cedula: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header del Portal */}
          <div className="bg-gradient-to-r from-raicesBlue to-raicesRed p-5 text-center">
            <h1 className="text-2xl font-bold text-white">
              {isLogin
                ? "Accede a tu Portal"
                : registrationStep === 1
                  ? "Crear Cuenta - Paso 1"
                  : registrationStep === 2
                    ? "Verificación - Paso 2"
                    : "Crear Contraseña - Paso 3"}
            </h1>
            <p className="text-blue-100 mt-1">
              {isLogin
                ? "Consulta tu servicio e inquietudes"
                : registrationStep === 1
                  ? "Ingresa tus datos personales"
                  : registrationStep === 2
                    ? "Verifica tu identidad"
                    : "Completa tu registro"}
            </p>
          </div>

          <div className="p-6">
            {isLogin ? (
              // Formulario de Login
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cédula</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                        placeholder="Ingresa tu número de cédula"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                        placeholder="Ingresa tu contraseña"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    type="submit"
                    className="bg-raicesBlue hover:bg-blue-600 text-white py-0.5 px-6 text-sm font-medium"
                  >
                    Iniciar Sesión
                  </Button>
                </div>

                <div className="text-center">
                  <a href="#" className="text-sm text-raicesBlue hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </form>
            ) : registrationStep === 1 ? (
              // Paso 1: Datos Personales
              <form onSubmit={handleRegistrationStep1} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cédula</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="cedula"
                        value={formData.cedula}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                        placeholder="Número de cédula"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                        placeholder="300 123 4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-raicesRed hover:bg-red-600 text-white py-1.5 text-base font-semibold mt-4"
                >
                  Continuar
                </Button>
              </form>
            ) : registrationStep === 2 ? (
              // Paso 2: Verificación
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Verificación de Identidad</h3>
                  <p className="text-gray-600">Elige cómo quieres recibir tu código de verificación</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setVerificationMethod("email")}
                    className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                      verificationMethod === "email"
                        ? "border-raicesBlue bg-blue-50 text-raicesBlue"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <Mail className="h-6 w-6" />
                    <span className="text-sm font-medium">Email</span>
                    <span className="text-xs text-gray-500">{formData.email}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVerificationMethod("sms")}
                    className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                      verificationMethod === "sms"
                        ? "border-raicesBlue bg-blue-50 text-raicesBlue"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <MessageSquare className="h-6 w-6" />
                    <span className="text-sm font-medium">SMS</span>
                    <span className="text-xs text-gray-500">{formData.phone}</span>
                  </button>
                </div>

                {!isCodeSent ? (
                  <Button
                    onClick={handleSendCode}
                    className="w-full bg-raicesBlue hover:bg-blue-600 text-white py-2 text-base font-semibold"
                  >
                    Enviar Código de Verificación
                  </Button>
                ) : (
                  <form onSubmit={handleVerifyCode} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Código de Verificación</label>
                      <div className="relative">
                        <CheckCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent text-center text-lg tracking-widest"
                          placeholder="123456"
                          maxLength={6}
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        Código enviado por {verificationMethod === "email" ? "email" : "SMS"}. Para prueba usa:{" "}
                        <strong>123456</strong>
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-raicesRed hover:bg-red-600 text-white py-2 text-base font-semibold"
                    >
                      Verificar Código
                    </Button>

                    <button
                      type="button"
                      onClick={handleSendCode}
                      className="w-full text-sm text-raicesBlue hover:underline"
                    >
                      Reenviar código
                    </button>
                  </form>
                )}
              </div>
            ) : (
              // Paso 3: Crear Contraseña
              <form onSubmit={handleCreatePassword} className="space-y-4">
                <div className="text-center mb-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">¡Verificación Exitosa!</h3>
                  <p className="text-gray-600">Ahora crea tu contraseña para completar el registro</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Tu usuario será:</strong> {formData.cedula}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                      placeholder="Crea una contraseña segura"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Contraseña</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-raicesBlue focus:border-transparent"
                      placeholder="Confirma tu contraseña"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 text-base font-semibold"
                >
                  Completar Registro
                </Button>
              </form>
            )}

            {/* Toggle entre Login y Registro */}
            <div className="mt-6 text-center border-t pt-4">
              <p className="text-gray-600 mb-2">{isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}</p>
              <Button
                variant="outline"
                onClick={() => {
                  if (!isLogin) resetRegistration()
                  setIsLogin(!isLogin)
                }}
                className="border-raicesBlue text-raicesBlue hover:bg-blue-50"
              >
                {isLogin ? "Regístrate aquí" : "Iniciar Sesión"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
