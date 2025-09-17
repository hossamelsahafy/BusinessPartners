'use client'
import React from 'react'
import ChallengesSwiper from './ChallengesSwiper'
import { useState, useEffect } from 'react'
import Spinner from '@/app/(frontend)/[locale]/_components/Spinner/Spinner'
import getChallenges from '@/app/(frontend)/[locale]/_actions/getChallenges'
const Content = ({ title, description, labels }) => {
  const [loading, setLoading] = useState(true)
  const [challenges, setChallenges] = useState([])
  useEffect(() => {
    const fetchChallenges = async () => {
      const data = await getChallenges()
      if (data) {
        setChallenges(data.docs)
      }
      setLoading(false)
    }
    fetchChallenges()
  }, [])
  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h1 className="text-2xl lg:text-4xl text-center">{title}</h1>
      <p className="text-base text-center mt-4">
        <span className="text-secondary">"</span>
        {description}
        <span className="text-secondary">"</span>
      </p>
      {loading ? <Spinner /> : <ChallengesSwiper Challenges={challenges} labels={labels} />}
    </div>
  )
}

export default Content
