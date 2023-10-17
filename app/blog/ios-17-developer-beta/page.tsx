import Navbar from "@dabaz/components/sections/Navbar";
import Image from "next/image";

export default function IOS17() {
  return (
    <main className="w-full flex-auto">
      <Navbar />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          What&rsquo;s new in iOS 17 Developer Beta?
        </h1>
        <div className="flex justify-between items-center mt-2 mb-2 text-sm max-w-[650px]">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            06.07.2023
          </p>
        </div>
        <div className="relative w-full py-4 bg-white md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-8 lg:pb-14">
          <div className="mt-8 prose prose-neutral mx-auto lg:prose-lg">
            <p>
              Apple just rolled out the iOS 17 Developer Beta, which I immediately installed and used. Let&rsquo;s take a look at the new features of iOS 17 that I experienced during my usage.
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
            <h2>Compatible devices with iOS 17</h2>
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
              Messages
            </h2>
            <h3>
              Transcription to voice messages
            </h3>
            <p>
              As we can see, the voice message that I sent is already transcribe to text. It&rsquo;s so fast that it turned into text as soon as I sent it out.
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
              The plus button next to the input area
            </h3>
            <p>
              After I touched this little button, there is a brand new menu. On the menu, there are basic options of iOS and more options for apps that you installed.
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
              “Let your friend know you&rsquo;ve arrived with Check In”. Check In simply share your full information or limited information of your location to your friends when you are using this function.
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
              Stickers
            </h3>
            <p>
              Now you can remove the background of any images and use it as a sticker to send as iMessage.
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
              Auto completion
            </h3>
            <p>
              In any input areas, iOS 17 will help you to complete your input automatically.
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
              Now you can customize your Contact Posters and your contact photo. These two will be used in multiple functions.
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/contact-poster.jpg"
                alt="Contact Poster & Contact Photo"
                width={3510}
                height={2532}
              />
              <figcaption>
                Contact Poster & Contact Photo
              </figcaption>
            </figure>
            <h2>
              A pair of new wallpapers
            </h2>
            <p>
              iOS 17 Developer Beta brings a pair of new wallpapers.
            </p>
            <figure>
              <Image
                src="/images/blog/ios-17-developer-beta/new-wallpapers.jpg"
                alt="New wallpapers"
                width={2340}
                height={2532}
              />
              <figcaption>
                New wallpapers
              </figcaption>
            </figure>
            <h2>
              Shared AirTag
            </h2>
            <p>
              AirTag can be shared now. After sharing AirTag, the shared person can also locate this AirTag.
            </p>
            <h2>
              Interactive widgets
            </h2>
            <p>
              iOS 17 adds interactive widgets. For example, you can play a playlist in the interactive widget of Apple Music.
            </p>
            <h2>
              Apple Music
            </h2>
            <h3>
              SharePlay in cars
            </h3>
            <p>
              SharePlay is supported in cars with CarPlay installed.
            </p>
            <h3>
              Crossfade
            </h3>
            <p>
              If you always use Spotify, you must be familiar with this function. Crossfade can make the transition more smooth.
            </p>
            <h3>
              Playing now
            </h3>
            <p>
              The playing now view is more beautiful now.
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
              StandBy is a brand new function. It will turn on when iPhone is stationary in landscape and while on power. It could show information like widgets, a photo frame or a clock.
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
              AutoFill
            </h2>
            <p>
              In iOS 17, the authentication code in mail inbox will also be auto-filled.
            </p>
            <h2>
              Siri
            </h2>
            <p>
              Now you can use only &ldquo;Siri&rdquo; to call out Siri.
            </p>
            <h2>
              Safari
            </h2>
            <h3>
              Tab groups
            </h3>
            <p>
              You can switch Private Browsing or other tab groups by simply swiping on the menu bar of Safari.
            </p>
            <h3>
              Safer Private Browsing
            </h3>
            <p>
              Private Browsing now needs Face ID or Touch ID to unlock, which is more private.
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
              You can set up multiple profile in Safari right now.
            </p>
            <h2>
              Family passwords
            </h2>
            <p>
              Now passwords can be shared with family members in your iCloud family.
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
              NameDrop change the way that people exchange contact informations. Hold the top of your iPhone near the top of someone else&rsquo;s iPhone to share your contact.
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
              AirDrop over cellular data
            </h2>
            <p>
              iOS 17 will allow users to continue AirDrop over cellular data.
            </p>
            <h2>
              Live Voicemail
            </h2>
            <p>
              When you don&rsquo;t pick up a phone right away, others&rsquo; voicemail will be transcribed into text and be displayed on the screen in real time.
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
              Some small UI changes
            </h2>
            <p>
              What&rsquo;s more, there are some small UI changes in the iOS 17. Such as the playing now view in the control center.
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
              Besides, I found some more small fixes that I didn&rsquo;t mention in this post.
            </p>
            <p>
              Thanks for your reading.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}