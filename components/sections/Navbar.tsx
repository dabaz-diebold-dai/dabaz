'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

import { navItems } from '@dabaz/components/Data';
import Footer from './Footer';

export default function Navbar() {
  let pathname = usePathname() || '/';

  return (
    <aside className="md:w-[6rem] md:flex-shrink-0 md:mx-0 md:px-0">
      <div className="md:sticky md:top-16 lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-0 md:px-5 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
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