"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FormModal } from "@/components/form-modal"

export function OfferSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const admissionSteps = [
    {
      number: "01",
      title: "Solicitud Inicial",
      description: "Completa el formulario de pre-calificación con tu perfil de inversión y objetivos patrimoniales.",
    },
    {
      number: "02",
      title: "Evaluación de Perfil",
      description:
        "Nuestro equipo analiza tu situación financiera para determinar si el evento puede generar valor real en tu caso.",
    },
    {
      number: "03",
      title: "Llamada de Selección",
      description:
        "Entrevista privada donde evaluamos tu compromiso, capacidad de inversión y alineación con el grupo.",
    },
    {
      number: "04",
      title: "Confirmación y Acceso",
      description: "Si eres seleccionado, recibirás acceso inmediato al grupo VIP y toda la información del evento.",
    },
  ]

  return (
    <>
      <section className="relative border-b border-[#B79552]/30 bg-[#0A0A0A] px-4 py-8 md:py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D6B56C]/5 via-transparent to-transparent opacity-30" />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#B79552]/50 bg-[#B79552]/10 px-4 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#D6B56C] shadow-lg shadow-[#D6B56C]/50" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B56C]">
                Solo 20 Plazas Disponibles
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] bg-clip-text text-balance text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
              Proceso de Admisión Exclusivo
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-balance text-base text-gray-400 md:text-lg">
              Este no es un evento para turistas. Es una red privada de empresarios e inversores de alto nivel.
            </p>
          </div>

          <Card className="mt-6 border-[#B79552]/40 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-5 shadow-xl shadow-[#D6B56C]/10 md:p-6">
            <p className="text-base leading-relaxed text-gray-100 md:text-lg">
              Para poder trabajar tu caso de forma individual, el evento tiene plazas muy limitadas.{" "}
              <span className="font-bold text-[#D6B56C]">No aceptamos a todos.</span> Este es un círculo cerrado de
              inversores que están moviendo patrimonio real. Queremos personas{" "}
              <span className="font-semibold text-[#D6B56C]">comprometidas con la acción</span>, con capacidad de
              inversión y decisión. No es para curiosos ni para quienes solo buscan información gratuita.
            </p>

            <div className="mt-5 space-y-4 border-t border-[#B79552]/30 pt-5">
              {admissionSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative flex gap-3 rounded-lg border border-[#B79552]/20 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-4 transition-all hover:border-[#B79552]/40 hover:shadow-lg hover:shadow-[#D6B56C]/5 md:gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D6B56C] to-[#B79552] text-sm font-bold text-black shadow-lg shadow-[#D6B56C]/20 md:h-12 md:w-12 md:text-base">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-lg font-bold text-[#D6B56C] md:text-xl">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-300 md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-[#145661]/40 bg-[#145661]/10 p-4">
              <p className="text-center text-sm font-medium text-gray-300 md:text-base">
                <span className="font-bold text-[#D6B56C]">Importante:</span> Rechazamos aproximadamente el 60% de las
                solicitudes. Solo aceptamos perfiles que puedan aprovechar al máximo esta experiencia y aportar valor al
                grupo.
              </p>
            </div>
          </Card>

          <div className="mt-6 text-center">
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="h-auto w-full whitespace-normal bg-gradient-to-r from-[#D6B56C] to-[#B79552] px-6 py-4 text-base font-bold uppercase leading-tight tracking-wide text-black shadow-lg shadow-[#D6B56C]/30 transition-all hover:scale-105 hover:from-[#B79552] hover:to-[#8A6A30] hover:shadow-xl hover:shadow-[#D6B56C]/50 sm:w-auto sm:whitespace-nowrap md:px-10 md:text-lg"
            >
              Solicitar Mi Plaza Ahora
            </Button>
            <p className="mx-auto mt-3 max-w-xl text-balance text-sm text-gray-400">
              Completa el formulario de pre-calificación y te contactaremos en máximo 48 horas para evaluar si cumples
              con el perfil. Si eres seleccionado, coordinaremos una llamada privada para explicarte todos los detalles.
            </p>
          </div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
