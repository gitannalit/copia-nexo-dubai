import { Card } from "@/components/ui/card"

export function AgendaSection() {
  const days = [
    {
      day: "Día 1",
      title: "Rompe Creencias, Piensa En Grande",
      description:
        "Bienvenida y mentalidad del inversor. Aprendes a dejar de pensar como autoempleado y empezar a decidir como dueño de patrimonio.",
    },
    {
      day: "Día 2",
      title: "Domina Las Finanzas Globales y La Fiscalidad Internacional",
      description:
        "Resolvemos el gran miedo: Hacienda y la fiscalidad. Ves cómo empresarios españoles y latinos están protegiendo su patrimonio y pagando menos de forma legal.",
    },
    {
      day: "Día 3",
      title: "El Dubái Real: Inversión Inmobiliaria con Visión Local",
      description:
        "Descubres zonas emergentes, tipos de proyectos, qué funciona y qué evitar. Entiendes por qué Dubái es uno de los mercados más dinámicos del mundo.",
    },
    {
      day: "Día 4",
      title: "Financiación y Estrategia: Jugar Como Los Grandes",
      description:
        "Ves cómo apalancarte sin poner tu futuro en riesgo. Estructuras distintas formas de financiar tus inversiones y tu expansión.",
    },
    {
      day: "Día 5",
      title: "El Futuro De La Inversión + Cena De Gala",
      description:
        "Nuevos modelos: tokenización, flipping inmobiliario y tendencias que ya están usando los inversores más avanzados. Cerramos con una cena de gala pensada para cerrar relaciones, ideas y próximos pasos.",
    },
  ]

  return (
    <section className="border-b border-border px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Cinco Días Que Cambian Tu Forma de Ver El Dinero
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {days.map((day, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-l-4 border-l-primary bg-card p-8 transition-all hover:bg-card/80 md:p-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex-shrink-0">
                  <div className="inline-flex rounded-lg bg-primary/10 px-4 py-2">
                    <span className="text-2xl font-bold text-primary md:text-3xl">{day.day}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">{day.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{day.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
