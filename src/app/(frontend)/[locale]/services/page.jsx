import React from 'react'
import Header from './_components/Header/Header'
import ProvidedServices from './_components/ProvidedServices/ProvidedServices'
import Success from '../_components/Home/SuccessStory/Success'
const page = () => {
  return (
    <div>
      <Header />
      <ProvidedServices />
      <Success />
    </div>
  )
}

export default page
