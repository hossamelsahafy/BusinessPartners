import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Content from './Content'
import SearchBar from './SearchBar'
const Header = () => {
  const t = useTranslations('BannerOne')
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image src="/Banner-One.png" alt="Banner" fill priority className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 text-white">
          <Content t={t} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center">{/* <SearchBar t={t} /> */}</div>
    </>
  )
}

export default Header
