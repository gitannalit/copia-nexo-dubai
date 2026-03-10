import { Card } from "@/components/ui/card"
import { Target, TrendingUp, Building2, Lightbulb, Users } from "lucide-react"

export function ResultsSection() {
  const results = [
    {
      icon: Target,
      text: "Saber exactamente qué hacer para pagar menos impuestos sin jugarte el cuello.",
    },
    {
      icon: TrendingUp,
      text: "Tener un plan de inversión y de vida que tenga sentido con tu realidad.",
    },
    {
      icon: Building2,
      text: "Entender si tiene sentido crear empresa en Dubái ahora, más adelante o nunca... y por qué.",
    },
    {
      icon: Lightbulb,
      text: "Conocer oportunidades reales en las que podrías entrar si decides hacerlo.",
    },
    {
      icon: Users,
      text: "Volver con contactos de alto nivel que abren puertas que antes no existían.",
    },
  ]

  return (
    <section className="border-b border-border px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            ¿Qué Puedes Esperar Tras Volver De Dubái?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            No podemos prometerte resultados mágicos. Lo que sí vas a conseguir es:
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {results.map((result, index) => (
            <Card
              key={index}
              className="flex items-start gap-6 border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <result.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <p className="pt-3 text-lg text-foreground">{result.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-xl font-semibold text-foreground md:text-2xl">
            El verdadero resultado es dejar de decidir desde el miedo y empezar a decidir desde la información.
          </p>
        </div>
      </div>
    </section>
  )
}
