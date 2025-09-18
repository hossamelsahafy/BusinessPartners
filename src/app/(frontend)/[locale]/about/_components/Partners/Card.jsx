import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Card = ({ t, motion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto border-1 border-zinc-200 rounded-lg p-4 mt-4"
    >
      <div className="flex  justify-center gap-4 p-4">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/IconByte.png"
          alt="Icon"
          width={60}
          height={60}
          className="object-contain"
        />
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/ByteForce.png"
          alt="Byte"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <p className="text-xl lg:text-2xl text-center font-semibold mt-4 text-des">
          {t('SubTitle')}
        </p>
        <p className="text-sm lg:text-xl text-center text-des">{t('SubDes')}</p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="https://byteforceinc.com"
            className="py-3 px-12 text-white bg-des font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {t('Btn')}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Card
