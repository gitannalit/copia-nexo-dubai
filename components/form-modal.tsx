"use client"
import { useState } from "react"
import { X, Check, AlertCircle, User, Calendar, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FormModal({ isOpen, onClose }: FormModalProps) {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2 | 3 | "error">(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    available_date: "",
    investment_capacity: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio"
    if (!formData.phone.trim()) newErrors.phone = "El telefono es obligatorio"
    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio"
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Formato de correo invalido"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleStep1Continue = async () => {
    if (validateStep1()) {
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbzzGXxDGDHBPMO15NvlmAxk7POOvT1fmYXrSx0xdVOq6DoJTrWvL1I4ybGJptKAioBI/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              available_date: "",
              investment_capacity: "",
            }),
          },
        )
      } catch (err) {
        console.error("Error:", err)
      }
      setStep(2)
    }
  }

  const handleAvailabilityResponse = (response: "si" | "no") => {
    setFormData({ ...formData, available_date: response })
    setStep(3)
  }

  const handleInvestmentCapacity = async (capacity: "5000" | "2000" | "menos2000") => {
    setFormData({ ...formData, investment_capacity: capacity })
    setIsSubmitting(true)

    const finalFormData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      available_date: formData.available_date,
      investment_capacity: capacity,
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzzGXxDGDHBPMO15NvlmAxk7POOvT1fmYXrSx0xdVOq6DoJTrWvL1I4ybGJptKAioBI/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalFormData),
        },
      )

      await fetch("https://n8n.srv832978.hstgr.cloud/webhook/f5dd5f16-f66d-4f62-87d2-c21c42067a62", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      })

      setIsSubmitting(false)
      resetAndClose()
      router.push("/gracias")
    } catch (err) {
      console.error("Error:", err)
      setStep("error")
      setIsSubmitting(false)
    }
  }

  const resetAndClose = () => {
    setStep(1)
    setFormData({ name: "", phone: "", email: "", available_date: "", investment_capacity: "" })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-zinc-900 rounded-2xl border border-[#B79552]/20 shadow-2xl">
        <button onClick={resetAndClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D6B56C]/10 border-2 border-[#D6B56C]/30">
                  <User className="w-8 h-8 text-[#D6B56C]" />
                </div>
                <span className="inline-block px-3 py-1 bg-[#D6B56C]/10 border border-[#D6B56C]/30 rounded-full text-xs font-semibold text-[#D6B56C]">
                  Paso 1/3
                </span>
                <h2 className="text-2xl font-bold text-white">Datos Personales</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D6B56C]"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefono *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D6B56C]"
                    placeholder="+34 600 000 000"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D6B56C]"
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <Button
                  onClick={handleStep1Continue}
                  className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#D6B56C] to-[#B79552] text-black"
                >
                  Continuar <Check className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D6B56C]/10 border-2 border-[#D6B56C]/30">
                  <Calendar className="w-8 h-8 text-[#D6B56C]" />
                </div>
                <span className="inline-block px-3 py-1 bg-[#D6B56C]/10 border border-[#D6B56C]/30 rounded-full text-xs font-semibold text-[#D6B56C]">
                  Paso 2/3
                </span>
                <h2 className="text-2xl font-bold text-white">Disponibilidad</h2>
                <p className="text-sm text-gray-400">Del 25 febrero al 2 marzo 2025</p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => handleAvailabilityResponse("si")}
                  className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#D6B56C] to-[#B79552] text-black"
                >
                  <Check className="w-5 h-5 mr-2" /> Si, estoy disponible
                </Button>
                <Button
                  onClick={() => handleAvailabilityResponse("no")}
                  variant="outline"
                  className="w-full py-6 text-lg font-semibold border-[#B79552]/30 text-gray-300 bg-transparent"
                >
                  <X className="w-5 h-5 mr-2" /> No disponible
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D6B56C]/10 border-2 border-[#D6B56C]/30">
                  <Coins className="w-8 h-8 text-[#D6B56C]" />
                </div>
                <span className="inline-block px-3 py-1 bg-[#D6B56C]/10 border border-[#D6B56C]/30 rounded-full text-xs font-semibold text-[#D6B56C]">
                  Paso 3/3
                </span>
                <h2 className="text-2xl font-bold text-white">
                  ¿Cuánto estás dispuesto a invertir en esta experiencia?
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Para saber si este evento encaja contigo y no hacerte perder el tiempo, ¿en qué rango de inversión te
                  sentirías cómodo para una experiencia de este nivel?
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => handleInvestmentCapacity("menos2000")}
                  disabled={isSubmitting}
                  variant="outline"
                  className="w-full py-6 text-lg border-gray-700 text-gray-400 bg-transparent"
                >
                  Menos de 2.000 EUR
                </Button>
                <Button
                  onClick={() => handleInvestmentCapacity("2000")}
                  disabled={isSubmitting}
                  variant="outline"
                  className="w-full py-6 text-lg border-[#B79552]/30 text-gray-300 bg-transparent"
                >
                  2.000 EUR o mas
                </Button>
                <Button
                  onClick={() => handleInvestmentCapacity("5000")}
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#D6B56C] to-[#B79552] text-black"
                >
                  5.000 EUR o mas
                </Button>
              </div>
              {isSubmitting && <p className="text-center text-sm text-[#D6B56C]">Enviando...</p>}
            </div>
          )}
          {step === "error" && (
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Error</h2>
              <p className="text-gray-300">Error al enviar. Intentalo de nuevo.</p>
              <div className="space-y-3">
                <Button
                  onClick={() => setStep(3)}
                  className="w-full py-4 bg-gradient-to-r from-[#D6B56C] to-[#B79552] text-black"
                >
                  Reintentar
                </Button>
                <Button
                  onClick={resetAndClose}
                  variant="outline"
                  className="w-full py-4 border-gray-700 text-gray-300 bg-transparent"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
