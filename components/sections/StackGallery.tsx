import { softwareStack, physicalStack } from "@dabaz/components/Data"

export default function StackGallery() {
  return (
    <div className="bg-white py-6">
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-6 xl:grid-cols-3">
      <div className="max-w-2xl">
          <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">Software</h2>
        </div>
        <ul role="list" className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 sm:gap-y-4 xl:col-span-3 pt-2">
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