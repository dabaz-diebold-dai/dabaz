import { X } from "./X";

export default function Hero () {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            DabAZ loves hot girls.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I am DabAZ, an entrepreneur, a bug hunter, a musician, an UI designer and a front-end development hobbyist.
          </p>
          <p className="mt-4 text-xl text-neutral-600">
            I love producing and listening to music, coding, ethical hacking and designing.
          </p>
          <p className="mt-4 text-xl text-neutral-600">
            My X (previously Twitter) is <X />.
          </p>
        </div>
      </div>
    </div>
  )
}