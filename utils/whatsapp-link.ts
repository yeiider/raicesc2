/**
 * Genera una URL para abrir un chat de WhatsApp con un mensaje predefinido
 * @param message Mensaje predefinido para enviar
 * @returns URL de WhatsApp
 */
export function getWhatsAppLink(message = ""): string {
  // Número de WhatsApp en formato internacional sin el "+"
  const phoneNumber = "573165259832"

  // URL de WhatsApp con el número y mensaje
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
