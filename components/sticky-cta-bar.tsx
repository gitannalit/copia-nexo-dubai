"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { FormModal } from "@/components/form-modal"

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0)

  const highlights = [
    "Hotel 5★ • Yate de lujo • Networking exclusivo",
    "Promotoras VIP • Descuentos hasta 50.000€",
    "Optimización fiscal 30-40% • Estructuras offshore",
    "Cena de gala • Producto ultra-exclusivo",
    "Visitas Burj Khalifa • Palm Jumeirah",
    "Inversores 6-7 cifras • Conexiones reales",
    "Traslados privados • Experiencia todo incluido",
    "Estrategia empresarial • Residencia Emirates",
    "Deals pre-lanzamiento • ROI verificado",
    "Consultoría personalizada • Plan 90 días",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlightIndex((prev) => (prev + 1) % highlights.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [highlights.length])

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-gradient-to-r from-black via-zinc-900 to-black border-t-2 border-primary/50 shadow-2xl backdrop-blur-sm h-[88px] sm:h-[96px] overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 w-full">
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="hidden sm:flex h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <h3 className="text-xs sm:text-base font-bold text-white leading-tight">
                    Nexo Dubái <span className="text-primary">•</span> 25 Enero - 2 Febrero 2025
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 transition-opacity duration-500 leading-relaxed line-clamp-1">
                    <span className="text-white font-semibold">Solo 7 plazas disponibles</span> •{" "}
                    <span key={currentHighlightIndex} className="inline-block animate-in fade-in duration-500">
                      {highlights[currentHighlightIndex]}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right side - CTA */}
              <Button
                onClick={() => setIsFormOpen(true)}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary/80 hover:to-primary/90 text-primary-foreground font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 border-2 border-primary/30 flex-shrink-0"
              >
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Reservar Mi Plaza Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
