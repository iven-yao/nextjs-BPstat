import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import BpstatLogo from '@/app/ui/bpstat-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex items-end justify-start rounded-md bg-pink-300 p-4"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <BpstatLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
        <form action={async () => {
          "use server";
          await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-transparent text-white p-3 text-sm font-medium hover:border-2 hover:border-pink-300 hover:text-pink-300 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
