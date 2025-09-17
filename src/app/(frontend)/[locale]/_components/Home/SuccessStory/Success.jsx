'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import SwiperStories from './SwiperStories'
import getStories from '@/app/(frontend)/[locale]/_actions/GetStories'
import { useState, useEffect } from 'react'

import Spinner from '@/app/(frontend)/[locale]/_components/Spinner/Spinner'

const Success = () => {
  const t = useTranslations('SuccessStories')
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories()
      if (data) {
        setStories(data.docs)
      }
      setLoading(false)
    }

    fetchStories()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-4 mt-14">
      <h1 className="text-2xl text-center font-semibold lg:text-4xl">{t('title')}</h1>
      <p className="text-center mt-4">
        <span className="text-secondary">"</span>
        {t('des')}
        <span className="text-secondary">"</span>
      </p>

      {loading ? <Spinner /> : <SwiperStories stories={stories} />}
    </div>
  )
}

export default Success
