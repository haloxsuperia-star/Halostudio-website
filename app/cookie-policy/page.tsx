import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | Halo Studio",
  description: "Leggi la nostra politica sui cookie e scopri come utilizziamo i cookie sul nostro sito.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-md">
        <nav className="flex items-center px-4 py-4 sm:px-6 md:px-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla home
          </Link>
        </nav>
      </div>

      <article className="px-4 py-20 sm:px-6 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 sm:mb-12">
            <h1 className="mb-4 font-sans text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Cookie Policy
            </h1>
            <p className="font-mono text-xs text-foreground/60 sm:text-sm">Ultimo aggiornamento: Febbraio 2026</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                1. Cosa Sono i Cookie?
              </h2>
              <p className="leading-relaxed text-foreground/90">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, smartphone, tablet) quando visiti il nostro sito web. Questi file contengono informazioni che consentono al sito di riconoscerti durante le visite successive e di migliorare la tua esperienza di navigazione.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                2. Tipologie di Cookie Utilizzati
              </h2>
              <p className="mb-3 leading-relaxed text-foreground/90">
                Utilizziamo due categorie principali di cookie:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium text-foreground sm:text-lg">Cookie Tecnici</h3>
                  <p className="leading-relaxed text-foreground/90">
                    Questi cookie sono essenziali per il funzionamento del nostro sito. Consentono la navigazione e permettono di accedere a funzioni specifiche come le aree protette del sito. Sono sempre attivi e non richiedono il tuo consenso.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-medium text-foreground sm:text-lg">Cookie Analitici</h3>
                  <p className="leading-relaxed text-foreground/90">
                    Utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il nostro sito. Questi cookie raccolgono dati aggregati e anonimizzati sul numero di visitatori, le pagine visitate e il tempo trascorso. Richiedono il tuo consenso esplicito e possono essere disabilitati in qualsiasi momento.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                3. Cookie Tecnici
              </h2>
              <p className="mb-3 leading-relaxed text-foreground/90">
                I cookie tecnici sono utilizzati per:
              </p>
              <ul className="list-inside space-y-2 text-foreground/90">
                <li className="ml-3">• Mantenere la sessione durante la navigazione</li>
                <li className="ml-3">• Ricordare le preferenze di visualizzazione</li>
                <li className="ml-3">• Garantire la sicurezza del sito</li>
                <li className="ml-3">• Permettere le funzioni interattive</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                4. Cookie Analitici
              </h2>
              <p className="mb-3 leading-relaxed text-foreground/90">
                Utilizziamo Google Analytics per raccogliere dati analitici. Questi dati ci aiutano a:
              </p>
              <ul className="list-inside space-y-2 text-foreground/90">
                <li className="ml-3">• Comprendere il comportamento dei visitatori</li>
                <li className="ml-3">• Identificare le pagine più visitate</li>
                <li className="ml-3">• Migliorare la qualità dei nostri contenuti</li>
                <li className="ml-3">• Ottimizzare l'esperienza utente</li>
              </ul>
              <p className="mt-3 leading-relaxed text-foreground/90">
                I dati raccolti da Google Analytics sono anonimizzati e non identificano direttamente gli utenti. Per ulteriori informazioni, visita la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy di Google</a>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                5. Come Modificare il Tuo Consenso
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Puoi modificare le tue preferenze sui cookie in qualsiasi momento utilizzando il banner dei cookie che appare quando visiti il nostro sito. Puoi selezionare "Gestisci preferenze" per controllare quali tipi di cookie desideri accettare.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                6. Controllo dei Cookie nel Tuo Browser
              </h2>
              <p className="mb-3 leading-relaxed text-foreground/90">
                Puoi anche controllare i cookie direttamente dalle impostazioni del tuo browser:
              </p>
              <ul className="list-inside space-y-2 text-foreground/90">
                <li className="ml-3">• <strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li className="ml-3">• <strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie e dati dei siti</li>
                <li className="ml-3">• <strong>Safari:</strong> Preferenze → Privacy → Gestisci dati dei siti web</li>
                <li className="ml-3">• <strong>Edge:</strong> Impostazioni → Privacy → Cookie e altre autorizzazioni</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                7. Durata dei Cookie
              </h2>
              <p className="leading-relaxed text-foreground/90">
                I cookie tecnici rimangono attivi finché non vengono eliminati manualmente dal tuo browser. I cookie analitici vengono tipicamente eliminati dopo 26 mesi di inattività.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                8. Contatti
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Per domande riguardanti i nostri cookie o per esercitare i tuoi diritti, contattaci a:
              </p>
              <p className="mt-3 font-mono text-sm text-foreground/80">
                <strong>Email:</strong> info@halostudio.it
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-foreground/10 pt-8 sm:mt-16 sm:pt-12">
            <p className="text-sm text-foreground/60">
              Questa Cookie Policy è conforme alla Direttiva ePrivacy (Direttiva 2002/58/CE) e al Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679).
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
