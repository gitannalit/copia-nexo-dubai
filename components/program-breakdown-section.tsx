"use client"

import { useState } from "react"
import Image from "next/image"
import { FormModal } from "./form-modal"
import { Building2, Target, Award, Sparkles, Rocket, Shield, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProgramBreakdownSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const days = [
    {
      day: "Día 1",
      title: "Fundamentos y Mentalidad del Inversor Global",
      icon: Target,
      image: "/dubai-skyline-business-district.jpg",
      activities: [
        "Bienvenida exclusiva y networking inicial",
        "Mindset del inversor internacional: De autoempleado a dueño de patrimonio",
        "Cómo estructurar tu plan de inversión a 3-5 años",
        "Cena de networking con el grupo",
      ],
    },
    {
      day: "Día 2",
      title: "Optimización Fiscal y Estructura Internacional",
      icon: Shield,
      image: "/dubai-financial-center-building.jpg",
      activities: [
        "Sesión con expertos fiscales: Cómo pagar menos impuestos legalmente",
        "Residencia fiscal vs empresa: Qué te conviene según tu situación",
        "Free Zone vs Mainland: Ventajas y desventajas reales",
        "Sesión Q&A personalizada sobre tu caso",
      ],
    },
    {
      day: "Día 3",
      title: "Inversión Inmobiliaria en Dubái: Teoría y Práctica",
      icon: Building2,
      image: "/dubai-real-estate-palm-jumeirah.jpg",
      activities: [
        "Visita a promotoras VIP con ofertas exclusivas",
        "Análisis de zonas de alto potencial: Dónde invertir y dónde no",
        "Visita a proyectos reales en desarrollo",
        "Ruta en yate por la Palm Jumeirah y Dubai Marina (networking de lujo)",
      ],
    },
    {
      day: "Día 4",
      title: "Estrategia Financiera y Apalancamiento",
      icon: Award,
      image: "/dubai-business-meeting-skyline.jpg",
      activities: [
        "Financiación inmobiliaria: Cómo usar el dinero de otros de forma inteligente",
        "Estrategias de diversificación patrimonial",
        "Estructuras de inversión avanzadas",
        "Sesiones 1:1 con consultores especializados",
      ],
    },
    {
      day: "Día 5",
      title: "Futuro de la Inversión + Cena de Gala",
      icon: Rocket,
      image: "/dubai-burj-khalifa-night-skyline.jpg",
      activities: [
        "Tendencias futuras: Tokenización, flipping inmobiliario y nuevos modelos",
        "Tu plan de acción personalizado para los próximos 90 días",
        "Visita al Burj Khalifa y experiencias exclusivas",
        "Cena de Gala de cierre: networking final y próximos pasos",
      ],
    },
  ]

  return (
    <>
      <section className="border-b border-border px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              5 Días Que Cambiarán
              <br />
              <span className="bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] bg-clip-text text-transparent">
                Tu Visión Del Dinero
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              No es un viaje turístico. Es una inmersión total en el ecosistema empresarial y de inversión más avanzado
              del mundo. Cada día está diseñado para que salgas con claridad, contactos y estrategia real.
            </p>
          </div>

          <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
            {days.map((dayInfo, index) => {
              const Icon = dayInfo.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-[#D6B56C]/20 bg-gradient-to-br from-card to-card/50 transition-all hover:border-[#D6B56C]/60 hover:shadow-2xl hover:shadow-[#D6B56C]/10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex flex-col md:flex`}
                >
                  <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-1/3">
                    <Image
                      src={dayInfo.image || "/placeholder.svg"}
                      alt={dayInfo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent md:bg-gradient-to-r" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 md:bottom-6 md:left-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D6B56C] to-[#B79552] shadow-xl shadow-[#D6B56C]/30">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      <div className="rounded-lg bg-black/60 px-4 py-2 backdrop-blur-sm">
                        <span className="text-2xl font-bold text-[#D6B56C]">{dayInfo.day}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-6 md:p-10">
                    <h3 className="mb-6 text-2xl font-bold leading-tight text-foreground md:text-3xl">
                      {dayInfo.title}
                    </h3>

                    <ul className="space-y-4">
                      {dayInfo.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#D6B56C]/10 ring-2 ring-[#D6B56C]/30">
                            <ChevronRight className="h-4 w-4 text-[#D6B56C]" />
                          </div>
                          <span className="text-base leading-relaxed text-foreground/90 md:text-lg">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#D6B56C]/10 blur-3xl transition-all group-hover:bg-[#D6B56C]/20" />
                </div>
              )
            })}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[#D6B56C]/30 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-8 text-center md:mt-16 md:p-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D6B56C]/10 px-6 py-3">
                <Sparkles className="h-5 w-5 text-[#D6B56C]" />
                <span className="font-bold text-[#D6B56C]">TODO INCLUIDO</span>
              </div>

              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                5 Días Que Valen Más Que Un Año De Dudas
              </h3>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                No vas a salir con ideas vagas. Vas a salir con un plan claro, contactos reales y la certeza de que
                sabes exactamente qué hacer con tu dinero y tu empresa.
              </p>

              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="h-16 bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] px-10 text-lg font-bold uppercase tracking-wide text-black shadow-2xl shadow-[#D6B56C]/40 transition-all hover:scale-105 hover:from-[#B79552] hover:via-[#D6B56C] hover:to-[#B79552] hover:shadow-[#D6B56C]/60"
              >
                Quiero Mi Plaza Ahora
              </Button>

              <p className="mt-4 text-sm text-muted-foreground">Solo 20 plazas disponibles • Proceso de selección</p>
            </div>
          </div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
