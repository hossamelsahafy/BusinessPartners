import React from 'react'
import { useTranslations } from 'next-intl'
import Swiper from './Swiper'
const Content = () => {
  const t = useTranslations('Choose')

  const Why = [
    {
      Header: 92,
      Title: 'إدارة مالية ناجحة',
      TitleEn: 'Successful Financial Management',
      Des: 'Improving companies’ cash flows and enhancing the accuracy of financial reports across different sectors.',
      DesAr:
        'تحسين التدفقات النقدية للشركات وزيادة دقة التقارير المالية لعملائنا في مختلف القطاعات.',
    },
    {
      Header: 85,
      Title: 'الالتزام الضريبي',
      TitleEn: 'Tax Compliance',
      Des: 'We have helped dozens of companies achieve tax compliance while reducing risks and potential penalties.',
      DesAr: 'ساعدنا عشرات الشركات على تحقيق الامتثال الضريبي وتقليل المخاطر والغرامات المحتملة.',
    },
    {
      Header: 75,
      Title: 'التحول الرقمي والتشغيلي',
      TitleEn: 'Digital & Operational Transformation',
      Des: 'We supported businesses in automating processes with ERP and digital marketing solutions that boosted efficiency.',
      DesAr: 'دعمنا الشركات في أتمتة عملياتها باستخدام ERP وحلول تسويق رقمي عززت كفاءتها.',
    },
    {
      Header: 80,
      Title: 'استشارات استراتيجية',
      TitleEn: 'Strategic Consulting',
      Des: 'Providing expert guidance to help companies build sustainable growth strategies and stay ahead of competition.',
      DesAr:
        'تقديم استشارات متخصصة لمساعدة الشركات على بناء استراتيجيات نمو مستدامة والتفوق على المنافسة.',
    },
    {
      Header: 70,
      Title: 'تطوير الموارد البشرية',
      TitleEn: 'Human Resources Development',
      Des: 'Enhancing talent management and training programs to empower employees and improve organizational performance.',
      DesAr: 'تعزيز إدارة المواهب وبرامج التدريب لتمكين الموظفين وتحسين أداء المؤسسات.',
    },
    {
      Header: 85,
      Title: 'إدارة المخاطر',
      TitleEn: 'Risk Management',
      Des: 'Implementing proactive frameworks to identify, assess, and mitigate potential business risks effectively.',
      DesAr: 'تطبيق أطر عمل استباقية لتحديد المخاطر المحتملة وتقييمها والحد منها بشكل فعّال.',
    },
    {
      Header: 99,
      Title: 'رضا العملاء',
      TitleEn: 'Customer Satisfaction',
      Des: 'Achieving outstanding client satisfaction through tailored solutions that deliver measurable impact.',
      DesAr: 'تحقيق رضا العملاء بشكل استثنائي عبر حلول مخصصة تحقق نتائج ملموسة.',
    },
  ]

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-10 p-4" id="why-us">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">{t('Title')}</h1>
        <p className="text-base text-center mt-4">
          <span className="text-secondary">"</span>
          {t('Des')}
          <span className="text-secondary">"</span>
        </p>
        <Swiper Why={Why} />
      </div>
    </div>
  )
}

export default Content
