'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import { EnvelopeIcon, HomeIcon, PencilIcon, RectangleStackIcon, ShoppingBagIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';

const navItems = {
  '/': {
    name: 'Home',
    Icon: HomeIcon,
  },
  '/stack': {
    name: 'Stack',
    Icon: RectangleStackIcon,
  },
  '/blog': {
    name: 'Blog',
    Icon: PencilIcon,
  },
}

function Logo() {
  return (
    <Link aria-label="DabAZ" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="50"
        height="50"
        viewBox="0 0 700 700"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M350 700.001C276.088 700.001 204.072 676.601 144.275 633.156C84.4786 589.711 39.9706 528.453 17.1302 458.156C-5.71008 387.862 -5.71008 312.139 17.1302 241.844C39.9706 171.549 84.4786 110.289 144.275 66.8442C204.072 23.3992 276.088 -1.51994e-05 350 0C423.912 1.51994e-05 495.928 23.3993 555.725 66.8442C615.522 110.289 660.031 171.549 682.87 241.844C705.71 312.139 705.71 387.862 682.87 458.156L350 350V700.001Z"
          stroke="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';

  return (
    <aside className="md:w-[6rem] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name, Icon }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-medium': isActive,
                      }
                    )}
                  >
                    <span className="relative px-2 py-2 items-center justify-center mx-auto">
                      <Icon className="h-6 w-6" />
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}