'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'

const PopUp = ({ sector, button }) => {
  const [open, setOpen] = useState(false)
  const { locale } = useParams()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-base text-des font-semibold cursor-pointer mt-auto"
      >
        {button}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)}></div>

          <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 z-10">
            <h2 className="text-xl font-bold mb-4 text-des">{sector?.Title}</h2>
            <p className="whitespace-pre-line text-gray-700">{sector?.PopUpDes}</p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-4 py-2 cursor-pointer font-semibold bg-des text-white rounded-lg hover:opacity-90"
            >
              {locale === 'en' ? 'Close' : 'اغلاق'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUp
