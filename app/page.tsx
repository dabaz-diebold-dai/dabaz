import Gallery from "@dabaz/components/sections/Gallery";
import HomeLinks from "@dabaz/components/sections/HomeLinks";
import Navbar from "@dabaz/components/sections/Navbar";

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
};

export default function Home() {
  return (
    <main className="w-full flex-auto">
      <Navbar />
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          Hey, I am DabAZ 👋
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          I’m an ethical hacker, musician, designer, and a frontend development enthusiast. My journey through the digital realm is fueled by a blend of creativity, technical acumen, and a perpetual desire for learning.
        </p>
        <Gallery />
        <HomeLinks />
        <p className="mt-4 text-lg text-neutral-700">
          In the cybersecurity domain, I operate as an ethical hacker, assisting organizations in fortifying their defenses and ensuring their digital assets remain unbreachable. The dance between code and security intrigues me, and each project I undertake is a step towards making the digital world a safer place.
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          When I am not delving into code, I am immersed in music. As a musician, I explore the harmonies that resonate with the human spirit. Music for me is not just an art, but a medium of expression and a bridge to connect with people on a profound level. You can listen to some of my songs below.
        </p>
        <ul className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">Spotify</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://music.apple.com/us/artist/dabaz/440893304"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">Apple Music</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCrvxyOXMtymYQhi-jtoupFw"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">YouTube</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://on.soundcloud.com/rEiBB"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">SoundCloud</p>
            </a>
          </li>
        </ul>
        <p className="mt-4 text-lg text-neutral-700">
          My creative pursuits also extend to the realm of design. With a keen eye for aesthetics, I enjoy crafting visually appealing and user-friendly designs that enhance user experiences and tell compelling stories.
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          Although I professionally delve into hacking and design, my fascination with frontend development has led me on a self-taught journey into the world of coding. I revel in the endless possibilities that a few lines of code can unfold, and am continually exploring new frameworks and technologies to build intuitive and dynamic web interfaces.
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          I love sharing my multi-faceted journey and the knowledge I acquire along the way through my social media and blog posts. You can delve into my explorations on my <a href="/blog" className="underline hover:text-neutral-900 transition-all">personal blog</a>.
        </p>
        <p className="mt-4 text-lg text-neutral-700">
          My future endeavors include diving deeper into the intersections of my interests—perhaps finding the synergy between music, design, and technology to create something truly unique and impactful.
        </p>
        <p className="mt-4 mb-12 text-lg text-neutral-700">
          Feel free to connect with me at <a href="mailto:dabazofficial@gmail.com" className="underline hover:text-neutral-900 transition-all">dabazofficial@gmail.com</a> or on my <a href="https://twitter.com/dabaz_official" className="underline hover:text-neutral-900 transition-all" rel="noopener noreferrer" target="_blank">X</a>. I am always up for engaging discussions on cybersecurity, design innovations, musical collaborations, or the exciting world of front-end development.
        </p>
      </div>
    </main>
  )
}