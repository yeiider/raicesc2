// Configuración de métodos de pago
// Aquí puedes activar/desactivar métodos de pago según necesites

export type PaymentMethodId = "wompi" | "onepay"

export interface PaymentMethod {
  id: PaymentMethodId
  name: string
  description: string
  enabled: boolean
  logo?: string
}

// Configuración de métodos de pago - modifica "enabled" para activar/desactivar
export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "onepay",
    name: "OnePay",
    description: "Pago seguro con OnePay",
    enabled: true, // ACTIVADO
    logo: "/onepay-logo.svg", // Agrega el logo si lo tienes
  },
  {
    id: "wompi",
    name: "Wompi",
    description: "Pago seguro con Wompi",
    enabled: false, // DESACTIVADO temporalmente
    logo: "/Wompi_LogoPrincipal.png",
  },
]

// Obtener métodos de pago activos
export const getActivePaymentMethods = (): PaymentMethod[] => {
  return PAYMENT_METHODS.filter((method) => method.enabled)
}

// Verificar si un método específico está activo
export const isPaymentMethodActive = (methodId: PaymentMethodId): boolean => {
  const method = PAYMENT_METHODS.find((m) => m.id === methodId)
  return method?.enabled ?? false
}
