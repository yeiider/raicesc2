import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.SECRET_WISPHUB_API_KEY;
const API_BASE_URL = process.env.SECRET_WISPHUB_API_BASE_URL;

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Asegurarnos de que params.id existe y no es undefined
        if (!params?.id) {
            return NextResponse.json(
                { error: "Se requiere el ID del cliente" },
                { status: 400 }
            );
        }

        const id = params.id;
        console.log(`Consultando saldo para cliente ID: ${id}`);

        const response = await axios.get(`${API_BASE_URL}/clientes/${id}/saldo`, {
            headers: {
                Authorization: `Api-Key ${API_KEY}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        console.log(`Saldo encontrado: ${JSON.stringify(response.data)}`);
        return NextResponse.json(response.data, { status: 200 });

    } catch (error) {
        console.error("Error en la API de saldo:", error);

        if (axios.isAxiosError(error)) {
            const status = error.response?.status || 500;
            const mensaje = error.response?.data?.message || error.message;

            return NextResponse.json(
                { error: `Error al consultar la API externa: ${mensaje}` },
                { status }
            );
        }

        return NextResponse.json(
            {
                error: `Error interno del servidor: ${error instanceof Error ? error.message : "Error desconocido"}`
            },
            { status: 500 }
        );
    }
}