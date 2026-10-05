import { policySections } from "./sections"

export function PolicyToc() {
  return (
    <nav aria-label="Contenido de la política" className="lg:sticky lg:top-28">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Contenido</p>
      <ol className="flex flex-col gap-1 border-l border-gray-200">
        {policySections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="-ml-px flex gap-3 border-l-2 border-transparent py-1.5 pl-4 text-sm text-gray-600 transition-colors hover:border-raicesBlue hover:text-raicesBlue"
            >
              <span className="font-mono text-xs text-gray-400 pt-0.5">{String(index + 1).padStart(2, "0")}</span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
