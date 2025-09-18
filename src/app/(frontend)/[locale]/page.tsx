'use client'
import Header from './_components/Home/Header/Header'
import Quick from './_components/Home/QuickOverView/Quick'
import Services from './_components/Home/MainServices/Services'
import ServedSectors from './_components/Home/ServedSectors/ServedSectors'
import Stories from './_components/Home/SuccessStory/Stories'
import Clients from './_components/Home/SayAboutUs/Clients'
export default function Home() {
  return (
    <div className="">
      <Header />
      <Quick />
      <Services />
      <ServedSectors />
      <Stories />
      <Clients />
    </div>
  )
}
