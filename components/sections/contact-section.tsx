"use client"

import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent, forwardRef } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export const ContactSection = forwardRef<HTMLDivElement>(function ContactSection(props, ref) {
  const { ref: revealRef, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError("")

    // Check privacy acceptance
    if (!privacyAccepted) {
      setPrivacyError(true)
      return
    }

    // Basic validation
    if (!formData.email || !formData.message) {
      setSubmitError("Email e messaggio sono obbligatori.")
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Errore nell'invio del messaggio.")
      }

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Errore nell'invio del messaggio. Riprova.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Combine both refs
  const setRefs = (element: HTMLDivElement | null) => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(element)
      } else {
        ref.current = element
      }
    }
    if (revealRef) {
      if (typeof revealRef === 'function') {
        revealRef(element)
      } else {
        revealRef.current = element
      }
    }
  }

  return (
    <section
      ref={setRefs}
      className="flex w-full flex-col px-4 pt-16 pb-0 sm:px-6 sm:pt-20 sm:pb-0 md:px-12 md:pt-24 md:pb-0 lg:px-16 overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center py-4 sm:py-0">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 transition-all duration-700 sm:mb-6 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-1 font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground sm:mb-2 sm:text-4xl md:mb-3 md:text-6xl lg:text-7xl">
                Parliamo
                <br />
                del tuo progetto
              </h2>
              <p className="font-mono text-[10px] text-foreground/60 sm:text-xs md:text-base">/ Contattaci</p>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-8">
              <a
                href="mailto:info@halostudio.it"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-0.5 flex items-center gap-1.5 sm:mb-1 sm:gap-2">
                  <Mail className="h-2.5 w-2.5 text-foreground/60 sm:h-3 sm:w-3" />
                  <span className="font-mono text-[10px] text-foreground/60 sm:text-xs">Email</span>
                </div>
                <p className="text-sm text-foreground transition-colors group-hover:text-foreground/70 sm:text-base md:text-2xl">
                  info@halostudio.it
                </p>
              </a>

              
            </div>
          </div>

          {/* Right side - Minimal form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 sm:mb-1 sm:text-xs md:mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 md:py-2 md:text-base text-base"
                  placeholder="Il tuo nome"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 sm:mb-1 sm:text-xs md:mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 md:py-2 md:text-base text-base"
                  placeholder="la-tua@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 sm:mb-1 sm:text-xs md:mb-2">Messaggio</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full resize-none border-b border-foreground/30 bg-transparent py-1 text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 md:py-2 md:text-base text-base"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>

              <div
                className={`pt-1 transition-all duration-700 sm:pt-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <div className="mb-3 flex items-start gap-2 sm:mb-4">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => {
                      setPrivacyAccepted(e.target.checked)
                      setPrivacyError(false)
                    }}
                    className="mt-1 h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor="privacy" className="cursor-pointer text-xs text-foreground/80 sm:text-sm leading-relaxed">
                    Ho letto e accetto la{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {privacyError && (
                  <p className="mb-3 text-xs text-red-600 sm:mb-4">
                    Devi accettare la Privacy Policy per continuare
                  </p>
                )}
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className={`w-full text-sm sm:text-base ${isSubmitting ? "pointer-events-none opacity-50" : ""}`}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-2 text-center font-mono text-xs text-green-600 sm:mt-3 sm:text-sm">Richiesta inviata con successo!</p>
                )}
                {submitError && (
                  <p className="mt-2 text-center font-mono text-xs text-red-500 sm:mt-3 sm:text-sm">{submitError}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer with company info */}
      <div className="bg-black text-white border-t border-black pt-6 pb-3 sm:pt-8 sm:pb-3 md:pt-10 md:pb-3 mt-16 sm:mt-20 md:mt-24 -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-16">
          <div>
            <p className="mb-1 font-mono text-[10px] text-white/60 sm:text-xs">Partita IVA</p>
            <p className="text-xs text-white/90 sm:text-sm">03343790592</p>
          </div>
          <div className="text-right">
            <p className="mb-1 font-mono text-[10px] text-white/60 sm:text-xs">Ragione Sociale</p>
            <p className="text-xs text-white/90 sm:text-sm">HALO STUDIO</p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 sm:mt-8 sm:pt-8">
          <div className="flex flex-wrap gap-4 text-xs text-white/70 sm:text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})
