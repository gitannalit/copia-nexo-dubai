import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ForWhoSection() {
  const forYou = [
    "Eres empresario, emprendedor o profesional con ingresos estables.",
    "Sientes que estás pagando demasiados impuestos y quieres alternativas legales.",
    "Quieres invertir mejor, con datos, y evitar errores caros.",
    "Estás abierto a crear empresa o vehículo de inversión fuera de tu país.",
    "Tienes mentalidad de acción: quieres ver, entender y decidir.",
  ]

  const notForYou = [
    "Buscas un viaje turístico sin contenido estratégico.",
    'Solo quieres "información gratis" sin intención real de actuar.',
    "No estás dispuesto a moverte si encuentras una buena oportunidad.",
    "Solo quieres una formación online más.",
  ]

  return (
    <section className="border-b border-border px-4 py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">¿Este Evento Es Para Ti?</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Descubre si este evento se adapta a tu perfil
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <Card className="border-primary/30 bg-card p-6 sm:p-8 md:p-10">
            <div className="mb-6 sm:mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Este Evento Es Para Ti Si...
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm sm:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-muted bg-card p-6 sm:p-8 md:p-10">
            <div className="mb-6 sm:mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-muted">
                <X className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Este Evento No Es Para Ti Si...
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
