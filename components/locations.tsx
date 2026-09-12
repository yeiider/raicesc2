"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, Home, Trees, Landmark } from "lucide-react"

const locations = [
  {
    city: "Cali",
    icon: Building2,
    accent: "from-raicesRed to-orange-500",
    address: "Carrera 121 # 42-93",
    coverage: ["Ciudad Pacífica", "Bochalema", "Cachipay", "Ciudad Meléndez", "Vivero"],
  },
  {
    city: "Jamundí",
    icon: Home,
    accent: "from-raicesBlue to-sky-500",
    coverage: ["El Castillo", "Ciudad Country", "Sachamate", "Parque Natura"],
  },
  {
    city: "Puerto Tejada",
    icon: Trees,
    accent: "from-emerald-500 to-teal-500",
    address: "Calle 86A # 22-03 esquina",
    coverage: ["Ciudad del Sur"],
  },
  {
    city: "Norte del Cauca",
    icon: Landmark,
    accent: "from-amber-400 to-yellow-500",
    coverage: [
      "Guachené — Calle 8 # 6-52 B/Jorge E. Gaitán",
      "Caloto — Calle 18 # 4-30 B/La Unión",
      "Santander de Quilichao — Calle 4 # 14-37",
    ],
  },
]

export function Locations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20" id="cobertura">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-raicesBlue/10 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-raicesRed/10 px-5 py-1.5 text-sm font-semibold text-raicesRed">
            <MapPin className="h-4 w-4" />
            Cobertura de fibra óptica
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl font-heading">
            ¿Dónde tenemos cobertura?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Estamos presentes en múltiples ubicaciones para llevarte la mejor conexión.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {locations.map((loc, i) => {
            const Icon = loc.icon
            return (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div
                  aria-hidden
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${loc.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
                />

                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${loc.accent} shadow-md`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-heading">{loc.city}</h3>
                </div>

                <p className="relative mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Cobertura en
                </p>
                <ul className="relative mt-2 space-y-1.5">
                  {loc.coverage.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${loc.accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {loc.address && (
                  <div className="relative mt-4 flex items-center gap-1.5 border-t border-gray-100 pt-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-raicesRed" />
                    {loc.address}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
