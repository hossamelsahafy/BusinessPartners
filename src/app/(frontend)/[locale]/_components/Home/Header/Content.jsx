'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'

const Content = ({ t }) => {
  const router = useRouter()
  const { locale } = useParams()
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold max-w-4xl ">
        {t('TitleOne')}
        <span className="text-secondary">“</span>
        <span className="">{t('SpanOne')}</span>
        <span className="text-secondary">”</span>
      </h1>
      <h2 className="mt-4 max-w-3xl text-sm md:text-lg font-medium">
        <span className="text-secondary">"</span>
        {t('TitleTwo')}
        <span className="text-secondary">"</span>
      </h2>

      <button
        onClick={() => router.push(`${locale}/contact`)}
        className="mt-10 bg-secondary hover:bg-yellow-600 transition duration-300 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg"
      >
        {t('Button')}
      </button>
    </div>
  )
}

export default Content
