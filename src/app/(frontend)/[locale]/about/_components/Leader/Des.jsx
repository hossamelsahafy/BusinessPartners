import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
const Des = ({ t, locale }) => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 p-4">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src="/Main.png"
          alt="Main"
          width={400}
          height={400}
          className="object-contain rounded-lg w-full max-w-[500px] h-auto"
        />
      </div>

      {/* Text */}
      <div
        className={`flex flex-col gap-4 text-des text-xl text-center lg:text-left max-w-xl ${locale === 'en' ? 'mr-auto' : 'ml-auto'}`}
      >
        <p className="font-bold text-2xl sm:text-3xl text-start lg:text-4xl">{t('Name')}</p>
        <p className="text-start font-semibold">{t('Position')}</p>
        <p>{t('Para')}</p>

        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 justify-center lg:justify-start text-blue-600 hover:underline"
        >
          <FaLinkedinIn className="text-2xl" />
          <span>{t('Icon')}</span>
        </a>
      </div>
    </div>
  )
}

export default Des
