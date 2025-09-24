export default function CheckoutHeader() {
    return (
        <div className="mb-8">
            <div className="bg-[#2d4594] p-4 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-white font-bold text-xl">RAICES</div>
                </div>
                <div className="text-white text-sm">Paga Aquí</div>
            </div>
            <h1 className="text-2xl font-bold text-center mt-6 mb-2">Pago de Factura</h1>
            <p className="text-gray-600 text-center mb-6">Ingresa los datos de tu factura para realizar el pago</p>
        </div>
    )
}
