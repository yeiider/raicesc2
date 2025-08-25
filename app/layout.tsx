import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingTrialButton } from "@/components/floating-trial-button"

// Properly configure Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

// Properly configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Global Raíces S.A.S - Conectividad sin Límites",
  description: "Servicios de internet, radio, televisión y videovigilancia en el suroccidente colombiano, conectando más de 13,000 hogares con tecnología de punta."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <script src="https://checkout.wompi.co/widget.js" />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-body`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
            { /*<FloatingTrialButton />*/ }
        </ThemeProvider>
      </body>
    </html>
  )
}