import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ContactImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 flex"
    >
      <Image
        src={'/ContactSection.png'}
        alt="Contact"
        width={800}
        height={800}
        className="object-cover rounded-lg w-full h-auto md:h-full"
      />
    </motion.div>
  )
}

export default ContactImage
