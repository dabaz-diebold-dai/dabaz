import Navbar from "@dabaz/components/sections/Navbar";

export default function Uses() {
  return (
    <main className="w-full flex-auto">
      <Navbar />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          What I use 🔧
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          Here's what tech I'm currently using for coding, videos, music, and gaming.
        </p>
        <div className="prose prose-neutral dark:prose-invert">
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            Laptop
          </h2>
          <ul className="mt-4">
            <li>
              14" Macbook Pro with M1 Pro (2021)
            </li>
            <li>
              Keychron Q1
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            PC (Built by me)
          </h2>
          <ul className="mt-4">
            <li>
              AMD Ryzen 9 5900X
            </li>
            <li>
              ROG B550-A Gaming
            </li>
            <li>
              MSI GeForce RTX 3060 Ti
            </li>
            <li>
              Kingston FURY 16GB
            </li>
            <li>
              Samsung 970 EVO Plus 1TB
            </li>
            <li>
              Samsung 34” Odyssey G5 Curved Gaming Monitor (165Hz)
            </li>
            <li>
              Razer DeathAdder Essential
            </li>
            <li>
              Razer BlackWidow Essential
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            Software
          </h2>
          <ul className="mt-4">
            <li>
              1Password
            </li>
            <li>
              Spotify
            </li>
            <li>
              Apple Music
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
              Cron Calendar
            </li>
            <li>
              Arc Browser
            </li>
            <li>
              Spark
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            Music
          </h2>
          <ul className="mt-4">
            <li>
              Casio CT-X700 61-Key Portable Keyboard
            </li>
            <li>
              Pioneer DDJ-400
            </li>
            <li>
              Audio-Technica ATR2500x-USB Microphone
            </li>
            <li>
              Audio-Technica ATH-M20X Professional Studio Monitor Headphones
            </li>
            <li>
              Midiplus X4 III
            </li>
            <li>
              LAVA ME 3 Guitar
            </li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            Other Tech
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