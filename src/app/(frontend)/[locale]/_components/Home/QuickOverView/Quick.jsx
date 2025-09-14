import React from 'react'
import { useTranslations } from 'next-intl'
import Cards from './Cards'

const Quick = () => {
  const t = useTranslations('FastAbout')
  const services = t.raw('Services')

  return (
    <div className="max-w-6xl mt-10 mx-auto">
      <div className="flex items-center justify-center text-2xl lg:text-4xl font-semibold gap-4">
        <p className="font-semibold">{t('title')}</p>
        <span className="text-secondary">“</span>
        <span>{t('Span')}</span>
        <span className="text-secondary">”</span>
      </div>
      <p className="text-center  mt-4 p-2">
        <span className="text-secondary">"</span>
        {t('para')}
        <span className="text-secondary">"</span>
      </p>
      <Cards services={services} />
    </div>
  )
}

export default Quick
