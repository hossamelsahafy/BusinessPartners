'use server'
export default async function sendEmail(formData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      return { Error: data?.error || 'Failed to send email' }
    }
  } catch (err) {
    return { Error: err.message || 'Something went wrong' }
  }
}
