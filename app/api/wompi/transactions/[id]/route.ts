import { NextRequest, NextResponse } from 'next/server';

const WOMPI_API_BASE_URL = process.env.SECRET_WOMPI_API_BASE_URL;

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json(
                { error: "Se requiere el ID de la transacción" },
                { status: 400 }
            );
        }

        console.log(`Consultando transacción Wompi ID: ${id}`);

        // Realizar la solicitud a la API de Wompi
        const response = await fetch(`${WOMPI_API_BASE_URL}/transactions/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            console.error(`Error en la API de Wompi: ${response.status} ${response.statusText}`);
            const errorText = await response.text();
            console.error(`Respuesta de error: ${errorText}`);

            return NextResponse.json(
                { error: `Error al consultar la API de Wompi: ${response.statusText}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        console.log(`Transacción encontrada: ${JSON.stringify(data)}`);

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error("Error en la API de transacciones Wompi:", error);
        return NextResponse.json(
            {
                error: `Error interno del servidor: ${error instanceof Error ? error.message : "Error desconocido"}`
            },
            { status: 500 }
        );
    }
}