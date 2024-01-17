'use client'

import {
  UserGroupIcon,
  HomeIcon,
  StopCircleIcon,
  CalendarDaysIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Events',
    href: '/dashboard/events',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Discography',
    href: '/dashboard/discography',
    icon: StopCircleIcon,
  },
  {
    name: 'Charts',
    href: '/dashboard/charts',
    icon: ChartBarIcon,
  },
  { name: 'Members', href: '/dashboard/members', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium border border-transparent hover:border-pink-300 hover:text-pink-300 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'text-pink-300': pathname === link.href
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
