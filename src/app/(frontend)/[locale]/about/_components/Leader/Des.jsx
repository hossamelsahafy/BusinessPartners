import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
const Des = ({ t, locale, motion }) => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 p-4">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <Image
          src="/Main.png"
          alt="Main"
          width={400}
          height={400}
          className="object-contain rounded-lg w-full max-w-[500px] h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`flex flex-col gap-4 text-des text-xl text-start lg:text-left max-w-xl ${locale === 'en' ? 'mr-auto' : 'ml-auto'}`}
      >
        <p className="font-bold text-2xl sm:text-3xl text-start lg:text-4xl">{t('Name')}</p>
        <p className="text-start font-semibold">{t('Position')}</p>
        <p>{t('Para')}</p>

        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 justify-start text-blue-600 hover:underline"
        >
          <FaLinkedinIn className="text-2xl" />
          <span>{t('Icon')}</span>
        </a>
      </motion.div>
    </div>
  )
}

export default Des
