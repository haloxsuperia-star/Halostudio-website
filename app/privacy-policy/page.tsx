import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Halo Studio",
  description: "Leggi la nostra informativa sulla privacy e su come proteggiamo i tuoi dati.",
}

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="font-mono text-xs text-foreground/60 sm:text-sm">Ultimo aggiornamento: Febbraio 2026</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                1. Titolare del Trattamento
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Titolare del trattamento dei dati personali è <strong>Halostudio.it</strong>, con sede legale in Italia e codice fiscale/partita IVA <strong>03343790592</strong>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                2. Tipologia di Dati Raccolti
              </h2>
              <p className="mb-3 leading-relaxed text-foreground/90">
                Attraverso il modulo di contatto presente sul nostro sito raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-inside space-y-2 text-foreground/90">
                <li className="ml-3">• <strong>Nome e Cognome</strong></li>
                <li className="ml-3">• <strong>Indirizzo Email</strong></li>
                <li className="ml-3">• <strong>Messaggio/Descrizione del Progetto</strong></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                3. Finalità del Trattamento
              </h2>
              <p className="leading-relaxed text-foreground/90">
                I dati raccolti sono utilizzati esclusivamente per:
              </p>
              <ul className="list-inside space-y-2 text-foreground/90">
                <li className="ml-3">• Rispondere alle tue richieste di contatto</li>
                <li className="ml-3">• Fornire informazioni sui nostri servizi</li>
                <li className="ml-3">• Preparare preventivi personalizzati</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                4. Base Giuridica del Trattamento
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Il trattamento dei dati è basato sul tuo <strong>consenso esplicito</strong>, che fornisci al momento della compilazione del modulo di contatto e dall'accettazione della presente informativa.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                5. Modalità di Conservazione dei Dati
              </h2>
              <p className="leading-relaxed text-foreground/90">
                I dati personali raccolti sono conservati per il periodo necessario a rispondere alla tua richiesta e fino a 2 anni dalla data di ricezione del messaggio, salvo diversi obblighi normativi. Successivamente, i dati verranno cancellati in modo sicuro.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                6. Diritti dell'Interessato
              </h2>
              <p className="mb-3 leading-relaxed text-foreground/90">
                Puoi esercitare i seguenti diritti in qualsiasi momento:
              </p>
              <ul className="list-inside space-y-2 text-foreground/90">
                <li className="ml-3">• <strong>Diritto di accesso:</strong> Ottenere conferma dell'esistenza di dati e accedere ai tuoi dati</li>
                <li className="ml-3">• <strong>Diritto di rettifica:</strong> Correggere dati inesatti o incompleti</li>
                <li className="ml-3">• <strong>Diritto di cancellazione:</strong> Richiedere la cancellazione dei tuoi dati (diritto all'oblio)</li>
                <li className="ml-3">• <strong>Diritto di limitazione:</strong> Limitare il trattamento in determinati casi</li>
                <li className="ml-3">• <strong>Diritto di portabilità:</strong> Ricevere i tuoi dati in formato strutturato e trasferirli</li>
                <li className="ml-3">• <strong>Diritto di opposizione:</strong> Opporti al trattamento dei tuoi dati</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                7. Contatti per Esercitare i Tuoi Diritti
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Per esercitare i diritti descritti sopra o per qualsiasi domanda riguardante il trattamento dei tuoi dati personali, puoi contattarci a:
              </p>
              <p className="mt-3 font-mono text-sm text-foreground/80">
                <strong>Email:</strong> info@halostudio.it
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-2xl font-light text-foreground sm:mb-4 sm:text-3xl">
                8. Modifiche a Questa Privacy Policy
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Ci riserviamo il diritto di aggiornare questa informativa sulla privacy in qualsiasi momento. Ti consigliamo di consultarla periodicamente per restare informato su come proteggiamo i tuoi dati.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-foreground/10 pt-8 sm:mt-16 sm:pt-12">
            <p className="text-sm text-foreground/60">
              Se hai domande o preoccupazioni riguardanti questa Privacy Policy, ti preghiamo di contattarci all'indirizzo email sopra indicato.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
