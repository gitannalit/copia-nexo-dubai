"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle2, Clock, Shield, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { FormModal } from "@/components/form-modal"


export function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0)

  const subtitles = [
    <span key="1">
      <span className="text-white">Cinco días intensivos donde aprendes a </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        ganar más
      </span>
      <span className="text-white">, </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        pagar menos
      </span>
      <span className="text-white"> y moverte como un </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        empresario global
      </span>
      <span className="text-white">.</span>
    </span>,
    <span key="2">
      <span className="text-white">En cinco días sales con un </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        plan fiscal
      </span>
      <span className="text-white">, una </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        inversión inmobiliaria
      </span>
      <span className="text-white"> y una </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        red de contactos
      </span>
      <span className="text-white"> que te abren puertas.</span>
    </span>,
    <span key="3">
      <span className="text-white">Cinco días en Dubái que cambiarán tu manera de </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        invertir
      </span>
      <span className="text-white">, </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        tributar
      </span>
      <span className="text-white"> y </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        hacer negocios
      </span>
      <span className="text-white">.</span>
    </span>,
    <span key="4">
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        Oportunidades de inversión reales
      </span>
      <span className="text-white">, </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        ahorro fiscal
      </span>
      <span className="text-white"> y </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        estrategia de crecimiento
      </span>
      <span className="text-white"> en solo cinco días.</span>
    </span>,
    <span key="5">
      <span className="text-white">Cinco días de </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        conexión directa
      </span>
      <span className="text-white"> con quienes ya operan desde Dubái: </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        inversiones rentables
      </span>
      <span className="text-white">, </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        fiscalidad inteligente
      </span>
      <span className="text-white"> y </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        contactos de alto valor
      </span>
      <span className="text-white">.</span>
    </span>,
    <span key="6">
      <span className="text-white">NEXO Dubái te abre en 5 días las puertas del </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        ecosistema empresarial más activo del mundo
      </span>
      <span className="text-white">: </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        mentoría
      </span>
      <span className="text-white">, </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        inversión
      </span>
      <span className="text-white"> y </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        acción
      </span>
      <span className="text-white">.</span>
    </span>,
    <span key="7">
      <span className="text-white">Este evento te pone frente a </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        promotoras reales
      </span>
      <span className="text-white">, </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        fiscalistas top
      </span>
      <span className="text-white"> y </span>
      <span className="font-bold text-white" style={{ color: "#D6B56C" }}>
        empresarios que ya están dentro
      </span>
      <span className="text-white">. Es tu momento.</span>
    </span>,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [subtitles.length])

  return (
    <>
      <section className="relative border-b border-border px-4 py-2 sm:py-2 md:py-6 lg:py-8">
        {/* Scrolling banner at top */}
        <div className="mt-1 sm:mt-4 overflow-hidden border-y border-primary/20 bg-primary/5 py-2 sm:py-3">
          <div className="animate-scroll flex gap-4 sm:gap-8 whitespace-nowrap">
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="1">
              💎 MULTIPLICA TU PATRIMONIO
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="2">
              🚀 PAGA MENOS IMPUESTOS LEGALMENTE
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="3">
              🏗️ INVIERTE EN DUBÁI
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="4">
              🌍 CREA TU EMPRESA INTERNACIONAL
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="5">
              ⚡ NETWORKING EXCLUSIVO
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="6">
              🎯 PLAN PERSONALIZADO
            </span>
            {/* Duplicate for seamless loop */}
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="7">
              💎 MULTIPLICA TU PATRIMONIO
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="8">
              🚀 PAGA MENOS IMPUESTOS LEGALMENTE
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="9">
              🏗️ INVIERTE EN DUBÁI
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="10">
              🌍 CREA TU EMPRESA INTERNACIONAL
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="11">
              ⚡ NETWORKING EXCLUSIVO
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground" key="12">
              🎯 PLAN PERSONALIZADO
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              {/* Top badge */}
              <div className="mb-4 sm:mb-6 mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary shadow-lg shadow-primary/10">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Evento Validado Por +50 Empresarios Exitosos
              </div>

              <div className="mb-0 flex justify-start">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                  <span style={{ color: "#D6B56C" }}>NEXO</span>
                  <span className="text-foreground ml-2 sm:ml-3">DUBAI</span>
                </h2>
              </div>

              <div className="mb-0 mt-0">
                <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wide" style={{ color: "#B79552" }}>
                  DEL 25 DE FEBRERO AL 02 DE MARZO
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
                El evento más exclusivo para invertir y crecer desde{" "}
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ color: "#D6B56C" }}>
                    Dubái
                  </span>
                  <span
                    className="absolute -inset-1 -skew-y-1 blur-sm"
                    style={{ backgroundColor: "rgba(214, 181, 108, 0.2)" }}
                  ></span>
                </span>
              </h1>

              {/* Video Placeholder */}
              <div className="mt-6 lg:hidden">
                <div
                  className="group relative aspect-video overflow-hidden rounded-2xl bg-card shadow-2xl transition-all duration-300 hover:shadow-2xl"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#D6B56C",
                    boxShadow: "0 20px 50px rgba(214, 181, 108, 0.15)",
                  }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/1146699777?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Nexo dubai"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full"
                  ></iframe>
                </div>
              </div>

              {/* Subheadline */}
              <div className="mt-4 sm:mt-6">
                {/* Subtitle Carousel */}
                <div className="relative h-20 sm:h-16 md:h-14 overflow-hidden">
                  {subtitles.map((subtitle, index) => (
                    <div
                      key={subtitle.key}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSubtitleIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-pretty text-base sm:text-lg md:text-xl leading-relaxed">{subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Cards */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5">
                <Card className="border-primary/30 bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-center rounded-full">
                  <div className="text-sm sm:text-base font-bold text-primary">5 días</div>
                </Card>
                <Card className="border-primary/30 bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-center rounded-full">
                  <div className="text-sm sm:text-base font-bold text-primary">6 expertos</div>
                </Card>
                <Card className="border-primary/30 bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-center rounded-full">
                  <div className="text-sm sm:text-base font-bold text-primary">+50 asistentes</div>
                </Card>
              </div>

              {/* Primary CTA */}
              <div className="mt-6 sm:mt-8">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="group h-14 sm:h-16 w-full bg-primary px-6 sm:px-8 text-base sm:text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-primary/40"
                >
                  <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
                  Aplicar Para Dubái 2025
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-card/50 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-foreground">
                  <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                  <span className="hidden xs:inline">Plazas Limitadas</span>
                  <span className="xs:hidden">Limitado</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-card/50 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-foreground">
                  <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                  <span>Sin Riesgos</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-card/50 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-foreground">
                  <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                  <span>Certificado</span>
                </div>
              </div>
            </div>

            {/* Right Column - Desktop version remains unchanged */}
            <div className="hidden lg:flex flex-col justify-center lg:pl-8">
              {/* Video Placeholder */}
              <div
                className="group relative aspect-video overflow-hidden rounded-2xl bg-card shadow-2xl transition-all duration-300 hover:shadow-2xl"
                style={{
                  borderWidth: "2px",
                  borderColor: "#D6B56C",
                  boxShadow: "0 20px 50px rgba(214, 181, 108, 0.15)",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1146699777?badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Nexo dubai"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full"
                ></iframe>
              </div>

              {/* Social Proof */}
              <div className="mt-4 sm:mt-6 flex items-center justify-between rounded-xl border border-border bg-card/50 p-3 sm:p-4 gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-background overflow-hidden">
                      <img
                        src="/professional-businessman-headshot.png"
                        alt="Empresario"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-background overflow-hidden">
                      <img
                        src="/business-woman-executive-portrait.jpg"
                        alt="Empresaria"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-background overflow-hidden">
                      <img
                        src="/investor-entrepreneur-professional.jpg"
                        alt="Inversor"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-background overflow-hidden">
                      <img src="/ceo-business-leader-portrait.jpg" alt="CEO" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">+50 empresarios</p>
                    <p className="text-muted-foreground">ya aplicaron</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xs sm:text-sm">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">4.9/5 (27)</p>
                </div>
              </div>

              {/* Green checkmark badge */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3 sm:px-4 py-2 sm:py-3 shadow-lg shadow-primary/10">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Acceso de por vida al contenido exclusivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
