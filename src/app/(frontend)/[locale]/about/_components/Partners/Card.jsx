import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Card = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto border-1 border-zinc-200 rounded-lg p-4 mt-4">
      <div className="flex  justify-center gap-4 p-4">
        <Image src="/IconByte.png" alt="Icon" width={60} height={60} className="object-contain" />
        <Image
          src="/ByteForce.png"
          alt="Byte"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xl lg:text-2xl text-center font-semibold mt-4 text-des">
          {t('SubTitle')}
        </p>
        <p className="text-sm lg:text-xl text-center text-des">{t('SubDes')}</p>
        <Link
          href="https://byteforceinc.com"
          className="py-3 px-12 text-white bg-des font-semibold rounded-lg inline-block mx-auto mt-10 hover:bg-blue-700 transition duration-300"
        >
          {t('Btn')}
        </Link>
      </div>
    </div>
  )
}

export default Card
