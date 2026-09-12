import { Header } from "@/components/header"
import { VideoBanner } from "@/components/video-banner"
import { Plans } from "@/components/plans"
import { ConnectivityBenefits } from "@/components/connectivity-benefits"
import { PlanHelper } from "@/components/plan-helper"
import { SupportSection } from "@/components/support-section"
import { Locations } from "@/components/locations"
import { Footer } from "@/components/footer"
import { AppDownloadButton } from "@/components/app-download-button"
import { PromoPopup } from "@/components/promo-popup"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#0a1024]">
      <Header />
      <VideoBanner />
      <Plans />
      <PlanHelper />
      <ConnectivityBenefits />
      <SupportSection />
      <Locations />
      <Footer />
      <AppDownloadButton />

        {/* <PromoPopup /> */}
    </main>
  )
}
