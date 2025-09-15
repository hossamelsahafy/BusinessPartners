import React from 'react'
import Content from './Content'
import { useTranslations } from 'next-intl'
const Story = () => {
  const t = useTranslations('AboutStory')

  return (
    <div>
      <Content t={t} />
    </div>
  )
}

export default Story
