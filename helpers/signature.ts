import SHA256 from "crypto-js/sha256"

interface SignatureParams {
    reference: string
    amount: number
}

export function generateSignature({ reference, amount}: SignatureParams): string {
    const stringToSign = `${reference}${amount}COP${process.env.NEXT_PUBLIC_WOMPI_INTEGRITY}`
    return SHA256(stringToSign).toString()
}
