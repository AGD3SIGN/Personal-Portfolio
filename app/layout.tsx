import type { Metadata } from 'next'
import { Space_Grotesk, Roboto } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'showcasy. | Visual Designer Portfolio',
  description: 'I\'m a visual designer with passion to create great experiences. Freelance digital designer and illustrator currently based in Berlin.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
