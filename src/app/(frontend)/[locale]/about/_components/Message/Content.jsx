'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Cards from './Cards'
import { motion } from 'framer-motion'
const Content = () => {
  const t = useTranslations('AboutMessage')

  const Messages = [
    {
      title: 'الرؤية',
      title_en: 'Vision',
      Des: 'أن نصبح الشريك الاستراتيجي الأول للشركات في مصر والخليج، من خلال تقديم حلول مالية وإدارية ورقمية متكاملة تعزز النمو المستدام .',
      Des_en:
        'To become the leading strategic partner for companies in Egypt and the Gulf by providing integrated financial, administrative, and digital solutions that foster sustainable growth.',
      Image: '/VisionOne.png',
    },
    {
      title: 'الرسالة',
      title_en: 'Mission',
      Des: 'تقديم خدمات استشارية وإدارية عالية الجودة تساعد عملاءنا على اتخاذ قرارات مبنية على البيانات، وتطوير عملياتهم، وتحقيق كفاءة تشغيلية وأرباح أعلى. ',
      Des_en:
        'To deliver high-quality consulting and management services that help our clients make data-driven decisions, improve their operations, and achieve higher efficiency and profitability.',
      Image: '/VisionTwo.png',
    },
    {
      title: 'القيم',
      title_en: 'Values',
      Des: 'النزاهة، الشفافية، والالتزام هي ركائز أساسية نعمل بها في كل مشروع ومع كل عميل .',
      Des_en:
        'Integrity, transparency, and commitment are the core pillars we uphold in every project and with every client.',
      Image: '/VisionThree.png',
    },
    {
      title: 'الأهداف',
      title_en: 'Goals',
      Des: 'تمكين الشركات من النمو بثقة، ودعمها بالحلول المالية والإدارية والرقمية التي تضمن لها النجاح على المدى الطويل .',
      Des_en:
        'To empower companies to grow with confidence by supporting them with financial, administrative, and digital solutions that ensure long-term success.',
      Image: '/VisionFour.png',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4" id="vision">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl text-center font-bold"
      >
        {t('Title')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-base text-center mt-4"
      >
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </motion.p>
      <Cards t={t('Button')} Messages={Messages} motion={motion} />
    </div>
  )
}

export default Content
