import React from 'react'
import { useTranslations } from 'next-intl'
import Card from './Card'
const Content = () => {
  const t = useTranslations('Partnership')
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">{t('Title')}</h1>
      <div className="w-12  h-1 bg-des mx-auto mt-2 rounded"></div>
      <p className="text-xl text-blue-500 text-center mt-4">{t('Des')}</p>
      <Card t={t} />
    </div>
  )
}

export default Content
