"use server"

export async function getWompiConfig() {
  return {
    publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY || "",
  }
}
