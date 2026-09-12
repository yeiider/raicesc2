"use client"

import { motion } from "framer-motion"

const blobs = [
  { className: "left-[-10%] top-[5%] h-[30rem] w-[30rem] bg-raicesBlue/25", x: [0, 80, 0], y: [0, 60, 0], d: 22 },
  { className: "right-[-8%] top-[20%] h-[26rem] w-[26rem] bg-raicesRed/20", x: [0, -70, 0], y: [0, 50, 0], d: 26 },
  { className: "left-[20%] top-[45%] h-[24rem] w-[24rem] bg-cyan-400/20", x: [0, 60, 0], y: [0, -50, 0], d: 24 },
  { className: "right-[15%] top-[62%] h-[28rem] w-[28rem] bg-amber-300/20", x: [0, -60, 0], y: [0, -40, 0], d: 28 },
  { className: "left-[5%] top-[80%] h-[26rem] w-[26rem] bg-emerald-400/15", x: [0, 70, 0], y: [0, 40, 0], d: 30 },
]

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f6f9ff]">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.className}`}
          animate={{ x: b.x, y: b.y }}
          transition={{ duration: b.d, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}
      {/* Subtle moving grid for depth */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1e56b0 1px, transparent 1px), linear-gradient(90deg, #1e56b0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
