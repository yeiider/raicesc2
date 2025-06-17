"use client"

import { motion } from "framer-motion"
import { PhoneCall, MessageSquare, Clock } from "lucide-react"

export function SupportSection() {
  const supportChannels = [
    {
      icon: <PhoneCall className="h-5 w-5 text-white" />,
      title: "Soporte Telefónico",
      description: "Asistencia inmediata para resolver tus dudas",
      contact: "(602) 891 2989",
      color: "from-raicesRed to-red-600",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-white" />,
      title: "Chat en Línea",
      description: "Chatea con nuestros agentes en tiempo real",
      contact: "WhatsApp y Chat Web",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      title: "Horario de Atención",
      description: "Estamos para servirte",
      contact: "Lun-Vie: 7AM-5PM | Sáb: 7AM-12PM",
      color: "from-blue-500 to-blue-600",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 font-heading">Soporte y Atención al Cliente</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-raicesRed to-raicesBlue mx-auto mb-2 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Estamos aquí para ayudarte a través de múltiples canales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-5"
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${channel.color} flex items-center justify-center mr-3`}
                >
                  {channel.icon}
                </div>
                <h3 className="font-semibold">{channel.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
              <div className="text-gray-700 font-medium text-sm">{channel.contact}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
