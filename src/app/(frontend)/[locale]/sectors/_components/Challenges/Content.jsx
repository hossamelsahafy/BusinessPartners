import React from 'react'
import ChallengesSwiper from './ChallengesSwiper'
const Content = ({ title, description, labels }) => {
  const Challenges = [
    {
      Challenges: `تعقيد الأنظمة المالية والإدارية.
صعوبة الامتثال الضريبي والقانوني.
ضعف البنية الرقمية والتحول الرقمي البطيء.
المنافسة الشرسة في الأسواق المحلية والإقليمية.`,
      ChallengesEn: `Complexity of financial and administrative systems.
Difficulty in tax and legal compliance.
Weak digital infrastructure and slow digital transformation.
Intense competition in local and regional markets.`,
      Chances: `اعتماد حلول رقمية مبتكرة مثل Odoo ERP.
التوسع في الأسواق الخليجية والدولية.
زيادة الطلب على الاستشارات المالية والإدارية المتخصصة.
تنامي أهمية التسويق الرقمي لتعزيز الحضور في السوق.`,
      ChancesEn: `Adoption of digital solutions like Odoo ERP.

Expansion into Gulf and global markets.

Rising demand for financial & admin consulting.

Growing role of digital marketing.`,
      Image: '/challenges-cover.png',
    },
    {
      Challenges: `ارتفاع تكاليف التشغيل والإنتاج.
نقص الكفاءات البشرية المؤهلة.
تقلب أسعار المواد الخام.`,
      ChallengesEn: `High operating and production costs.
Lack of qualified human resources.
Volatility in raw material prices.`,
      Chances: `الاستثمار في الأتمتة والذكاء الاصطناعي لتقليل التكاليف.
تدريب الكفاءات وبناء القدرات الداخلية.
إيجاد موردين جدد وتنويع مصادر التوريد.`,
      ChancesEn: `Investing in automation and AI to reduce costs.
Training talent and building internal capabilities.
Finding new suppliers and diversifying sourcing.`,
      Image: '/challenges-cover.png',
    },
    {
      Challenges: `تغيرات القوانين والتشريعات بشكل متسارع.
مخاطر الامتثال وضعف أنظمة الحوكمة.`,
      ChallengesEn: `Rapid changes in laws and regulations.
Compliance risks and weak governance systems.`,
      Chances: `تعزيز أنظمة الحوكمة والشفافية.
الاستعانة بمستشارين قانونيين متخصصين.
اعتماد أنظمة إدارة المخاطر.`,
      ChancesEn: `Strengthening governance and transparency systems.
Engaging specialized legal advisors.
Adopting risk management systems.`,
      Image: '/challenges-cover.png',
    },
    {
      Challenges: `تراجع ثقة العملاء.
ضعف الولاء للعلامة التجارية.`,
      ChallengesEn: `Declining customer trust.
Weak brand loyalty.`,
      Chances: `الاستثمار في تجربة العملاء وخدمات ما بعد البيع.
إطلاق حملات تسويقية مبتكرة لتعزيز الولاء.`,
      ChancesEn: `Investing in customer experience and after-sales services.
Launching innovative marketing campaigns to boost loyalty.`,
      Image: '/challenges-cover.png',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h1 className="text-2xl lg:text-4xl text-center">{title}</h1>
      <p className="text-base text-center mt-4">
        <span className="text-secondary">"</span>
        {description}
        <span className="text-secondary">"</span>
      </p>
      <ChallengesSwiper Challenges={Challenges} labels={labels} />
    </div>
  )
}

export default Content
