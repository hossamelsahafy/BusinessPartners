import React from 'react'

const Content = ({ t, motion }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">{t('Title')}</h1>
        <p className="text-center  mt-4">
          <span className="text-secondary">"</span>
          {t('Des')}

          <span className="text-secondary">"</span>
        </p>
      </motion.div>
    </>
  )
}

export default Content
