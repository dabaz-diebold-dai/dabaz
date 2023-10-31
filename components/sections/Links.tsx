import { platforms } from "@dabaz/components/Data";

export default function Links() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-32">
        <div className="mx-auto mt-6 grid max-w-lg grid-cols-6 items-center gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              className="items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors h-8 w-auto"
              rel="noopener noreferrer"
              target="_blank"
              href={platform.href}
            >
              <platform.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}