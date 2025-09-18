'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { FaBriefcase, FaGlobe, FaUsers, FaProjectDiagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Cards from './Cards'
const Content = () => {
  const t = useTranslations('AboutXP')

  const XPS = [
    {
      title: '10+ سنوات ',
      title_en: '10+ Years',
      Des: 'خبرة',
      Des_en: 'Experience',
      Icon: <FaBriefcase className="text-4xl text-des" />,
    },
    {
      title: 'مصر + الخليج',
      title_en: 'Egypt + Gulf',
      Des: 'مناطق الخدمة',
      Des_en: 'Service Areas',
      Icon: <FaGlobe className="text-4xl text-des" />,
    },
    {
      title: '100+ عميل',
      title_en: '100+ Clients',
      Des: 'شركاء موثوقون',
      Des_en: 'Trusted Partners',
      Icon: <FaUsers className="text-4xl text-des" />,
    },
    {
      title: '50+ مشروع',
      title_en: '50+ Projects',
      Des: 'انجازات ناجحة',
      Des_en: 'Successful Achievements',
      Icon: <FaProjectDiagram className="text-4xl text-des" />,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl lg:text-4xl text-center font-bold"
      >
        {t('Title')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-base text-center mt-4"
      >
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </motion.p>
      <Cards XPS={XPS} />
    </div>
  )
}

export default Content
