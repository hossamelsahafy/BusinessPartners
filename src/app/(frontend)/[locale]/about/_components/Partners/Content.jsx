'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Card from './Card'
import { motion } from 'framer-motion'
const Content = () => {
  const t = useTranslations('Partnership')
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl lg:text-4xl text-center font-bold">{t('Title')}</h1>
        <div className="w-12  h-1 bg-des mx-auto mt-2 rounded"></div>
        <p className="text-xl text-blue-500 text-center mt-4">{t('Des')}</p>
      </motion.div>
      <Card t={t} motion={motion} />
    </div>
  )
}

export default Content
