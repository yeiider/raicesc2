import { Header } from "@/components/header"
import { VideoBanner } from "@/components/video-banner"
import { ServicesShowcase } from "@/components/services-showcase"
import { Plans } from "@/components/plans"
import { ConnectivityBenefits } from "@/components/connectivity-benefits"
import { PlanHelper } from "@/components/plan-helper"
import { SupportSection } from "@/components/support-section"
import { Locations } from "@/components/locations"
import { Footer } from "@/components/footer"
import { PromoPopup } from "@/components/promo-popup"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <VideoBanner />
      <ServicesShowcase />
      <Plans />
      <PlanHelper />
      <ConnectivityBenefits />
      <SupportSection />
      <Locations />
      <Footer />

        {/* <PromoPopup /> */}
    </main>
  )
}
