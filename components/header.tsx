"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Wifi, Tv, Gift, CreditCard, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="RAICES Logo" width={150} height={60} className="h-12 w-auto" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center space-x-8 flex-grow">
          <Link
            href="/"
            className="group flex items-center text-gray-700 hover:text-raicesBlue font-medium transition-colors py-2 font-heading"
          >
            <span className="text-base tracking-wide">Inicio</span>
          </Link>
          <Link
            href="/internet"
            className="group flex items-center text-gray-700 hover:text-raicesBlue font-medium transition-colors py-2 font-heading"
          >
            <Wifi className="h-5 w-5 mr-2 text-raicesRed group-hover:text-raicesBlue transition-colors" />
            <span className="text-base tracking-wide">Internet</span>
            <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
          </Link>

          <Link
            href="/television"
            className="group flex items-center text-gray-700 hover:text-raicesBlue font-medium transition-colors py-2 font-heading"
          >
            <Tv className="h-5 w-5 mr-2 text-raicesRed group-hover:text-raicesBlue transition-colors" />
            <span className="text-base tracking-wide">Televisión</span>
            <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
          </Link>

          <Link
            href="/ofertas"
            className="group flex items-center text-gray-700 hover:text-raicesBlue font-medium transition-colors py-2 font-heading"
          >
            <Gift className="h-5 w-5 mr-2 text-raicesRed group-hover:text-raicesBlue transition-colors" />
            <span className="text-base tracking-wide">Ofertas</span>
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Mi Portal Button */}


          {/* Payment Button */}
          <Button className="bg-raicesRed hover:bg-red-600 text-white font-bold animate-pulse font-heading tracking-wider items-center">
            <CreditCard className="h-4 w-4 mr-2" />
            PAGAR AQUÍ
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-3">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="flex items-center text-gray-700 hover:text-raicesBlue font-medium py-2 px-4 transition-colors font-heading"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/internet"
                className="flex items-center text-gray-700 hover:text-raicesBlue font-medium py-2 px-4 transition-colors font-heading"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wifi className="h-5 w-5 mr-2 text-raicesRed" />
                Internet
              </Link>
              <Link
                href="/television"
                className="flex items-center text-gray-700 hover:text-raicesBlue font-medium py-2 px-4 transition-colors font-heading"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tv className="h-5 w-5 mr-2 text-raicesRed" />
                Televisión
              </Link>
              <Link
                href="/ofertas"
                className="flex items-center text-gray-700 hover:text-raicesBlue font-medium py-2 px-4 transition-colors font-heading"
                onClick={() => setIsMenuOpen(false)}
              >
                <Gift className="h-5 w-5 mr-2 text-raicesRed" />
                Ofertas
              </Link>


              <Button
                className="flex items-center bg-raicesRed hover:bg-red-600 text-white font-bold w-full justify-center animate-pulse font-heading tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                PAGAR AQUÍ
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative gradient line */}
      <div className="hidden md:block h-1 w-full bg-gradient-to-r from-raicesRed via-raicesBlue to-raicesRed"></div>
    </header>
  )
}
