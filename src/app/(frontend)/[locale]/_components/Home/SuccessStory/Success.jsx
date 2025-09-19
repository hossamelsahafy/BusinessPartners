'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import SwiperStories from './SwiperStories'
import { motion } from 'framer-motion'
import Spinner from '@/app/(frontend)/[locale]/_components/Spinner/Spinner'

const Success = ({ loading, stories }) => {
  const t = useTranslations('SuccessStories')

  return (
    <div className="max-w-6xl mx-auto p-4 mt-14">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl text-center font-semibold lg:text-4xl"
      >
        {t('title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-4"
        viewport={{ once: true }}
      >
        <span className="text-secondary">"</span>
        {t('des')}
        <span className="text-secondary">"</span>
      </motion.p>

      {loading ? <Spinner /> : <SwiperStories stories={stories} />}
    </div>
  )
}

export default Success
