"use client"

import { useState } from "react"
import { ArrowRight, Calendar, FileText, User, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bill } from "@/lib/types.ts"

interface BillDetailsStepProps {
    bills: Bill[]
    onProceed: (bill: Bill) => void
}

export default function BillDetailsStep({ bills, onProceed }: BillDetailsStepProps) {
    const [showAll, setShowAll] = useState(false)

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(amount)
    }

    const primaryBill = bills[0]
    const remainingBills = bills.slice(1)

    const BillCard = ({ bill }: { bill: Bill }) => (
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

                <div className="mt-6">
                    <Button onClick={() => onProceed(bill)} className="w-full bg-[#2d4594] hover:bg-[#1e3276]">
                        <span className="flex items-center">
                            Proceder al Pago
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )

    return (
        <div>
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Detalles de la Factura</h2>
                <p className="text-gray-600 mt-1">Selecciona la factura que deseas pagar</p>
            </div>

            {/* Aviso importante cuando hay múltiples facturas */}
            {bills.length > 1 && (
                <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-800">
                    <div className="flex">
                        <AlertTriangle className="h-5 w-5 mr-2 mt-0.5" />
                        <div>
                            <p className="font-semibold">Tienes {bills.length} facturas no pagadas</p>
                            <p className="text-sm">Para activar tu servicio debes ponerte al día y cancelar todas las facturas pendientes.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Mostrar solo la primera factura por defecto */}
            {primaryBill && (
                <div className="space-y-6">
                    <BillCard bill={primaryBill} />
                </div>
            )}

            {/* Botón para ver/ocultar las demás facturas */}
            {remainingBills.length > 0 && (
                <div className="mt-4">
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                    >
                        <span className="flex items-center justify-center">
                            {showAll ? (
                                <>
                                    Ocultar facturas no pagadas
                                    <ChevronUp className="ml-2 h-4 w-4" />
                                </>
                            ) : (
                                <>
                                    Ver facturas no pagadas ({remainingBills.length})
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </span>
                    </Button>
                </div>
            )}

            {/* Listado desplegable de facturas restantes */}
            {showAll && remainingBills.length > 0 && (
                <div className="space-y-6 mt-6">
                    {remainingBills.map((bill, idx) => (
                        <BillCard key={`${bill.id}-${idx}`} bill={bill} />
                    ))}
                </div>
            )}
        </div>
    )
}
