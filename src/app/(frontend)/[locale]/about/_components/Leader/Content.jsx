import React from 'react'
import { useTranslations } from 'next-intl'
import Des from './Des'
const Content = () => {
  const t = useTranslations('AboutLeaders')
  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h1 className="text-2xl lg:text-4xl text-center font-semibold">{t('Title')}</h1>
      <p className="text-2xl text-des mt-4 text-center">{t('Des')}</p>
      <Des t={t} />
    </div>
  )
}

export default Content
