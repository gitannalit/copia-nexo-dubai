import { CheckCircle2 } from "lucide-react"

export function WhyDubaiSection() {
  const reasons = [
    "Impuesto 0% al patrimonio y a las personas físicas en determinados casos.",
    "Mercado inmobiliario altamente protegido y en expansión.",
    "Centro mundial de empresarios y capital privado.",
    "Alta seguridad jurídica y personal.",
    "Posibilidad de abrir empresa y cuenta en 15 días.",
    "Entorno que premia la iniciativa y la toma de decisiones rápidas.",
  ]

  return (
    <section className="border-b border-border px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            ¿Por Qué Hemos Elegido Dubái?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Dubái no es solo lujo.{" "}
            <span className="font-semibold text-primary">
              Es uno de los lugares donde las reglas del juego favorecen al que se prepara.
            </span>
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
              <p className="text-base text-foreground">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            No se trata solo de mudarte.{" "}
            <span className="font-semibold text-foreground">
              Se trata de tener una puerta abierta a uno de los ecosistemas más potentes del mundo.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
