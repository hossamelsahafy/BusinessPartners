import Image from 'next/image'
import React from 'react'

const Cards = ({ services }) => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center mt-4 gap-4">
      {services.map((s, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 shadow-[4px_4px_8px_rgba(0,0,0,0.20)] rounded-md p-3 min-w-[150px] bg-white"
        >
          <Image src="/Subtract.png" alt="Icon" width={20} height={20} />
          <p>{s}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
