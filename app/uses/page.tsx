import Image from "next/image";

import Navbar from "@dabaz/components/sections/Navbar";
import Arc from "@dabaz/public/images/uses/arc.png"
import ChatGPT from "@dabaz/public/images/uses/chatgpt.png"

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
        <div>
          <h2 className="mt-6 font-display text-xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-2xl">
            Software
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-6">
            <li className="bg-neutral-100 py-4 px-16 rounded-xl justify-center items-center mx-auto">
              <Image
                src={Arc}
                alt="Arc browser"
                className="h-16 w-auto"
              />
              <p className="uppercase p-1 rounded-lg border border-neutral-200 text-xs mt-4">
                Browser
              </p>
              <p className="text-md mt-2 text-center">
                Arc
              </p>
            </li>
            <li className="bg-neutral-100 py-4 px-16 rounded-xl justify-center items-center mx-auto">
              <Image
                src={ChatGPT}
                alt="Arc browser"
                className="h-16 w-32"
              />
              <p className="uppercase p-1 rounded-lg border border-neutral-200 text-xs mt-4">
                AI
              </p>
              <p className="text-md mt-2 text-center">
                ChatGPT
              </p>
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