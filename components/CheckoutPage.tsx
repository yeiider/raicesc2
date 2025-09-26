'use client'
import { useEffect, useState } from "react";
import CheckoutFlow from "./checkout-flow";
import TransactionSummary from "./transaction-summary";
import { WompiTransaction } from "@/lib/types";

export default function CheckoutPage() {
    const [transaction, setTransaction] = useState<WompiTransaction | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [transactionId, setTransactionId] = useState<string | null>(null);

    useEffect(() => {
        // Obtener el ID de la transacción de la URL
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        setTransactionId(id);
    }, []);

    useEffect(() => {

        const fetchTransaction = async () => {
            if (!transactionId) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/wompi/transactions/${transactionId}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Error al obtener la transacción");
                }

                const data = await response.json();
                setTransaction(data.data);
            } catch (err) {
                console.error("Error al obtener la transacción:", err);
                setError(err instanceof Error ? err.message : "Error desconocido");
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransaction();
    }, [transactionId]);

    return transactionId ? (
        <TransactionSummary
            transactionId={transactionId}
            transaction={transaction}
            isLoading={isLoading}
            error={error}
        />
    ) : (
        <CheckoutFlow />
    );
}
