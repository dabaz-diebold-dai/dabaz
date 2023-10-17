import NavbarCN from "@dabaz/components/sections/zh-CN/Navbar";
import Image from "next/image";

export default function IOS17CN() {
  return (
    <main className="w-full flex-auto">
      <NavbarCN />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          iOS 17 Developer Beta更新了什么？
        </h1>
        <div className="flex justify-between items-center mt-2 mb-2 text-sm max-w-[650px]">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            06.07.2023
          </p>
        </div>
        <div className="relative w-full py-4 bg-white md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-8 lg:pb-14">
          <div className="mt-8 prose prose-neutral mx-auto lg:prose-lg">
            <p>
              Apple很及时地推送了iOS 17 Developer (开发者) Beta，我也立即安装使用了，我们一起来看一看我使用体验中所感受到的iOS 17的新特点。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/ios-17-preview.png"
                alt="iOS 17 Preview"
                width={1200}
                height={630}
              />
              <figcaption>
                iOS 17 Preview
              </figcaption>
            </figure>
            <hr />
            <h2>iOS 17支持的设备</h2>
            <ul>
              <li>
                iPhone 14
              </li>
              <li>
                iPhone 14 Plus
              </li>
              <li>
                iPhone 14 Pro
              </li>
              <li>
                iPhone 14 Pro Max
              </li>
              <li>
                iPhone 13
              </li>
              <li>
                iPhone 13 mini
              </li>
              <li>
                iPhone 13 Pro
              </li>
              <li>
                iPhone 13 Pro Max
              </li>
              <li>
                iPhone 12
              </li>
              <li>
                iPhone 12 mini
              </li>
              <li>
                iPhone 12 Pro
              </li>
              <li>
                iPhone 12 Pro Max
              </li>
              <li>
                iPhone 11
              </li>
              <li>
                iPhone 11 Pro
              </li>
              <li>
                iPhone 11 Pro Max
              </li>
              <li>
                iPhone XS
              </li>
              <li>
                iPhone XS Max
              </li>
              <li>
                iPhone XR
              </li>
              <li>
                iPhone SE (2nd generation or later)
              </li>
            </ul>
            <hr />
            <h2>
              信息
            </h2>
            <h3>
              语音转文字
            </h3>
            <p>
              如图所示，我发送的语音消息已经可以转成文字形式。经过测试，语音转文字的速度极快。基本在我刚刚发出之后，就已经转成了文字。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/auto-transcription.jpg"
                alt="Auto transcription"
                width={1170}
                height={708}
              />
              <figcaption>
                Auto transcription
              </figcaption>
            </figure>
            <h3>
              信息输入框左侧的加号
            </h3>
            <p>
              轻触此加号后，会出现一个全新的菜单。上面有iPhone自带的一些Messages功能，点击&ldquo;More&rdquo;会出现其他自带功能和一些第三方apps。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/new-menu.jpg"
                alt="New menu"
                width={2340}
                height={2532}
              />
              <figcaption>
                New menu
              </figcaption>
            </figure>
            <h3>
              Check In
            </h3>
            <p>
              第一次使用Check In时出现的介绍语是&ldquo;Let your friend know you've arrived with Check In.&rdquo;，简单来说，在你到达设定的目的地时，Check In会自动发送消息给你的朋友。在点击继续后可以选择分享全部信息或部分信息。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/check-in.webp"
                alt="Check In"
                width={1960}
                height={1306}
              />
              <figcaption>
                Check In
              </figcaption>
            </figure>
            <h3>
              贴纸
            </h3>
            <p>
              菜单中有Stickers，你现在可以将相册中的任何一张照片进行抠图并做成贴纸发送。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/stickers.jpg"
                alt="Stickers"
                width={1170}
                height={1192}
              />
              <figcaption>
                Stickers
              </figcaption>
            </figure>
            <h3>
              自动补全
            </h3>
            <p>
              iOS 17会根据你的输入习惯自动补全你正在打的字。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/auto-completion.jpg"
                alt="Auto completion"
                width={1170}
                height={1179}
              />
              <figcaption>
                Auto completion
              </figcaption>
            </figure>
            <h2>
              Contact Posters
            </h2>
            <p>
              你可以定制你的Contact Posters，以及你的头像，这些将在多个场景下被使用。
            </p>
            <figure>
              <img
                src="/images/blog/ios-17-developer-beta/contact-poster.jpeg"
                alt="Contact Poster & Contact Photo"
                width={3510}
                height={2532}
              />
              <figcaption>
                Contact Poster & Contact Photo
              </figcaption>
            </figure>
            <h2>
              新壁纸
            </h2>
            <p>
              iOS 17 Developer Beta更新了一张壁纸。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/new-wallpapers.jpeg"
                alt="New wallpapers"
                width={2340}
                height={2532}
              />
              <figcaption>
                New wallpapers
              </figcaption>
            </figure>
            <h2>
              AirTag共享
            </h2>
            <p>
              AirTag可以共享给别人了，共享之后，别人也可以定位到此AirTag。
            </p>
            <h2>
              互动式小组件
            </h2>
            <p>
              iOS 17加入了互动式小组件，比如，你可以直接在Apple Music的互动式小组件播放某个播放列表。
            </p>
            <h2>
              Apple Music
            </h2>
            <h3>
              SharePlay in cars
            </h3>
            <p>
              SharePlay已经支持在搭载CarPlay的车上使用。
            </p>
            <h3>
              Crossfade
            </h3>
            <p>
              如果你经常使用Spotify，那你对于此功能肯定不陌生。Crossfade可以让两首歌更丝滑流畅自然地连接在一起。
            </p>
            <h3>
              正在播放
            </h3>
            <p>
              正在播放的歌曲看起来更美观了。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/playing-now.jpg"
                alt="Playing now"
                width={1170}
                height={462}
              />
              <figcaption>
                Playing now
              </figcaption>
            </figure>
            <h2>
              StandBy
            </h2>
            <p>
              StandBy是一个很实用的新功能。当iPhone横向放置且接入电源后，StandBy模式就会出现。StandBy模式可以设置简单的时间、正在播放的歌曲或者一左一右的两个小组件等等。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/standby.webp"
                alt="StandBy"
                width={1599}
                height={900}
              />
              <figcaption>
                StandBy
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/standby-settings.jpg"
                alt="StandBy settings"
                width={1170}
                height={973}
              />
              <figcaption>
                StandBy Settings
              </figcaption>
            </figure>
            <h2>
              自动填充
            </h2>
            <p>
              iOS 17中，邮箱收到的验证码也可以进行自动填充了。
            </p>
            <h2>
              Siri
            </h2>
            <p>
              现在可以只用“Siri”来呼叫出Siri了，在设置里可以选择使用&ldquo;&lsquo;Siri&rsquo; or &lsquo;Hey Siri&rsquo;&rdquo;、使用&ldquo;&lsquo;Hey Siri&rsquo;&rdquo;、&ldquo;Off&rdquo;。
            </p>
            <h2>
              Safari
            </h2>
            <h3>
              切换浏览页组
            </h3>
            <p>
              现在可以左右滑动来轻松地切换Private Browsing (隐私浏览)或者其他浏览页组。
            </p>
            <h3>
              更安全的Private Browsing (隐私浏览)
            </h3>
            <p>
              Private Browsing现在需要Face ID或者Touch ID来解锁，更加地隐私。同时，跟踪管理更为严格，插件管理同理也更严格。在设置中的Safari可以设置更多选项。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/private-browsing.jpg"
                alt="Private Browsing"
                width={1170}
                height={1170}
              />
              <figcaption>
                Private Browsing
              </figcaption>
            </figure>
            <h3>
              Profiles
            </h3>
            <p>
              Safari中现在可以设置不同的profile (资料)，如同Google Chrome中的profile一样。
            </p>
            <h2>
              家庭密码
            </h2>
            <p>
              密码现在可以共享给家庭。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/family-passwords.jpg"
                alt="Family passwords"
                width={1170}
                height={1214}
              />
              <figcaption>
                Family passwords
              </figcaption>
            </figure>
            <h2>
              NameDrop
            </h2>
            <p>
              NameDrop改变了iPhone用户交换联系方式的途径，两部iPhone轻靠即可交换联系信息。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/namedrop.jpg"
                alt="NameDrop"
                width={1600}
                height={900}
              />
              <figcaption>
                NameDrop
              </figcaption>
            </figure>
            <h2>
              使用蜂窝移动数据的AirDrop
            </h2>
            <p>
              即使你和你朋友要分离，AirDrop也会通过网络连接继续传输。不过这个功能还尚未推出。
            </p>
            <h2>
              实时语音信件
            </h2>
            <p>
              在没有及时接起电话后，对方发来的语音信件将被实时地转为文字显示在你的iPhone。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/live-voicemail.webp"
                alt="Live Voicemail"
                width={2000}
                height={1000}
              />
              <figcaption>
                Live Voicemail
              </figcaption>
            </figure>
            <h2>
              UI小变动
            </h2>
            <p>
              在某些界面，有一些小变动。例如控制中心的播放。
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/control-center.jpg"
                alt="Playing Now"
                width={518}
                height={524}
              />
              <figcaption>
                Playing Now
              </figcaption>
            </figure>
            <hr />
            <p>
              除此之外，我还发现了一些更细微或者更小的没有写在本文里的变动。
            </p>
            <p>
              谢谢你的阅读。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}