'use client'
import React from 'react'
import Header from './_components/Header/Header'
import ProvidedServices from './_components/ProvidedServices/ProvidedServices'
import Stories from '../_components/Home/SuccessStory/Stories'
const page = () => {
  return (
    <div>
      <Header />
      <ProvidedServices />
      <Stories />
    </div>
  )
}

export default page
