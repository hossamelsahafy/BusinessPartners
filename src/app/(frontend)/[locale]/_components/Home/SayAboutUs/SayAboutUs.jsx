'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import ClientsSwiper from './ClientsSwiper'
import { useState, useEffect } from 'react'
import getClientSaying from '@/app/(frontend)/[locale]/_actions/getClientSaying'
import Spinner from '../../Spinner/Spinner'
const SayAboutUs = () => {
  const t = useTranslations('SayAboutUs')
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClientSaying()
      if (data) {
        setClients(data.docs)
      }
      setLoading(false)
    }
    fetchClients()
  }, [])

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">{t('Title')} </h1>
      <p className="text-center  mt-4">{t('Des')}</p>
      {loading ? <Spinner /> : <ClientsSwiper clients={clients} />}
    </div>
  )
}

export default SayAboutUs
