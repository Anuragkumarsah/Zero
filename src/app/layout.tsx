import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export const metadata: Metadata = {
  title: 'Zero',
  description: 'Watch Anime Online Without Ads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}
      <Analytics />
      </body>
    </html>
  )
}
