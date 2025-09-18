import { NextIntlClientProvider } from 'next-intl'
import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Cairo, Montserrat } from 'next/font/google'
import NavBar from './_components/Home/NavBar/NavBar'
import Footer from './_components/Home/Footer/Footer'
import '../globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
})

const cairo = Cairo({ subsets: ['arabic'] })

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })

  if (!['en', 'ar'].includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={locale === 'ar' ? cairo.className : montserrat.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { locale } = await params

  const title = 'Business partners | بيزنس بارتنرز'

  const descriptionByLocale: Record<string, string> = {
    en: 'We provide your company with robust financial systems and strategic business consulting to help improve performance and make data-driven decisions.',
    ar: 'نوفر لشركتك أنظمة مالية قوية واستشارات إدارية استراتيجية تساعدك على تحسين الأداء واتخاذ قرارات مبنية على بيانات حقيقية.',
  }

  const ogLocale = locale === 'ar' ? 'ar_EG' : 'en_US'

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: descriptionByLocale[locale],
    alternates: {
      languages: {
        en: '/en',
        ar: '/ar',
      },
      canonical: `/${locale}`,
    },
    openGraph: {
      title: title,
      description: descriptionByLocale[locale],
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: '/icon.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: descriptionByLocale[locale],
      // images: ['/Main.png'],
    },
    icons: {
      icon: [{ url: '/icon.png' }],
    },
  }
}
