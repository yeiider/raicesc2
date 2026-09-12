"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LimitedOffers } from "@/components/limited-offers"
import { Videovigilancia } from "@/components/videovigilancia"
import { SecurityPlans } from "@/components/security-plans"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AppDownloadButton } from "@/components/app-download-button"

export default function InternetPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a1024]">
      <Header />
      <Videovigilancia />
      <SecurityPlans />
      <LimitedOffers />
      <Footer />
      <WhatsAppButton />
      <AppDownloadButton />
    </main>
  )
}
