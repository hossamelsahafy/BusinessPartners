'use server'
export default async function getStories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stories`)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (err) {
    return err
  }
}
