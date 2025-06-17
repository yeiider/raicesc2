import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { OfertasHero } from "@/components/ofertas-hero"
import { Locations } from "@/components/locations"
import { OfertasBenefits } from "@/components/ofertas-benefits"
import { OffersCarousel } from "@/components/offers-carousel"
import { CompactReferralProgram } from "@/components/compact-referral-program"

export default function OfertasPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <OfertasHero />
      <OffersCarousel />
      <OfertasBenefits />
      <CompactReferralProgram />
      <Locations />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
