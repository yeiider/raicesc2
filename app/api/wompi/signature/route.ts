import { type NextRequest, NextResponse } from "next/server"
import SHA256 from "crypto-js/sha256"

export async function POST(request: NextRequest) {
  try {
    const { reference, amount } = await request.json()

    if (!reference || !amount) {
      return NextResponse.json({ error: "Reference and amount are required" }, { status: 400 })
    }

    const integrityKey = process.env.PUBLIC_WOMPI_INTEGRITY
    if (!integrityKey) {
      return NextResponse.json({ error: "Wompi integrity key not configured" }, { status: 500 })
    }

    const stringToSign = `${reference}${amount}COP${integrityKey}`
    const signature = SHA256(stringToSign).toString()

    return NextResponse.json({ signature })
  } catch (error) {
    console.error("Error generating Wompi signature:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
