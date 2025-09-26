import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, FileText, Users, Mail, Phone, MapPin } from "lucide-react"

export default function PoliticasPrivacidad() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Shield className="h-5 w-5 text-white mr-2" />
              <span className="text-sm font-medium">Protección de Datos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Políticas de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                Privacidad
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              En Global Raíces S.A.S nos comprometemos a proteger tu privacidad y garantizar el manejo responsable de tu
              información personal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Última actualización */}
            <div className="bg-blue-50 border-l-4 border-raices-blue p-6 rounded-r-lg mb-8">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-raices-blue mr-2" />
                <p className="text-sm text-gray-700">
                  <strong>Última actualización:</strong>{" "}
                  {new Date().toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              {/* Introducción */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Shield className="h-6 w-6 text-raices-blue mr-3" />
                  1. Introducción
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Global Raíces S.A.S (en adelante "RAICES", "nosotros" o "la empresa") se compromete a proteger la
                  privacidad y seguridad de la información personal de nuestros usuarios, clientes y visitantes de
                  nuestro sitio web. Esta política de privacidad describe cómo recopilamos, utilizamos, almacenamos y
                  protegemos su información personal de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de
                  Colombia.
                </p>
              </div>

              {/* Información que recopilamos */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Eye className="h-6 w-6 text-raices-blue mr-3" />
                  2. Información que Recopilamos
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Información Personal</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Nombres y apellidos completos</li>
                      <li>Número de identificación (cédula de ciudadanía)</li>
                      <li>Dirección de residencia completa</li>
                      <li>Números de teléfono (fijo y móvil)</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Información de facturación y pagos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Información Técnica</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Dirección IP y ubicación geográfica</li>
                      <li>Información del dispositivo y navegador</li>
                      <li>Datos de uso del servicio de internet</li>
                      <li>Registros de conexión y tráfico de red</li>
                      <li>Cookies y tecnologías similares</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Uso de la información */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Users className="h-6 w-6 text-raices-blue mr-3" />
                  3. Uso de la Información
                </h2>
                <p className="text-gray-700 mb-4">Utilizamos su información personal para los siguientes propósitos:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Proveer y mantener nuestros servicios de telecomunicaciones</li>
                  <li>Procesar pagos y gestionar facturación</li>
                  <li>Brindar soporte técnico y atención al cliente</li>
                  <li>Enviar comunicaciones relacionadas con el servicio</li>
                  <li>Mejorar la calidad y seguridad de nuestros servicios</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Realizar análisis estadísticos y de mercado</li>
                  <li>Enviar información promocional (con su consentimiento)</li>
                </ul>
              </div>

              {/* Compartir información */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Lock className="h-6 w-6 text-raices-blue mr-3" />
                  4. Compartir Información
                </h2>
                <p className="text-gray-700 mb-4">
                  No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes
                  casos:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>Cuando sea requerido por autoridades competentes</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Con su consentimiento expreso</li>
                  <li>En caso de fusión, adquisición o venta de activos</li>
                </ul>
              </div>

              {/* Seguridad */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Shield className="h-6 w-6 text-raices-blue mr-3" />
                  5. Seguridad de la Información
                </h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su
                  información personal contra acceso no autorizado, alteración, divulgación o destrucción, incluyendo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Cifrado de datos sensibles</li>
                  <li>Controles de acceso estrictos</li>
                  <li>Monitoreo continuo de sistemas</li>
                  <li>Capacitación regular del personal</li>
                  <li>Auditorías de seguridad periódicas</li>
                </ul>
              </div>

              {/* Derechos del titular */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <FileText className="h-6 w-6 text-raices-blue mr-3" />
                  6. Sus Derechos
                </h2>
                <p className="text-gray-700 mb-4">Como titular de datos personales, usted tiene derecho a:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Conocer, actualizar y rectificar su información personal</li>
                  <li>Solicitar prueba de la autorización otorgada</li>
                  <li>Ser informado sobre el uso dado a sus datos</li>
                  <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
                  <li>Revocar la autorización y/o solicitar la supresión de datos</li>
                  <li>Acceder de forma gratuita a sus datos personales</li>
                </ul>
              </div>

              {/* Retención de datos */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Lock className="h-6 w-6 text-raices-blue mr-3" />
                  7. Retención de Datos
                </h2>
                <p className="text-gray-700">
                  Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos para
                  los cuales fue recopilada, incluyendo cualquier período de retención requerido por ley. Los datos de
                  facturación y transacciones se conservan por un período mínimo de 5 años según la normativa
                  colombiana.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Eye className="h-6 w-6 text-raices-blue mr-3" />
                  8. Cookies y Tecnologías Similares
                </h2>
                <p className="text-gray-700 mb-4">
                  Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación,
                  analizar el tráfico del sitio y personalizar el contenido. Puede configurar su navegador para rechazar
                  cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              {/* Cambios en la política */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <FileText className="h-6 w-6 text-raices-blue mr-3" />
                  9. Cambios en esta Política
                </h2>
                <p className="text-gray-700">
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios
                  serán publicados en nuestro sitio web y, cuando sea apropiado, le notificaremos por correo
                  electrónico. Le recomendamos revisar periódicamente esta política para mantenerse informado sobre cómo
                  protegemos su información.
                </p>
              </div>

              {/* Contacto */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                  <Mail className="h-6 w-6 text-raices-blue mr-3" />
                  10. Contacto
                </h2>
                <p className="text-gray-700 mb-4">
                  Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos como titular de
                  datos personales, puede contactarnos a través de:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-raices-blue mr-3" />
                    <span className="text-gray-700">raicesc@raicesc.net</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-raices-blue mr-3" />
                    <div className="text-gray-700">
                      <p>(602) 891 2989</p>
                      <p>316 525 9832</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-raices-blue mr-3 mt-1" />
                    <span className="text-gray-700">Suroccidente Colombiano</span>
                  </div>
                </div>
              </div>

              {/* Información legal */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Global Raíces S.A.S</strong> - Empresa de telecomunicaciones registrada en Colombia
                  <br />
                  Esta política de privacidad cumple con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
