import Navbar from '@dabaz/components/sections/Navbar'
import './globals.css'

export const metadata = {
  title: {
    default: 'DabAZ',
    template: '%s | DabAZ'
  },
  description: 'About DabAZ',
  referrer: 'origin-when-cross-origin',
  keywords: ['DabAZ', 'Personal Website'],
  authors: [{ name: 'DabAZ' }],
  colorScheme: 'light',
  creator: 'DabAZ',

  metadataBase: new URL('https://dabaz.me'),
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
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
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
    card: 'website',
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
