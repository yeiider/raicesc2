"use client"

// Vamos a simplificar esta sección para hacerla más dinámica y con menos "cajones"

import { Wifi, Zap, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function ConnectivityBenefits() {
  const benefits = [
    {
      icon: <Wifi className="h-6 w-6 text-white" />,
      title: "Conexión Estable",
      description: "Disfruta de una conexión sin interrupciones para todas tus actividades online",
      color: "from-raicesRed to-red-600",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Alta Velocidad",
      description: "Navega, descarga y transmite contenido a velocidades ultrarrápidas",
      color: "from-raicesBlue to-blue-600",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible cuando la necesites",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Sin Cláusula de Permanencia",
      description: "Libertad total para cancelar cuando quieras, sin penalizaciones",
      color: "from-green-500 to-green-700",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 font-heading">La Mejor Conectividad</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-raicesRed to-raicesBlue mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros servicios marcan la diferencia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`bg-gradient-to-r ${benefit.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
