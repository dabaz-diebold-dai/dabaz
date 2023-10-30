import { EnvelopeIcon, Square2StackIcon } from "@heroicons/react/24/outline"

import HomeLinks from "@dabaz/components/sections/HomeLinks"
import CopyButton from "@dabaz/components/ui/copy-button"

export default function HeroHeader() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate px-auto">
          <div className="mx-auto max-w-2xl">
            <img
              className="w-[5rem] rounded-full justify-center mx-auto"
              src="/images/home/dreads.webp"
              alt="DabAZ is swagging at a beach."
            />
            <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl dark:text-neutral-50 text-center">
              DabAZ
            </h2>
            <p className="mt-1 text-lg sm:text-xl leading-8 text-neutral-700 dark:text-neutral-300 text-center">
              Freelancer
            </p>
            <HomeLinks />
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <a
                href="mailto:dabazofficial@gmail.com"
                className="rounded-xl bg-neutral-800 px-8 py-2.5 text-sm font-medium text-neutral-50 shadow-sm hover:bg-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors flex items-center"
              >
                Contact me
                <EnvelopeIcon className="h-6 w-auto ml-2" />
              </a>
              or
              <CopyButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
