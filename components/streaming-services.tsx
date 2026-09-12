"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const services = [
  { name: "Netflix", color: "#E50914" },
  { name: "Disney+", color: "#0c3fa8" },
  { name: "Paramount+", color: "#0064ff" },
  { name: "Prime Video", color: "#00a8e1" },
  { name: "Max", color: "#7b2ff7" },
  { name: "WIN+", color: "#1e56b0" },
]

export function StreamingServices() {
  return (
    <>
      {/* Otros servicios para consultar */}
      <section className="bg-[#0a1024] py-16" id="otros-servicios">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              <MessageCircle className="h-4 w-4 text-raicesRed" />
              Otros servicios
            </span>
            <h2 className="text-balance font-heading text-3xl font-extrabold text-white md:text-4xl">
              ¿Buscas Netflix, Disney+ y más?
            </h2>
            <p className="mt-3 text-pretty text-white/70">
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
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: service.color }}
                >
                  {service.name.charAt(0)}
                </span>
                <span className="font-heading text-base font-bold text-white">{service.name}</span>
                <span className="text-xs font-medium text-sky-300">Consultar</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
