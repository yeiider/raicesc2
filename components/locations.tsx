"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import type { CoveragePoint } from "@/components/region-map"

const RegionMap = dynamic(() => import("@/components/region-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[440px] w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white/60 md:h-[540px]">
      Cargando mapa…
    </div>
  ),
})

const points: CoveragePoint[] = [
  {
    city: "Cali",
    lat: 3.4516,
    lng: -76.532,
    address: "Carrera 121 # 42-93",
    color: "#e11d2a",
    zones: ["Ciudad Pacífica", "Bochalema", "Cachipay", "Ciudad Meléndez", "Vivero"],
  },
  {
    city: "Jamundí",
    lat: 3.2606,
    lng: -76.5425,
    color: "#1d4ed8",
    zones: ["El Castillo", "Ciudad Country", "Sachamate", "Parque Natura"],
  },
  {
    city: "Puerto Tejada",
    lat: 3.234,
    lng: -76.418,
    address: "Calle 86A # 22-03 esquina",
    color: "#0891b2",
    zones: ["Ciudad del Sur"],
  },
  {
    city: "Guachené",
    lat: 3.135,
    lng: -76.392,
    address: "Calle 8 # 6-52 B/Jorge E. Gaitán",
    color: "#059669",
    zones: ["Casco urbano"],
  },
  {
    city: "Caloto",
    lat: 3.035,
    lng: -76.408,
    address: "Calle 18 # 4-30 B/La Unión",
    color: "#14b8a6",
    zones: ["Casco urbano"],
  },
  {
    city: "Santander de Quilichao",
    lat: 3.0089,
    lng: -76.4855,
    address: "Calle 4 # 14-37",
    color: "#7c3aed",
    zones: ["Centro y barrios principales"],
  },
]

export function Locations() {
  return (
    <section className="relative overflow-hidden bg-[#0a1024] py-20" id="cobertura">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <MapPin className="h-4 w-4 text-raicesRed" />
            Cobertura de fibra óptica
          </span>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl font-heading">
            ¿Dónde tenemos cobertura?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-white/70">
            Llevamos fibra óptica al Valle del Cauca y el Norte del Cauca. Explora el mapa y descubre las zonas donde ya
            estamos presentes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <RegionMap points={points} />
          </motion.div>

          {/* City list */}
          <div className="lg:col-span-2">
            <div className="grid gap-3">
              {points.map((p, i) => (
                <motion.div
                  key={p.city}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span
                    className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white shadow"
                    style={{ background: p.color }}
                  >
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">{p.city}</h3>
                    <p className="text-sm text-white/60">{p.zones.join(" · ")}</p>
                    {p.address && <p className="mt-0.5 text-xs text-white/40">{p.address}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
