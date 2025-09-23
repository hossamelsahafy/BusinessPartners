'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const BannerTwo = () => {
  const t = useTranslations('BannerTwo')
  const { locale } = useParams()
  return (
    <div className="relative max-w-6xl mx-auto min-h-40 sm:min-h-56 md:h-64 overflow-hidden rounded-lg my-15">
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-gray-300" />

        <div
          className={`absolute top-0 h-full w-1/3 ${
            locale === 'ar' ? 'left-0' : locale === 'en' ? 'right-0 rotate-180' : 'origin-center'
          }`}
        >
          <div className="relative w-full h-full">
            <Image src="/Grid.png" fill alt="Right side banner" />
          </div>
        </div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 max-w-lg">
        <h2 className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {t('title')}
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-black">{t('des')}</p>

        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          <Link
            href={`/${locale}/services`}
            className="bg-secondary px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-3xl text-xs sm:text-sm md:text-base text-white hover:bg-yellow-600 transition duration-300 cursor-pointer inline-block text-center"
          >
            {t('ButtonOne')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-secondary px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-3xl text-xs sm:text-sm md:text-base text-white hover:bg-yellow-600 transition duration-300 cursor-pointer inline-block text-center"
          >
            {t('ButtonTwo')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerTwo
