import React from 'react'
import { useTranslations } from 'next-intl'
import Form from './Form'
const ContactSection = () => {
  const t = useTranslations('ContactUs')
  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h1 className="text-center text-2xl font-semibold lg:text-4xl ">{t('Title')}</h1>
      <p className="text-base text-center mt-4">
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </p>
      <Form />
    </div>
  )
}

export default ContactSection
