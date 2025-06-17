import { MapPin, Building2, Home, Trees, Landmark } from "lucide-react"

export function Locations() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-raicesRed to-raicesBlue">
            Nuestras Sedes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-raicesRed to-raicesBlue mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Estamos presentes en múltiples ubicaciones para brindarte el mejor servicio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-raicesRed/10 to-raicesRed/5 p-3">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Building2 className="h-5 w-5 text-raicesRed" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg ml-2">Cali</h4>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="w-full">
                    <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">Cobertura en:</p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesRed rounded-full mr-2"></span>Ciudad Pacífica
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesRed rounded-full mr-2"></span>Bochalema
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesRed rounded-full mr-2"></span>Cachipay
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesRed rounded-full mr-2"></span>Ciudad Meléndez
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesRed rounded-full mr-2"></span>Vivero
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 text-raicesRed mr-1 flex-shrink-0" />
                      <span>Carrera 121# 42-93</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-raicesBlue/10 to-raicesBlue/5 p-3">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Home className="h-5 w-5 text-raicesBlue" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg ml-2">Jamundí</h4>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="w-full">
                    <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">Cobertura en:</p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesBlue rounded-full mr-2"></span>El Castillo
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesBlue rounded-full mr-2"></span>Ciudad Country
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesBlue rounded-full mr-2"></span>Sachamate
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-raicesBlue rounded-full mr-2"></span>Parque Natura
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-3">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Trees className="h-5 w-5 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg ml-2">Puerto Tejada</h4>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="w-full">
                    <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">Cobertura en:</p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Ciudad del Sur
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />
                      <span>Calle 86A #22-03 esquina</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 p-3">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Landmark className="h-5 w-5 text-amber-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg ml-2">Norte del Cauca</h4>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="w-full">
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5"></span>
                        <div>
                          <span className="font-medium">Guachené</span>
                          <p className="text-xs text-gray-500">Calle 8# 6-52 B/Jorge E. Gaitan</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5"></span>
                        <div>
                          <span className="font-medium">Caloto</span>
                          <p className="text-xs text-gray-500">Calle 18 # 4-30 B/La unión</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5"></span>
                        <div>
                          <span className="font-medium">Santander de Quilichao</span>
                          <p className="text-xs text-gray-500">Calle 4 # 14-37</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5"></span>
                        <div>
                          <span className="font-medium">Padilla</span>
                          <p className="text-xs text-gray-500">Calle 9 # 9-05 esquina</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
