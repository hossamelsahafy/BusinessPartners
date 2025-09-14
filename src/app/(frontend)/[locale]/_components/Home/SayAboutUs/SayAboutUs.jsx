import React from 'react'
import { useTranslations } from 'next-intl'
import ClientsSwiper from './ClientsSwiper'
const SayAboutUs = () => {
  const t = useTranslations('SayAboutUs')
  const clients = [
    {
      NameEn: 'Eng. Rashed Al-Zubaidi',
      NameAr: 'م. راشد الزبيدي',
      PositionEn: 'Finance Manager at a Startup',
      PositionAr: 'مدير مالي في شركة ناشئة',
      DesAr:
        'بفضل حلول Business Partners استطعنا تحسين الإدارة المالية وتقليل الأخطاء المحاسبية بشكل ملحوظ. فريقهم محترف وسهل التعامل معه.',
      DesEn:
        'The services provided helped us improve internal processes and greatly increase employee satisfaction.',
      Image: '/client1.png',
      stars: 5,
    },
    {
      NameEn: 'Sarah Ahmed',
      NameAr: 'سارة أحمد',
      PositionEn: 'HR Director at TechCorp',
      PositionAr: 'مديرة الموارد البشرية في شركة تك كورب',
      DesAr: 'الخدمات المقدمة ساعدتنا على تحسين العمليات الداخلية وزيادة رضا الموظفين بشكل كبير.',
      DesEn:
        'The services provided helped us improve internal processes and greatly increase employee satisfaction.',
      Image: '/client1.png',
      stars: 4,
    },
    {
      NameEn: 'Omar Al-Fahad',
      NameAr: 'عمر الفهد',
      PositionEn: 'CEO at Innovatech',
      PositionAr: 'الرئيس التنفيذي في إينوفاتيك',
      DesAr: 'خبرة الفريق كانت واضحة في كل خطوة، مما ساهم في نجاح مشاريعنا.',
      DesEn:
        "The team's expertise was evident at every step, contributing to the success of our projects.",
      Image: '/client1.png',
      stars: 3,
    },
    {
      NameEn: 'Lina Khalid',
      NameAr: 'لينا خالد',
      PositionEn: 'Marketing Manager at BrightSolutions',
      PositionAr: 'مديرة التسويق في برايت سولوشنز',
      DesAr: 'لقد أحدثت استراتيجياتهم فرقاً كبيراً في نتائج حملاتنا التسويقية.',
      DesEn: 'Their strategies made a huge difference in the results of our marketing campaigns.',
      Image: '/client1.png',
      stars: 2,
    },
    {
      NameEn: 'Mohammed Saleh',
      NameAr: 'محمد صالح',
      PositionEn: 'Operations Head at GlobalTrade',
      PositionAr: 'رئيس العمليات في جلوبال تريد',
      DesAr: 'الدعم المستمر والتوجيه من الفريق جعل إدارة العمليات أكثر سلاسة وفعالية.',
      DesEn:
        'Continuous support and guidance from the team made operations management smoother and more efficient.',
      Image: '/client1.png',
      stars: 1,
    },
  ]
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl lg:text-4xl text-center">{t('Title')} </h1>
      <p className="text-center text-sm mt-4">{t('Des')}</p>
      <ClientsSwiper clients={clients} />
    </div>
  )
}

export default SayAboutUs
