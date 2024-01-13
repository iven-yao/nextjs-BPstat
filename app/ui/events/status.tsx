import { SparklesIcon, TvIcon, FireIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function EventStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'special' ? (
        <>
          Special
          <SparklesIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'tvshow' ? (
        <>
          TV Show
          <TvIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'stage' ? (
        <>
          Stage
          <FireIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'music' ? (
        <>
          Music
          <MusicalNoteIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
