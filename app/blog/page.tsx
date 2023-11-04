import { Metadata } from 'next'

const posts = [
  {
    name: "What’s new in iOS 17 Developer Beta?",
    href: '/blog/ios-17-developer-beta',
    date: '06.07.2023',
  },
]

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dabaz.me/blog'),
  title: {
    default: 'Blog',
    template: '%s | DabAZ'
  },
  description: 'Learn what DabAZ loves and writes about.',

  alternates: {
    canonical: '/blog',
  },

  openGraph: {
    title: 'Blog | DabAZ',
    description: "Delve into DabAZ&rsquo;s exlorations!",
    url: 'https://www.dabaz.me/blog',
    siteName: 'DabAZ',
    images: [
      {
        url: 'https://www.dabaz.me/og.png',
        width: 1920,
        height: 1280,
        alt: "DabAZ's blog",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blog | DabAZ',
    description: "Delve into DabAZ&rsquo;s exlorations!",
    creator: '@dabaz_official',
    images: {
      url: 'https://www.dabaz.me/twitter-image.png',
      alt: "DabAZ's blog",
    },
  },
}

export default function Blog() {
  return (
    <main className="w-full flex-auto">
      <div className="max-w-3xl">
        <h1 className="font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl">
          Blog
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          Delve into my explorations!
        </p>
        <div className="mt-6">
          {posts.map((post) => (
            <a
              key={post.name}
              href={post.href}
              className="flex flex-col space-y-1 mb-4"
            >
              <p className="text-neutral-900 tracking-tight font-medium text-lg underline">
                {post.name}
              </p>
              <p className="text-neutral-600">
                {post.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}