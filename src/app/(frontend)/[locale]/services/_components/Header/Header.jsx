import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Content from './Content'
const Header = () => {
  const t = useTranslations('ServicesBanner')
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image src="/ServiceBanner.png" alt="Banner" fill priority className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 text-white">
          <Content t={t} />
        </div>
      </div>
    </>
  )
}

export default Header
