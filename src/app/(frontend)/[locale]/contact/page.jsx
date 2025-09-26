import React from 'react'
import Header from './_components/Header/Header'
import ContactSection from './_components/ContactUs/ContactSection'
import Map from './_components/Map/Map'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Contact Us',
    ar: 'تواصل معنا',
  }

  const descriptions = {
    en: 'Get in touch with Business Partners for inquiries, support, or collaboration opportunities. Our team is here to assist you and answer your questions.',
    ar: 'تواصل مع بيزنس بارتنرز للاستفسارات أو الدعم أو فرص التعاون. فريقنا هنا لمساعدتك والإجابة على جميع أسئلتك.',
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
      <ContactSection />
      <Map />
    </div>
  )
}

export default page
