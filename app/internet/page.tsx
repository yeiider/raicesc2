"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InternetHero } from "@/components/internet-hero"
import { InternetPlans } from "@/components/internet-plans"
import { FiberExplanation } from "@/components/fiber-explanation"
import { GamerPlan } from "@/components/gamer-plan"
import { CompactCoverage } from "@/components/compact-coverage"
import { Videovigilancia } from "@/components/videovigilancia"
import { SecurityPlans } from "@/components/security-plans"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function InternetPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <InternetHero />
      <FiberExplanation />
      <InternetPlans />
      <Videovigilancia />
      <SecurityPlans />
      <GamerPlan />
      <CompactCoverage />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
