'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const Cards = ({ Messages, t }) => {
  const { locale } = useParams()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {Messages.map((m) => (
        <div
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
        </div>
      ))}
    </div>
  )
}

export default Cards
