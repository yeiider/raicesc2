"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Wifi, MonitorPlay, ShoppingBag, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Internet Hogar", href: "/internet", icon: Wifi },
  { label: "Streaming", href: "/television", icon: MonitorPlay },
  { label: "Tienda", href: "/#tienda", icon: ShoppingBag },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="RAICES Logo" width={150} height={60} className="h-11 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-2 rounded-full px-4 py-2 font-heading text-sm font-medium text-gray-700 transition-colors hover:text-raicesBlue"
              >
                <Icon className="h-4 w-4 text-raicesRed transition-colors group-hover:text-raicesBlue" />
                <span className="tracking-wide">{item.label}</span>
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-raicesRed to-raicesBlue transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link href="/pagos">
            <Button className="group bg-raicesRed font-heading font-bold tracking-wider text-white shadow-md transition-all hover:bg-red-600 hover:shadow-lg">
              <CreditCard className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              PAGAR AQUÍ
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 font-heading font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-raicesBlue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5 text-raicesRed" />
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <Link href="/pagos" onClick={() => setIsMenuOpen(false)} className="mt-2">
                <Button className="flex w-full items-center justify-center bg-raicesRed font-heading font-bold tracking-wider text-white hover:bg-red-600">
                  <CreditCard className="mr-2 h-4 w-4" />
                  PAGAR AQUÍ
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-raicesRed via-raicesBlue to-raicesRed" />
    </header>
  )
}
