"use client"

import { CheckCircle, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {Bill} from "@/lib/types.ts";

interface SummaryStepProps {
    bill: Bill
    transactionId: string
    onRestart: () => void
}

export default function SummaryStep({ bill, transactionId, onRestart }: SummaryStepProps) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(amount)
    }

    const currentDate = new Date().toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })

    return (
        <div>
            <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">¡Pago Exitoso!</h2>
                <p className="text-gray-600 mt-1">Tu pago ha sido procesado correctamente</p>
            </div>

            <Card className="border border-gray-200 mb-6">
                <CardContent className="p-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg">Resumen de la Transacción</h3>
                            <p className="text-sm text-gray-600">Fecha: {currentDate}</p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">ID de Transacción</p>
                                <p className="font-medium">{transactionId}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Estado</p>
                                <div className="flex items-center text-green-600">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    <p className="font-medium">Completado</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Servicio</p>
                                {bill.products && bill.products.length > 0 ? (
                                    <div>
                                        {bill.products.map((product, index) => (
                                            <p key={index} className="font-medium">
                                                {product.description}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="font-medium">{bill.service}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Referencia</p>
                                <p className="font-medium">{bill.reference}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Cliente</p>
                                <p className="font-medium">{bill.clientName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Periodo</p>
                                <p className="font-medium">{bill.period}</p>
                            </div>
                        </div>

                        <Separator />

                        <div className="flex justify-between items-center">
                            <p className="font-medium">Monto Pagado</p>
                            <p className="font-bold text-lg text-[#2d4594]">{formatCurrency(bill.amount)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    variant="outline"
                    className="flex-1 border-[#2d4594] text-[#2d4594] hover:bg-[#f0f4ff]"
                    onClick={onRestart}
                >
                    <Home className="mr-2 h-4 w-4" />
                    Volver al Inicio
                </Button>
                <Button variant="outline" className="flex-1 border-[#2d4594] text-[#2d4594] hover:bg-[#f0f4ff]">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Comprobante
                </Button>
            </div>
        </div>
    )
}
