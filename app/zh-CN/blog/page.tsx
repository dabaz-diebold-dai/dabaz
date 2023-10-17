import NavbarCN from "@dabaz/components/sections/zh-CN/Navbar";

const posts = [
  {
    name: "iOS 17 Developer Beta更新了什么？",
    href: '/zh-CN/blog/ios-17-developer-beta',
    date: '06.07.2023',
  },
]

export default function BlogCN() {
  return (
    <main className="w-full flex-auto">
      <NavbarCN />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          我的个人博客 📒
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          深入了解我的探索！
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