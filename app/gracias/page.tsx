"use client"

import { useEffect, useState } from "react"
import { Check, Sparkles, Calendar, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"

export default function GraciasPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M54TLB5S');
        `}
      </Script>

      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M54TLB5S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div
          className={`max-w-2xl w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D6B56C] blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#D6B56C] to-[#B79552] border-4 border-[#D6B56C]/30 shadow-2xl shadow-[#D6B56C]/50">
                <Check className="w-12 h-12 text-black" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 mb-10">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">¡Solicitud Enviada con Éxito!</h1>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D6B56C]" />
                <p className="text-lg md:text-xl text-[#D6B56C] font-semibold">Estamos revisando tu perfil</p>
                <Sparkles className="w-5 h-5 text-[#D6B56C]" />
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
              Gracias por tu interés en el evento exclusivo de Nexo Dubái. Nuestro equipo evaluará tu solicitud y te
              contactaremos en las próximas <span className="text-white font-semibold">48 horas</span> para confirmar tu
              plaza.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 mb-10">
            <div className="bg-zinc-900/50 border border-[#D6B56C]/20 rounded-2xl p-6 hover:border-[#D6B56C]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D6B56C]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#D6B56C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Fecha del Evento</h3>
                  <p className="text-gray-400">25 de Febrero - 2 de Marzo 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-[#D6B56C]/20 rounded-2xl p-6 hover:border-[#D6B56C]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D6B56C]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#D6B56C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Revisa tu Email</h3>
                  <p className="text-gray-400">
                    Te enviaremos un correo de confirmación con todos los detalles del evento
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-[#D6B56C]/20 rounded-2xl p-6 hover:border-[#D6B56C]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D6B56C]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#D6B56C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Contacto Personalizado</h3>
                  <p className="text-gray-400">
                    Un miembro de nuestro equipo se pondrá en contacto contigo para confirmar tu asistencia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/">
              <Button className="group bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] hover:from-[#B79552] hover:via-[#D6B56C] hover:to-[#B79552] text-black font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-[#D6B56C]/50 transition-all duration-300 hover:scale-105">
                <span>Volver al Inicio</span>
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              ¿Tienes alguna pregunta? Escríbenos a{" "}
              <a href="mailto:organizacion@evento-nexodubai.com" className="text-[#D6B56C] hover:underline">
                organizacion@evento-nexodubai.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
