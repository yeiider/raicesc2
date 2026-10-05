import type { ReactNode } from "react"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { PolicySection } from "./policy-section"
import { DataCollectionTable } from "./data-collection-table"

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Callout({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-raicesBlue/20 bg-raicesBlue/5 p-5 text-gray-800">{children}</div>
}

export function PolicyBody() {
  return (
    <div>
      <PolicySection id="responsable">
        <p>
          El responsable del tratamiento de los datos personales recolectados a través del sitio web{" "}
          <strong>raicesc.net</strong>, el portal de pagos en línea y los formularios de solicitud de servicio es:
        </p>
        <dl className="grid gap-4 rounded-lg border border-gray-200 bg-white p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Razón social</dt>
            <dd className="font-semibold text-gray-900">GLOBAL RAÍCES S.A.S.</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">NIT</dt>
            <dd className="font-semibold text-gray-900">900.588.322-5</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Domicilio</dt>
            <dd className="text-gray-900">Calle 8 No. 6-52, Barrio Las Palmas, Guachené – Cauca, Colombia</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Canales de atención</dt>
            <dd className="text-gray-900">
              <a href="mailto:contacto@raicesc.net" className="text-raicesBlue hover:underline">
                contacto@raicesc.net
              </a>
              <br />
              <a href="tel:+573507297353" className="text-raicesBlue hover:underline">
                350 729 7353
              </a>
            </dd>
          </div>
        </dl>
        <p>En adelante se denominará &quot;RAÍCES&quot;, &quot;la empresa&quot; o &quot;nosotros&quot;.</p>
      </PolicySection>

      <PolicySection id="marco-legal">
        <p>Esta política se expide en cumplimiento de la siguiente normatividad colombiana:</p>
        <BulletList
          items={[
            "Artículo 15 de la Constitución Política de Colombia (derecho al habeas data e intimidad).",
            "Ley Estatutaria 1581 de 2012, régimen general de protección de datos personales.",
            "Decreto 1377 de 2013, compilado en el Decreto Único Reglamentario 1074 de 2015.",
            "Ley 1266 de 2008, sobre información financiera, crediticia y comercial, en lo relacionado con facturación y cartera.",
            "Resolución CRC 5111 de 2017 y normas que la modifiquen, sobre el régimen de protección de los usuarios de servicios de comunicaciones.",
          ]}
        />
      </PolicySection>

      <PolicySection id="definiciones">
        <dl className="grid gap-4 sm:grid-cols-2">
          {[
            ["Titular", "Persona natural cuyos datos personales son objeto de tratamiento."],
            ["Dato personal", "Cualquier información vinculada o que pueda asociarse a una persona natural determinada o determinable."],
            ["Tratamiento", "Cualquier operación sobre datos personales: recolección, almacenamiento, uso, circulación, transmisión o supresión."],
            ["Autorización", "Consentimiento previo, expreso e informado del titular para el tratamiento de sus datos."],
            ["Encargado", "Persona o empresa que realiza el tratamiento de datos por cuenta de RAÍCES, como pasarelas de pago o plataformas tecnológicas."],
            ["Transmisión", "Comunicación de datos a un encargado, dentro o fuera de Colombia, para que los trate por cuenta del responsable."],
          ].map(([term, description]) => (
            <div key={term} className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-semibold text-gray-900">{term}</dt>
              <dd className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</dd>
            </div>
          ))}
        </dl>
      </PolicySection>

      <PolicySection id="datos-recolectados">
        <p>
          Solo solicitamos los datos estrictamente necesarios para cada trámite. A continuación detallamos qué
          información se recolecta en cada uno de nuestros canales digitales:
        </p>
        <DataCollectionTable />
        <p className="text-sm text-gray-600">
          Los datos marcados como opcionales en los formularios (por ejemplo, segundo nombre, segundo apellido o
          detalles de la dirección) pueden omitirse sin afectar la solicitud.
        </p>
      </PolicySection>

      <PolicySection id="finalidades">
        <div>
          <h3 className="mb-2 font-semibold text-gray-900">Portal de pagos</h3>
          <BulletList
            items={[
              "Identificarte como cliente y localizar tus facturas pendientes a partir de tu ciudad y número de cédula.",
              "Mostrarte el detalle, valor y estado de tus facturas antes de pagar.",
              "Enviar a la pasarela de pagos los datos necesarios para procesar la transacción y prellenar el formulario de pago.",
              "Registrar y conciliar el pago en tu cuenta, generar comprobantes y atender reclamaciones sobre transacciones.",
              "Prevenir fraude y suplantación de identidad en el proceso de pago.",
            ]}
          />
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-gray-900">Solicitud de nuevo servicio</h3>
          <BulletList
            items={[
              "Registrar tu solicitud o cotización del plan seleccionado en nuestro sistema de gestión de clientes.",
              "Verificar la cobertura y viabilidad técnica en la dirección indicada.",
              "Contactarte por llamada, WhatsApp, SMS o correo electrónico para confirmar la solicitud y coordinar la instalación.",
              "Verificar tu identidad y suscribir el contrato de prestación de servicios de comunicaciones.",
              "Crear tu cuenta de cliente, facturar el servicio y brindarte soporte técnico.",
            ]}
          />
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-gray-900">Finalidades generales</h3>
          <BulletList
            items={[
              "Atender peticiones, quejas, reclamos y solicitudes (PQRS).",
              "Enviar información sobre el servicio contratado, mantenimientos, cortes programados y cambios contractuales.",
              "Enviar ofertas, promociones y encuestas de satisfacción, únicamente si lo has autorizado. Puedes revocar esta autorización en cualquier momento.",
              "Cumplir obligaciones legales, contables, tributarias y requerimientos de autoridades competentes.",
            ]}
          />
        </div>
        <p>
          RAÍCES <strong>no vende, alquila ni comercializa</strong> los datos personales de sus usuarios.
        </p>
      </PolicySection>

      <PolicySection id="pagos">
        <p>
          Los pagos en línea se procesan a través de <strong>Wompi</strong>, pasarela de pagos de Bancolombia S.A.,
          vigilada por la Superintendencia Financiera de Colombia. Al pagar ocurre lo siguiente:
        </p>
        <BulletList
          items={[
            "RAÍCES envía a Wompi el valor a pagar, una referencia única de la factura, una firma de integridad y tus datos de contacto (nombre, correo, teléfono y cédula) para prellenar el formulario.",
            "Los datos de tu tarjeta débito o crédito, cuenta bancaria, PSE, Nequi u otro medio de pago son ingresados directamente en la plataforma segura de Wompi.",
            "Wompi nos informa el resultado de la transacción (identificador, estado, valor, fecha y medio de pago) para registrarla en tu cuenta.",
          ]}
        />
        <Callout>
          <p>
            <strong>RAÍCES no recibe, almacena ni tiene acceso a los números de tus tarjetas, códigos de seguridad,
            claves ni credenciales bancarias.</strong>{" "}
            Esa información es tratada exclusivamente por Wompi bajo sus propias políticas de seguridad y privacidad,
            disponibles en wompi.com.
          </p>
        </Callout>
        <p>
          Para consultar tus facturas solo te pedimos ciudad y cédula. Te recomendamos no realizar consultas con
          cédulas de terceros sin su autorización; el uso indebido de datos ajenos puede constituir un delito conforme a
          la Ley 1273 de 2009.
        </p>
      </PolicySection>

      <PolicySection id="terceros">
        <p>
          Para prestar nuestros servicios, RAÍCES transmite datos personales a proveedores tecnológicos que actúan como
          encargados del tratamiento, bajo acuerdos que les obligan a usarlos únicamente para las finalidades aquí
          descritas y a mantener su confidencialidad y seguridad:
        </p>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Encargados del tratamiento</caption>
            <thead className="bg-gray-50 text-gray-900">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Encargado
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Función
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                ["Wompi (Bancolombia S.A.)", "Procesamiento de pagos en línea."],
                ["Plataformas de gestión de clientes y facturación (WispHub, ISPGo)", "Almacenamiento de cuentas de clientes, facturas, saldos y solicitudes de servicio."],
                ["Plataformas de automatización y correo electrónico", "Recepción de formularios y envío de notificaciones internas al equipo comercial."],
                ["Proveedores de alojamiento web (Vercel Inc.)", "Hospedaje del sitio web y ejecución de los servicios del portal."],
              ].map(([provider, role]) => (
                <tr key={provider} className="align-top">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                    {provider}
                  </th>
                  <td className="px-4 py-3 text-gray-700">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Algunos de estos proveedores pueden almacenar la información en servidores ubicados fuera de Colombia. Al
          aceptar esta política autorizas dicha transmisión internacional, la cual se realiza a países o proveedores que
          ofrecen niveles adecuados de protección de datos, conforme al artículo 26 de la Ley 1581 de 2012.
        </p>
        <p>
          Adicionalmente, los datos podrán ser suministrados a autoridades administrativas o judiciales que los
          requieran en ejercicio de sus funciones legales.
        </p>
      </PolicySection>

      <PolicySection id="autorizacion">
        <p>RAÍCES obtiene la autorización del titular de forma previa, expresa e informada, mediante:</p>
        <BulletList
          items={[
            "La casilla de aceptación de esta política en los formularios de solicitud de nuevo servicio, prueba gratuita y cobertura. Sin esta aceptación la solicitud no puede enviarse.",
            "La conducta inequívoca del titular al consultar sus facturas y continuar con el pago en el portal de pagos, donde se informa previamente sobre esta política.",
            "La firma del contrato de prestación de servicios, en medio físico o digital.",
          ]}
        />
        <p>
          RAÍCES conserva prueba de la autorización otorgada, incluyendo la fecha y el canal en que fue dada. Al
          suministrar tus datos declaras que son veraces y que eres su titular o cuentas con autorización para
          entregarlos.
        </p>
      </PolicySection>

      <PolicySection id="datos-sensibles">
        <p>
          A través del sitio web, el portal de pagos y los formularios de solicitud <strong>no recolectamos datos
          sensibles</strong> (origen racial o étnico, orientación política, convicciones religiosas, datos de salud,
          vida sexual o datos biométricos). Si en algún trámite fuera necesario, se solicitará autorización expresa y
          tendrás derecho a no responder.
        </p>
        <p>
          Nuestros servicios en línea están dirigidos a personas mayores de 18 años. No recolectamos intencionalmente
          datos de niños, niñas o adolescentes; en caso de hacerlo, se respetará su interés superior y sus derechos
          fundamentales, de acuerdo con el artículo 7 de la Ley 1581 de 2012.
        </p>
      </PolicySection>

      <PolicySection id="derechos">
        <p>Como titular de tus datos personales tienes derecho a:</p>
        <BulletList
          items={[
            "Conocer, actualizar y rectificar tus datos personales frente a RAÍCES o sus encargados.",
            "Solicitar prueba de la autorización otorgada, salvo cuando la ley no la exija.",
            "Ser informado, previa solicitud, sobre el uso que se ha dado a tus datos.",
            "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley, una vez agotado el trámite de consulta o reclamo ante RAÍCES.",
            "Revocar la autorización y/o solicitar la supresión de tus datos, siempre que no exista un deber legal o contractual de conservarlos (por ejemplo, mientras tengas un servicio activo o saldos pendientes).",
            "Acceder en forma gratuita a tus datos personales objeto de tratamiento.",
          ]}
        />
      </PolicySection>

      <PolicySection id="deberes">
        <p>En calidad de responsable del tratamiento, RAÍCES se compromete a:</p>
        <BulletList
          items={[
            "Garantizar al titular el pleno y efectivo ejercicio del derecho de habeas data.",
            "Conservar la información bajo condiciones de seguridad que impidan su adulteración, pérdida, consulta, uso o acceso no autorizado.",
            "Actualizar y rectificar la información cuando sea procedente.",
            "Tramitar las consultas y reclamos en los términos señalados por la ley.",
            "Exigir a los encargados el respeto de las condiciones de seguridad y privacidad de la información.",
            "Informar a la Superintendencia de Industria y Comercio cuando se presenten violaciones a los códigos de seguridad.",
          ]}
        />
      </PolicySection>

      <PolicySection id="procedimiento">
        <p>
          Puedes ejercer tus derechos tú mismo, tus causahabientes, tu representante o apoderado, enviando una solicitud
          por cualquiera de nuestros canales con la siguiente información:
        </p>
        <BulletList
          items={[
            "Nombre completo y número de cédula del titular.",
            "Descripción clara de la solicitud y del derecho que deseas ejercer.",
            "Dirección física o electrónica y teléfono para recibir respuesta.",
            "Documentos que soporten la solicitud, si aplica.",
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Consultas</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">10 días hábiles</p>
            <p className="mt-2 text-sm text-gray-600">
              Prorrogables hasta 5 días hábiles adicionales, informando los motivos de la demora.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Reclamos</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">15 días hábiles</p>
            <p className="mt-2 text-sm text-gray-600">
              Prorrogables hasta 8 días hábiles adicionales. Si el reclamo está incompleto te pediremos subsanarlo en 5
              días; pasados 2 meses sin respuesta se entenderá desistido.
            </p>
          </div>
        </div>
        <Callout>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-raicesBlue" aria-hidden="true" />
              <a href="mailto:contacto@raicesc.net" className="text-raicesBlue hover:underline">
                contacto@raicesc.net
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-raicesBlue" aria-hidden="true" />
              <a href="tel:+573507297353" className="text-raicesBlue hover:underline">
                350 729 7353
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-raicesBlue" aria-hidden="true" />
              <span>Calle 8 No. 6-52, Barrio Las Palmas, Guachené – Cauca</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-raicesBlue" aria-hidden="true" />
              <span>Lunes a viernes de 7:00 a.m. a 5:00 p.m. · Sábados de 9:00 a.m. a 12:00 m.</span>
            </li>
          </ul>
        </Callout>
      </PolicySection>

      <PolicySection id="seguridad">
        <p>Aplicamos medidas técnicas, humanas y administrativas razonables para proteger tu información, entre ellas:</p>
        <BulletList
          items={[
            "Cifrado de las comunicaciones entre tu navegador y nuestro sitio mediante HTTPS/TLS.",
            "Las credenciales de acceso a nuestros sistemas de facturación y pagos se guardan únicamente en el servidor y nunca se exponen en el navegador.",
            "Firma de integridad en cada transacción para evitar que el valor o la referencia del pago sean alterados.",
            "No almacenamos datos de tarjetas ni credenciales bancarias.",
            "Acceso a la información restringido al personal que lo necesita para cumplir sus funciones, con obligaciones de confidencialidad.",
            "Procedimiento de gestión de incidentes de seguridad y reporte ante la SIC cuando corresponda.",
          ]}
        />
        <p className="text-sm text-gray-600">
          Ningún sistema es completamente infalible. Si detectas un uso indebido de tus datos, comunícate de inmediato
          con nosotros.
        </p>
      </PolicySection>

      <PolicySection id="conservacion">
        <BulletList
          items={[
            "Solicitudes de nuevo servicio, prueba gratuita o cobertura que no se concreten en un contrato: hasta 24 meses desde su recepción, salvo que solicites su supresión antes.",
            "Datos de clientes activos: durante toda la vigencia de la relación contractual.",
            "Facturas, pagos y transacciones: durante el término exigido por las normas comerciales y tributarias (hasta 10 años).",
            "Registros técnicos de navegación: el tiempo necesario para la seguridad y el funcionamiento del sitio.",
          ]}
        />
        <p>
          Una vez cumplidos estos plazos, los datos serán suprimidos o anonimizados de forma segura.
        </p>
      </PolicySection>

      <PolicySection id="vigencia">
        <p>
          Esta política rige a partir de su publicación. RAÍCES podrá modificarla para adaptarla a cambios legales o en
          sus servicios; los cambios sustanciales se comunicarán en esta página y, cuando sea posible, por correo
          electrónico, antes de su aplicación. Las bases de datos permanecerán vigentes mientras se mantengan las
          finalidades descritas.
        </p>
        <p>
          Esta política complementa nuestras{" "}
          <a href="/politicas-de-privacidad" className="text-raicesBlue hover:underline">
            Políticas de Privacidad
          </a>{" "}
          y nuestros{" "}
          <a href="/terminos-y-condiciones" className="text-raicesBlue hover:underline">
            Términos y Condiciones
          </a>
          .
        </p>
      </PolicySection>
    </div>
  )
}
