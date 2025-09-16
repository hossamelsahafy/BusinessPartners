import React from 'react'
import Content from './Content'
import { useTranslations } from 'next-intl'
const Challenges = () => {
  const t = useTranslations('Challenges')
  return (
    <div>
      <Content
        title={t('Title')}
        description={t('Des')}
        labels={{
          challenges: t('Challenges'),
          chances: t('Chances'),
        }}
      />
    </div>
  )
}

export default Challenges
