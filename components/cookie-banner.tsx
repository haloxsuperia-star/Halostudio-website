"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  technical: boolean
  analytics: boolean
}

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    technical: true,
    analytics: false,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookieConsent")
    if (!savedConsent) {
      setIsOpen(true)
    } else {
      const savedPreferences = localStorage.getItem("cookiePreferences")
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      technical: true,
      analytics: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted))
    setIsOpen(false)
    loadAnalytics()
  }

  const handleRejectAll = () => {
    const rejected: CookiePreferences = {
      technical: true,
      analytics: false,
    }
    setPreferences(rejected)
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(rejected))
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    setShowPreferences(false)
    setIsOpen(false)
    if (preferences.analytics) {
      loadAnalytics()
    }
  }

  const loadAnalytics = () => {
    // Load analytics script only if consent is given
    if (preferences.analytics && typeof window !== "undefined") {
      const script = document.createElement("script")
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`
      document.head.appendChild(script)
    }
  }

  if (!mounted) return null

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {isOpen && !showPreferences && (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-md p-4 shadow-lg sm:bottom-6 sm:left-6 sm:right-6 sm:p-6">
          <p className="mb-4 font-sans text-sm leading-relaxed text-foreground/90 sm:mb-6 sm:text-base">
            Questo sito utilizza cookie tecnici e, previo consenso, cookie di analisi. Puoi accettare tutti i cookie o gestire le preferenze.
          </p>

          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={handleAcceptAll}
              className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 sm:py-3 text-sm sm:text-base"
            >
              Accetta tutti
            </button>
            <button
              onClick={handleRejectAll}
              className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 font-medium text-foreground transition-all hover:bg-foreground/5 active:scale-95 sm:py-3 text-sm sm:text-base"
            >
              Rifiuta
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 font-medium text-foreground transition-all hover:bg-foreground/5 active:scale-95 sm:py-3 text-sm sm:text-base"
            >
              Gestisci preferenze
            </button>
          </div>
        </div>
      )}

      {isOpen && showPreferences && (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-md p-4 shadow-lg sm:bottom-6 sm:left-6 sm:right-6 sm:p-6">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h3 className="font-sans text-base font-medium text-foreground sm:text-lg">Preferenze Cookie</h3>
            <button
              onClick={() => setShowPreferences(false)}
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/5">
              <div>
                <p className="font-medium text-sm text-foreground sm:text-base">Cookie Tecnici</p>
                <p className="text-xs text-foreground/60 sm:text-sm">Sempre attivi</p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="h-4 w-4 cursor-not-allowed opacity-50"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/5">
              <div>
                <p className="font-medium text-sm text-foreground sm:text-base">Cookie Analitici</p>
                <p className="text-xs text-foreground/60 sm:text-sm">Per migliorare l'esperienza</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="h-4 w-4 cursor-pointer"
              />
            </div>
          </div>

          <button
            onClick={handleSavePreferences}
            className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 sm:py-3 text-sm sm:text-base"
          >
            Salva preferenze
          </button>
        </div>
      )}
    </>
  )
}
