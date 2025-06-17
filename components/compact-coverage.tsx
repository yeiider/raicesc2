import { MapPin, Check } from "lucide-react"

export function CompactCoverage() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading">Cobertura</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Nuestro servicio de internet de alta velocidad está disponible en estas zonas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-raicesRed/10 flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-raicesRed" />
                </div>
                <h3 className="font-bold text-gray-800">Cali</h3>
              </div>
              <ul className="space-y-1 pl-11">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesRed mr-2 flex-shrink-0" />
                  <span>Ciudad Pacífica</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesRed mr-2 flex-shrink-0" />
                  <span>Bochalema</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesRed mr-2 flex-shrink-0" />
                  <span>Cachipaí</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesRed mr-2 flex-shrink-0" />
                  <span>Viveros</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesRed mr-2 flex-shrink-0" />
                  <span>Ciudad Meléndez</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-raicesBlue/10 flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-raicesBlue" />
                </div>
                <h3 className="font-bold text-gray-800">Jamundí</h3>
              </div>
              <ul className="space-y-1 pl-11">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesBlue mr-2 flex-shrink-0" />
                  <span>El Castillo</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesBlue mr-2 flex-shrink-0" />
                  <span>Ciudad Country</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesBlue mr-2 flex-shrink-0" />
                  <span>Sachamate</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-raicesBlue mr-2 flex-shrink-0" />
                  <span>Parque Natura</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-green-500" />
                </div>
                <h3 className="font-bold text-gray-800">Puerto Tejada</h3>
              </div>
              <ul className="space-y-1 pl-11">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                  <span>Ciudad del Sur</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-amber-500" />
                </div>
                <h3 className="font-bold text-gray-800">Norte del Cauca</h3>
              </div>
              <ul className="space-y-1 pl-11">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Santander de Quilichao</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Guachené</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Caloto</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Padilla</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className="text-raicesBlue hover:text-blue-700 text-sm font-medium inline-flex items-center">
              Ver mapa de cobertura completo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
