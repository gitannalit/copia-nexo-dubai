import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hotel, Building, Ship, Users, Baseline as ChartLine, FileCheck } from "lucide-react"

export function IncludesSection() {
  const includes = [
    {
      icon: Hotel,
      title: "Alojamiento 5 Estrellas",
      description: "Hotel de lujo durante toda la experiencia.",
    },
    {
      icon: ChartLine,
      title: "Sesiones de Fiscalidad",
      description: "Con ejemplos reales de empresarios hispanohablantes.",
    },
    {
      icon: Building,
      title: "Visitas a Promotoras",
      description: "Proyectos inmobiliarios con ofertas reales sobre la mesa.",
    },
    {
      icon: Ship,
      title: "Ruta en Yate de Lujo",
      description: "Por las islas de Dubái para vivir de cerca el nuevo mapa económico.",
    },
    {
      icon: Users,
      title: "Cena de Gala",
      description: "Con vistas al skyline y networking de alto nivel.",
    },
    {
      icon: FileCheck,
      title: "Consultorías 1:1",
      description: "Plan de vida e inversión + Estructura de empresa (valor +2.000€).",
    },
  ]

  return (
    <section className="border-b border-border px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            ¿Qué Incluye Esta Experiencia Exclusiva?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Todo está diseñado para que en cinco días veas, entiendas y actúes con criterio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item, index) => (
            <Card
              key={index}
              className="border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="h-14 w-full border-2 border-primary bg-transparent px-8 text-base font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto md:h-16 md:px-10 md:text-lg"
          >
            Quiero Ver Si Este Evento Es Para Mí
          </Button>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm text-muted-foreground">
            Déjanos tus datos y te llamamos para revisar tu caso sin compromiso.
          </p>
        </div>
      </div>
    </section>
  )
}
