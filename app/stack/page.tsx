import Image from "next/image";

import Navbar from "@dabaz/components/sections/Navbar";
import Arc from "@dabaz/public/images/uses/arc.png"
import ChatGPT from "@dabaz/public/images/uses/chatgpt.png"
import StackGallery from "@dabaz/components/sections/StackGallery";

export default function Stack() {
  return (
    <main className="w-full flex-auto">
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          What I use 🔧
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          Here's what tech I'm currently using for coding, videos, music, and gaming.
        </p>
        <StackGallery />
      </div>
    </main>
  )
}