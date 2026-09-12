"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Zap } from "lucide-react"

const floatingImages = [
  { src: "/images/CARRUSEL/mesa1.png", className: "top-[8%] right-[6%] w-40 h-28 md:w-56 md:h-36", delay: 0 },
  { src: "/images/CARRUSEL/mesa2.png", className: "bottom-[10%] right-[16%] w-36 h-24 md:w-48 md:h-32", delay: 1.2 },
  { src: "/images/CARRUSEL/mesa3.png", className: "top-[34%] right-[30%] w-32 h-24 md:w-44 md:h-28", delay: 2.1 },
]

export function VideoBanner() {
  return (
    <section className="relative overflow-hidden bg-raicesBlue text-white">
      {/* Background video — replace /public/videos/banner.mp4 with your own clip.
          Autoplay requires muted + playsInline. The animated backdrop below stays
          visible as a fallback while the video is missing or loading. */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/CARRUSEL/mesa1.png"
        className="absolute inset-0 z-[1] h-full w-full object-cover opacity-50"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        <source src="/videos/banner.webm" type="video/webm" />
      </video>

      {/* Dark overlay for text legibility over the video */}
      <div aria-hidden className="absolute inset-0 z-[2] bg-raicesBlue/50" />

      {/* Animated gradient backdrop */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(29,78,216,0.55), transparent 45%), radial-gradient(circle at 80% 70%, rgba(220,38,38,0.5), transparent 45%), linear-gradient(120deg, #0a1628, #12224a)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Moving glow orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-raicesRed/30 blur-3xl z-0"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl z-0"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Animated grid lines for a "video motion" feel */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Floating product images (parallax drift) */}
      {floatingImages.map((img, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute z-10 hidden overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block ${img.className}`}
          animate={{ y: [0, -18, 0], rotate: [0, i % 2 === 0 ? 2 : -2, 0] }}
          transition={{ duration: 6 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: img.delay }}
        >
          <Image src={img.src || "/placeholder.svg"} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-raicesBlue/60 to-transparent" />
        </motion.div>
      ))}

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
            La mejor{" "}
            <span className="relative inline-block">
              <span className="relative z-10">conexión de fibra óptica</span>
              <motion.span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-raicesRed/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            en tu ciudad
          </h1>

          <div className="mt-8">
            <Link
              href="/#tienda"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Play className="h-5 w-5" />
              Explorar servicios
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
