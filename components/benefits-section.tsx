"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, Building2, TrendingUp, Shield, Users2, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { FormModal } from "@/components/form-modal"

export function BenefitsSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const benefits = [
    {
      icon: Target,
      title: "Un Plan Personalizado de Vida e Inversión",
      subtitle: "Sesión 1:1 Solo Contigo",
      description:
        "No vas a salir con más dudas. Vas a salir con un mapa claro de qué hacer con tu dinero y tu empresa los próximos años.",
      points: [
        "Un plan de inversión y de vida a 3–5 años adaptado a tus ingresos, edad y objetivos.",
        "Cómo repartir tu patrimonio entre tu país y Dubái para crecer más y asumir menos riesgo.",
        "Qué tipos de activos tienen más sentido para ti (real estate, empresa, cash flow, reserva de seguridad).",
        "Qué pasos concretos dar en los próximos 30, 90 y 180 días.",
      ],
      note: "Es la diferencia entre probar cosas y tomar decisiones con estrategia.",
    },
    {
      icon: Building2,
      title: "Consultoría Profesional Para Crear Tu Empresa en Dubái",
      subtitle: "Valor de Mercado +2.000€",
      description:
        "Si quieres tener empresa y cuenta en Dubái, aquí no te damos teoría: Te sentamos con expertos y diseñamos la estructura óptima para ti.",
      points: [
        "Saber si te conviene Free Zone, Mainland u otra estructura.",
        "El paso a paso para tener tu empresa operativa y tu cuenta abierta en unos 15 días.",
        "Un análisis realista de costes, plazos y requisitos según tu caso.",
        "Cómo facturar y operar globalmente desde Dubái de forma legal y eficiente.",
        "Cómo usar esa estructura para pagar menos impuestos sin jugarte el cuello con Hacienda.",
      ],
      note: "El valor de mercado de esta consultoría supera con creces la inversión del evento. Aquí va incluida dentro de la experiencia.",
    },
    {
      icon: TrendingUp,
      title: "Acceso Directo a Oportunidades Reales de Inversión",
      subtitle: "No Teoría, Operaciones Reales",
      description:
        "Te mostramos dónde se está invirtiendo de verdad en Dubái y cómo están obteniendo rentabilidades del 8–12% según la zona y el tipo de proyecto.",
      points: [
        "Visitas a promotoras y proyectos reales, no catálogos digitales.",
        "Entender en qué zonas hay oportunidades y en cuáles no deberías entrar aunque veas anuncios muy bonitos.",
        "Aprender a invertir desde tu país sin necesidad de ser residente.",
        'Saber qué errores cometen los que "vienen a probar suerte" y cómo evitarlos (errores típicos de 20.000–40.000€).',
      ],
      note: "Te vamos a enseñar dónde están las oportunidades y dónde están las trampas.",
    },
    {
      icon: Shield,
      title: "Estrategia Fiscal Internacional Para Pagar Menos Impuestos Legalmente",
      subtitle: "Sin Hacer Locuras",
      description:
        "Si estás cansado de sentir que trabajas para Hacienda, aquí vas a conseguir un marco claro para pagar menos sin hacer locuras.",
      points: [
        "Entenderás cómo estructuran su fiscalidad otros empresarios españoles y latinoamericanos que ya operan en Dubái.",
        "Verás qué impuestos se pagan realmente allí y cómo se protege el patrimonio.",
        "Sabrás qué puedes hacer y qué no debes hacer con tu empresa actual.",
        "Tendrás un plan real para optimizar impuestos y proteger lo que es tuyo.",
      ],
    },
    {
      icon: Users2,
      title: "Networking Que Cambia Negocios (Y A Veces Vidas)",
      subtitle: "Cinco Días Rodeado de Lo Mejor",
      description:
        "Durante cinco días vas a estar rodeado de empresarios que ya han dado el paso, inversores y players clave del ecosistema de Dubái, y expertos en fiscalidad, inversión y empresa.",
      points: [
        "Contactos que no se compran con anuncios.",
        "Acceso a círculos donde el dinero se mueve con estrategia, no con improvisación.",
        "Posibles socios, deals, colaboraciones y nuevas vías de negocio.",
      ],
      note: "Un solo contacto correcto puede hacer que este viaje se pague solo muchas veces.",
    },
    {
      icon: CheckCircle2,
      title: "Claridad Total Sobre Dubái: ¿Es Para Ti o No?",
      subtitle: "Decide Con Datos",
      description: "No queremos que vengas por moda. Queremos que vengas para decidir con datos.",
      points: [
        "Vas a entender si Dubái encaja con tu situación y tus objetivos.",
        "Vas a ver con tus propios ojos cómo se vive, se invierte y se hace empresa allí.",
        "Saldrás con la tranquilidad de haber tomado una decisión informada, tanto si decides entrar como si decides esperar.",
      ],
      note: 'El objetivo no es que digas "sí" a Dubái; El objetivo es que dejes de vivir en el "no lo sé".',
    },
  ]

  return (
    <>
      <section className="border-b border-border px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Lo Que Vas a Conseguir En Dubái
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Este no es un viaje de lujo.{" "}
              <span className="font-semibold text-amber-400">
                Es un antes y un después en tu forma de ganar, proteger y multiplicar dinero.
              </span>
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border bg-card p-6 transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-400/10">
                      <benefit.icon className="h-8 w-8 text-amber-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground md:text-3xl">{benefit.title}</h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
                        {benefit.subtitle}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{benefit.description}</p>

                    <ul className="mt-6 space-y-3">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                          <span className="text-base text-foreground/90">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {benefit.note && (
                      <div className="mt-6 rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
                        <p className="text-base font-medium italic text-foreground">{benefit.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="h-14 w-full bg-amber-400 px-8 text-base font-bold uppercase tracking-wide text-black shadow-lg shadow-amber-400/20 transition-all hover:scale-105 hover:bg-amber-500 sm:w-auto md:h-16 md:px-10 md:text-lg"
            >
              Quiero Aplicar Para Una Plaza
            </Button>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Las plazas se están llenando rápido. Asegura tu lugar ahora.
            </p>
          </div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
