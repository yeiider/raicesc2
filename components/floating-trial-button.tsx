"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Gift, X } from "lucide-react"
import { FreeTrialForm } from "@/components/free-trial-form"

export function FloatingTrialButton() {
  const [isFreeTrialFormOpen, setIsFreeTrialFormOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <>
      <div className="fixed top-32 right-4 z-40 animate-bounce">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10 transition-colors"
          >
            <X size={12} />
          </button>

          {/* Main floating button */}
          <Button
            onClick={() => setIsFreeTrialFormOpen(true)}
            className="bg-gradient-to-r from-raicesBlue to-blue-600 hover:from-blue-600 hover:to-raicesBlue text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            <Gift className="h-5 w-5 mr-2" />
            <span className="text-sm font-semibold">30 DÍAS GRATIS</span>
          </Button>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-raicesBlue to-blue-600 rounded-full blur-lg opacity-30 -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Free Trial Form Modal */}
      {isFreeTrialFormOpen && <FreeTrialForm onClose={() => setIsFreeTrialFormOpen(false)} />}
    </>
  )
}
