import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchRecentEvents } from '@/app/lib/data';

export default async function RecentEvents() {
  const recentEvents = await fetchRecentEvents();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Events
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-transparent border-2 border-pink-400 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="px-6">
          {recentEvents.map((event, i) => {
            return (
              <div
                key={event.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={event.image_url}
                    alt={`member picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {event.description}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {event.category}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {event.date.toISOString().slice(0,10)}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
