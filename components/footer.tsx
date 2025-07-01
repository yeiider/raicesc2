import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-10 pb-6 relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo en blanco centrado más pequeño */}
        <div className="flex justify-center mb-8">
          <Image src="/images/raices-blanco.png" alt="RAICES Logo" width={150} height={60} className="h-12 w-auto" />
        </div>

        {/* Información de contacto y enlaces - Diseño simplificado y más compacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-medium mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-raicesRed mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(602) 891 2989</p>
                  <p className="text-gray-300">316 525 9832</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-raicesRed mr-2 flex-shrink-0" />
                <span className="text-gray-300">raicesc@raicesc.net</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-1 text-sm font-light">
              <li>
                <Link href="/internet" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Internet
                </Link>
              </li>
              <li>
                <Link href="/television" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Televisión
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas-de-privacidad"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Políticas de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Síguenos</h3>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-4">
          <p className="text-center text-gray-400 text-xs">
            © {new Date().getFullYear()} RAICES. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
