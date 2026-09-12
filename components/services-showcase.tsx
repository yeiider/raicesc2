"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Wifi, ShieldCheck, MonitorPlay, ShoppingBag, ArrowRight } from "lucide-react"

const services = [
  {
    id: "internet-hogar",
    title: "Internet Hogar",
    description: "Fibra óptica ultrarrápida y estable para conectar todo tu hogar sin límites.",
    icon: Wifi,
    href: "/internet",
    gradient: "from-raicesBlue to-blue-500",
    glow: "bg-raicesBlue",
    tag: "Fibra óptica",
  },
  {
    id: "seguridad",
    title: "Internet + Seguridad",
    description: "Conexión protegida y cámaras de vigilancia para la tranquilidad de tu familia.",
    icon: ShieldCheck,
    href: "/internet",
    gradient: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500",
    tag: "Cámaras incluidas",
  },
  {
    id: "streaming",
    title: "Streaming",
    description: "Tus plataformas y canales favoritos en HD, sin cortes y desde cualquier pantalla.",
    icon: MonitorPlay,
    href: "/television",
    gradient: "from-raicesRed to-red-600",
    glow: "bg-raicesRed",
    tag: "HD sin límites",
  },
  {
    id: "tienda",
    title: "Tienda",
    description: "Equipos, routers y accesorios tecnológicos al mejor precio para potenciar tu conexión.",
    icon: ShoppingBag,
    href: "/ofertas",
    gradient: "from-amber-500 to-orange-600",
    glow: "bg-amber-500",
    tag: "Nuevos productos",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function ServicesShowcase() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-gray-50 py-20">
      {/* Decorative animated glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-raicesBlue/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-raicesRed/10 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-raicesBlue shadow-sm ring-1 ring-raicesBlue/10">
            Todo lo que necesitas en un solo lugar
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground text-balance md:text-5xl">
            Nuestros Servicios
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-raicesRed to-raicesBlue" />
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-gray-600">
            Elige el servicio perfecto para ti y descubre una nueva forma de estar conectado.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} id={service.id} variants={item} className="scroll-mt-24">
                <Link href={service.href} className="group block h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* hover wash */}
                    <div
                      className={`absolute inset-x-0 -top-24 h-40 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    <div className="relative mb-5">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <span className="relative mb-2 text-xs font-semibold uppercase tracking-wider text-raicesBlue">
                      {service.tag}
                    </span>
                    <h3 className="relative mb-2 font-heading text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="relative mb-6 flex-grow text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <span className="relative inline-flex items-center gap-1.5 text-sm font-bold text-raicesRed">
                      Ver más
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
