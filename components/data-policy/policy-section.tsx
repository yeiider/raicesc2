import type { ReactNode } from "react"
import { getSectionNumber, policySections, type PolicySectionId } from "./sections"

interface PolicySectionProps {
  id: PolicySectionId
  children: ReactNode
}

export function PolicySection({ id, children }: PolicySectionProps) {
  const number = getSectionNumber(id)
  const title = policySections.find((section) => section.id === id)?.title

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-b border-gray-200 py-10 last:border-b-0">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono text-sm font-semibold text-raicesBlue">{String(number).padStart(2, "0")}</span>
        <h2 id={`${id}-title`} className="text-2xl font-bold text-gray-900 text-balance">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  )
}
