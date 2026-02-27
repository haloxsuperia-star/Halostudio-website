"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

type CookieConsent = {
  technical: boolean
  analytics: boolean
}

const CONSENT_KEY = "halostudio_cookie_consent"

function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(CONSENT_KEY)
  if (!stored) return null
  try {
    return JSON.parse(stored) as CookieConsent
  } catch {
    return null
  }
}

function storeConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const consent = getStoredConsent()
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    storeConsent({ technical: true, analytics: true })
    setVisible(false)
    setShowPreferences(false)
  }

  const handleRejectAll = () => {
    storeConsent({ technical: true, analytics: false })
    setVisible(false)
    setShowPreferences(false)
  }

  const handleSavePreferences = () => {
    storeConsent({ technical: true, analytics })
    setVisible(false)
    setShowPreferences(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-xl border border-foreground/10 bg-background p-6 shadow-lg sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-sans text-lg font-medium text-foreground">Gestisci preferenze</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="rounded-full p-1 text-foreground/60 transition-colors hover:text-foreground"
                aria-label="Chiudi"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Technical cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">Cookie Tecnici</p>
                  <p className="font-mono text-xs text-foreground/50">Sempre attivi, necessari al funzionamento</p>
                </div>
                <div className="relative h-6 w-10 rounded-full bg-foreground/80">
                  <div className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-background" />
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">Cookie Analitici</p>
                  <p className="font-mono text-xs text-foreground/50">Ci aiutano a migliorare il sito</p>
                </div>
                <button
                  onClick={() => setAnalytics(!analytics)}
                  className={`relative h-6 w-10 rounded-full transition-colors ${analytics ? "bg-foreground/80" : "bg-foreground/20"}`}
                  role="switch"
                  aria-checked={analytics}
                  aria-label="Cookie Analitici"
                >
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform ${analytics ? "right-0.5" : "left-0.5"}`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 rounded-lg border border-foreground/15 px-4 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Annulla
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 rounded-lg bg-foreground px-4 py-2.5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4">
        <div className="mx-auto max-w-2xl rounded-xl border border-foreground/10 bg-background p-4 shadow-lg sm:p-6">
          <p className="mb-4 font-sans text-sm leading-relaxed text-foreground/80">
            Questo sito utilizza cookie tecnici e, previo consenso, cookie di analisi. Puoi accettare tutti i cookie o gestire le preferenze.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              onClick={handleAcceptAll}
              className="rounded-lg bg-foreground px-4 py-2.5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Accetta tutti
            </button>
            <button
              onClick={handleRejectAll}
              className="rounded-lg border border-foreground/15 px-4 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Rifiuta
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="rounded-lg border border-foreground/15 px-4 py-2.5 font-sans text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Gestisci preferenze
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
