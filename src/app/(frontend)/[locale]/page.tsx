'use client'
import { useTranslations } from 'next-intl'
import Header from './_components/Home/Header/Header'

export default function Home() {
  const t = useTranslations()

  return (
    <div className="">
      <Header />
    </div>
  )
}
