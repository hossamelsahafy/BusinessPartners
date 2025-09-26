import React from 'react'
import Sectors from './Sectors'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Sectors',
    ar: 'القطاعات',
  }

  const descriptions = {
    en: 'Discover the key sectors that Business Partners proudly serves, providing tailored financial systems and strategic consulting to drive growth and efficiency.',
    ar: 'اكتشف القطاعات الرئيسية التي تخدمها بيزنس بارتنرز بفخر، من خلال توفير أنظمة مالية مخصصة واستشارات استراتيجية تدعم النمو والكفاءة.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
    },
  }
}
const page = () => {
  return (
    <div>
      <Sectors />
    </div>
  )
}

export default page
