import React from 'react'
import Services from './Services'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Services',
    ar: 'الخدمات',
  }

  const descriptions = {
    en: 'Explore the wide range of services offered by Business Partners, from financial systems implementation to strategic consulting, designed to empower your business growth.',
    ar: 'استكشف مجموعة الخدمات المتنوعة التي تقدمها بيزنس بارتنرز، من تنفيذ الأنظمة المالية إلى الاستشارات الاستراتيجية، والمصممة لدعم نمو عملك.',
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
      <Services />
    </div>
  )
}

export default page
