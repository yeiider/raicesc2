"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "¿Cómo puedo pagar mi factura?",
    answer:
      "Puedes pagar tu factura a través de nuestra página web, en nuestras oficinas físicas, mediante transferencia bancaria o en puntos de pago autorizados.",
  },
  {
    question: "¿Qué hago si mi internet está lento?",
    answer:
      "Si experimentas lentitud, te recomendamos reiniciar tu router, verificar que no haya muchos dispositivos conectados simultáneamente, y comprobar que estés dentro del alcance óptimo de tu WiFi.",
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer:
      "El tiempo de instalación generalmente es de 24 a 48 horas hábiles después de aprobada tu solicitud. En zonas con cobertura directa, podemos realizar instalaciones el mismo día.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 font-heading">Preguntas Frecuentes</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-raicesRed to-raicesBlue mx-auto mb-2 rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-r from-raicesBlue/10 to-blue-500/10 shadow-sm"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4 text-raicesBlue" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white rounded-b-lg border-t border-gray-100">
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="text-raicesBlue hover:text-blue-700 text-sm font-medium inline-flex items-center">
            Ver más preguntas
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
