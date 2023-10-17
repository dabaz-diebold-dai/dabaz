import Gallery from "@dabaz/components/sections/Gallery";
import NavbarCN from "@dabaz/components/sections/zh-CN/Navbar";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function CN() {
  return (
    <main className="w-full flex-auto">
      <NavbarCN />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          你好，我是DabAZ 👋
        </h1>
        <ul className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/dabaz_official"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">关注我的X (前Twitter)</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com/dabaz_official"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">关注我的Instagram</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:dabazofficial@gmail.com"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">发送邮件</p>
            </a>
          </li>
        </ul>
        <p className="mt-6 text-lg text-neutral-700">
          我是一名白帽黑客、音乐人、设计师，同时也热衷于前端开发。我的数字领域之旅由创造力、技术洞察力和持续的学习欲望共同推动。
        </p>
        <Gallery />
        <p className="mt-4 text-lg text-neutral-700">
          在网络安全领域，我身为一名白帽黑客，协助各组织强化防护措施，确保他们的数字资产不受侵犯。代码与安全间的互动令我着迷，每个我参与的项目都是向着让数字世界更安全迈进的一步。
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          当我不在深入研究代码时，我会沉浸在音乐中。作为音乐人，我探索那些能与人类精神共鸣的和谐音律。对我而言，音乐不仅仅是一种艺术，更是一种表达方式，也是一座能在深层次上与人们连接的桥梁。你可以在下面这些链接听到我的部分作品。
        </p>
        <ul className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">Spotify</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://music.apple.com/us/artist/dabaz/440893304"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">Apple Music</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCrvxyOXMtymYQhi-jtoupFw"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">YouTube</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://on.soundcloud.com/rEiBB"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">SoundCloud</p>
            </a>
          </li>
        </ul>
        <p className="mt-4 text-lg text-neutral-700">
          我的创意追求也延伸到设计领域。凭借敏锐的审美眼光，我喜欢打造视觉上吸引人且用户友好的设计，旨在提升用户体验并讲述动人的故事。
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          尽管我在职业上深入研究黑客技术和设计，但对前端开发的着迷引领我走上了自学编程的道路。我为几行代码所能展现的无限可能性而欣喜，不断探索新的框架和技术，以构建直观和动态的网页界面。
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          我喜欢通过社交媒体和博客文章分享我的多元化经历和我在过程中学到的知识。你可以在我的<a href="/zh-CN/blog" className="underline hover:text-neutral-900 transition-all underline-offset-2">个人博客</a>上深入了解我的探索。
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          未来，我将更深入地探索我兴趣的交汇点。或许能在音乐、设计和技术之间找到某种协同效应，创造出真正独一无二且具有影响力的作品。
        </p>
        <p className="mt-4 mb-12 text-lg text-neutral-700">
          欢迎随时通过 <a href="mailto:dabazofficial@gmail.com" className="underline hover:text-neutral-900 transition-all">dabazofficial@gmail.com</a> 或我的 <a href="https://twitter.com/dabaz_official" className="underline hover:text-neutral-900 transition-all" rel="noopener noreferrer" target="_blank">X</a> 与我取得联系。我非常愿意参与关于网络安全、设计创新、音乐合作或前端开发等精彩领域的讨论。
        </p>
      </div>
    </main>
  )
}