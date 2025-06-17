import { NextRequest, NextResponse } from 'next/server';
import { ClienteService } from '@/services/clienteService';

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const cedula = url.searchParams.get("cedula");
        const ciudad = url.searchParams.get("ciudad") || "general";

        if (!cedula) {
            return NextResponse.json(
                { error: "Se requiere el parámetro 'cedula'" },
                { status: 400 }
            );
        }

        const resultado = await ClienteService.buscarPorCedula(cedula, ciudad);

        return NextResponse.json(resultado.data, { status: resultado.status });

    } catch (error: any) {
        console.error('Error en la API:', error);
        return NextResponse.json(
            { error: error.message || "Error interno del servidor" },
            { status: error.status || 500 }
        );
    }
};
