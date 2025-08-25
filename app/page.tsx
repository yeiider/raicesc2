import { Header } from "@/components/header"
import { Carousel } from "@/components/carousel"
import { Plans } from "@/components/plans"
import { ConnectivityBenefits } from "@/components/connectivity-benefits"
import { FaqSection } from "@/components/faq-section"
import { SupportSection } from "@/components/support-section"
import { Testimonials } from "@/components/testimonials"
import { Locations } from "@/components/locations"
import { Footer } from "@/components/footer"
import { PromoPopup } from "@/components/promo-popup"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Carousel />
      <Plans />
      <ConnectivityBenefits />
      <FaqSection />
      <SupportSection />
      <Testimonials />
      <Locations />
      <Footer />

        {/* <PromoPopup /> */}
    </main>
  )
}
