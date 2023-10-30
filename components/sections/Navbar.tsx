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
                  <a
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
                  </a>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}