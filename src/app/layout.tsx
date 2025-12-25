import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import '../styles/globals.css'

// Action game style fonts
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'My Personal Website & Digital Diary',
  description: 'A portfolio and digital diary documenting life, career, hobbies, and thoughts',
}

// Root layout - provides html/body structure
// The [locale]/layout.tsx provides i18n context
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${orbitron.variable} ${rajdhani.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

