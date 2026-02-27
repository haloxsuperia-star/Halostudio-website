import { Resend } from "resend"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email e messaggio sono obbligatori." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Configurazione server mancante." },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const toEmail = process.env.CONTACT_TO_EMAIL
    if (!toEmail) {
      console.error("CONTACT_TO_EMAIL is not set")
      return NextResponse.json(
        { error: "Configurazione server mancante." },
        { status: 500 }
      )
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nuovo messaggio da ${name || "Sconosciuto"} - Halo Studio`,
      html: `
        <h2>Nuovo messaggio dal sito web</h2>
        <p><strong>Nome:</strong> ${name || "Non specificato"}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ""}
        <hr />
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Errore nell'invio dell'email. Riprova." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Errore interno del server." },
      { status: 500 }
    )
  }
}
