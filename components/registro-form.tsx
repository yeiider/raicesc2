"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface FormData {
    plan: string
    primerNombre: string
    segundoNombre: string
    primerApellido: string
    segundoApellido: string
    cedula: string
    telefono: string
    correo: string
    ciudad: string
    tipoVia: string
    numeroVia: string
    tipoZona: string
    nombreZona: string
    tipoVivienda: string
    numeroVivienda: string
    detalleDireccion: string
}

export function RegistroForm() {
    const [formData, setFormData] = useState<FormData>({
        plan: "",
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        cedula: "",
        telefono: "",
        correo: "",
        ciudad: "",
        tipoVia: "",
        numeroVia: "",
        tipoZona: "",
        nombreZona: "",
        tipoVivienda: "",
        numeroVivienda: "",
        detalleDireccion: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleInputChange = (field: keyof FormData, value: string) => {
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
            const response = await fetch(
                "https://primary-staging-58a3.up.railway.app/webhook/58adc25d-aec7-45f5-946c-941800a3b6c1",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                },
            )

            if (response.ok) {
                setIsSubmitted(true)
            } else {
                throw new Error("Error al enviar el formulario")
            }
        } catch (err) {
            setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
            console.error("Error:", err)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow-2xl">
                    <CardContent className="p-8 text-center">
                        <div className="mb-6">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Registro Exitoso!</h2>
                            <p className="text-gray-600 mb-6">
                                Tu solicitud de registro ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <h3 className="font-semibold text-blue-900 mb-2">¿Qué sigue?</h3>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Revisaremos tu solicitud en las próximas 24 horas</li>
                                <li>• Te contactaremos para coordinar la instalación</li>
                                <li>• Recibirás información detallada de tu plan</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <Link href="/">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Volver al inicio
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setIsSubmitted(false)
                                    setFormData({
                                        plan: "",
                                        primerNombre: "",
                                        segundoNombre: "",
                                        primerApellido: "",
                                        segundoApellido: "",
                                        cedula: "",
                                        telefono: "",
                                        correo: "",
                                        ciudad: "",
                                        tipoVia: "",
                                        numeroVia: "",
                                        tipoZona: "",
                                        nombreZona: "",
                                        tipoVivienda: "",
                                        numeroVivienda: "",
                                        detalleDireccion: "",
                                    })
                                }}
                                className="w-full"
                            >
                                Realizar otro registro
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                    <CardTitle className="text-2xl font-bold text-center">Registro Raíces</CardTitle>
                    <p className="text-blue-100 text-center">Completa tu información para activar tu servicio</p>
                </CardHeader>

                <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Plan */}
                        <div className="space-y-2">
                            <Label htmlFor="plan" className="text-sm font-medium text-gray-700">
                                Plan *
                            </Label>
                            <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona un plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="basico">Básico para prueba</SelectItem>
                                    <SelectItem value="recomendado">Recomendado</SelectItem>
                                    <SelectItem value="avanzado">Avanzado</SelectItem>
                                    <SelectItem value="premium">Premium</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Información Personal */}
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Personal</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="primerNombre" className="text-sm font-medium text-gray-700">
                                        Primer nombre *
                                    </Label>
                                    <Input
                                        id="primerNombre"
                                        type="text"
                                        required
                                        placeholder="Ej: Laura"
                                        value={formData.primerNombre}
                                        onChange={(e) => handleInputChange("primerNombre", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="segundoNombre" className="text-sm font-medium text-gray-700">
                                        Segundo nombre (opcional)
                                    </Label>
                                    <Input
                                        id="segundoNombre"
                                        type="text"
                                        placeholder="Ej: María"
                                        value={formData.segundoNombre}
                                        onChange={(e) => handleInputChange("segundoNombre", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="primerApellido" className="text-sm font-medium text-gray-700">
                                        Primer apellido *
                                    </Label>
                                    <Input
                                        id="primerApellido"
                                        type="text"
                                        required
                                        placeholder="Ej: Gómez"
                                        value={formData.primerApellido}
                                        onChange={(e) => handleInputChange("primerApellido", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="segundoApellido" className="text-sm font-medium text-gray-700">
                                        Segundo apellido (opcional)
                                    </Label>
                                    <Input
                                        id="segundoApellido"
                                        type="text"
                                        placeholder="Ej: Pérez"
                                        value={formData.segundoApellido}
                                        onChange={(e) => handleInputChange("segundoApellido", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cedula" className="text-sm font-medium text-gray-700">
                                        Cédula *
                                    </Label>
                                    <Input
                                        id="cedula"
                                        type="text"
                                        required
                                        placeholder="Ej: 1032456789"
                                        value={formData.cedula}
                                        onChange={(e) => handleInputChange("cedula", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="telefono" className="text-sm font-medium text-gray-700">
                                        Teléfono *
                                    </Label>
                                    <Input
                                        id="telefono"
                                        type="tel"
                                        required
                                        placeholder="Ej: 3201234567"
                                        value={formData.telefono}
                                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="correo" className="text-sm font-medium text-gray-700">
                                        Correo *
                                    </Label>
                                    <Input
                                        id="correo"
                                        type="email"
                                        required
                                        placeholder="Ej: correo@email.com"
                                        value={formData.correo}
                                        onChange={(e) => handleInputChange("correo", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="ciudad" className="text-sm font-medium text-gray-700">
                                        Ciudad *
                                    </Label>
                                    <Input
                                        id="ciudad"
                                        type="text"
                                        required
                                        placeholder="Ej: Medellín"
                                        value={formData.ciudad}
                                        onChange={(e) => handleInputChange("ciudad", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dirección */}
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dirección</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="tipoVia" className="text-sm font-medium text-gray-700">
                                        Tipo de vía *
                                    </Label>
                                    <Select value={formData.tipoVia} onValueChange={(value) => handleInputChange("tipoVia", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="carrera">Carrera</SelectItem>
                                            <SelectItem value="calle">Calle</SelectItem>
                                            <SelectItem value="avenida">Avenida</SelectItem>
                                            <SelectItem value="no-aplica">No aplica</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="numeroVia" className="text-sm font-medium text-gray-700">
                                        Número o detalle de vía *
                                    </Label>
                                    <Input
                                        id="numeroVia"
                                        type="text"
                                        required
                                        placeholder="Ej: 121"
                                        value={formData.numeroVia}
                                        onChange={(e) => handleInputChange("numeroVia", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tipoZona" className="text-sm font-medium text-gray-700">
                                        Tipo de zona *
                                    </Label>
                                    <Select value={formData.tipoZona} onValueChange={(value) => handleInputChange("tipoZona", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="barrio">Barrio</SelectItem>
                                            <SelectItem value="vereda">Vereda</SelectItem>
                                            <SelectItem value="urbanizacion">Urbanización</SelectItem>
                                            <SelectItem value="no-aplica">No aplica</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="nombreZona" className="text-sm font-medium text-gray-700">
                                        Nombre de la zona *
                                    </Label>
                                    <Input
                                        id="nombreZona"
                                        type="text"
                                        required
                                        placeholder="Ej: La Esperanza"
                                        value={formData.nombreZona}
                                        onChange={(e) => handleInputChange("nombreZona", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tipoVivienda" className="text-sm font-medium text-gray-700">
                                        Tipo de vivienda *
                                    </Label>
                                    <Select
                                        value={formData.tipoVivienda}
                                        onValueChange={(value) => handleInputChange("tipoVivienda", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="casa">Casa</SelectItem>
                                            <SelectItem value="apto">Apto</SelectItem>
                                            <SelectItem value="local">Local</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="numeroVivienda" className="text-sm font-medium text-gray-700">
                                        Número de vivienda *
                                    </Label>
                                    <Input
                                        id="numeroVivienda"
                                        type="text"
                                        required
                                        placeholder="Ej: 403 o 102"
                                        value={formData.numeroVivienda}
                                        onChange={(e) => handleInputChange("numeroVivienda", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="detalleDireccion" className="text-sm font-medium text-gray-700">
                                        Detalle (opcional)
                                    </Label>
                                    <Input
                                        id="detalleDireccion"
                                        type="text"
                                        placeholder="Ej: Piso 2, Entrada B"
                                        value={formData.detalleDireccion}
                                        onChange={(e) => handleInputChange("detalleDireccion", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-800 text-sm">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                "Enviar Registro"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
