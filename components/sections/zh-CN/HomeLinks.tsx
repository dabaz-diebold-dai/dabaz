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
}

export default function HomeLinksCN () {
  return (
    <div>
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
            href="https://github.com/dabaz-official"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">关注我的GitHub</p>
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
            <p className="h-7 ml-2">向我发送邮件</p>
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
            <p className="h-7 ml-2">订阅我的YouTube频道</p>
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
            <p className="h-7 ml-2">关注我的TikTok</p>
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
            <p className="h-7 ml-2">关注我的Twitch</p>
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
            <p className="h-7 ml-2">关注我的Threads</p>
          </a>
        </li>
      </ul>
    </div>
  )
}