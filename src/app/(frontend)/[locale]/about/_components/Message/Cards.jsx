'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const Cards = ({ Messages, motion }) => {
  const { locale } = useParams()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {Messages.map((m, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          key={m.title}
          className="flex flex-col  bg-white shadow-[1px_2px_4px_rgba(28,47,140,0.3)] rounded-lg overflow-hidden"
        >
          <div className="w-full h-48 relative">
            <Image src={m.Image} alt="Message" fill className="object-cover" />
          </div>

          <p className="text-des mt-4 text-xl font-semibold text-center">
            {locale === 'en' ? m.title_en : m.title}
          </p>

          <p className="my-4 text-sm  text-center">{locale === 'en' ? m.Des_en : m.Des}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Cards
