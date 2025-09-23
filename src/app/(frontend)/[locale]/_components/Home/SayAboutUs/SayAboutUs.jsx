import React from 'react'
import { useTranslations } from 'next-intl'
import ClientsSwiper from './ClientsSwiper'
import { useState, useEffect } from 'react'
import getClientSaying from '@/app/(frontend)/[locale]/_actions/getClientSaying'
import Spinner from '../../Spinner/Spinner'
const SayAboutUs = ({ motion }) => {
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
    <>
      <div className="max-w-6xl mx-auto p-4 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:text-4xl font-semibold text-center"
        >
          {t('Title')}{' '}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center  mt-4"
        >
          {t('Des')}
        </motion.p>
        {loading ? <Spinner /> : <ClientsSwiper clients={clients} />}
      </div>
    </>
  )
}

export default SayAboutUs
