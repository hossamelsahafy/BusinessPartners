'use client'
import { useTranslations } from 'next-intl'
import Header from './_components/Home/Header/Header'
import Quick from './_components/Home/QuickOverView/Quick'
import Services from './_components/Home/MainServices/Services'
import ServedSectors from './_components/Home/ServedSectors/ServedSectors'
import Success from './_components/Home/SuccessStory/Success'
import SayAboutUs from './_components/Home/SayAboutUs/SayAboutUs'
export default function Home() {
  const t = useTranslations()

  return (
    <div className="">
      <Header />
      <Quick />
      <Services />
      <ServedSectors />
      <Success />
      <SayAboutUs />
    </div>
  )
}
