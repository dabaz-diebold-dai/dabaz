import Navbar from '@dabaz/components/sections/Navbar'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dabaz.me'),
  title: {
    default: 'DabAZ',
    template: '%s | DabAZ'
  },
  description: 'About DabAZ',

  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh-CN',
    }
  },

  openGraph: {
    title: 'DabAZ',
    description: 'About DabAZ',
    url: 'https://dabaz.me',
    siteName: 'DabAZ',
    images: [
      {
        url: 'https://dabaz.me/og.png',
        width: 1920,
        height: 1280,
        alt: 'About DabAZ',
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

  manifest: 'https://dabaz.me/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'DabAZ',
    description: 'About DabAZ',
    creator: '@dabaz_official',
    images: {
      url: 'https://dabaz.me/twitter-image.png',
      alt: 'About DabAZ',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white'>
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
