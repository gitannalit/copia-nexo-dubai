"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FormModal } from "@/components/form-modal"
import Image from "next/image"

export function WhatYouGetSection() {
  const [activeTab, setActiveTab] = useState<"conseguiras" | "incluye">("conseguiras")
  const [isFormOpen, setIsFormOpen] = useState(false)

  const benefits = [
    {
      image: "/luxury-dubai-real-estate-skyline-building.jpg",
      badge: "EXCLUSIVO",
      title: "Deals y Oportunidades Inmobiliarias",
      highlight: "8-12% ROI",
      subtitle: "Acceso directo a propiedades verificadas con ROI del 8-12% anual que nadie más ve",
    },
    {
      image: "/dubai-tax-optimization-financial-freedom.jpg",
      badge: "EXCLUSIVO",
      title: "Ahorro Fiscal Hasta 40-50%",
      highlight: "40-50% AHORRO",
      subtitle: "Estrategias legales probadas para reducir tu carga fiscal y proteger tu patrimonio.",
    },
    {
      image: "/elite-business-networking-luxury-dubai.jpg",
      badge: "EXCLUSIVO",
      title: "Networking de Alto Impacto",
      highlight: "x2-5 CRECIMIENTO",
      subtitle: "Conecta con inversores gestionando 6-9 cifras que multiplican patrimonios en 3-5 años.",
    },
  ]

  const eventIncludes = [
    {
      image: "/luxury-5-star-hotel-dubai.jpg",
      imageQuery: "luxury 5 star hotel in Dubai skyline",
      title: "Alojamiento en hotel de lujo todo incluido",
    },
    {
      image: "/dubai-real-estate-developer-building.jpg",
      imageQuery: "modern luxury real estate development Dubai",
      title: "Visita a las promotoras mas importante de Dubai con una oferta exclusiva",
    },
    {
      image: "/luxury-yacht-dubai-marina.jpg",
      imageQuery: "luxury yacht sailing Dubai marina",
      title: "Ruta en yate de lujo con networking de alto valor por la Palmera y Marina de Dubai",
    },
    {
      image: "/elegant-gala-dinner-dubai.jpg",
      imageQuery: "elegant gala dinner event Dubai",
      title: "Cena de Gala en un lugar exclusivo",
    },
    {
      image: "/dubai-business-creation-meeting.jpg",
      imageQuery: "business meeting Dubai office skyline",
      title: "Estrategias de creación de empresas y optimización fiscal en Emiratos",
    },
    {
      image: "/burj-khalifa-dubai-landmarks.jpg",
      imageQuery: "Burj Khalifa and Dubai iconic landmarks",
      title: "Actividades y visitas a los lugares más emblemáticos",
    },
  ]

  return (
    <section className="border-b border-border px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Todo Lo Que Vas a Conseguir En Dubái
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#D6B56C] md:mt-5 md:text-xl">
            5 días intensivos, estrategia real y acceso a oportunidades exclusivas
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-3 md:mt-10 md:gap-4">
          <button
            onClick={() => setActiveTab("conseguiras")}
            className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all md:px-10 md:py-4 md:text-base border-2 ${
              activeTab === "conseguiras"
                ? "border-[#D6B56C] bg-gradient-to-r from-[#111111] to-[#1a1a1a] text-[#D6B56C] shadow-xl shadow-[#D6B56C]/20"
                : "border-[#333333] bg-[#0A0A0A]/50 text-muted-foreground/60 hover:border-[#D6B56C]/40 hover:text-foreground/80"
            }`}
          >
            Lo Que Conseguirás
          </button>
          <button
            onClick={() => setActiveTab("incluye")}
            className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all md:px-10 md:py-4 md:text-base border-2 ${
              activeTab === "incluye"
                ? "border-[#D6B56C] bg-gradient-to-r from-[#111111] to-[#1a1a1a] text-[#D6B56C] shadow-xl shadow-[#D6B56C]/20"
                : "border-[#333333] bg-[#0A0A0A]/50 text-muted-foreground/60 hover:border-[#D6B56C]/40 hover:text-foreground/80"
            }`}
          >
            Qué Incluye El Evento
          </button>
        </div>

        {/* Content - Lo Que Conseguirás */}
        {activeTab === "conseguiras" && (
          <>
            <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 border-[#D6B56C]/30 bg-gradient-to-br from-[#0A0A0A] to-[#111111] transition-all hover:border-[#D6B56C] hover:shadow-2xl hover:shadow-[#D6B56C]/30"
                >
                  <div className="relative">
                    {/* Image Section - No blur, sharp and clear */}
                    <div className="relative h-48 w-full overflow-hidden md:h-56">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]/80" />

                      {/* Badge */}
                      <div className="absolute right-3 top-3 rounded-md bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {benefit.badge}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">{benefit.title}</h3>

                      <div className="mt-3 text-4xl font-black tracking-tight text-[#D6B56C] md:text-5xl">
                        {benefit.highlight}
                      </div>

                      {/* Subtitle */}
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">{benefit.subtitle}</p>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#D6B56C]/20 blur-3xl transition-all group-hover:bg-[#D6B56C]/40" />
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Content - Qué Incluye El Evento */}
        {activeTab === "incluye" && (
          <div className="mt-10 md:mt-12">
            {/* Grid 2x3 - 6 bloques */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {eventIncludes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-xl border border-[#D6B56C]/30 bg-gradient-to-br from-[#0B0B0B] to-[#111111] p-5 transition-all hover:border-[#D6B56C] hover:shadow-lg hover:shadow-[#D6B56C]/20 md:p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#D6B56C] md:h-16 md:w-16">
                        <Image
                          src={
                            item.image ||
                            `/placeholder.svg?height=64&width=64&query=${encodeURIComponent(item.imageQuery) || "/placeholder.svg"}`
                          }
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Texto con negrita reducida - solo algunas palabras clave */}
                    <div className="flex-1">
                      <h3 className="text-pretty text-base leading-snug text-white md:text-lg lg:text-xl">
                        {index === 0 && (
                          <>
                            Alojamiento en <span className="font-bold">hotel de lujo</span> todo incluido
                          </>
                        )}
                        {index === 1 && (
                          <>
                            Visita a las <span className="font-bold">promotoras más importantes</span> de Dubai
                            con una oferta exclusiva
                          </>
                        )}
                        {index === 2 && (
                          <>
                            Ruta en <span className="font-bold">yate de lujo</span> con networking de alto valor por la 
                            Palmera y Marina de dubai
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span className="font-bold">Cena de gala</span> en un lugar exclusivo
                          </>
                        )}
                        {index === 4 && (
                          <>
                            Estrategias de <span className="font-bold">creación de empresas</span> y{" "}
                            <span className="font-bold">optimización fiscal</span> en Emiratos
                          </>
                        )}
                        {index === 5 && (
                          <>
                            Actividades y visitas a los <span className="font-bold">lugares más emblemáticos</span>
                          </>
                        )}
                      </h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-10 text-center md:mt-12">
          <Button
            size="lg"
            className="h-14 w-full bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] hover:from-[#B79552] hover:via-[#D6B56C] hover:to-[#B79552] px-8 text-base font-bold uppercase tracking-wide text-[#0A0A0A] shadow-2xl shadow-[#D6B56C]/40 transition-all hover:scale-105 hover:shadow-[#D6B56C]/60 border-2 border-[#D6B56C] hover:border-[#B79552] sm:w-auto md:h-16 md:px-14 md:text-lg"
            onClick={() => setIsFormOpen(true)}
          >
            Solicitar Plaza Ahora
          </Button>
          <p className="mx-auto mt-4 max-w-lg text-balance text-sm text-muted-foreground md:text-base">
            Una experiencia valorada en <span className="font-semibold text-[#D6B56C]">más de 10.000€</span>. Las plazas
            son limitadas y se están llenando rápido.
          </p>
        </div>
      </div>

      {/* Form Modal */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
