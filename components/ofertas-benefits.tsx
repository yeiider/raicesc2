import Image from "next/image"
import { Check, Clock, Gift, Calendar } from "lucide-react"

export function OfertasBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-raicesBlue px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Ofertas por tiempo limitado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">¿Por qué aprovechar nuestras ofertas?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beneficios exclusivos que solo encontrarás por tiempo limitado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-raicesBlue/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-raicesBlue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl">Ofertas por Tiempo Limitado</h3>
                  <p className="text-gray-600">
                    Nuestras promociones tienen una fecha límite. ¡No esperes demasiado para aprovecharlas!
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-raicesBlue/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Gift className="h-6 w-6 text-raicesBlue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl">Regalos Exclusivos</h3>
                  <p className="text-gray-600">
                    Desde cámaras de seguridad hasta dispositivos de streaming, obtendrás regalos de valor con nuestras
                    ofertas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-raicesBlue/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-raicesBlue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl">Ahorro Garantizado</h3>
                  <p className="text-gray-600">
                    Con descuentos de hasta el 50% en tu primer mes, la instalación gratuita y equipos sin costo,
                    ahorrarás significativamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-raicesBlue to-blue-600 rounded-3xl blur-lg opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/free-installation.png"
                  alt="Beneficios de nuestras ofertas"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
