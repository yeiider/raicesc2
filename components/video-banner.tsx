"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Zap } from "lucide-react"

// Flowing "fiber optic" light waves rendered as animated SVG strands.
const waves = [
  { d: "M-100 180 C 300 60, 700 300, 1100 140 S 1700 60, 2000 200", color: "#1d4ed8", width: 2.5, dur: 7, delay: 0 },
  { d: "M-100 260 C 350 380, 750 120, 1150 300 S 1750 360, 2000 240", color: "#38bdf8", width: 2, dur: 9, delay: 0.6 },
  { d: "M-100 340 C 300 220, 720 440, 1120 260 S 1720 200, 2000 360", color: "#ef4444", width: 1.5, dur: 8, delay: 1.2 },
  { d: "M-100 120 C 400 280, 800 40, 1200 220 S 1800 300, 2000 120", color: "#60a5fa", width: 1.5, dur: 11, delay: 1.8 },
]

export function VideoBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a1024] text-white">
      {/* Animated fiber-optic light waves */}
      <svg
        aria-hidden
        className="absolute inset-0 z-[1] h-full w-full"
        viewBox="0 0 1900 480"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="banner-glow" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a1024" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1900" height="480" fill="url(#banner-glow)" />
        {waves.map((w, i) => (
          <g key={i}>
            <motion.path
              d={w.d}
              fill="none"
              stroke={w.color}
              strokeWidth={w.width}
              strokeLinecap="round"
              opacity={0.65}
              style={{ filter: "drop-shadow(0 0 8px currentColor)", color: w.color }}
              initial={{ pathLength: 0.15, pathOffset: 0 }}
              animate={{ pathOffset: [0, 1] }}
              transition={{ duration: w.dur, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: w.delay }}
            />
          </g>
        ))}
      </svg>

      {/* Traveling light pulses along the strands */}
      {waves.map((w, i) => (
        <motion.span
          key={`pulse-${i}`}
          aria-hidden
          className="absolute z-[2] h-1.5 w-1.5 rounded-full"
          style={{
            top: `${18 + i * 14}%`,
            background: w.color,
            boxShadow: `0 0 12px 4px ${w.color}`,
          }}
          animate={{ left: ["-5%", "105%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: w.dur, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: w.delay }}
        />
      ))}

      {/* Tech grid + soft overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 z-[3] opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(120% 100% at 30% 50%, black 40%, transparent 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-[3] bg-gradient-to-r from-[#0a1024] via-[#0a1024]/70 to-transparent" />

      <div className="container relative z-20 mx-auto flex min-h-[440px] items-center px-4 py-16 md:min-h-[520px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10"
        >
          {/* Glow ring + corner accents */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          <div aria-hidden className="pointer-events-none absolute -left-px -top-px h-8 w-8 rounded-tl-3xl border-l-2 border-t-2 border-raicesRed/70" />
          <div aria-hidden className="pointer-events-none absolute -bottom-px -right-px h-8 w-8 rounded-br-3xl border-b-2 border-r-2 border-sky-400/70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-raicesBlue/25 blur-3xl"
          />

          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-semibold text-sky-100 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            Fibra óptica de última generación
          </motion.span>

          <h1 className="relative text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Sube tu conexión
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-raicesBlue to-raicesRed bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(56,189,248,0.25)]">
              a la velocidad de la luz
            </span>
          </h1>

          <p className="relative mt-5 max-w-xl text-pretty leading-relaxed text-white/75 md:text-lg">
            Navega, transmite y juega sin interrupciones. Fibra 100% óptica con velocidad simétrica, baja latencia y
            estabilidad total para todo tu hogar o negocio.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#planes"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-raicesRed to-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-raicesRed/25 transition-transform hover:scale-[1.03]"
            >
              <Play className="h-5 w-5" />
              Ver planes
            </Link>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
              <Zap className="h-4 w-4 text-sky-300" />
              Velocidad simétrica garantizada
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
