import PopUp from './PopUp'
import Image from 'next/image'
import React from 'react'

const Cards = ({ t, motion }) => {
  const Sectors = t.raw('Services')

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-4">
      {Sectors.map((s, idx) => (
        <motion.div
          key={s.Title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="flex items-center flex-col rounded-lg p-4 shadow-[4px_6px_12px_rgba(28,47,140,0.25)] justify-center gap-4"
        >
          <Image src={s.Image} width={150} height={150} alt={s.Title} className="object-center" />
          <p className="text-xl font-semibold lg:text-2xl text-des">{s.Title}</p>
          <p className="text-sm mt-auto">{s.Des}</p>

          <PopUp sector={s} button={t('Button')} />
        </motion.div>
      ))}
    </div>
  )
}

export default Cards
