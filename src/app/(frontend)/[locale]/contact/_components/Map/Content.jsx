'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import MapSection from './MapSection'
import Locations from './Locations'
import { motion } from 'framer-motion'
const Content = () => {
  const t = useTranslations('Map')
  const locations = t.raw('Locations')
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto mt-10"
      id="location"
    >
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">{t('Title')}</h1>
      <p className="text-center text-base mt-4">
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </p>
      <div className="mt-6 w-full">
        <div className="w-full rounded-lg overflow-hidden">
          <MapSection />
        </div>
      </div>
      <Locations locations={locations} />
    </motion.div>
  )
}

export default Content
