import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Content from './Content'
const Header = () => {
  const t = useTranslations('AboutBanner')
  return (
    <div className="relative w-full h-[500px]">
      <Image src="/AboutBanner.png" alt="Banner" fill priority className="object-cover" />
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 text-white">
        <Content t={t} />
      </div>
    </div>
  )
}

export default Header
