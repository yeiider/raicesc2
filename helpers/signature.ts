interface SignatureParams {
  reference: string
  amount: number
}

export async function generateSignature({ reference, amount }: SignatureParams): Promise<string> {
  try {
    const response = await fetch("/api/wompi/signature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reference, amount }),
    })

    if (!response.ok) {
      throw new Error("Failed to generate signature")
    }

    const { signature } = await response.json()
    return signature
  } catch (error) {
    console.error("Error generating signature:", error)
    throw new Error("Failed to generate payment signature")
  }
}
