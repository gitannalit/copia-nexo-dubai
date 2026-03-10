"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Por qué Dubái para este evento?",
      answer:
        "Dubái no es solo lujo, es uno de los lugares donde las reglas del juego favorecen al que se prepara. Ofrece impuesto 0% al patrimonio y a las personas físicas en determinados casos, un mercado inmobiliario altamente protegido y en expansión, es centro mundial de empresarios y capital privado, con alta seguridad jurídica y personal. Puedes abrir empresa y cuenta en 15 días, y es un entorno que premia la iniciativa y la toma de decisiones rápidas. No se trata solo de mudarte, se trata de tener una puerta abierta a uno de los ecosistemas más potentes del mundo.",
    },
    {
      question: "¿Qué incluye exactamente el evento de 5 días?",
      answer:
        "El evento de Nexo Dubái dura 5 días completos (22-26 de enero). Incluye visitas guiadas a proyectos inmobiliarios exclusivos, consultoría 1:1 personalizada sobre tu situación fiscal y empresarial, networking con empresarios de alto nivel, sesiones con asesores legales y fiscales especializados en Dubái, acceso al grupo VIP de inversión con oportunidades exclusivas, alojamiento de lujo, transporte privado durante todo el evento, y experiencias culinarias premium. Es mucho más que un viaje, es una inversión en tu futuro empresarial.",
    },
    {
      question: "¿Necesito ser millonario para participar?",
      answer:
        "No necesariamente. Si bien es un evento premium, lo que necesitas es ser empresario o profesional con ingresos estables y mentalidad de acción. Hay opciones de inversión desde importes razonables y también caminos para preparar tu entrada futura. Lo importante es que tengas la visión y el compromiso de llevar tu negocio al siguiente nivel. El evento está diseñado para empresarios serios que quieren resultados reales, no para curiosos.",
    },
    {
      question: "¿Es legal pagar menos impuestos con Dubái?",
      answer:
        "Completamente legal, siempre que se haga correctamente. En el evento verás exactamente qué se puede hacer y qué NO se puede hacer, con ejemplos reales de empresarios españoles y latinos que ya lo están haciendo. Trabajas con asesores legales y fiscales especializados que te mostrarán las estructuras legales que mejor se adaptan a tu situación particular. La planificación fiscal internacional es perfectamente legal cuando se hace con transparencia y siguiendo las normativas vigentes.",
    },
    {
      question: "¿Y si después no invierto ni monto empresa?",
      answer:
        "Aun así, vas a conseguir claridad total sobre tu situación, tus opciones y el camino que quieres seguir. Solo eso ya evita decisiones impulsivas, malas inversiones y años de dudas. Conocerás el ecosistema, las oportunidades reales, y tendrás una red de contactos de alto nivel. Muchos asistentes no toman acción inmediata, pero cuando están listos, ya saben exactamente qué hacer y con quién contactar. Es una inversión en conocimiento y red de contactos que te servirá para toda la vida.",
    },
    {
      question: "¿Puedo financiar inversiones sin ser residente?",
      answer:
        "Existen fórmulas específicas para no residentes que explicamos en detalle durante el evento, con sus pros y contras. Los bancos y desarrolladores en Dubái están acostumbrados a trabajar con inversores internacionales y hay opciones de financiación disponibles. Durante el evento tendrás sesiones con expertos financieros que te mostrarán las alternativas específicas para tu caso, incluyendo requisitos, tasas de interés, y documentación necesaria.",
    },
    {
      question: "¿Por qué hay proceso de selección?",
      answer:
        "Porque queremos que el grupo sea homogéneo, que puedas aportar y recibir valor, y que el evento tenga sentido financiero y personal para ti. No buscamos llenar plazas; buscamos crear resultados y relaciones a largo plazo. Trabajamos con un grupo reducido (máximo 20 personas) para garantizar atención personalizada y networking de calidad. Este proceso asegura que todos los asistentes estén en un nivel similar y puedan beneficiarse mutuamente de sus experiencias y conexiones.",
    },
    {
      question: "¿Qué diferencia hay con un viaje turístico?",
      answer:
        "La diferencia es abismal. Un viaje turístico te muestra los rascacielos y los centros comerciales. Nexo Dubái te abre las puertas a las oportunidades reales de inversión y negocio que solo están disponibles para quien tiene los contactos correctos. Tendrás acceso a desarrolladores inmobiliarios con proyectos exclusivos, asesores fiscales especializados en estructuras internacionales, y una red de empresarios que ya están operando exitosamente desde Dubái. Es el acceso VIP al verdadero ecosistema de negocios de la ciudad.",
    },
    {
      question: "¿Incluye vuelo y alojamiento?",
      answer:
        "El precio incluye el alojamiento de lujo durante los 5 días, transporte privado en Dubái, todas las comidas y experiencias gastronómicas, acceso a todas las sesiones y visitas, consultoría personalizada 1:1, y acceso al grupo VIP de inversión (valorado en €15,000/año). Los vuelos internacionales NO están incluidos para darte flexibilidad en tus fechas y preferencias de aerolínea. Sin embargo, te proporcionaremos recomendaciones de vuelos y asistencia para coordinar llegadas si lo necesitas.",
    },
  ]

  return (
    <section className="bg-[#0B0B0B] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 text-center">
          <div className="mb-6 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-[#D6B56C]">
            Resolvemos todas tus dudas antes de dar el paso
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-[#E6E6E6] md:text-lg">
            Haz clic en cada pregunta para ver la respuesta completa
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-lg border border-[#D6B56C]/20 bg-[#111111] transition-all hover:border-[#D6B56C]/50 hover:shadow-lg hover:shadow-[#D6B56C]/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-4 p-4 text-left transition-colors md:p-5"
              >
                <span
                  className={`text-sm font-semibold transition-colors group-hover:text-[#D6B56C] md:text-base ${
                    openIndex === index ? "text-[#D6B56C]" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#B79552] transition-all group-hover:text-[#D6B56C] ${
                    openIndex === index ? "rotate-180 text-[#D6B56C]" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-[#D6B56C]/20 px-4 pb-4 pt-3 md:px-5 md:pb-5">
                  <p className="text-sm leading-relaxed text-[#E6E6E6] md:text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#E6E6E6] md:text-base">
            ¿Tienes más preguntas?{" "}
            <a
              href="mailto:info@nexodubai.com"
              className="font-semibold text-[#D6B56C] hover:text-amber-400 hover:underline"
            >
              Escríbenos directamente
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
