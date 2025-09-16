import { getNamedMiddlewareRegex } from 'next/dist/shared/lib/router/utils/route-regex'
import { getPayloadClient } from '@/app/(payload)/lib/GetPayloadClient'

export async function POST(req: Request) {
  const { fullName, phoneNumber, Email, Message, CompanyName } = await req.json()

  try {
    const payload = await getPayloadClient()

    // to: process.env.RECIEVER,
    await payload.sendEmail({
      to: 'hossamelsahafy78@gmail.com',
      from: process.env.SMTP_USER,
      subject: '📩 New Message from Business Partners Client',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9fafb; padding: 30px; color: #111;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 25px 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            
            <h2 style="margin-top: 0; font-size: 22px; color: #2563eb; text-align: center;">New Contact Form Submission</h2>
            <p style="font-size: 16px; text-align: center; color: #555;">You’ve received a new inquiry from the website 🚀</p>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e5e7eb;" />

            <p><strong style="color:#2563eb;">👤 Name:</strong> ${fullName}</p>
            <p><strong style="color:#2563eb;">📞 Phone:</strong> ${phoneNumber}</p>
            <p><strong style="color:#2563eb;">✉️ Email:</strong> ${Email}</p>
            <p><strong style="color:#2563eb;">✉️ CompanyName:</strong> ${CompanyName || ''}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-left: 4px solid #2563eb; border-radius: 6px;">
              <p style="margin: 0; white-space: pre-line; font-size: 15px; line-height: 1.6; color: #333;">
                ${Message}
              </p>
            </div>

            <p style="margin-top: 30px; font-size: 13px; color: #999; text-align: center;">
              © ${new Date().getFullYear()} Business Partners. All rights reserved.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission:

        Name: ${fullName}
        Phone: ${phoneNumber}
        Email: ${Email}
        Message:
        ${Message}
      `,
    })

    return new Response(JSON.stringify({ message: 'Email Was Sent Successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error While Sending Email:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
