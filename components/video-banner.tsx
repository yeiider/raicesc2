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

      {/* Solid overlay for legibility */}
      <div aria-hidden className="absolute inset-0 z-[3] bg-gradient-to-r from-[#0a1024] via-[#0a1024]/80 to-[#0a1024]/40" />

      <div className="container relative z-20 mx-auto flex min-h-[420px] flex-col justify-center px-4 py-16 md:min-h-[500px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
          >
            <Zap className="h-4 w-4 text-raicesRed" />
            Fibra óptica de última generación
          </motion.span>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Sube tu conexión{" "}
            <span className="relative inline-block">
              <span className="relative z-10">sin límites</span>
              <motion.span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-raicesRed/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h1>

          <div className="mt-8">
            <Link
              href="#planes"
              className="inline-flex items-center gap-2 rounded-full bg-raicesRed px-7 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Play className="h-5 w-5" />
              Ver planes
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
