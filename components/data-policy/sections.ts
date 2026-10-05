export const POLICY_EFFECTIVE_DATE = "10 de mayo de 2026"

export const policySections = [
  { id: "responsable", title: "Responsable del tratamiento" },
  { id: "marco-legal", title: "Marco legal" },
  { id: "definiciones", title: "Definiciones" },
  { id: "datos-recolectados", title: "Datos que recolectamos" },
  { id: "finalidades", title: "Finalidades del tratamiento" },
  { id: "pagos", title: "Portal de pagos y Wompi" },
  { id: "terceros", title: "Encargados y transmisión" },
  { id: "autorizacion", title: "Autorización del titular" },
  { id: "datos-sensibles", title: "Datos sensibles y menores" },
  { id: "derechos", title: "Derechos del titular" },
  { id: "deberes", title: "Deberes de Global Raíces" },
  { id: "procedimiento", title: "Consultas y reclamos" },
  { id: "seguridad", title: "Medidas de seguridad" },
  { id: "conservacion", title: "Conservación de los datos" },
  { id: "vigencia", title: "Vigencia y modificaciones" },
] as const

export type PolicySectionId = (typeof policySections)[number]["id"]

export function getSectionNumber(id: PolicySectionId) {
  return policySections.findIndex((section) => section.id === id) + 1
}
