import Image from 'next/image'
import React from 'react'

const Cards = ({ t }) => {
  const Sectors = t.raw('Sectors')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-4">
      {Sectors.map((s) => (
        <div
          key={s.Name}
          className="flex items-center flex-col rounded-lg shadow-[4px_6px_12px_rgba(28,47,140,0.25)] p-4 justify-center gap-4"
        >
          <Image src={s.Image} width={150} height={150} alt={s.Name} className="object-center" />
          <p className="text-xl font-semibold lg:text-2xl text-des">{s.Name}</p>
          <p className="text-sm mt-auto">{s.des}</p>
          <button className="text-sm text-des font-semibold mt-auto">{t('Button')}</button>
        </div>
      ))}
    </div>
  )
}

export default Cards
