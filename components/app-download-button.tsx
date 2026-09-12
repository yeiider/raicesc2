"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, X, Search, Download, LogIn } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Abre tu tienda de apps",
    desc: "Entra a Google Play o App Store desde tu celular.",
  },
  {
    icon: Download,
    title: 'Busca "Raíces CAM"',
    desc: "Descarga la app oficial e instálala en tu dispositivo.",
  },
  {
    icon: LogIn,
    title: "Inicia sesión",
    desc: "Accede con los datos que te entregamos al activar tu servicio.",
  },
]

const stores = [
  {
    name: "Google Play",
    label: "Disponible en",
    logo: "/brand/google-play.svg",
    href: "https://play.google.com/store/search?q=Raices%20CAM&c=apps",
  },
  {
    name: "App Store",
    label: "Descárgala en",
    logo: "/brand/app-store.svg",
    href: "https://apps.apple.com/search?term=Raices%20CAM",
  },
]

export function AppDownloadButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[19rem] overflow-hidden rounded-3xl border border-white/10 bg-[#0a1024] p-5 shadow-2xl"
            role="dialog"
            aria-label="Cómo descargar la App Raíces CAM"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="font-heading text-sm font-bold text-white">Descarga la App Raíces CAM</p>
                <p className="mt-0.5 text-xs text-white/60">Sigue estos 3 pasos para tenerla</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ol className="space-y-3">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <li key={step.title} className="flex items-start gap-3">
                    <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-raicesRed to-raicesBlue shadow-md">
                      <Icon className="h-4 w-4 text-white" />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-black text-raicesBlue">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="text-xs leading-relaxed text-white/60">{step.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ol>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {stores.map((store) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-colors hover:border-white/25 hover:bg-white/10"
                >
                  <Image src={store.logo || "/placeholder.svg"} alt={`Logo de ${store.name}`} width={22} height={22} className="h-5 w-5" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[9px] font-medium uppercase tracking-wide text-white/50">{store.label}</span>
                    <span className="text-xs font-bold text-white">{store.name}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Descargar la App Raíces CAM"
        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-raicesRed to-raicesBlue py-3 pl-3 pr-5 font-heading text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.04]"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
          <Smartphone className="h-5 w-5" />
        </span>
        Descarga la app
      </button>
    </div>
  )
}
