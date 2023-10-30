import './globals.css'
import { Metadata } from 'next'
import Navbar from '@dabaz/components/sections/Navbar'
import Footer from '@dabaz/components/sections/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dabaz.me'),
  title: {
    default: 'DabAZ',
    template: '%s | DabAZ'
  },
  description: 'About DabAZ.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'DabAZ',
    description: 'About DabAZ.',
    url: 'https://www.dabaz.me',
    siteName: 'DabAZ',
    images: [
      {
        url: 'https://www.dabaz.me/og.png',
        width: 1920,
        height: 1280,
        alt: 'About DabAZ.',
      },
    ],
    locale: 'en_US',
    type: 'website',
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

  icons: {
    icon: '/icons/icon.png',
    shortcut: '/icons/shortcut-icon.png',
    apple: '/icons/apple-icon.png',
  },

  manifest: 'https://www.dabaz.me/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'DabAZ',
    description: 'About DabAZ.',
    creator: '@dabaz_official',
    images: {
      url: 'https://www.dabaz.me/twitter-image.png',
      alt: 'About DabAZ.',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-black bg-white dark:text-white dark:bg-[#111010]'>
      <body className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-16 lg:mt-24 lg:mx-auto'>
        <Navbar />
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
