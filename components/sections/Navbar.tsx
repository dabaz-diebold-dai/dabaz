'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import { EnvelopeIcon, HomeIcon, PencilIcon, RectangleStackIcon, ShoppingBagIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';

export const navItems = {
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
    <aside className="fixed inset-x-0 bottom-0 shadow-lg md:inset-0 h-20 bg-white z-50 md:bg-transparent md:z-0 md:relative md:h-0 md:w-[6rem] md:flex-shrink-0 md:mx-0 md:px-0">
      <div className="sticky md:top-16 lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-center justify-center relative px-0 md:px-5 pb-0 fade md:overflow-auto scroll-pr-6 md:relative border border-neutral-200 md:border-none"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 mb-4 mt-4 md:mt-0 md:mb-0">
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
                      <Icon className="h-8 w-8" />
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