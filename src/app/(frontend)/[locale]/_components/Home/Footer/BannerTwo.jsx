'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
const BannerTwo = () => {
  const t = useTranslations('BannerTwo')
  const { locale } = useParams()
  return (
    <div className="relative max-w-6xl mx-auto h-64 overflow-hidden rounded-lg my-15">
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-gray-300" />

        <div
          className={`absolute top-0 h-full w-1/3 ${
            locale === 'ar' ? 'left-0' : locale === 'en' ? 'right-0 rotate-180' : ' origin-center'
          }`}
        >
          <div className="relative w-full h-full">
            <Image src="/Grid.png" fill alt="Right side banner" />
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 max-w-lg">
        <h2 className=" font-bold text-black">{t('title')}</h2>
        <p className="mt-2 text-lg text-black">{t('des')}</p>

        <div className="flex flex-row gap-4 mt-4">
          <Link
            href={`/${locale}/services`}
            className="bg-secondary px-6 py-3 rounded-3xl text-white hover:bg-yellow-600 transition duration-300 cursor-pointer inline-block text-center"
          >
            {t('ButtonOne')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-secondary px-6 py-3 rounded-3xl text-white hover:bg-yellow-600 transition duration-300 cursor-pointer inline-block text-center ml-4"
          >
            {t('ButtonTwo')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerTwo
