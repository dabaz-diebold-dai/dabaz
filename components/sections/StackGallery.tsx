const softwareStack = [
  {
    name: 'Arc',
    role: 'Browser',
    imageUrl: '/images/uses/arc.png',
    imageAlt: 'Arc',
  },
  {
    name: 'Google Chrome',
    role: 'Browser',
    imageUrl: '/images/uses/google-chrome.png',
    imageAlt: 'Chrome',
  },
  {
    name: 'ChatGPT',
    role: 'AI',
    imageUrl: '/images/uses/chatgpt.png',
    imageAlt: 'ChatGPT',
  },
]

const physicalStack = [
  {
    name: 'MacBook Pro 14" with M1 Pro',
    role: 'Laptop',
    imageUrl: '/images/uses/macbook-pro.webp',
    imageAlt: 'MacBook Pro',
  },
  {
    name: 'Keychron Q1',
    role: 'Keyboard',
    imageUrl: '/images/uses/keychron.webp',
    imageAlt: 'Keychron',
  },
  {
    name: 'iPhone 12',
    role: 'Phone',
    imageUrl: '/images/uses/iphone.webp',
    imageAlt: 'iPhone 12',
  },
  {
    name: 'AirPods Pro',
    role: 'Earphone',
    imageUrl: '/images/uses/airpods-pro.webp',
    imageAlt: 'AirPods Pro',
  },
  {
    name: 'Apple Watch Series 6',
    role: 'Watch',
    imageUrl: '/images/uses/apple-watch.webp',
    imageAlt: 'Apple Watch Series 6',
  },
  {
    name: 'Razer DeathAdder Essential',
    role: 'Mouse',
    imageUrl: '/images/uses/razer-deathadder-essential.webp',
    imageAlt: 'Razer DeathAdder Essential',
  },
]

export default function StackGallery() {
  return (
    <div className="bg-white py-6">
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-6 xl:grid-cols-3">
      <div className="max-w-2xl">
          <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">Software</h2>
        </div>
        <ul role="list" className="grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-4 xl:col-span-3 pt-2">
          {softwareStack.map((stack) => (
            <li key={stack.name}>
              <div className="items-center mx-auto gap-x-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 px-8 py-6">
                <img className="h-20 w-auto mx-auto" src={stack.imageUrl} alt={stack.imageAlt} />
                <div className="mt-6">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{stack.role}</p>
                  <h3 className="text-base tracking-tight text-neutral-900 dark:text-neutral-100">{stack.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="max-w-2xl">
          <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">Physical</h2>
        </div>
        <ul role="list" className="grid gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-4 xl:col-span-3 pt-2">
          {physicalStack.map((stack) => (
            <li key={stack.name}>
              <div className="items-center mx-auto gap-x-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 px-8 py-6">
                <img className="h-auto w-24 mx-auto" src={stack.imageUrl} alt={stack.imageAlt} />
                <div className="mt-6">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{stack.role}</p>
                  <h3 className="text-base tracking-tight text-neutral-900 dark:text-neutral-100">{stack.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}