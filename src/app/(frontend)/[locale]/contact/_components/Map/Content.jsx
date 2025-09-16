import React from 'react'
import { useTranslations } from 'next-intl'
import MapSection from './MapSection'
import Locations from './Locations'
const Content = () => {
  const t = useTranslations('Map')
  const locations = t.raw('Locations')
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">{t('Title')}</h1>
      <p className="text-center text-base mt-4">
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </p>
      <div className="mt-6 w-full">
        <div className="w-full rounded-lg overflow-hidden shadow-md">
          <MapSection />
        </div>
      </div>
      <Locations locations={locations} />
    </div>
  )
}

export default Content
