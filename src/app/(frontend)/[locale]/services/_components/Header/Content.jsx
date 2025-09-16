import React from 'react'

const Content = ({ t }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold max-w-4xl ">
        <span className="text-secondary">"</span>
        {t('Title')}
        <span className="text-secondary">"</span>
      </h1>
      <h2 className="mt-4 max-w-3xl text-sm md:text-lg font-medium">
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </h2>
    </div>
  )
}

export default Content
