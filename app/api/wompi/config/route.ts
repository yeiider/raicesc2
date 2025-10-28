import { NextResponse } from "next/server"

export async function GET() {
  try {
    const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY

    if (!publicKey) {
      return NextResponse.json({ error: "Wompi configuration not found" }, { status: 500 })
    }

    return NextResponse.json({ publicKey })
  } catch (error) {
    console.error("Error getting Wompi config:", error)
    return NextResponse.json({ error: "Failed to get Wompi configuration" }, { status: 500 })
  }
}
