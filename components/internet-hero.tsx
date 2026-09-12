"use client"

import { motion } from "framer-motion"
import { Wifi, Zap, ShieldCheck, ArrowRight } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

const stats = [
  { icon: Zap, value: "Hasta 900", label: "Megas de velocidad" },
  { icon: Wifi, value: "Fibra 100%", label: "Óptica al hogar" },
  { icon: ShieldCheck, value: "Soporte", label: "Atención cercana" },
]

export function InternetHero() {
  return (
    <section className="relative overflow-hidden bg-[#070d1f] text-white">
      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-raicesBlue/40 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-raicesRed/30 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Moving grid */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container relative z-10 mx-auto grid items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"
          >
            <Wifi className="h-4 w-4 text-sky-400" />
            Internet Hogar de Fibra Óptica
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance font-heading text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Navega sin límites en{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-white bg-clip-text text-transparent">
              tu hogar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-lg text-pretty text-lg text-white/75"
          >
            Fibra óptica de verdad hasta tu casa: velocidad estable para trabajar, estudiar, jugar y disfrutar tu
            televisión favorita, todo al mismo tiempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#planes-internet"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-gray-900 shadow-lg transition-transform hover:scale-[1.03]"
            >
              Ver planes
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              onClick={() =>
                window.open(
                  getWhatsAppLink("Hola, quiero conocer los planes de Internet Hogar. ¿Me pueden ayudar?"),
                  "_blank",
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Asesoría por WhatsApp
            </button>
          </motion.div>
        </div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-3 lg:gap-3">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-raicesBlue to-sky-400 shadow-md">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="font-heading text-xl font-bold">{s.value}</div>
                <div className="text-sm text-white/60">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
