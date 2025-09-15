import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const Des = ({ t }) => {
  return (
    <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
      <Image
        src={'/Main.png'}
        alt="Main"
        width={400}
        height={400}
        className="object-contain rounded-lg w-full lg:w-[400px]"
      />

      <div className="flex flex-col gap-4 p-4 text-des text-xl items-center lg:items-start text-center lg:text-left">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">{t('Name')}</p>
        <p className="font-semibold">{t('Position')}</p>
        <p>{t('Para')}</p>

        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaLinkedinIn />
          <span>{t('Icon')}</span>
        </a>
      </div>
    </div>
  )
}

export default Des
