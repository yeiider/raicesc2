import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyToc } from "@/components/data-policy/policy-toc"
import { PolicyBody } from "@/components/data-policy/policy-body"
import { POLICY_EFFECTIVE_DATE } from "@/components/data-policy/sections"

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales | Global Raíces S.A.S",
  description:
    "Cómo Global Raíces S.A.S recolecta, usa y protege los datos personales del portal de pagos y las solicitudes de nuevo servicio, conforme a la Ley 1581 de 2012.",
}

export default function TratamientoDeDatosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      <section className="border-b border-gray-200 bg-gray-50 pt-32 pb-12 md:pt-36">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-raicesBlue">
              Ley 1581 de 2012 · Habeas Data
            </p>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 text-balance md:text-5xl">
              Política de Tratamiento de Datos Personales
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Explicamos de forma clara qué datos te pedimos cuando pagas tu factura en línea o solicitas un nuevo
              servicio, para qué los usamos, con quién los compartimos y cómo puedes ejercer tus derechos.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Responsable</dt>
                <dd className="font-semibold text-gray-900">Global Raíces S.A.S · NIT 900.588.322-5</dd>
              </div>
              <div>
                <dt className="text-gray-500">Vigente desde</dt>
                <dd className="font-semibold text-gray-900">{POLICY_EFFECTIVE_DATE}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside>
            <PolicyToc />
          </aside>
          <article className="max-w-3xl">
            <PolicyBody />
          </article>
        </div>
      </div>

      <Footer />
    </main>
  )
}
