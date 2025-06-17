"use client"

import type React from "react"

import { useState } from "react"
import { Search, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface BillSearchStepProps {
    onSearch: (cedula: string, ciudad: string) => void
    onMockSearch?: () => void
    isLoading: boolean
}

export default function BillSearchStep({ onSearch, isLoading }: BillSearchStepProps) {
    const [cedula, setCedula] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [error, setError] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const ciudades = [
        { value: "cali", label: "Cali" },
        { value: "guachene", label: "Guachené" },
        { value: "padilla", label: "Padilla" },
        { value: "jamundi", label: "Jamundí" },
        { value: "villarica", label: "Villa Rica" },
        { value: "caloto", label: "Caloto" },
        { value: "puertotejada", label: "Puerto Tejada" },
        { value: "santander_quilchao", label: "Santander de Quilchao" },
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validar que se haya seleccionado una ciudad y se haya ingresado una cédula
        if (!ciudad) {
            setError("Por favor selecciona una ciudad")
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 3000)
            return
        }

        if (!cedula.trim()) {
            setError("Por favor ingresa un número de cédula válido")
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 3000)
            return
        }

        setError("")
        setShowAlert(false)
        onSearch(cedula, ciudad)
    }

    return (
        <div>
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Buscar Factura</h2>
                <p className="text-gray-600 mt-1">
                    Selecciona tu ciudad e ingresa tu número de cédula para buscar tus facturas pendientes
                </p>
            </div>

            {showAlert && error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Select value={ciudad} onValueChange={setCiudad}>
                        <SelectTrigger id="ciudad" className="w-full">
                            <SelectValue placeholder="Selecciona tu ciudad" />
                        </SelectTrigger>
                        <SelectContent>
                            {ciudades.map((ciudad) => (
                                <SelectItem key={ciudad.value} value={ciudad.value}>
                                    {ciudad.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="cedula">Número de Cédula</Label>
                    <Input
                        id="cedula"
                        placeholder="Ej: 1002946826"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        className="border-gray-300"
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#2d4594] hover:bg-[#1e3276]"
                    disabled={isLoading || !ciudad || !cedula.trim()}
                >
                    {isLoading ? (
                        <span className="flex items-center">
              <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Buscando...
            </span>
                    ) : (
                        <span className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Buscar Factura
            </span>
                    )}
                </Button>
            </form>

            {isLoading && (
                <div className="mt-8 space-y-4">
                    <div className="text-sm font-medium text-gray-500">Buscando factura...</div>
                    <Skeleton className="h-12 w-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                </div>
            )}
        </div>
    )
}

