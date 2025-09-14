import React from 'react'
import { useTranslations } from 'next-intl'
import SwiperStories from './SwiperStories'
const Success = () => {
  const t = useTranslations('SuccessStories')
  const Stories = [
    {
      id: 1,
      NameAr: 'شركة ناشئة في التجارة الإلكترونية',
      NameEn: 'E-commerce Startup',
      DesAr:
        'واجهت الشركة تحديًا كبيرًا في إدارة التدفقات النقدية وتحديد التكاليف بدقة. قمنا بتطبيق نظام محاسبي متكامل وربطناه مع منصة ERP. النتيجة: انخفاض الأخطاء المالية بنسبة 40% وزيادة الكفاءة التشغيلية. كما ساعدنا الفريق الإداري على الحصول على تقارير مالية دقيقة بشكل دوري مما سهل قرارات التوسع والنمو. بفضل هذه الحلول، تمكنت الشركة من تحسين تجربة العملاء وزيادة المبيعات بنسبة ملحوظة خلال فترة قصيرة. '.repeat(
          3,
        ),
      DesEn:
        'The startup faced a major challenge in managing cash flow and tracking costs accurately. We implemented a fully integrated accounting system and connected it with an ERP platform. The result: a 40% reduction in financial errors and improved operational efficiency. We also enabled the management team to access accurate periodic financial reports, making it easier to make expansion and growth decisions. Thanks to these solutions, the company improved customer experience and achieved significant sales growth in a short period. '.repeat(
          3,
        ),
      Image: '/Success.png',
    },
    {
      id: 2,
      NameAr: 'مركز طبي متخصص',
      NameEn: 'Specialized Medical Center',
      DesAr:
        'كان المركز الطبي يعاني من صعوبة في متابعة النفقات التشغيلية وإدارة مواعيد المرضى بدقة. قمنا بإنشاء نظام محاسبي وربطه مع نظام حجز المواعيد الإلكتروني. النتيجة: انخفاض الأخطاء في الفواتير الطبية بنسبة 50%، وزيادة رضا المرضى بسبب دقة المواعيد والفوترة. كما ساعد النظام الإدارة في معرفة التكاليف الحقيقية لكل خدمة طبية وبالتالي تحسين التسعير وزيادة الربحية. '.repeat(
          3,
        ),
      DesEn:
        'The medical center struggled with tracking operating expenses and managing patient appointments accurately. We developed an accounting system integrated with their appointment booking platform. The result: a 50% reduction in billing errors and higher patient satisfaction due to accurate scheduling and invoicing. The system also helped management understand the real cost of each medical service, leading to better pricing strategies and improved profitability. '.repeat(
          3,
        ),
      Image: '/Success.png',
    },
    {
      id: 3,
      NameAr: 'شركة مقاولات وإنشاءات',
      NameEn: 'Construction Company',
      DesAr:
        'واجهت الشركة صعوبة في السيطرة على تكاليف المشاريع ومتابعة التدفقات النقدية المتغيرة. قمنا بإنشاء نظام تقارير مالية مخصص لمشروعات البناء. النتيجة: تحسن دقة التنبؤات المالية بنسبة 60%، وانخفاض كبير في التكاليف غير المتوقعة. ساعد هذا الحل الإدارة على ضبط الميزانيات بشكل أفضل، وضمان تسليم المشاريع في الوقت المحدد مع تحقيق ربحية أعلى. '.repeat(
          3,
        ),
      DesEn:
        'The construction company faced difficulties in controlling project costs and managing fluctuating cash flows. We built a custom financial reporting system tailored for construction projects. The result: a 60% improvement in financial forecasting accuracy and a significant reduction in unexpected costs. This solution helped management control budgets more effectively, ensuring projects were delivered on time while achieving higher profitability. '.repeat(
          3,
        ),
      Image: '/Success.png',
    },
    {
      id: 4,
      NameAr: 'شركة عقارية',
      NameEn: 'Real Estate Company',
      DesAr:
        'كانت الشركة العقارية تواجه تحديات في تتبع دفعات العملاء وإدارة عقود البيع. قمنا بإنشاء نظام محاسبي مخصص للعقارات يربط بين إدارة العملاء وإدارة المشاريع. النتيجة: وضوح كامل في التدفقات المالية، وانخفاض نسبة التأخيرات في تحصيل الدفعات بنسبة 35%. كما ساعد النظام في تنظيم العقود وضمان الالتزام بها، مما عزز ثقة العملاء بالشركة وزاد من فرص الاستثمار. '.repeat(
          3,
        ),
      DesEn:
        'The real estate company struggled with tracking customer payments and managing sales contracts. We implemented a tailored accounting system for real estate that connects customer management with project management. The result: full transparency of cash flows and a 35% reduction in payment collection delays. The system also streamlined contract management, ensuring compliance and boosting customer trust, which increased investment opportunities. '.repeat(
          3,
        ),
      Image: '/Success.png',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 mt-14">
      <h1 className="text-2xl text-center font-semibold lg:text-4xl">{t('title')}</h1>
      <p className="text-center mt-4">
        <span className="text-secondary">"</span>
        {t('des')}
        <span className="text-secondary">"</span>
      </p>
      <SwiperStories stories={Stories} />
    </div>
  )
}

export default Success
