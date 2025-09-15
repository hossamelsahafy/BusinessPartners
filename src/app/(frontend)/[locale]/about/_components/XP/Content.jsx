import React from 'react'
import { useTranslations } from 'next-intl'
import Cards from './Cards'
const Content = () => {
  const t = useTranslations('AboutXP')

  const XPS = [
    {
      title: '10+ سنوات ',
      title_en: '10+ Years',
      Des: 'خبرة',
      Des_en: 'Experience',
      Image: '/XPOne.png',
    },
    {
      title: 'مصر + الخليج',
      title_en: 'Egypt + Gulf',
      Des: 'مناطق الخدمة',
      Des_en: 'Service Areas',
      Image: '/XPTwo.png',
    },
    {
      title: '100+ عميل',
      title_en: '100+ Clients',
      Des: 'شركاء موثوقون',
      Des_en: 'Trusted Partners',
      Image: '/XPThree.png',
    },
    {
      title: '50+ مشروع',
      title_en: '50+ Projects',
      Des: 'انجازات ناجحة',
      Des_en: 'Successful Achievements',
      Image: '/XPFour.png',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">{t('Title')}</h1>
      <p className="text-base text-center mt-4">
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </p>
      <Cards XPS={XPS} />
    </div>
  )
}

export default Content
