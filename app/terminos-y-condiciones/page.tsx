import { Shield, FileText, Users, Lock, Clock, AlertTriangle, Phone, Mail, MapPin } from "lucide-react"

export default function TerminosYCondiciones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-raicesBlue to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-raicesRed" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Tratamiento de Datos Personales</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Ley 1581 de 2012 - Global Raíces S.A.S</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Responsable */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Responsable</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                El responsable del tratamiento de los datos personales: <strong>GLOBAL RAICES S.A.S</strong>, NIT:
                900588322-5, con sede principal CL 8 NRO. 6-52 BRR LA PALMAS, Guachené – Cauca.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-raicesRed mr-2" />
                  <span className="text-sm">Portal Web: raicesc.net</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-raicesRed mr-2" />
                  <span className="text-sm">contacto@raicesc.net</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-raicesRed mr-2" />
                  <span className="text-sm">3507297353</span>
                </div>
              </div>
            </div>
          </section>

          {/* Definiciones */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Definiciones</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-raicesRed pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Autorización</h3>
                <p className="text-gray-600">
                  Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos
                  personales.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Base de Datos</h3>
                <p className="text-gray-600">Conjunto organizado de datos personales que sea objeto de Tratamiento.</p>
              </div>
              <div className="border-l-4 border-raicesRed pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Titular</h3>
                <p className="text-gray-600">Persona natural cuyos datos personales sean objeto de Tratamiento.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Tratamiento</h3>
                <p className="text-gray-600">
                  Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección,
                  almacenamiento, uso, circulación o supresión de los mismos.
                </p>
              </div>
              <div className="border-l-4 border-raicesRed pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Dato Sensible</h3>
                <p className="text-gray-600">
                  Aquel que afecta la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales
                  como origen racial, orientación política, convicciones religiosas, datos de salud, vida sexual y datos
                  biométricos.
                </p>
              </div>
            </div>
          </section>

          {/* Principios */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Principios</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-raicesRed mb-2">Legalidad</h3>
                <p className="text-gray-700 text-sm">
                  El Tratamiento de datos personales se realizará conforme a la Constitución y la ley.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-raicesBlue mb-2">Finalidad</h3>
                <p className="text-gray-700 text-sm">
                  Las finalidades del Tratamiento serán legítimas, determinadas y explícitas.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-raicesRed mb-2">Libertad</h3>
                <p className="text-gray-700 text-sm">
                  El Tratamiento sólo podrá ejercerse con la autorización previa, expresa e informada del Titular.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-raicesBlue mb-2">Veracidad</h3>
                <p className="text-gray-700 text-sm">
                  La información debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.
                </p>
              </div>
            </div>
          </section>

          {/* Objetivo y Alcance */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Objetivo y Alcance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Objetivo</h3>
                <p className="text-gray-700 leading-relaxed">
                  La política establece los términos, condiciones y finalidades bajo las cuales GLOBAL RAICES S.A.S,
                  como responsable de los datos personales obtenidos a través de sus distintos canales de atención,
                  trata la información de todas las personas que hayan suministrado datos personales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Alcance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Los presentes términos y condiciones aplican para cualquier registro de datos personales realizado en
                  forma presencial y/o virtual para la vinculación a cualquier servicio o producto ofrecido por GLOBAL
                  RAICES S.A.S.
                </p>
              </div>
            </div>
          </section>

          {/* Tratamiento y Finalidades */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Tratamiento y Finalidades</h2>
            </div>
            <p className="text-gray-700 mb-4">
              GLOBAL RAICES S.A.S podrá hacer uso de los datos personales para recolectar, transferir, almacenar, usar,
              circular, suprimir, compartir, actualizar y transmitir, con las siguientes finalidades:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-raicesRed rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Efectuar las gestiones pertinentes para el desarrollo del objeto social de GLOBAL RAICES S.A.S
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-raicesRed rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Desarrollar actividades comerciales y de mercadeo, análisis de consumo, encuestas de satisfacción
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-raicesRed rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Gestionar trámites, incluyendo quejas, reclamos y solicitudes</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-raicesRed rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Suministrar información de contacto a la fuerza comercial y/o red de distribución
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-raicesRed rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Ejecutar la relación contractual existente con proveedores y trabajadores
                </span>
              </li>
            </ul>
          </section>

          {/* Medidas de Seguridad */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Medidas de Seguridad</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Físicas</h4>
                <p className="text-gray-600 text-sm">
                  Control de acceso a instalaciones, vigilancia y seguridad perimetral.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Lógicas</h4>
                <p className="text-gray-600 text-sm">Autenticación, contraseñas seguras, encriptación y firewalls.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Administrativas</h4>
                <p className="text-gray-600 text-sm">
                  Políticas, capacitación del personal y supervisión del cumplimiento.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Gestión de Incidentes</h4>
                <p className="text-gray-600 text-sm">Plan de respuesta oportuna a eventos de seguridad.</p>
              </div>
            </div>
          </section>

          {/* Tiempo de Conservación */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Tiempo de Conservación</h2>
            </div>
            <p className="text-gray-700 mb-4">
              GLOBAL RAICES S.A.S conservará los datos personales únicamente durante el tiempo necesario para cumplir
              con las finalidades establecidas, considerando:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-raicesRed rounded-full mr-3"></div>
                <span className="text-gray-700">Finalidad específica del tratamiento</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Obligaciones legales y regulatorias</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-raicesRed rounded-full mr-3"></div>
                <span className="text-gray-700">Disposiciones contractuales vigentes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Consentimiento del titular</span>
              </div>
            </div>
          </section>

          {/* Derechos del Titular */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Derechos del Titular</h2>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">Como titular de datos personales, usted tiene derecho a:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-raicesRed rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Acceder gratuitamente a sus datos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-raicesRed rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Solicitar actualización y rectificación</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-raicesRed rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Solicitar prueba de autorización</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Presentar quejas ante la SIC</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Revocar autorización</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Abstenerse de responder sobre datos sensibles</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Atención de Peticiones */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Phone className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Atención de Peticiones, Consultas y Reclamos</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Los derechos consagrados podrán ser ejercidos a través de los siguientes canales:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Canales de Contacto</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Phone className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Línea nacional: 3507297353</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-4 w-4 text-raicesRed mr-2" />
                      <span>contacto@raicesc.net</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 text-raicesRed mr-2" />
                      <span>Oficinas de atención nacional</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Horarios de Atención</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Lunes a viernes: 7:00 am - 5:00 pm</li>
                    <li>Sábados: 9:00 am - 12:00 m</li>
                    <li>Página web disponible 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Procedimiento */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-raicesRed mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Procedimiento para el Ejercicio de Derechos</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Información Requerida</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nombre completo y apellidos</li>
                  <li>• Datos de contacto (dirección física y/o electrónica y teléfonos)</li>
                  <li>• Medios para recibir respuesta</li>
                  <li>• Descripción del derecho que desea ejercer</li>
                  <li>• Firma y número de identificación</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">Términos de Respuesta</h4>
                <p className="text-gray-700 text-sm">
                  <strong>15 días hábiles</strong> para resolver la reclamación. Si no es posible, se informará al
                  interesado con un plazo máximo adicional de <strong>8 días hábiles</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Actualización */}
          <section className="bg-gradient-to-r from-raicesRed to-red-600 text-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-white mr-3" />
              <h2 className="text-2xl font-bold">Actualización de la Política</h2>
            </div>
            <p className="text-red-100 leading-relaxed">
              GLOBAL RAICES S.A.S se reserva el derecho de modificar o actualizar la presente Política en cualquier
              momento. Los cambios sustanciales serán comunicados a los titulares a través de medios pertinentes como la
              página web o correo electrónico. Se recomienda revisar periódicamente esta política para mantenerse
              informado de las actualizaciones.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
