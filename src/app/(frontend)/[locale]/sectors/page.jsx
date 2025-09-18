'use client'
import React from 'react'
import Header from './_components/Header/Header'
import ServedSectors from '../_components/Home/ServedSectors/ServedSectors'
import Challenges from './_components/Challenges/Challenges'
const page = () => {
  return (
    <div>
      <Header />
      <ServedSectors />
      <Challenges />
    </div>
  )
}

export default page
