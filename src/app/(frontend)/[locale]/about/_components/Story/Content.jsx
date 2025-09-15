import React from 'react'
import CardList from './CardList'
const Content = ({ t }) => {
  const stories = [
    {
      title: 'البداية الحماسية',
      des: 'بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا ',
      title_en: 'The Exciting Beginning',
      des_en:
        'Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew.',
    },
    {
      title: 'النمو في السوق المصري',
      des: 'بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا ',
      title_en: 'Growth in the Egyptian Market',
      des_en:
        'Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew.',
    },
    {
      title: 'التوسع إلى الخليج',
      des: 'بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا ',
      title_en: 'Expansion to the Gulf',
      des_en:
        'Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew.',
    },
    {
      title: 'شريك استراتيجي للأعمال',
      des: 'بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا. بدأت رحلتنا مع محمد الألفي، بخبرة قوية في المحاسبة والإدارة المالية. كانت البداية مع عدد محدود من العملاء، لكن مع التزامنا بالجودة ازداد الطلب على خدماتنا ',
      title_en: 'Strategic Business Partner',
      des_en:
        'Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew. Our journey with Mohamed El-Alfy began with strong expertise in accounting and financial management. It started with a small number of clients, but with our commitment to quality, demand for our services grew.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h1 className="text-2xl text-center lg:text-4xl font-semibold mt-4">{t('Title')}</h1>
      <p className="text-base text-center mt-4">
        <span className="text-secondary">"</span>
        {t('Des')}
        <span className="text-secondary">"</span>
      </p>
      <CardList stories={stories} />
    </div>
  )
}

export default Content
