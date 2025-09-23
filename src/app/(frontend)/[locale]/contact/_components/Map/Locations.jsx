'use client'
import React from 'react'
import { FaLink } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Locations = ({ locations }) => {
  const { locale } = useParams()

  return (
    <div className="max-w-6xl flex flex-col p-4 justify-around gap-5">
      {locations.map((l) => (
        <div key={l.Link} className="flex items-center gap-5">
          <p className="flex items-center text-sm sm:text-base font-medium">
            <IoLocationSharp className="text-secondary text-3xl sm:text-4xl mr-2" />
            {l.Location}
          </p>
          <div className={locale === 'en' ? 'ml-auto' : 'mr-auto'}>
            <Link href={l.Link} target="_blank" rel="noopener noreferrer">
              <FaLink className="text-des text-lg sm:text-xl" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Locations
