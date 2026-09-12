"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Camera, ShieldCheck, Bell, Cloud, Eye, Smartphone } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const features = [
  { icon: Camera, title: "Cámaras HD", desc: "Imagen nítida de día y de noche con visión infrarroja." },
  { icon: Smartphone, title: "Desde tu celular", desc: "Mira tu hogar o negocio en vivo desde cualquier lugar." },
  { icon: Bell, title: "Alertas inteligentes", desc: "Notificaciones instantáneas ante cualquier movimiento." },
  { icon: Cloud, title: "Grabación en la nube", desc: "Tus grabaciones seguras y disponibles cuando las necesites." },
]

export function Videovigilancia() {
  return (
    <section id="videovigilancia" className="relative overflow-hidden bg-[#0a1024] py-20 text-white scroll-mt-24">
      {/* Animated glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-raicesRed/25 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-raicesBlue/30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"
            >
              <ShieldCheck className="h-4 w-4 text-raicesRed" />
              Nuevo · Internet + Seguridad
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-balance font-heading text-4xl font-extrabold leading-tight md:text-5xl"
            >
              Videovigilancia
              <span className="block bg-gradient-to-r from-raicesRed to-sky-400 bg-clip-text text-transparent">
                Todos tenemos algo que cuidar
              </span>
            </motion.h2>

            <p className="mt-5 max-w-lg text-pretty text-white/75">
              Protege lo que más importa con nuestro sistema de cámaras inteligentes conectado a tu internet de fibra
              óptica. Monitorea tu hogar o negocio en tiempo real, con grabación en la nube y alertas al instante.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  window.open(
                    getWhatsAppLink(
                      "Hola, estoy interesado en el servicio de videovigilancia. ¿Podrían brindarme más información?",
                    ),
                    "_blank",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-raicesRed px-7 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                <Eye className="h-5 w-5" />
                Quiero proteger lo mío
              </button>
            </div>
          </div>

          {/* Image + floating feature chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/videovigilancia.png"
                alt="Sistema de cámaras de seguridad para el hogar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1024]/70 to-transparent" />
              <motion.span
                aria-hidden
                className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-red-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
                En vivo
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-raicesRed to-raicesBlue shadow-md">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/60">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
