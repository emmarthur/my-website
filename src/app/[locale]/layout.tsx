import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { DynamicBackground } from '@/components/animations/DynamicBackground'
import { ChristmasBackground } from '@/components/animations/ChristmasBackground'
import { SuppressWarnings } from '@/components/SuppressWarnings'
import { SetHtmlLang } from '@/components/layout/SetHtmlLang'
import { FontLoader } from '@/components/layout/FontLoader'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  const messages = await getMessages()

  // Check if it's Christmas season (up to and including December 25th)
  const now = new Date()
  const month = now.getMonth() // 0-11, where 11 is December
  const day = now.getDate()
  const showChristmas = month === 11 && day <= 25

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SetHtmlLang />
      <SuppressWarnings />
      <FontLoader />
      {showChristmas ? <ChristmasBackground /> : <DynamicBackground />}
      <Navigation />
      <main className="min-h-screen relative z-10">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  )
}

