"use client"

import { useState, useEffect } from "react"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { Bill } from "@/lib/types"
import { generateSignature } from "@/helpers/signature"

// Definir el tipo para el widget de Wompi

declare global {
  interface Window {
    WidgetCheckout: any
  }
}

interface PaymentStepProps {
  bill: Bill
  onPaymentComplete: (transactionId: string) => void
}

export default function PaymentStep({ bill, onPaymentComplete }: PaymentStepProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [wompiPublicKey, setWompiPublicKey] = useState<string | null>(null)
  const [configError, setConfigError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWompiConfig = async () => {
      try {
        const response = await fetch("/api/wompi/config")
        if (!response.ok) {
          throw new Error("Failed to fetch Wompi configuration")
        }
        const data = await response.json()
        setWompiPublicKey(data.publicKey)
      } catch (error) {
        console.error("Error fetching Wompi config:", error)
        setConfigError("No se pudo cargar la configuración de pago")
      }
    }

    fetchWompiConfig()
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  // Función para iniciar el widget de Wompi
  const initiateWompiCheckout = async () => {
    if (!wompiPublicKey) {
      alert("La configuración de pago no está disponible. Por favor, recarga la página.")
      return
    }

    setIsProcessing(true)

    // Convertir el monto a centavos (Wompi requiere el monto en centavos)
    const amountInCents = bill.amount * 100

    // Crear una referencia única basada en la referencia de la factura y timestamp
    const uniqueReference = `${bill.reference}-${Date.now()}`

    try {
      const signature = await generateSignature({ reference: uniqueReference, amount: amountInCents })

      if (window.WidgetCheckout) {
        const checkout = new window.WidgetCheckout({
          currency: "COP",
          amountInCents: amountInCents,
          reference: uniqueReference,
          publicKey: wompiPublicKey,
          signature: {
            integrity: signature,
          },
          redirectUrl: window.location.href,
          customerData: {
            email: bill.email,
            fullName: bill.clientName,
            phoneNumber: bill.telephone,
            phoneNumberPrefix: "+57",
            legalId: bill.cedula,
            legalIdType: "CC",
          },
        })

        checkout.open((result: any) => {
          if (result && result.transaction) {
            // Completar el proceso con el ID de transacción real
            onPaymentComplete(result.transaction.id)
          } else {
            setIsProcessing(false)
          }
        })
      }
    } catch (error) {
      console.error("Error al inicializar Wompi", error)
      setIsProcessing(false)
    }
  }

  return (
    <>
      {/* Cargar el script de Wompi */}

      <div>
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Realizar Pago</h2>
          <p className="text-gray-600 mt-1">Procede al pago seguro con Wompi</p>
        </div>

        <div className="bg-[#f0f4ff] p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Monto a pagar:</p>
              <p className="font-bold text-lg text-[#2d4594]">{formatCurrency(bill.amount)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Referencia:</p>
              <p className="font-medium">{bill.reference}</p>
            </div>
          </div>
        </div>

        {configError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{configError}</div>
        )}

        <Card>
          <CardContent className="p-6">
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                <div className="bg-[#f0f4ff] p-3 rounded-full">
                  <CreditCard className="h-8 w-8 text-[#2d4594]" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pago Seguro con Wompi</h3>
              <p className="text-gray-600 mb-6">
                Serás redirigido a la plataforma de pago seguro de Wompi para completar tu transacción.
              </p>

              <Separator className="my-4" />

              <div className="flex items-center justify-between text-sm mb-6">
                <span className="text-gray-600">Procesado por</span>
                <div className="font-semibold flex items-center">
                  <img src={"/Wompi_LogoPrincipal.png"} alt="Wompi Logo" loading="eager" className="ml-2 h-10" />
                </div>
              </div>

              <Button
                onClick={initiateWompiCheckout}
                className="w-full bg-[#2d4594] hover:bg-[#1e3276]"
                disabled={!wompiPublicKey || isProcessing}
              >
                {!wompiPublicKey ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Cargando...
                  </span>
                ) : isProcessing ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Iniciando Pago...
                  </span>
                ) : (
                  "Pagar Ahora"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
