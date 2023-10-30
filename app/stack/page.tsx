import StackGallery from "@dabaz/components/sections/StackGallery";
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dabaz.me/stack'),
  title: {
    default: 'Stack',
    template: '%s | DabAZ'
  },
  description: 'About what tech DabAZ is currently using.',

  alternates: {
    canonical: '/stack',
  },

  openGraph: {
    title: 'Stack | DabAZ',
    description: 'About what tech DabAZ is currently using.',
    url: 'https://www.dabaz.me/stack',
    siteName: 'DabAZ',
    images: [
      {
        url: 'https://www.dabaz.me/og.png',
        width: 1920,
        height: 1280,
        alt: 'About what tech DabAZ is currently using.',
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
    title: 'Stack | DabAZ',
    description: 'About what tech DabAZ is currently using.',
    creator: '@dabaz_official',
    images: {
      url: 'https://www.dabaz.me/twitter-image.png',
      alt: 'About what tech DabAZ is currently using.',
    },
  },
}

export default function Stack() {
  return (
    <main className="w-full flex-auto">
      <div className="max-w-3xl">
        <h1 className="font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl">
          Stack
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          Here's what tech I'm currently using.
        </p>
        <StackGallery />
      </div>
    </main>
  )
}