import React from 'react'
import HighlightedDes from './highlightDes'
const Content = ({ t }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold max-w-4xl ">
        <span className="text-secondary">“</span>
        {t('Title')}
        <span className="text-secondary">”</span>
      </h1>
      <HighlightedDes text={t('Des')} />
    </div>
  )
}

export default Content
