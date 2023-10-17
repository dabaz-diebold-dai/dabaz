import NavbarCN from "@dabaz/components/sections/zh-CN/Navbar";

export default function Uses() {
  return (
    <main className="w-full flex-auto">
      <NavbarCN />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          工具 🔧
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          这里分享我用来写代码、制作视频、制作音乐和玩游戏的设备及工具。
        </p>
        <div className="prose prose-neutral dark:prose-invert">
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            笔记本电脑
          </h2>
          <ul className="mt-4">
            <li>
              搭载M1 Pro的14英寸Macbook Pro (2021)
            </li>
            <li>
              Keychron Q1 客制化机械键盘
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            台式机 (自装)
          </h2>
          <ul className="mt-4">
            <li>
              AMD Ryzen 9 5900X
            </li>
            <li>
              华硕 (ROG) B550-A Gaming 吹雪主板
            </li>
            <li>
              微星 (MSI) GeForce RTX 3060 Ti
            </li>
            <li>
              金士顿 (Kingston) FURY 16GB 内存条
            </li>
            <li>
              三星 (Samsung) 970 EVO Plus 1TB 固态硬盘
            </li>
            <li>
              三星 (Samsung) Odyssey 34英寸带鱼屏游戏显示器 (165Hz)
            </li>
            <li>
              雷蛇 (Razer) 炼狱蝰蛇标准版
            </li>
            <li>
              雷蛇 (Razer) 黑寡妇蜘蛛标准版
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            软件
          </h2>
          <ul className="mt-4">
            <li>
              1Password
            </li>
            <li>
              Spotify
            </li>
            <li>
              Apple 音乐
            </li>
            <li>
              CleanShot X
            </li>
            <li>
              Raycast
            </li>
            <li>
              iTerm
            </li>
            <li>
              Notion
            </li>
            <li>
              Cron 日历
            </li>
            <li>
              Arc 浏览器
            </li>
            <li>
              Spark
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            音乐
          </h2>
          <ul className="mt-4">
            <li>
              卡西欧 (Casio) CT-X700 便携式61键键盘
            </li>
            <li>
              先锋 (Pioneer) DDJ-400 打碟机
            </li>
            <li>
              铁三角 (Audio-Technica) ATR2500x-USB专业录音麦克风
            </li>
            <li>
              铁三角 (Audio-Technica) ATH-M20X有线监听耳机
            </li>
            <li>
              Midiplus X4 III MIDI键盘
            </li>
            <li>
              拿火 (LAVA) ME 3 碳纤维智能吉他
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            其他
          </h2>
          <ul className="mt-4 mb-12">
            <li>
              AirPods Pro
            </li>
            <li>
              iPhone 12
            </li>
            <li>
              Apple Watch Series 6
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}