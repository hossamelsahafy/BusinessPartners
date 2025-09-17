'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
const Services = () => {
  const t = useTranslations('MainServices')
  const services = t.raw('Services')
  const router = useRouter()
  const { locale } = useParams()
  return (
    <div className="max-w-6xl mx-auto mt-15 p-4">
      <p className="text-2xl lg:text-4xl text-center font-semibold">{t('title')}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {services.map((s) => (
          <div
            key={s.Name}
            className="flex flex-col border border-gray-100 shadow-[4px_4px_2px_rgba(0,0,0,0.10)] rounded-lg overflow-hidden"
          >
            <Image
              src={s.Image}
              width={400}
              height={400}
              className="rounded-t-lg object-cover w-full h-64"
              alt={s.Name}
            />

            <div className="p-4 text-start font-semibold text-des">
              <p className="text-lg">{s.Name}</p>
              <p className="text-sm">{s.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => router.push(`${locale}/contact`)}
          className="bg-secondary  text-white rounded-lg px-12 py-2 font-semibold mt-10 transition cursor-pointer duration-300 hover:bg-yellow-600"
        >
          {t('Button')}
        </button>
      </div>
    </div>
  )
}

export default Services
