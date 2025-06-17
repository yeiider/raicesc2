"use client"

import Image from "next/image"
import { Zap, Wifi, Clock, Shield } from "lucide-react"

export function FiberExplanation() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-blue-100 text-raicesBlue px-4 py-2 rounded-full mb-3">
            <Zap className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Tecnología de punta</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading bg-clip-text text-transparent bg-gradient-to-r from-raicesBlue to-blue-600">
            ¿Qué es la Fibra Óptica?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
            <div className="flex flex-col md:flex-row">
              {/* Imagen */}
              <div className="md:w-2/5 relative h-48 md:h-auto">
                <Image src="/fiber-optic-closeup.png" alt="Fibra óptica" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-raicesBlue/50 to-blue-600/50 mix-blend-multiply"></div>
              </div>

              {/* Contenido */}
              <div className="md:w-3/5 p-6">
                <p className="text-gray-600 mb-4">
                  La fibra óptica utiliza hilos de vidrio para transmitir datos a la velocidad de la luz, ofreciendo una
                  conexión incomparablemente rápida y estable para tu hogar o negocio.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Zap className="h-4 w-4 text-raicesBlue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Mayor Velocidad</h4>
                      <p className="text-xs text-gray-500">Hasta 1 Gbps simétricos</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Wifi className="h-4 w-4 text-raicesBlue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Mayor Estabilidad</h4>
                      <p className="text-xs text-gray-500">Sin interrupciones</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Clock className="h-4 w-4 text-raicesBlue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Menor Latencia</h4>
                      <p className="text-xs text-gray-500">Ideal para gaming</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Shield className="h-4 w-4 text-raicesBlue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Mayor Seguridad</h4>
                      <p className="text-xs text-gray-500">Protección de datos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
