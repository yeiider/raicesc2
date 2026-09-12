"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LimitedOffers } from "@/components/limited-offers"
import { Videovigilancia } from "@/components/videovigilancia"
import { SecurityPlans } from "@/components/security-plans"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function InternetPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Videovigilancia />
      <SecurityPlans />
      <LimitedOffers />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
