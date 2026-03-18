"use client"

import { useState } from "react"
import { CreditCard, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Bill } from "@/lib/types"
import { generateSignature } from "@/helpers/signature.ts"
import {
  getActivePaymentMethods,
  type PaymentMethod,
  type PaymentMethodId,
} from "@/lib/payment-config"

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
  const activePaymentMethods = getActivePaymentMethods()
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodId>(
    activePaymentMethods.length > 0 ? activePaymentMethods[0].id : "onepay"
  )

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  // Función para iniciar el pago con OnePay (redirección externa)
  const initiateOnepayCheckout = () => {
    if (!bill.onepay_payment_link) {
      console.error("No hay link de pago de OnePay disponible")
      return
    }
    setIsProcessing(true)
    // Usar el link de pago directo de OnePay que viene de la API
    window.location.href = bill.onepay_payment_link
  }

  // Función para iniciar el widget de Wompi
  const initiateWompiCheckout = async () => {
    setIsProcessing(true)

    // Convertir el monto a centavos (Wompi requiere el monto en centavos)
    const amountInCents = bill.amount * 100

    // Crear una referencia única basada en la referencia de la factura y timestamp
    const uniqueReference = `${bill.reference}-${Date.now()}`

    try {
      // Fetch Wompi config from API route
      const configResponse = await fetch("/api/wompi/config")
      const wompiConfig = await configResponse.json()

      if (!wompiConfig.publicKey) {
        throw new Error("Failed to get Wompi configuration")
      }

      const signature = await generateSignature({ reference: uniqueReference, amount: amountInCents })

      if (window.WidgetCheckout) {
        const checkout = new window.WidgetCheckout({
          currency: "COP",
          amountInCents: amountInCents,
          reference: uniqueReference,
          publicKey: wompiConfig.publicKey,
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

  // Función principal de pago que decide qué método usar
  const handlePayment = () => {
    if (selectedMethod === "onepay") {
      initiateOnepayCheckout()
    } else if (selectedMethod === "wompi") {
      initiateWompiCheckout()
    }
  }

  // Renderizar el selector de método de pago si hay más de uno activo
  const renderPaymentMethodSelector = () => {
    if (activePaymentMethods.length <= 1) return null

    return (
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Selecciona tu método de pago:</h4>
        <RadioGroup
          value={selectedMethod}
          onValueChange={(value) => setSelectedMethod(value as PaymentMethodId)}
          className="space-y-3"
        >
          {activePaymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${selectedMethod === method.id
                ? "border-[#2d4594] bg-[#f0f4ff]"
                : "border-gray-200 hover:border-gray-300"
                }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <RadioGroupItem value={method.id} id={method.id} />
              <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer flex-1">
                {method.logo && (
                  <img
                    src={method.logo}
                    alt={`${method.name} Logo`}
                    className="h-8 object-contain"
                  />
                )}
                <div>
                  <p className="font-medium">{method.name}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </Label>
              {selectedMethod === method.id && (
                <Check className="h-5 w-5 text-[#2d4594]" />
              )}
            </div>
          ))}
        </RadioGroup>
      </div>
    )
  }

  // Obtener la información del método seleccionado
  const getSelectedMethodInfo = (): PaymentMethod | undefined => {
    return activePaymentMethods.find((m) => m.id === selectedMethod)
  }

  const selectedMethodInfo = getSelectedMethodInfo()

  // Si no hay métodos de pago activos
  if (activePaymentMethods.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-yellow-700">
            No hay métodos de pago disponibles en este momento. Por favor, contacte al administrador.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Realizar Pago</h2>
          <p className="text-gray-600 mt-1">
            {activePaymentMethods.length > 1
              ? "Selecciona tu método de pago preferido"
              : `Procede al pago seguro con ${selectedMethodInfo?.name || "el método disponible"}`}
          </p>
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

        {renderPaymentMethodSelector()}

        <Card>
          <CardContent className="p-6">
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                <div className="bg-[#f0f4ff] p-3 rounded-full">
                  <CreditCard className="h-8 w-8 text-[#2d4594]" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Pago Seguro con {selectedMethodInfo?.name || "Pasarela de Pagos"}
              </h3>
              <p className="text-gray-600 mb-6">
                {selectedMethod === "onepay"
                  ? "Serás redirigido a la plataforma de pago seguro de OnePay para completar tu transacción."
                  : "Serás redirigido a la plataforma de pago seguro de Wompi para completar tu transacción."}
              </p>

              <Separator className="my-4" />

              <div className="flex items-center justify-between text-sm mb-6">
                <span className="text-gray-600">Procesado por</span>
                <div className="font-semibold flex items-center">
                  {selectedMethodInfo?.logo ? (
                    <img
                      src={selectedMethodInfo.logo}
                      alt={`${selectedMethodInfo.name} Logo`}
                      loading="eager"
                      className="ml-2 h-10"
                    />
                  ) : (
                    <span className="ml-2">{selectedMethodInfo?.name}</span>
                  )}
                </div>
              </div>

              <Button
                onClick={handlePayment}
                className="w-full bg-[#2d4594] hover:bg-[#1e3276]"
                disabled={isProcessing}
              >
                {isProcessing ? (
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
                  <span className="flex items-center justify-center gap-2">
                    Pagar Ahora
                    {selectedMethod === "onepay" && <ExternalLink className="h-4 w-4" />}
                  </span>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
