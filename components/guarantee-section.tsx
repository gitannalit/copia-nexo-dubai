"use client"

import { Button } from "@/components/ui/button"
import { Check, TrendingUp, Target, Zap, Sparkles, Crown } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { FormModal } from "@/components/form-modal"

function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, hasAnimated])

  return { count, ref }
}

export function GuaranteeSection() {
  const roiCounter = useCountUp(10, 2000)
  const savingsCounter = useCountUp(40, 2000)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <section className="py-6 md:py-8 px-4 relative overflow-hidden bg-gradient-to-b from-background via-background to-[#D6B56C]/5">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#D6B56C] rounded-full blur-[120px] animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#B79552] rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8A6A30] rounded-full blur-[150px] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-4 md:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D6B56C]/20 to-[#B79552]/20 border border-[#D6B56C]/30 rounded-full px-4 py-1.5 mb-4"
              >
                <Sparkles className="w-4 h-4 text-[#D6B56C]" />
                <span className="text-[#D6B56C] font-semibold text-sm uppercase tracking-wider">Resultados Reales</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 leading-tight">
                <span className="text-white">Multiplica Tu Patrimonio</span>
                <br />
                <span className="bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] bg-clip-text text-transparent">
                  Con Estrategias Probadas
                </span>
              </h2>
              <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ahorro fiscal inmediato, acceso a inversiones exclusivas y networking de élite.
                <br className="hidden md:block" />
                <span className="text-white font-bold">El ROI comienza desde el día uno.</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="max-w-4xl mx-auto mb-6 md:mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] rounded-full blur-3xl"
              />

              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-4 md:p-6 shadow-2xl border border-[#D6B56C]/20">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#D6B56C]/5 via-[#B79552]/10 to-[#8A6A30]/5 rounded-3xl"
                  style={{ backgroundSize: "200% 200%" }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 w-40 h-40 md:w-56 md:h-56"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D6B56C] via-transparent to-[#B79552] rounded-full opacity-30" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#D6B56C] via-[#B79552] to-[#D6B56C] flex items-center justify-center shadow-2xl shadow-[#D6B56C]/50"
                      >
                        <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#0A0A0A] to-zinc-900 flex flex-col items-center justify-center relative overflow-hidden">
                          <motion.div
                            animate={{
                              x: ["-100%", "200%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              repeatDelay: 1,
                            }}
                            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />

                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-[#F5DFA0] mb-2" />
                          </motion.div>

                          <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#D6B56C] to-[#B79552] bg-clip-text text-transparent">
                            10X
                          </div>
                          <p className="text-xs md:text-sm text-gray-300 font-bold mt-1 tracking-wide">ROI POTENCIAL</p>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{
                          y: [-8, 8, -8],
                          rotate: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -right-4 bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] text-black px-4 py-2 rounded-full font-black text-xs md:text-sm shadow-xl shadow-[#D6B56C]/50 border-2 border-[#D6B56C]"
                      >
                        ✓ VERIFICADO
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
                      Tu inversión se multiplica
                      <span className="block text-[#D6B56C] mt-1">con estrategias elite</span>
                    </h3>
                    <div className="space-y-2">
                      {[
                        { icon: Target, text: "Ahorro fiscal inmediato de hasta 40%" },
                        { icon: Zap, text: "Acceso a deals con ROI del 8-12% anual" },
                        { icon: Crown, text: "Red de inversores elite valorada en €15K/año" },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 text-sm md:text-base text-gray-300"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#D6B56C] to-[#B79552] flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            ref={roiCounter.ref}
            className="relative bg-gradient-to-r from-zinc-900/80 via-zinc-800/80 to-zinc-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-8 border border-[#D6B56C]/20 max-w-4xl mx-auto mb-6 md:mb-8 overflow-hidden"
          >
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#D6B56C]/10 via-[#B79552]/20 to-[#8A6A30]/10 opacity-50"
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative z-10 grid grid-cols-2 gap-6 md:gap-12">
              <div className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#D6B56C] to-[#B79552] bg-clip-text text-transparent mb-3"
                >
                  40%
                </motion.div>
                <p className="text-white font-bold text-base md:text-xl mb-1">Ahorro Fiscal</p>
                <p className="text-xs md:text-sm text-gray-400">Reducción de carga tributaria</p>
              </div>

              <div className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#D6B56C] to-[#B79552] bg-clip-text text-transparent mb-3"
                >
                  {roiCounter.count}X
                </motion.div>
                <p className="text-white font-bold text-base md:text-xl mb-1">ROI Potencial</p>
                <p className="text-xs md:text-sm text-gray-400">Multiplicador patrimonial</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="group relative bg-gradient-to-r from-[#D6B56C] via-[#B79552] to-[#D6B56C] hover:from-[#B79552] hover:via-[#D6B56C] hover:to-[#B79552] text-black font-bold text-base md:text-lg px-8 md:px-12 py-5 md:py-6 rounded-full shadow-2xl hover:shadow-[#D6B56C]/50 transition-all duration-300 transform hover:scale-105 border-2 border-[#D6B56C] overflow-hidden"
            >
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />

              <span className="relative flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-180 transition-transform duration-500" />
                Asegura Tu Plaza Ahora
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Check className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </span>
            </Button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-gray-300 mt-4 flex items-center justify-center gap-4 flex-wrap"
            >
              <span className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-[#D6B56C]/20">
                <Check className="w-4 h-4 text-[#D6B56C]" />
                <span className="font-semibold">Solo 20 plazas disponibles</span>
              </span>
              <span className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-[#D6B56C]/20">
                <Check className="w-4 h-4 text-[#D6B56C]" />
                <span className="font-semibold">Evento verificado</span>
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
