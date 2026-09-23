import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://bxcconstruction.ca')

export const viewport: Viewport = {
  themeColor: '#111413',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'BXC Construction — Engineering the Extraordinary',
  description:
    'Premium design-build construction firm delivering uncompromising craftsmanship for luxury residential, commercial, and custom builds.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'BXC Construction — Engineering the Extraordinary',
    description: 'Premium design-build construction firm delivering uncompromising craftsmanship for luxury residential, commercial, and custom builds.',
    url: siteUrl,
    siteName: 'BXC Construction',
    images: [
      {
        url: '/images/hero-facade.jpg',
        width: 1200,
        height: 630,
        alt: 'BXC Construction Premium Build',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BXC Construction — Engineering the Extraordinary',
    description: 'Premium design-build construction firm delivering uncompromising craftsmanship.',
    images: ['/images/hero-facade.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-bxc-bg text-bxc-text selection:bg-bxc-accent selection:text-bxc-bg" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
