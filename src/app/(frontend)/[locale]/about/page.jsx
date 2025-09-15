import React from 'react'
import Header from './_components/Header'
import Story from './_components/Story/Story'
import Leader from './_components/Leader/Leader'
import Message from './_components/Message/Message'
import XP from './_components/XP/Xp'
import Partners from './_components/Partners/Partners'
import Choose from './_components/Choose/Choose'

const page = () => {
  return (
    <div>
      <Header />
      <Story />
      <Leader />
      <Message />
      <XP />
      <Partners />
      <Choose />
    </div>
  )
}

export default page
