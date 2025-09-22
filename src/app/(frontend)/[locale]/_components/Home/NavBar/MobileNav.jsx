'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

const MobileNav = ({ locale, navLinks, menuOpen, setMenuOpen, switchPath, otherLocale, t }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [menuOpen])

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center">
        <button
          className="focus:outline-none text-2xl p-4 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        <Link href={`/${locale}`}>
          <Image src="/Logo.png" width={80} height={80} alt="Logo" />
        </Link>
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            menuOpen ? 'opacity-30 pointer-events-auto' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 left-0 h-full bg-white border-r shadow-md
      w-full sm:w-full md:w-1/2
      flex flex-col items-center justify-center gap-6 px-4
      transition-all duration-300 ease-in-out transform
      ${menuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0'}
    `}
        >
          <button
            className="absolute top-4 right-4 text-4xl cursor-pointer font-bold"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`/${locale}/${link.href}`}
              className="text-xl font-medium text-center w-full hover:underline transition-transform duration-200 hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              switchPath()
              setMenuOpen(false)
            }}
            className="text-lg font-semibold px-4 py-2 bg-gray-100 rounded-full transition-all duration-200 hover:bg-gray-200"
          >
            {otherLocale.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
