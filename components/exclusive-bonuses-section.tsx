"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Lock, Gift, Sparkles, ChevronDown } from "lucide-react"
import { useState } from "react"
import { FormModal } from "@/components/form-modal"

export function ExclusiveBonusesSection() {
  const [isVipExpanded, setIsVipExpanded] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const scrollToBooking = () => {
    setIsFormOpen(true)
  }

  return (
    <>
      <section className="py-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6B56C]/5 via-[#145661]/3 to-[#8A6A30]/5 animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] border-2 border-[#D6B56C] mb-8 shadow-2xl shadow-[#D6B56C]/50 animate-pulse">
              <Gift className="w-6 h-6 text-[#0A0A0A]" />
              <span className="text-xl font-black text-[#0A0A0A] tracking-wide">BONOS EXCLUSIVOS INCLUIDOS</span>
            </div>
          </div>

          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#145661]/20 via-[#D6B56C]/25 to-[#145661]/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:shadow-[0_0_60px_rgba(20,86,97,0.3)] transition-all duration-300" />

            <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#145661]/20 border-2 border-[#D6B56C]/50 hover:border-[#145661]/70 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_60px_rgba(20,86,97,0.2)]">
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D6B56C] to-[#B79552] text-[#0A0A0A] text-sm font-bold mb-4 shadow-xl shadow-[#D6B56C]/40">
                    <Lock className="w-4 h-4" />
                    SOLO PARA LOS PRIMEROS 20 ASISTENTES
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#D6B56C] to-[#B79552] flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#145661]/30 hover:scale-110 hover:rotate-3 hover:shadow-[#145661]/50 transition-all duration-300 border-2 border-[#D6B56C]/60">
                      <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-[#0A0A0A]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white leading-tight">
                        Acceso EXCLUSIVO al Grupo VIP de Inversión
                      </h3>
                      <p className="text-[#D6B56C] font-bold text-lg md:text-xl">
                        Valor: €15,000/año - <span className="text-white font-bold">GRATIS</span> para ti
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-base md:text-lg text-foreground/95 mb-4 leading-relaxed">
                      Únete a un círculo privado de inversores donde recibirás{" "}
                      <span className="text-[#D6B56C] font-bold">deals exclusivos</span> y{" "}
                      <span className="text-[#D6B56C] font-bold">oportunidades verificadas</span> de alto ROI
                    </p>

                    <div className="md:hidden">
                      <button
                        onClick={() => setIsVipExpanded(!isVipExpanded)}
                        className="flex items-center gap-2 text-[#D6B56C] font-bold text-base mb-3 hover:text-[#145661] transition-colors"
                      >
                        <span>{isVipExpanded ? "Ver menos" : "Más información..."}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${isVipExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isVipExpanded && (
                        <div className="space-y-3 animate-in slide-in-from-top duration-300">
                          <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                            <CheckCircle2 className="w-5 h-5 text-[#D6B56C] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all" />
                            <p className="text-base text-white leading-relaxed">
                              <span className="font-bold text-[#D6B56C]">
                                Deals y oportunidades inmobiliarias verificadas
                              </span>{" "}
                              - Propiedades pre-seleccionadas con ROI verificado y acceso a inversiones privadas no
                              disponibles públicamente
                            </p>
                          </div>
                          <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                            <CheckCircle2 className="w-5 h-5 text-[#D6B56C] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all" />
                            <p className="text-base text-white leading-relaxed">
                              <span className="font-bold text-[#D6B56C]">Optimiza tu ahorro fiscal de 30-40%</span> -
                              Estrategias legales probadas para maximizar tu retención de capital
                            </p>
                          </div>
                          <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                            <CheckCircle2 className="w-5 h-5 text-[#B79552] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all" />
                            <p className="text-base text-white leading-relaxed">
                              <span className="font-bold text-[#B79552]">Network de alto nivel</span> - Conecta con
                              inversores que mueven de 6 a 7 cifras
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block space-y-3 mb-6">
                      <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle2 className="w-6 h-6 text-[#D6B56C] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all" />
                        <p className="text-lg text-white leading-relaxed">
                          <span className="font-bold text-[#D6B56C]">
                            Deals y oportunidades inmobiliarias verificadas
                          </span>{" "}
                          - Propiedades pre-seleccionadas con ROI verificado y acceso a inversiones privadas no
                          disponibles públicamente
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle2 className="w-6 h-6 text-[#D6B56C] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all" />
                        <p className="text-lg text-white leading-relaxed">
                          <span className="font-bold text-[#D6B56C]">Optimiza tu ahorro fiscal de 30-40%</span> -
                          Estrategias legales probadas para maximizar tu retención de capital
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle2 className="w-6 h-6 text-[#B79552] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all" />
                        <p className="text-lg text-white leading-relaxed">
                          <span className="font-bold text-[#B79552]">Network de alto nivel</span> - Conecta con
                          inversores que mueven de 6 a 7 cifras
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#145661]/10 backdrop-blur-sm rounded-xl p-4 border-2 border-[#D6B56C]/50 hover:border-[#145661]/60 mb-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#145661]/30">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2 font-medium">Plazas ocupadas:</p>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-white font-semibold">13 de 20 plazas</span>
                          <span className="text-[#D6B56C] font-bold text-base">65%</span>
                        </div>
                        <div className="h-2.5 bg-[#0F0F0F] rounded-full overflow-hidden border-2 border-[#145661]/40">
                          <div
                            className="h-full bg-gradient-to-r from-[#145661] via-[#D6B56C] to-[#B79552] rounded-full transition-all duration-1000 ease-out shadow-xl shadow-[#145661]/50"
                            style={{ width: "65%" }}
                          />
                        </div>
                      </div>
                      <p className="text-sm font-bold">
                        ¡Solo quedan <span className="text-[#D6B56C] text-base">7 plazas disponibles</span>!
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] hover:from-[#B79552] hover:via-[#D6B56C] hover:to-[#B79552] text-[#0A0A0A] font-bold text-lg md:text-xl py-6 shadow-[0_0_30px_rgba(20,86,97,0.3)] hover:shadow-[0_0_50px_rgba(214,181,108,0.5)] hover:scale-105 transition-all duration-300 border-2 border-[#145661]/50 hover:border-[#D6B56C]"
                    onClick={scrollToBooking}
                  >
                    ¡Quiero Mi Acceso VIP!
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#145661]/10 border-2 border-[#145661]/60 hover:border-[#D6B56C]/70 rounded-xl p-8 md:p-10 hover:shadow-2xl hover:shadow-[#145661]/30 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#145661]/30 text-[#D6B56C] text-sm font-bold mb-4 border-2 border-[#145661]/70 shadow-md shadow-[#145661]/30">
                  <Gift className="w-4 h-4" />
                  BONO ADICIONAL
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-[#D6B56C] transition-colors leading-tight">
                  Consultoría Personalizada Post-Evento
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-5 leading-relaxed">
                  Sesión privada exclusiva donde diseñamos tu estrategia personalizada de inversión y residencia fiscal
                  en Dubái. Implementamos todo lo aprendido directamente en tu caso real y te damos la hoja de ruta
                  exacta para tu éxito.
                </p>
                <p className="text-[#D6B56C] font-bold text-2xl md:text-3xl">
                  Valor: €2,500 - <span className="text-white font-bold">GRATIS</span> para asistentes
                </p>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#145661] text-[#D6B56C] hover:bg-gradient-to-r hover:from-[#145661] hover:via-[#D6B56C] hover:to-[#145661] hover:text-white hover:border-[#D6B56C] transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-xl hover:shadow-[#145661]/50 font-bold text-lg md:text-xl px-8 py-7"
                onClick={scrollToBooking}
              >
                Reservar Mi Plaza →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
