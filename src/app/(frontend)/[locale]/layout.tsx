import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Cairo, Montserrat } from 'next/font/google'
import NavBar from './_components/Home/NavBar/NavBar'
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
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
