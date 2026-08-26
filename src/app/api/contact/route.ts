import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, location, projectType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and project message are required.' },
        { status: 400 }
      )
    }

    const submission = {
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone || '').trim(),
      location: String(location || '').trim(),
      projectType: String(projectType || 'General Inquiry').trim(),
      message: String(message).trim(),
      destinationWhatsApp: '+1 (437) 973-4229',
      destinationEmail: 'info@bxcconstruction.ca',
    }

    // In a production server environment, this logs the lead data and can trigger webhook/SMTP
    console.log('[BXC Inbound Consultation Lead]:', JSON.stringify(submission, null, 2))

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request received successfully.',
        lead: submission,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error handling contact form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error processing consultation request.' },
      { status: 500 }
    )
  }
}
