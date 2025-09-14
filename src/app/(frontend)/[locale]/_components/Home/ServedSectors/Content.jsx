import React from 'react'

const Content = ({ t }) => {
  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">{t('title')}</h1>
      <p className="text-center  mt-4">
        <span className="text-secondary">"</span>
        {t('des')}

        <span className="text-secondary">"</span>
      </p>
    </>
  )
}

export default Content
