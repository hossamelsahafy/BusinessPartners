import React, { useState, useEffect } from 'react'
import Content from './Content'
import { useTranslations } from 'next-intl'
import getChallenges from '@/app/(frontend)/[locale]/_actions/getChallenges'

const Challenges = () => {
  const t = useTranslations('Challenges')
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
    <div>
      <Content
        title={t('Title')}
        description={t('Des')}
        labels={{
          challenges: t('Challenges'),
          chances: t('Chances'),
        }}
        loading={loading}
        challenges={challenges}
      />
    </div>
  )
}

export default Challenges
