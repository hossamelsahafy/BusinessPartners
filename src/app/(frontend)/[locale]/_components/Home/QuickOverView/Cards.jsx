'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Cards = ({ services }) => {
  return (
    <motion.div
      className="flex flex-wrap w-full items-center justify-center mt-4 gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {services.map((s, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 shadow-[4px_4px_8px_rgba(0,0,0,0.20)] rounded-md p-3 min-w-[150px] bg-white"
        >
          <Image src="/Subtract.png" alt="Icon" width={20} height={20} />
          <p>{s}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Cards
