'use server'
export default async function getChallenges() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/challenges`)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (err) {
    return err
  }
}
