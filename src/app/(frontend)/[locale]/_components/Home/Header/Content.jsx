'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
const Content = ({ t }) => {
  const { locale } = useParams()
  return (
    <div>
      <h1 className="text-xl md:text-4xl font-bold max-w-4xl ">
        {t('TitleOne')}
        <span className="text-secondary"> “ </span>
        <span className="">{t('SpanOne')}</span>
        <span className="text-secondary"> ” </span>
      </h1>
      <h2 className="mt-4 max-w-3xl text-sm md:text-lg font-medium">
        <span className="text-secondary">"</span>
        {t('TitleTwo')}
        <span className="text-secondary">"</span>
      </h2>

      <Link
        href={`/${locale}/contact`}
        className="mt-10 bg-secondary hover:bg-yellow-600 transition duration-300 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg inline-block text-center"
      >
        {t('Button')}
      </Link>
    </div>
  )
}

export default Content
