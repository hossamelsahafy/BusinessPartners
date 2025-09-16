'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import sendEmail from '../../../_actions/sendEmail'
import ContactImage from './ContactImage'

const Form = () => {
  const t = useTranslations('FormItems')
  const { locale } = useParams()
  const isRTL = locale === 'ar'
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    Email: '',
    CompanyName: '',
    phoneNumber: '',
    Message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')
    try {
      const res = await sendEmail(formData)
      if (res.message) {
        setMessage(locale === 'en' ? res.message : 'تم الارسال بنجاح')
        setFormData({
          fullName: '',
          Email: '',
          CompanyName: '',
          phoneNumber: '',
          Message: '',
        })
      } else {
        setError(locale === 'en' ? res.error : 'تعذر الارسال')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
      setTimeout(() => {
        setMessage('')
        setError('')
      }, 5000)
    }
  }

  const handleChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center items-stretch">
      <ContactImage />

      <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-des font-semibold">{t('FullName')}</label>
          <input
            type="text"
            name="fullName"
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full bg-white rounded-md shadow-[4px_6px_12px_rgba(28,47,140,0.25)] p-4"
            placeholder={t('FullNamePlaceHolder')}
            required
            onChange={handleChange}
            value={formData.fullName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-des font-semibold">{t('Email')}</label>
          <input
            type="email"
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full bg-white rounded-md shadow-[4px_6px_12px_rgba(28,47,140,0.25)] p-4"
            placeholder={t('EmailPlaceHolder')}
            required
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-des font-semibold">{t('PhoneNumber')}</label>
          <input
            type="tel"
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full bg-white rounded-md shadow-[4px_6px_12px_rgba(28,47,140,0.25)] p-4"
            placeholder={t('PhoneNumberPlaceHolder')}
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-des font-semibold">{t('CompanyName')}</label>
          <input
            type="text"
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full bg-white rounded-md shadow-[4px_6px_12px_rgba(28,47,140,0.25)] p-4"
            placeholder={t('CompanyPlaceHolder')}
            onChange={handleChange}
            value={formData.CompanyName}
            name="CompanyName"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-des font-semibold">{t('Message')}</label>
          <textarea
            rows={5}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full bg-white rounded-md shadow-[4px_6px_12px_rgba(28,47,140,0.25)] p-4 resize-none"
            placeholder={t('MessagePlaceHolder')}
            required
            name="Message"
            value={formData.Message}
            onChange={handleChange}
          />
        </div>

        {message && <p className="text-lg font-semibold text-green-600">{message}</p>}
        {error && <p className="text-lg font-semibold text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`mt-4 flex items-center justify-center gap-2 bg-des text-white font-semibold py-3 px-6 rounded-lg shadow transition ${
            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-des/90'
          }`}
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? t('BtnLoading') : t('Btn')}
        </button>
      </form>
    </div>
  )
}

export default Form
