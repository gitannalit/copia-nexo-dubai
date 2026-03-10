"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react"
import { FormModal } from "@/components/form-modal"

export function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CEO de Software Company",
      location: "España → Dubái",
      image: "/professional-businessman-spain.jpg",
      story:
        "Vine a Nexo Dubái pensando que Dubái no era para mí. Después de 5 días entendí cómo estructurar mi empresa para pagar 0% en impuestos legalmente. Pasé de pagar 47% en España a tener una estructura 100% legal que me ahorra más de 80.000€ al año.",
      results: [
        { label: "Ahorro fiscal anual", value: "+80.000€" },
        { label: "Impuestos antes", value: "25%" },
        { label: "Impuestos ahora", value: "0-9%" },
      ],
      verified: true,
      rating: 5,
    },
    {
      name: "María García",
      role: "Inversora Inmobiliaria",
      location: "México → Dubái",
      image: "/professional-businesswoman-mexico.jpg",
      story:
        "Invertí en dos propiedades después del evento. La consultoría personalizada me ahorró meses de investigación y errores costosos. Actualmente genero 12% de rentabilidad anual y tengo mi empresa operativa en Dubái.",
      results: [
        { label: "Rentabilidad anual", value: "10%" },
        { label: "Propiedades adquiridas", value: "2" },
        { label: "ROI del evento", value: "5x" },
      ],
      verified: true,
      rating: 5,
    },
    {
      name: "Javier Ruiz",
      role: "Emprendedor Digital",
      location: "Argentina → Dubái",
      image: "/professional-businessman-argentina.jpg",
      story:
        "El networking del evento me conectó con inversores que terminaron financiando mi próximo proyecto. Más allá de la fiscalidad, Nexo Dubái me abrió puertas que desde Argentina eran imposibles de abrir.",
      results: [
        { label: "Capital levantado", value: "250k€" },
        { label: "Contactos clave", value: "+15" },
        { label: "Deals cerrados", value: "3" },
      ],
      verified: true,
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextTestimonial()
    }
    if (isRightSwipe) {
      prevTestimonial()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="border-b border-border px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Historias De Éxito Reales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Más de 50 empresarios hispanohablantes ya han transformado su patrimonio con Nexo Dubái
          </p>
        </div>

        <div className="relative mt-10">
          <Card
            ref={cardRef}
            className="mx-auto max-w-4xl border-border bg-card p-8 md:p-12 touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              {/* Avatar & Rating */}
              <div className="flex flex-col items-center gap-4 md:items-start">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Verification Badge */}
                {testimonials[activeIndex].verified && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                    Verificado - Cliente Real de Nexo Dubái
                  </div>
                )}

                {/* Story */}
                <blockquote className="text-lg leading-relaxed text-foreground">
                  "{testimonials[activeIndex].story}"
                </blockquote>

                {/* Results Grid */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {testimonials[activeIndex].results.map((result, idx) => (
                    <div key={idx} className="rounded-lg bg-background p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{result.value}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                  <div className="mt-1 text-sm text-primary">{testimonials[activeIndex].location}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent hidden md:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-transparent hidden md:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rating Summary */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-lg font-semibold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">(basado en +50 experiencias reales)</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button size="lg" className="h-14 px-8 text-lg font-semibold" onClick={() => setIsFormOpen(true)}>
            Quiero Mi Historia de Éxito
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Plazas limitadas. Aplicamos un proceso de selección.</p>
        </div>
      </div>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
