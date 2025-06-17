// Tipos para la respuesta de la API de clientes
export interface ClienteResponse {
    count: number
    next: string | null
    previous: string | null
    results: Cliente[]
}

export interface Cliente {
    id_servicio: number
    usuario: string
    nombre: string
    email: string
    cedula: string
    direccion: string
    localidad: string
    ciudad: string
    telefono: string
    descuento: string
    saldo: string
    estado: string
    fecha_corte: string
    precio_plan: string
    estado_facturas: string
    plan_internet: {
        id: number
        nombre: string
    }
    // Otros campos según sea necesario
}

// Tipos para la respuesta de la API de saldo
export interface SaldoResponse {
    username: string
    facturas: Factura[]
    url_pago: string
    saldo: number
    nombre: string
    estado: string
}

export interface Factura {
    fecha_vencimiento: string
    fecha_emision: string
    total: number
    id: number
}

// Tipo para los productos en la factura
export interface Product {
    id: number
    invoice_id: number
    service_id: number
    description: string
    quantity: number
    unit_price: string
    subtotal: string
    metadata?: any
    created_at: string
    updated_at: string
}

// Tipo para la factura en el contexto de la aplicación
export interface Bill {
    id: string
    reference: string
    clientName: string
    dueDate: string
    amount: number
    service?: string
    products?: Product[]
    period: string
    status: string
    clientId?: number
    facturaId?: number
    cedula?: string
    address?: string
    city?: string
    telephone?: string
    email?: string,
    subtotal?: number
    tax?: number
    total?: number
    discount?: number
}

// Tipos para la respuesta de la API de Wompi
export interface WompiTransactionResponse {
    data: WompiTransaction
    meta: Record<string, any>
}

export interface WompiTransaction {
    id: string
    created_at: string
    finalized_at: string
    amount_in_cents: number
    reference: string
    currency: string
    payment_method_type: string
    payment_method: {
        type: string
        extra: Record<string, any>
        user_type: string
        payment_description: string
    }
    status: string
    status_message: string
    merchant: {
        id: number
        name: string
        legal_name: string
        contact_name: string
        phone_number: string
        logo_url: string | null
        legal_id_type: string
        email: string
        legal_id: string
        public_key: string
    }
    taxes: any[]
    tip_in_cents: number | null
}
export interface JamundiInvoiceResponse {
    invoice: {
        subtotal: string
        increment_id: string
        tax: string
        total: string
        amount: string
        discount: string
        customer_name: string
        product?: string
        products?: Product[]
        status: string
        issue_date: string
        due_date: string
        customer: {
            id: number
            first_name: string
            last_name: string
            phone_number: string
            email_address: string
            document_type: string
            identity_document: string
            customer_status: string
        }
        address: {
            id: number
            customer_id: number
            customer_name: string
            address: string
            city: string
            state_province: string
            postal_code: string
            country: string
            address_type: string
        }
    }
}
