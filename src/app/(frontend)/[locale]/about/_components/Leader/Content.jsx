'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Des from './Des'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
const Content = () => {
  const t = useTranslations('AboutLeaders')
  const { locale } = useParams()
  return (
    <div className="max-w-6xl mx-auto p-4 mt-10" id="who">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl text-center font-semibold"
      >
        {t('Title')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl text-des mt-4 text-center"
      >
        {t('Des')}
      </motion.p>
      <Des t={t} locale={locale} motion={motion} />
    </div>
  )
}

export default Content
