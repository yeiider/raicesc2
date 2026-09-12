"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle, Tv } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const services = [
  { name: "Netflix", color: "#E50914" },
  { name: "Disney+", color: "#0c3fa8" },
  { name: "Paramount+", color: "#0064ff" },
  { name: "Prime Video", color: "#00a8e1" },
  { name: "Max", color: "#7b2ff7" },
  { name: "WIN+", color: "#ff6a00" },
]

export function StreamingServices() {
  return (
    <>
      {/* Otros servicios para consultar */}
      <section className="bg-gray-50 py-16" id="otros-servicios">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-raicesRed/20 bg-raicesRed/5 px-4 py-1.5 text-sm font-semibold text-raicesRed">
              <MessageCircle className="h-4 w-4" />
              Otros servicios
            </span>
            <h2 className="text-balance font-heading text-3xl font-extrabold text-gray-900 md:text-4xl">
              ¿Buscas Netflix, Disney+ y más?
            </h2>
            <p className="mt-3 text-pretty text-gray-600">
              Escríbenos y consulta la disponibilidad de tus plataformas favoritas para combinarlas con tu plan de
              internet Raíces.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {services.map((service, i) => (
              <motion.button
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onClick={() =>
                  window.open(
                    getWhatsAppLink(`Hola, quiero consultar la disponibilidad de ${service.name} con mi plan Raíces.`),
                    "_blank",
                  )
                }
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: service.color }}
                >
                  {service.name.charAt(0)}
                </span>
                <span className="font-heading text-base font-bold text-gray-900">{service.name}</span>
                <span className="text-xs font-medium text-raicesBlue">Consultar</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Paquete Flex - parrilla de canales */}
      <section className="bg-white py-16" id="paquete-flex">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-raicesBlue/20 bg-raicesBlue/5 px-4 py-1.5 text-sm font-semibold text-raicesBlue">
              <Tv className="h-4 w-4" />
              Televisión · Paquete Flex
            </span>
            <h2 className="text-balance font-heading text-3xl font-extrabold text-gray-900 md:text-4xl">
              Televisión con Paquete Flex
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-gray-600">
              Nuestra oferta de servicios es variada y está sujeta a cobertura. Con Raíces disfruta de internet,
              televisión y opciones de streaming para que no te pierdas tus series, películas y contenidos favoritos.
            </p>
            <p className="mt-3 font-semibold text-gray-800">
              Escríbenos y consulta los servicios disponibles para tu zona.
            </p>

            <button
              onClick={() =>
                window.open(
                  getWhatsAppLink(
                    "Hola, quiero conocer el Paquete Flex de televisión y los canales disponibles en mi zona.",
                  ),
                  "_blank",
                )
              }
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-raicesRed to-red-500 px-7 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar canales
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
          >
            <Image
              src="/paquete-flex-canales.jpg"
              alt="Paquete Flex de Raíces con canales de televisión y plataformas de streaming como GoFlex, WIN+, Paramount+, Netflix y Disney+"
              width={1120}
              height={1600}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
