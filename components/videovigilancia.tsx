"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck, Eye } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

function useLiveClock() {
  const [now, setNow] = useState("--:--:--")
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function Videovigilancia() {
  const clock = useLiveClock()

  return (
    <section
      id="videovigilancia"
      className="relative overflow-hidden bg-[#0a1024] py-20 text-white scroll-mt-24"
    >
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

      {/* Camera HUD framing over the whole banner */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
        {/* corner brackets */}
        <span className="absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-white/25" />
        <span className="absolute right-5 top-5 h-8 w-8 border-r-2 border-t-2 border-white/25" />
        <span className="absolute bottom-5 left-5 h-8 w-8 border-b-2 border-l-2 border-white/25" />
        <span className="absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-white/25" />
        {/* REC indicator */}
        <div className="absolute left-16 top-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70">
          <motion.span
            className="h-2.5 w-2.5 rounded-full bg-raicesRed"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY }}
          />
          REC
        </div>
        {/* live timestamp */}
        <div className="absolute right-16 top-6 font-mono text-xs tabular-nums tracking-widest text-white/70">
          {clock}
        </div>
        {/* scanning line */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-raicesRed/60 to-transparent"
          animate={{ top: ["8%", "92%", "8%"] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-4">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_270px] lg:gap-14">
          {/* Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"
            >
              <ShieldCheck className="h-4 w-4 text-raicesRed" />
              Nuevo · Internet + Seguridad
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-6xl"
            >
              Videovigilancia
              <span className="mt-3 block text-2xl font-bold normal-case tracking-normal md:text-3xl">
                <span className="bg-gradient-to-r from-raicesRed to-sky-400 bg-clip-text text-transparent">
                  #TodosTenemosAlgoQueCuidar
                </span>
              </span>
            </motion.h2>

            <p className="mt-6 max-w-md text-pretty leading-relaxed text-white/75">
              Protege lo que más importa con nuestro sistema de cámaras inteligentes conectado a tu internet de fibra
              óptica. Monitorea tu hogar o negocio en tiempo real, con grabación en la nube y alertas al instante.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
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

          {/* Phone mockup: watching the house live from the Raíces CAM app */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-[240px] shrink-0 sm:w-[260px] lg:w-full"
          >
          {/* glow behind phone */}
          <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-raicesBlue/25 blur-3xl" />

          <div className="relative rounded-[2.75rem] border border-white/15 bg-[#05070f] p-3 shadow-2xl">
            {/* notch */}
            <div className="absolute left-1/2 top-3 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-[#05070f]" />

            {/* screen */}
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-black">
              <Image
                src="/images/camara-casa.png"
                alt="Vista en vivo de la casa desde la app Raíces CAM"
                fill
                sizes="260px"
                className="object-cover"
              />

              {/* camera feed overlays on screen */}
              <div className="pointer-events-none absolute inset-0 z-10">
                {/* top bar: app name + live */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-3 pb-6 pt-8">
                  <span className="font-heading text-xs font-bold tracking-wide text-white">Raíces CAM</span>
                  <motion.span
                    className="flex items-center gap-1.5 rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    animate={{ opacity: [1, 0.45, 1] }}
                    transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    En vivo
                  </motion.span>
                </div>

                {/* screen corner brackets */}
                <span className="absolute left-3 top-16 h-5 w-5 border-l-2 border-t-2 border-white/50" />
                <span className="absolute right-3 top-16 h-5 w-5 border-r-2 border-t-2 border-white/50" />
                <span className="absolute bottom-10 left-3 h-5 w-5 border-b-2 border-l-2 border-white/50" />
                <span className="absolute bottom-10 right-3 h-5 w-5 border-b-2 border-r-2 border-white/50" />

                {/* motion-detection box */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-20 w-24 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-raicesRed/80"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.96, 1, 0.96] }}
                  transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <span className="absolute -top-4 left-0 rounded-sm bg-raicesRed px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide">
                    Movimiento
                  </span>
                </motion.div>

                {/* scanning line inside screen */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  animate={{ top: ["14%", "82%", "14%"] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* bottom bar: timestamp */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-3 pb-4 pt-6 font-mono text-[10px] tabular-nums text-white/85">
                  <span>CAM 01 · Entrada</span>
                  <span>{clock}</span>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
