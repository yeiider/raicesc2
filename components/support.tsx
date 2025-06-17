import { PhoneCall, MessageSquare, HelpCircle, Clock, MapPin, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Support() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100" id="soporte">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Soporte y Atención al Cliente</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Nuestro equipo de soporte está disponible para resolver cualquier duda o
            problema que puedas tener.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Teléfono y Extensiones */}
          <Card className="overflow-hidden shadow-lg border-0 rounded-xl">
            <div className="bg-gradient-to-r from-raicesBlue to-blue-500 h-2 w-full"></div>
            <CardHeader className="pb-2">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <PhoneCall className="h-7 w-7 text-raicesBlue" />
              </div>
              <CardTitle className="text-xl font-heading">Soporte Telefónico</CardTitle>
              <CardDescription>Llámanos para asistencia inmediata</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 rounded-lg p-2 mr-3">
                  <PhoneCall className="h-5 w-5 text-raicesBlue" />
                </div>
                <p className="font-medium text-lg">(602) 891 2989</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3 text-gray-700">Extensiones por ubicación:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Ciudad Pacífica</span>
                    </div>
                    <span className="font-medium">1004 - 1006</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Ciudad del Sur</span>
                    </div>
                    <span className="font-medium">1001</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Caloto</span>
                    </div>
                    <span className="font-medium">1005</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Guachené</span>
                    </div>
                    <span className="font-medium">1007</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Santander de Quilichao</span>
                    </div>
                    <span className="font-medium">1002</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Chat en Línea con WhatsApp */}
          <Card className="overflow-hidden shadow-lg border-0 rounded-xl">
            <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 w-full"></div>
            <CardHeader className="pb-2">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-green-600" />
              </div>
              <CardTitle className="text-xl font-heading">Chat en Línea</CardTitle>
              <CardDescription>Chatea con nuestros agentes</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <p className="text-gray-600 mb-6">
                Respuesta rápida a tus consultas a través de nuestro chat en línea o WhatsApp. Nuestros agentes están
                disponibles para ayudarte con cualquier duda.
              </p>

              <div className="mt-auto flex flex-col space-y-3">
                <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chatear por WhatsApp
                </button>
                <button className="flex items-center justify-center bg-raicesBlue hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Iniciar Chat en Línea
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Horario de Atención */}
          <Card className="overflow-hidden shadow-lg border-0 rounded-xl">
            <div className="bg-gradient-to-r from-raicesRed to-red-500 h-2 w-full"></div>
            <CardHeader className="pb-2">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-raicesRed" />
              </div>
              <CardTitle className="text-xl font-heading">Horario de Atención</CardTitle>
              <CardDescription>Estamos para servirte</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Atención al Cliente</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Lunes a Viernes</span>
                    </div>
                    <span className="text-sm font-medium">7:00 AM - 5:00 PM</span>

                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Sábados</span>
                    </div>
                    <span className="text-sm font-medium">7:00 AM - 12:00 PM</span>

                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Domingos</span>
                    </div>
                    <span className="text-sm font-medium">Cerrado</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50">
                  <h4 className="font-medium text-raicesBlue mb-2">Soporte Técnico 24/7</h4>
                  <p className="text-sm text-gray-600">
                    Nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana para
                    emergencias.
                  </p>
                  <div className="mt-3 flex items-center text-raicesBlue">
                    <PhoneCall className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Línea de emergencias: (602) 891 2989 Ext. 1000</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="flex items-center text-raicesBlue hover:text-blue-700 transition-colors">
                  <span className="font-medium">Ver todas las ubicaciones</span>
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preguntas Frecuentes - Separado en una fila diferente */}
        <div className="mt-10">
          <Card className="overflow-hidden shadow-lg border-0 rounded-xl">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 w-full"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <HelpCircle className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-heading">Preguntas Frecuentes</CardTitle>
                  <CardDescription>Encuentra respuestas rápidas a tus dudas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-800 mb-2">¿Cómo puedo pagar mi factura?</h4>
                  <p className="text-sm text-gray-600">
                    Conoce todas las opciones disponibles para realizar tus pagos de manera fácil y segura.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-800 mb-2">¿Qué hago si mi internet está lento?</h4>
                  <p className="text-sm text-gray-600">
                    Consejos y soluciones para mejorar la velocidad de tu conexión a internet.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-800 mb-2">¿Cómo cambio mi plan actual?</h4>
                  <p className="text-sm text-gray-600">
                    Proceso para actualizar o modificar tu plan de servicios con RAICES.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                  <span>Ver todas las preguntas frecuentes</span>
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
