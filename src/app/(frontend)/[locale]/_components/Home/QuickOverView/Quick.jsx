'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Cards from './Cards'
import { motion } from 'framer-motion'

const Quick = () => {
  const t = useTranslations('FastAbout')
  const services = t.raw('Services')

  return (
    <div className="max-w-6xl mt-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center 
             text-lg sm:text-2xl lg:text-4xl font-semibold gap-2 sm:gap-4 text-center sm:text-left"
      >
        <p className="font-semibold">{t('title')}</p>
        <div className="flex items-center gap-1">
          <span className="text-secondary"> “</span>
          <span>{t('Span')}</span>
          <span className="text-secondary">”</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-4 p-2"
      >
        <span className="text-secondary">"</span>
        {t('para')}
        <span className="text-secondary">"</span>
      </motion.p>

      <Cards services={services} />
    </div>
  )
}

export default Quick
