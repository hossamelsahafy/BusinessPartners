import React from 'react'
import Header from './_components/Header'
import Story from './_components/Story/Story'
import Leader from './_components/Leader/Leader'
import Message from './_components/Message/Message'
import XP from './_components/XP/Xp'
import Partners from './_components/Partners/Partners'
import Choose from './_components/Choose/Choose'

export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'About us',
    ar: 'من نحن',
  }

  const descriptions = {
    en: 'Learn more about Business Partners, our mission, vision, and leadership team.',
    ar: 'تعرّف أكثر على بيزنس بارتنرز، رسالتنا، رؤيتنا وفريق القيادة.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
    },
  }
}

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
