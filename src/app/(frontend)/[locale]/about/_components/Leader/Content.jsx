'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Des from './Des'
import { useParams } from 'next/navigation'
const Content = () => {
  const t = useTranslations('AboutLeaders')
  const { locale } = useParams()
  return (
    <div className="max-w-6xl mx-auto p-4 mt-10" id="who">
      <h1 className="text-2xl lg:text-4xl text-center font-semibold">{t('Title')}</h1>
      <p className="text-2xl text-des mt-4 text-center">{t('Des')}</p>
      <Des t={t} locale={locale} />
    </div>
  )
}

export default Content
