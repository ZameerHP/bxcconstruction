import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BXC Construction — Engineering the Extraordinary',
  description:
    'Premium design-build construction firm delivering uncompromising craftsmanship for luxury residential, commercial, and custom builds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-bxc-bg text-bxc-text">{children}</body>
    </html>
  )
}
