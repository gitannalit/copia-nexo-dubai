"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FormModal } from "@/components/form-modal"

export function FinalCtaSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Dubái No Espera
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
            Mientras otros siguen mirando desde fuera, tú puedes estar dentro del ecosistema, con información real,
            contactos reales y decisiones que cambian tu patrimonio.
          </p>

          <div className="mt-8 mb-12 md:mb-16">
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="h-auto min-h-[4rem] md:min-h-[5rem] w-full bg-primary px-6 md:px-12 py-4 text-base md:text-xl font-bold uppercase tracking-wide text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-3xl hover:shadow-primary/40 sm:w-auto whitespace-normal leading-tight"
            >
              Quiero Aplicar Para Una Plaza en Nexo Dubái
            </Button>
          </div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
