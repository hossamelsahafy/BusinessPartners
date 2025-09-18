'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Services = () => {
  const t = useTranslations('MainServices')
  const services = t.raw('Services')
  const { locale } = useParams()

  return (
    <div className="max-w-6xl mx-auto mt-15 p-4">
      <motion.p
        className="text-2xl lg:text-4xl text-center font-semibold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('title')}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {services.map((s, i) => (
          <motion.div
            key={s.Name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col h-full border border-gray-100 shadow-[4px_4px_2px_rgba(0,0,0,0.10)] rounded-lg overflow-hidden"
          >
            <Image
              src={s.Image}
              width={400}
              height={400}
              className="rounded-t-lg object-cover w-full h-64"
              alt={s.Name}
            />

            <div className="flex flex-col flex-1 p-4 text-start font-semibold">
              <p className="text-lg text-des mb-auto">{s.Name}</p>
              <p className="text-sm text-gray-600 mb-auto">{s.des}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <Link
          href={`/${locale}/services`}
          className="bg-secondary text-white rounded-lg px-12 py-2 font-semibold mt-10 transition cursor-pointer duration-300 hover:bg-yellow-600"
        >
          {t('Button')}
        </Link>
      </motion.div>
    </div>
  )
}

export default Services
