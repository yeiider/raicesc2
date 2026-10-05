const channels = [
  {
    channel: "Portal de pagos en línea",
    source: "Página /pagos",
    data: [
      "Ciudad del servicio",
      "Número de cédula de ciudadanía",
      "Nombre completo, correo electrónico y teléfono registrados en tu cuenta (consultados en nuestro sistema de facturación)",
      "Número de cliente, servicio, facturas pendientes, valores y saldo",
      "Referencia, identificador, estado, valor, fecha y medio de la transacción",
    ],
  },
  {
    channel: "Solicitud de nuevo servicio",
    source: "Formulario de contratación de planes y página /registro",
    data: [
      "Primer y segundo nombre, primer y segundo apellido",
      "Número de cédula de ciudadanía",
      "Teléfono celular y correo electrónico",
      "Ciudad y dirección de instalación: tipo y número de vía, barrio, vereda o urbanización, tipo y número de vivienda, detalles adicionales",
      "Plan seleccionado, velocidad y precio",
    ],
  },
  {
    channel: "Prueba gratuita y consulta de cobertura",
    source: "Formularios emergentes del sitio",
    data: ["Nombre completo", "Teléfono celular", "Correo electrónico", "Zona o ubicación donde deseas el servicio"],
  },
  {
    channel: "Navegación en el sitio",
    source: "Automático",
    data: [
      "Dirección IP, tipo de navegador y dispositivo, fecha y hora de acceso (registros técnicos del servidor)",
      "Indicadores técnicos guardados en el almacenamiento local de tu navegador para el correcto funcionamiento del portal de pagos. No usamos cookies publicitarias.",
    ],
  },
]

export function DataCollectionTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Datos personales recolectados por cada canal</caption>
        <thead className="bg-gray-50 text-gray-900">
          <tr>
            <th scope="col" className="w-1/3 px-4 py-3 font-semibold">
              Canal
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Datos recolectados
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {channels.map((item) => (
            <tr key={item.channel} className="align-top">
              <th scope="row" className="px-4 py-4 font-semibold text-gray-900">
                {item.channel}
                <span className="mt-1 block text-xs font-normal text-gray-500">{item.source}</span>
              </th>
              <td className="px-4 py-4">
                <ul className="flex list-disc flex-col gap-1 pl-4 text-gray-700">
                  {item.data.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
