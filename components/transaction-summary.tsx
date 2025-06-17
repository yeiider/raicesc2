"use client"
import { CheckCircle, XCircle, Loader2, ArrowLeft, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { WompiTransaction } from "@/lib/types"

interface TransactionSummaryProps {
    transactionId: string
    transaction: WompiTransaction | null
    isLoading: boolean
    error: string | null
}

export default function TransactionSummary({ transaction, isLoading, error }: TransactionSummaryProps) {
    const formatCurrency = (amountInCents: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(amountInCents / 100)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "APPROVED":
                return "text-green-600"
            case "DECLINED":
                return "text-red-600"
            case "PENDING":
                return "text-yellow-600"
            default:
                return "text-gray-600"
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "APPROVED":
                return <CheckCircle className="h-5 w-5 text-green-600" />
            case "DECLINED":
                return <XCircle className="h-5 w-5 text-red-600" />
            case "PENDING":
                return <Loader2 className="h-5 w-5 text-yellow-600 animate-spin" />
            default:
                return null
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case "APPROVED":
                return "Aprobado"
            case "DECLINED":
                return "Rechazado"
            case "PENDING":
                return "Pendiente"
            default:
                return status
        }
    }

    const getPaymentMethodName = (type: string) => {
        switch (type) {
            case "BANCOLOMBIA_TRANSFER":
                return "Transferencia Bancolombia"
            case "CARD":
                return "Tarjeta de Crédito/Débito"
            case "NEQUI":
                return "Nequi"
            case "PSE":
                return "PSE"
            default:
                return type
        }
    }

    return (
        <div className="max-w-3xl mx-auto">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <Loader2 className="h-12 w-12 text-[#2d4594] animate-spin mb-4" />
                        <p className="text-gray-600">Cargando detalles de la transacción...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <XCircle className="h-12 w-12 text-red-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Error al cargar la transacción</h2>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <a href="/">
                            <Button className="bg-[#2d4594] hover:bg-[#1e3276]">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Volver al inicio
                            </Button>
                        </a>
                    </div>
                ) : transaction ? (
                    <div>
                        <div className="text-center mb-6">
                            <div className="flex justify-center mb-4">
                                <div
                                    className={`p-3 rounded-full ${
                                        transaction.status === "APPROVED"
                                            ? "bg-green-100"
                                            : transaction.status === "DECLINED"
                                                ? "bg-red-100"
                                                : "bg-yellow-100"
                                    }`}
                                >
                                    {getStatusIcon(transaction.status)}
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {transaction.status === "APPROVED"
                                    ? "¡Pago Exitoso!"
                                    : transaction.status === "DECLINED"
                                        ? "Pago Rechazado"
                                        : "Pago en Proceso"}
                            </h2>
                            <p className="text-gray-600 mt-1">
                                {transaction.status === "APPROVED"
                                    ? "Tu pago ha sido procesado correctamente"
                                    : transaction.status === "DECLINED"
                                        ? "Tu pago no pudo ser procesado"
                                        : "Tu pago está siendo procesado"}
                            </p>
                        </div>

                        <Card className="border border-gray-200 mb-6">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">Resumen de la Transacción</h3>
                                        <p className="text-sm text-gray-600">Fecha: {formatDate(transaction.created_at)}</p>
                                    </div>

                                    <Separator />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">ID de Transacción</p>
                                            <p className="font-medium">{transaction.id}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Estado</p>
                                            <div className={`flex items-center ${getStatusColor(transaction.status)}`}>
                                                {getStatusIcon(transaction.status)}
                                                <p className="font-medium ml-1">{getStatusText(transaction.status)}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Referencia</p>
                                            <p className="font-medium">{transaction.reference}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Método de Pago</p>
                                            <p className="font-medium">{getPaymentMethodName(transaction.payment_method_type)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Comercio</p>
                                            <p className="font-medium">{transaction.merchant.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Fecha de Finalización</p>
                                            <p className="font-medium">
                                                {transaction.finalized_at ? formatDate(transaction.finalized_at) : "Pendiente"}
                                            </p>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="flex justify-between items-center">
                                        <p className="font-medium">Monto Pagado</p>
                                        <p className="font-bold text-lg text-[#2d4594]">{formatCurrency(transaction.amount_in_cents)}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/" className="flex-1">
                                <Button variant="outline" className="w-full border-[#2d4594] text-[#2d4594] hover:bg-[#f0f4ff]">
                                    <Home className="mr-2 h-4 w-4" />
                                    Volver al Inicio
                                </Button>
                            </a>
                            <Button
                                variant="outline"
                                className="flex-1 border-[#2d4594] text-[#2d4594] hover:bg-[#f0f4ff]"
                                onClick={() => window.print()}
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Descargar Comprobante
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                        <XCircle className="h-12 w-12 text-red-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Transacción no encontrada</h2>
                        <p className="text-gray-600 mb-6">No se pudo encontrar la información de la transacción.</p>
                        <a href="/">
                            <Button className="bg-[#2d4594] hover:bg-[#1e3276]">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Volver al inicio
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

