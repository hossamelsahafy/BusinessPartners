import React from 'react'
import Image from 'next/image'
const ContactImage = () => {
  return (
    <div className="w-full md:w-1/2 flex">
      <Image
        src={'/ContactSection.png'}
        alt="Contact"
        width={800}
        height={800}
        className="object-cover rounded-lg w-full h-auto md:h-full"
      />
    </div>
  )
}

export default ContactImage
