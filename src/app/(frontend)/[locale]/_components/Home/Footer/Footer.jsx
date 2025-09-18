'use client'
import { useTranslations } from 'next-intl'
import { FaWhatsapp, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import BannerTwo from './BannerTwo'
import { useParams } from 'next/navigation'
const Footer = () => {
  const t = useTranslations('Footer')
  const { locale } = useParams()
  const footerSections = [
    {
      title: t('support.title'),
      links: [
        { label: t('support.contactUs'), href: `/${locale}/contact#contact` },
        { label: t('support.offices'), href: `/${locale}/contact/#location` },
      ],
    },
    {
      title: t('sectors.title'),
      links: [
        { label: t('sectors.healthcare'), href: `/${locale}/sectors#sector` },
        { label: t('sectors.ecommerce'), href: `/${locale}/sectors#sector` },
        { label: t('sectors.contracting'), href: `/${locale}/sectors#sector` },
        { label: t('sectors.realEstate'), href: `/${locale}/sectors#sector` },
        { label: t('sectors.startups'), href: `/${locale}/sectors#sector` },
      ],
    },
    {
      title: t('services.title'),
      links: [
        { label: t('services.financialManagement'), href: `/${locale}/services#service` },
        { label: t('services.taxesAudit'), href: `/${locale}/services#service` },
        { label: t('services.financialReporting'), href: `/${locale}/services#service` },
        { label: t('services.adminAccountingSystems'), href: `/${locale}/services#service` },
      ],
    },
    {
      title: t('about.title'),
      links: [
        { label: t('about.whoWeAre'), href: `/${locale}/about/#who` },
        { label: t('about.ourStory'), href: `/${locale}/about/#our-story` },
        { label: t('about.visionMission'), href: `/${locale}/about/#vision` },
        { label: t('about.whyChooseUs'), href: `/${locale}/about/#why-us` },
      ],
    },
  ]

  return (
    <footer className="w-full overflow-hidden">
      <BannerTwo />
      <div className="bg-[#1c2f8c] text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-sm hover:underline transition-all">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">{t('followUs')}</p>
          <div className="flex justify-center gap-6 my-4 text-2xl">
            <a href="https://wa.me/201557144441" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-green-400 transition" />
            </a>
            <a href="https://www.facebook.com/BusinessPartnersEGY" aria-label="Facebook">
              <FaFacebook className="hover:text-blue-400 transition" />
            </a>
            <a href="https://www.instagram.com/businesspartnersegy/" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <FaXTwitter className="hover:text-gray-400 transition" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">
              {t('privacyPolicy')}
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              {t('termsConditions')}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 px-4 md:px-8 text-center">
        <p className="text-sm">
          © 2025 {t('copyright.businessPartners')} – {t('copyright.allRightsReserved')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
