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
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fafafa; padding: 20px; color: #222;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; padding: 20px 25px; border: 1px solid #eee;">
      
      <h2 style="margin-top: 0; font-size: 20px; color: #b8860b; text-align: center;">
        ✨ New Contact Form Submission
      </h2>
      <p style="font-size: 15px; text-align: center; color: #666;">
        You’ve received a new inquiry from the website
      </p>

      <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />

      <p><strong style="color:#b8860b;">👤 Name:</strong> ${fullName}</p>
      <p><strong style="color:#b8860b;">📞 Phone:</strong> ${phoneNumber}</p>
      <p><strong style="color:#b8860b;">✉️ Email:</strong> ${Email}</p>
      <p><strong style="color:#b8860b;">🏢 Company:</strong> ${CompanyName || ''}</p>

      <div style="margin-top: 15px; padding: 12px; background: #fdf6e3; border-left: 4px solid #b8860b; border-radius: 6px;">
        <p style="margin: 0; white-space: pre-line; font-size: 14px; line-height: 1.6; color: #444;">
          ${Message}
        </p>
      </div>

      <p style="margin-top: 25px; font-size: 12px; color: #aaa; text-align: center;">
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
