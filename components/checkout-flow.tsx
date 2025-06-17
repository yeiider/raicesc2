"use client"

import {useState,useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {CheckCircle} from "lucide-react"
import BillSearchStep from "./steps/bill-search-step"
import BillDetailsStep from "./steps/bill-details-step"
import PaymentStep from "./steps/payment-step"
import SummaryStep from "./steps/summary-step"
import CheckoutStepper from "./checkout-stepper"
import {useToast} from "@/hooks/use-toast"

import {Bill} from "@/lib/types.ts";


// Interfaz para la respuesta de la API de Jamundí


export default function CheckoutFlow() {

    const [currentStep, setCurrentStep] = useState(1)
    const [bill, setBill] = useState<Bill | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isPaymentComplete, setIsPaymentComplete] = useState(false)
    const [transactionId, setTransactionId] = useState("")
    const {toast} = useToast()


    useEffect(() => {
        // Verificar si ya se realizó un reload
        const alreadyReloaded = localStorage.getItem("pageReloaded");

        if (!alreadyReloaded) {
            // Establecer indicador en localStorage y recargar la página
            localStorage.setItem("pageReloaded", "true");
            window.location.reload();
        }
    }, []);


    const handleBillSearch = async (cedula: string, ciudad: string) => {
        setIsLoading(true)

        try {
            // Verificar si la ciudad es Jamundí para usar una API diferente
            if (ciudad === "jamundi") {
                await handleJamundiBillSearch(cedula)
            } else {
                await handleRegularBillSearch(cedula, ciudad)
            }
        } catch (error) {
            console.error("Error al buscar factura:", error)
            toast({
                title: "Error",
                description:
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error al buscar la información. Por favor, intente nuevamente.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    // Función para manejar la búsqueda de facturas en Jamundí
    const handleJamundiBillSearch = async (cedula: string) => {

        // Simulamos la llamada a la API de Jamundí (reemplazar con la API real)
        const jamundiResponse = await fetch(`/api/clientes?cedula=${cedula}&ciudad=jamundi`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        // Para propósitos de demostración, usamos datos de ejemplo
        // En producción, descomentar la línea anterior y usar la respuesta real
        if (!jamundiResponse.ok) {
            const errorData = await jamundiResponse.json()
            toast({
                title: "Error al buscar el cliente",
                description: errorData.error || "Error al buscar el cliente",
                variant: "destructive",
            })
            return
        }
        const jamundiData = await jamundiResponse.json()
        // Verificar si hay una factura
        if (!jamundiData || !jamundiData.invoice) {
            toast({
                title: "Factura no encontrada",
                description: "No se encontró ninguna factura pendiente para este cliente en Jamundí",
                variant: "destructive",
            })
            return
        }

        // Convertir los datos al formato Bill
        const invoice = jamundiData.invoice

        if (invoice.status !== "unpaid") {
            toast({
                title: "La factura ya ha sido pagada",
                description: "La factura que intenta buscar ya ha sido pagada. Por favor, intente con otra factura.",
                variant: "destructive",
            })
            return
        }

        const billData: Bill = {
            id: invoice.increment_id,
            reference: `FAC-ISPGO-${invoice.increment_id}`,
            clientName: invoice.customer_name,
            dueDate: new Date(invoice.due_date).toLocaleDateString(),
            amount: Number.parseFloat(invoice.total),
            period: new Date(invoice.issue_date).toLocaleDateString("es-CO", {month: "long", year: "numeric"}),
            status: invoice.status === "unpaid" ? "Pendiente" : invoice.status,
            cedula: invoice.customer.identity_document,
            email: invoice.customer.email_address,
            telephone: invoice.customer.phone_number,
            city: invoice.address.city,
            address: invoice.address.address,
            clientId: invoice.customer.id,
            facturaId: Number.parseInt(invoice.increment_id),
            subtotal: Number.parseFloat(invoice.subtotal),
            tax: Number.parseFloat(invoice.tax),
            discount: Number.parseFloat(invoice.discount),
        }

        // Handle both single product and products array
        if (invoice.products && invoice.products.length > 0) {
            billData.products = invoice.products;
        } else if (invoice.product) {
            billData.service = invoice.product;
        }

        setBill(billData)
        setCurrentStep(2)
    }

    // Función para manejar la búsqueda de facturas en otras ciudades
    const handleRegularBillSearch = async (cedula: string, ciudad: string) => {

        // Consultar cliente por cédula
        const clienteResponse = await fetch(`/api/clientes?cedula=${cedula}&ciudad=${ciudad}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!clienteResponse.ok) {
            const errorData = await clienteResponse.json()
            console.error("Error en la respuesta de la API:", errorData)
            throw new Error(errorData.error || "Error al buscar el cliente")
        }

        const clienteData = await clienteResponse.json()

        if (clienteData.count === 0 || !clienteData.results || clienteData.results.length === 0) {
            toast({
                title: "Cliente no encontrado",
                description: `No se encontró ningún cliente con esa cédula en ${getCiudadNombre(ciudad)}`,
                variant: "destructive",
            })
            return
        }

        const cliente = clienteData.results[0]

        // Consultar saldo del cliente
        const saldoResponse = await fetch(`/api/clientes/${cliente.id_servicio}/saldo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!saldoResponse.ok) {
            const errorData = await saldoResponse.json()
            console.error("Error en la respuesta de la API de saldo:", errorData)
            throw new Error(errorData.error || "Error al consultar el saldo")
        }

        const saldoData = await saldoResponse.json()

        // Verificar si hay facturas pendientes
        if (!saldoData.facturas || saldoData.facturas.length === 0) {
            toast({
                title: "Sin facturas pendientes",
                description: "El cliente no tiene facturas pendientes de pago",
                variant: "destructive",
            })
            return
        }

        // Tomar la primera factura pendiente
        const factura = saldoData.facturas[0]

        // Crear objeto de factura para la aplicación
        const billData: Bill = {
            id: factura.id.toString(),
            reference: `FAC-${factura.id}`,
            clientName: cliente.nombre,
            dueDate: new Date(factura.fecha_vencimiento).toLocaleDateString(),
            amount: factura.total,
            service: cliente.plan_internet?.nombre || "Servicio de Internet",
            period: new Date(factura.fecha_emision).toLocaleDateString("es-CO", {month: "long", year: "numeric"}),
            status: cliente.estado_facturas,
            clientId: cliente.id_servicio,
            facturaId: factura.id,
            cedula: cliente.cedula,
            email: cliente.email,
            telephone: cliente.telefono,
            city: cliente.ciudad,
            address: cliente.direccion,
        }

        setBill(billData)
        setCurrentStep(2)
    }

    // Función para obtener el nombre de la ciudad a partir de su valor
    const getCiudadNombre = (value: string): string => {
        const ciudades: Record<string, string> = {
            cali: "Cali",
            guachene: "Guachené",
            padilla: "Padilla",
            jamundi: "Jamundí",
            villarica: "Villa Rica",
            caloto: "Caloto",
            puertotejada: "Puerto Tejada",
        }
        return ciudades[value] || value
    }

    // Función para simular la búsqueda con datos de prueba (para desarrollo)
    const handleMockSearch = () => {
        setIsLoading(true)

        // Simular tiempo de carga
        setTimeout(() => {
            // Datos de prueba
            const mockBill: Bill = {
                id: "224127",
                reference: "FAC-224127",
                clientName: "Jari camila lucumi fory",
                dueDate: "05/04/2025",
                amount: 60000,
                service: "30MG INTERNET + TV-PAD-C SUR-GUACH-CALOTO-STDER",
                period: "marzo 2025",
                status: "Pendiente",
                clientId: 9331,
                cedula: "1002946826",
                email: "raicesc@raicesc.net",
                telephone: "3207753745",
                city: "Guachené",
                address: "Carrera 9a",
                facturaId: 224127,
            }

            setBill(mockBill)
            setCurrentStep(2)
            setIsLoading(false)
        }, 1500)
    }

    const handleProceedToPayment = () => {
        setCurrentStep(3)
    }

    const handlePaymentComplete = (txId: string) => {
        setTransactionId(txId)
        setIsPaymentComplete(true)
        setCurrentStep(4)
    }

    const handleRestart = () => {
        setBill(null)
        setIsPaymentComplete(false)
        setTransactionId("")
        setCurrentStep(1)
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <CheckoutStepper currentStep={currentStep}/>

                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <BillSearchStep onSearch={handleBillSearch} onMockSearch={handleMockSearch}
                                                isLoading={isLoading}/>
                            </motion.div>
                        )}

                        {currentStep === 2 && bill && (
                            <motion.div
                                key="step2"
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <BillDetailsStep bill={bill} onProceed={handleProceedToPayment}/>
                            </motion.div>
                        )}

                        {currentStep === 3 && bill && (
                            <motion.div
                                key="step3"
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <PaymentStep bill={bill} onPaymentComplete={handlePaymentComplete}/>
                            </motion.div>
                        )}

                        {currentStep === 4 && bill && (
                            <motion.div
                                key="step4"
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <SummaryStep bill={bill} transactionId={transactionId} onRestart={handleRestart}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {isPaymentComplete && (
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="mt-6 p-4 bg-green-50 rounded-lg flex items-center text-green-700"
                >
                    <CheckCircle className="mr-2 h-5 w-5"/>
                    <span>¡Pago realizado con éxito! Tu factura ha sido pagada.</span>
                </motion.div>
            )}
        </div>
    )
}
