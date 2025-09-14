'use client'
import Link from 'next/link'
import Image from 'next/image'

const DesktopNav = ({ locale, navLinks, switchPath, otherLocale, t }) => {
  return (
    <div
      className={`hidden md:flex items-center w-full ${
        locale === 'ar' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href={`/${locale}`}>
          <Image src="/Logo.png" width={118.41} height={33} alt="Logo" />
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex flex-1 justify-center">
        <div className="flex gap-6 border border-[#fcf4f4] p-2 rounded-lg">
          {navLinks.map((link, index) => (
            <Link key={index} href={`/${locale}${link.href}`} className="text-black text-base">
              {link.label}
            </Link>
          ))}
          <button onClick={switchPath} className="font-semibold">
            {otherLocale.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DesktopNav
