import { type NextRequest, NextResponse } from "next/server"

const ISPGO_API_BASE_URL = process.env.SECRET_ISPGO_API_BASE_URL
const ISPGO_API_TOKEN = process.env.SECRET_ISPGO_API_TOKEN

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar campos requeridos
    const { nombre, apellido, email, telefono, direccion, ciudad, plan } = body

    if (!nombre || !apellido || !email || !telefono || !direccion || !ciudad || !plan) {
      return NextResponse.json(
        {
          message: "Todos los campos son requeridos",
          errors: {
            nombre: !nombre ? "El nombre es requerido" : undefined,
            apellido: !apellido ? "El apellido es requerido" : undefined,
            email: !email ? "El correo es requerido" : undefined,
            telefono: !telefono ? "El teléfono es requerido" : undefined,
            direccion: !direccion ? "La dirección es requerida" : undefined,
            ciudad: !ciudad ? "La ciudad es requerida" : undefined,
            plan: !plan ? "El plan es requerido" : undefined,
          },
        },
        { status: 422 },
      )
    }

    // Preparar datos para enviar a ISPGo API
    const cotizacionData = {
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      ciudad,
      plan,
      canal: "web",
      estado: "pendiente",
      notas: body.notas || null,
    }

    const apiUrl = `${ISPGO_API_BASE_URL}/cotizaciones`
    console.log("[v0] ISPGo API Base URL:", ISPGO_API_BASE_URL)
    console.log("[v0] Full API URL:", apiUrl)

    // Llamar a la API de ISPGo
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ISPGO_API_TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cotizacionData),
    })

    const data = await response.json()

    if (!response.ok) {
      console.log("[v0] ISPGo API Error Response:", {
        status: response.status,
        statusText: response.statusText,
        data,
      })

      // Manejar errores de la API de ISPGo
      if (response.status === 422) {
        return NextResponse.json(
          {
            message: data.message || "Error de validación",
            status: data.status || "error",
            errors: data.errors || {},
          },
          { status: 422 },
        )
      }

      if (response.status === 401) {
        console.error("Error de autenticación con ISPGo API")
        return NextResponse.json({ message: "Error de autenticación con el servidor" }, { status: 500 })
      }

      return NextResponse.json(
        { message: data.message || "Error al procesar la solicitud" },
        { status: response.status },
      )
    }

    // Respuesta exitosa
    return NextResponse.json(
      {
        message: data.message || "Cotización creada correctamente",
        data: data.data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error en API de cotizaciones:", error)
    return NextResponse.json(
      {
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
