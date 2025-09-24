"use client"

import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckoutStepperProps {
    currentStep: number
}

export default function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
    const steps = [
        { id: 1, name: "Buscar" },
        { id: 2, name: "Detalles" },
        { id: 3, name: "Pago" },
        { id: 4, name: "Resumen" },
    ]

    return (
        <div className="bg-[#f0f4ff] px-6 py-4">
            <div className="flex justify-between">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center relative">
                        {/* Connector line */}
                        {index < steps.length - 1 && (
                            <div
                                className={cn(
                                    "absolute top-4 left-[50%] w-full h-[2px]",
                                    currentStep > step.id ? "bg-[#2d4594]" : "bg-gray-300",
                                )}
                            />
                        )}

                        {/* Step circle */}
                        <div
                            className={cn(
                                "z-10 flex items-center justify-center w-8 h-8 rounded-full border-2",
                                currentStep === step.id
                                    ? "border-[#2d4594] bg-white text-[#2d4594]"
                                    : currentStep > step.id
                                        ? "border-[#2d4594] bg-[#2d4594] text-white"
                                        : "border-gray-300 bg-white text-gray-400",
                            )}
                        >
                            {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : <span>{step.id}</span>}
                        </div>

                        {/* Step name */}
                        <span
                            className={cn("mt-2 text-xs font-medium", currentStep >= step.id ? "text-[#2d4594]" : "text-gray-500")}
                        >
              {step.name}
            </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
