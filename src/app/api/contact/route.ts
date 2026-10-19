import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
    }

    const body = await req.json()
    const name = String(body.name || '').trim().slice(0, 120)
    const email = String(body.email || '').trim().slice(0, 254)
    const phone = String(body.phone || '').trim().slice(0, 80)
    const location = String(body.location || '').trim().slice(0, 160)
    const projectType = String(body.projectType || 'General Inquiry').trim().slice(0, 120)
    const message = String(body.message || '').trim().slice(0, 5000)

    if (!name || !email || !message || !projectType) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'BXC Construction Website <website@bxcconstruction.ca>',
        to: [process.env.CONTACT_TO_EMAIL || 'info@bxcconstruction.ca'],
        reply_to: email,
        subject: 'New BXC Construction enquiry — ' + projectType,
        text: [
          'New consultation request from the BXC Construction website',
          '',
          'Name: ' + name,
          'Email: ' + email,
          'Phone: ' + (phone || 'Not provided'),
          'Project location: ' + (location || 'Not provided'),
          'Project type: ' + projectType,
          '',
          'Project details:',
          message,
          '',
          'Received: ' + new Date().toISOString(),
        ].join('\\n'),
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      const details = await response.text()
      console.error('Resend delivery failed:', response.status, details)
      return NextResponse.json({ error: 'Email could not be sent. Please try again or contact us directly.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: 'Your request has been emailed successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Unable to send your request right now.' }, { status: 500 })
  }
}
