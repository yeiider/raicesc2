"use client"

import { ArrowRight, Calendar, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {Bill} from "@/lib/types.ts";

interface BillDetailsStepProps {
    bill: Bill
    onProceed: () => void
}

export default function BillDetailsStep({ bill, onProceed }: BillDetailsStepProps) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div>
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Detalles de la Factura</h2>
                <p className="text-gray-600 mt-1">Verifica la información de tu factura antes de proceder al pago</p>
            </div>

            <Card className="border border-gray-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            {bill.products && bill.products.length > 0 ? (
                                <div>
                                    <h3 className="font-semibold text-lg">Productos</h3>
                                    {bill.products.map((product, index) => (
                                        <div key={index} className="mt-2">
                                            <p className="font-medium">{product.description}</p>
                                            <p className="text-sm text-gray-600">
                                                Cantidad: {product.quantity} x {formatCurrency(Number(product.unit_price))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <h3 className="font-semibold text-lg">{bill.service}</h3>
                            )}
                            <div className="flex items-center text-gray-600 mt-1">
                                <User className="h-4 w-4 mr-1" />
                                <span>{bill.clientName}</span>
                            </div>
                        </div>
                        <div className="bg-[#f0f4ff] px-3 py-1 rounded text-[#2d4594] font-medium text-sm">{bill.status}</div>
                    </div>

                    <Separator className="my-4" />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Referencia</p>
                            <p className="font-medium">{bill.reference}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Fecha de vencimiento</p>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                                <p className="font-medium">{bill.dueDate}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Periodo</p>
                            <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-1 text-gray-500" />
                                <p className="font-medium">{bill.period}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Monto a pagar</p>
                            <p className="font-bold text-lg text-[#2d4594]">{formatCurrency(bill.amount)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-6">
                <Button onClick={onProceed} className="w-full bg-[#2d4594] hover:bg-[#1e3276]">
          <span className="flex items-center">
            Proceder al Pago
            <ArrowRight className="ml-2 h-4 w-4" />
          </span>
                </Button>
            </div>
        </div>
    )
}
