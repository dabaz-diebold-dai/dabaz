import { GitHubIcon, XIcon } from "@dabaz/components/Icons";
import ArrowIcon from "@dabaz/components/Icons";

export default function HomeLinks () {
  return (
    <div>
      <ul className="flex flex-row mt-6 space-x-6 space-y-2 md:space-y-0 font-sm text-neutral-500">
        
        <li className="">
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/dabaz_official"
          >
            <XIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/dabaz-official"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
      <ul className="flex flex-col mt-2 md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/dabaz_official"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me on Instagram</p>
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
            <p className="h-7 ml-2">Send me a email</p>
          </a>
        </li>
      </ul>
      <ul className="flex flex-col mt-2 md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtube.com/@dabaz_official"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Subscribe my channel on YouTube</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://tiktok.com/@dabaz_official"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me on TikTok</p>
          </a>
        </li>
      </ul>
      <ul className="flex flex-col mt-2 md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.twitch.tv/dabaz_official"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me on Twitch</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.threads.net/@dabaz_official"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me on Threads</p>
          </a>
        </li>
      </ul>
    </div>
  )
}