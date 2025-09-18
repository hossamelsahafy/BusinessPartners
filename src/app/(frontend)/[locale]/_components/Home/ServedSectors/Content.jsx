'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Content = ({ t }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl font-semibold text-center"
      >
        {t('title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center  mt-4"
      >
        <span className="text-secondary">"</span>
        {t('des')}

        <span className="text-secondary">"</span>
      </motion.p>
    </>
  )
}

export default Content
