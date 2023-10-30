import Navbar from "@dabaz/components/sections/Navbar";

const posts = [
  {
    name: "What’s new in iOS 17 Developer Beta?",
    href: '/blog/ios-17-developer-beta',
    date: '06.07.2023',
  },
]

export default function Blog() {
  return (
    <main className="w-full flex-auto">
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          My personal blog 📒
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