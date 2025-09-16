import React from 'react'
import { useTranslations } from 'next-intl'
import Content from './Content'
import Cards from './Cards'
const ProvidedServices = () => {
  const t = useTranslations('ProvidedServices')
  return (
    <div className="max-w-6xl mx-auto p-4 mt-15">
      <Content t={t} />
      <Cards t={t} />
    </div>
  )
}

export default ProvidedServices
