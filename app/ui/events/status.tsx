import { SparklesIcon, TvIcon, FireIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function EventStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs border',
        {
          'text-blue-600 border-blue-400': status === 'tvshow',
          'text-red-600 border-red-400': status === 'stage',
          'text-yellow-600 border-yellow-400': status === 'special',
          'text-lime-600 border-lime-400': status === 'music'
        },
      )}
    >
      {status === 'special' ? (
        <>
          <SparklesIcon className="mr-1 w-4" />
          Special
        </>
      ) : null}
      {status === 'tvshow' ? (
        <>
          <TvIcon className="mr-1 w-4" />
          TV Show
        </>
      ) : null}
      {status === 'stage' ? (
        <>
          <FireIcon className="mr-1 w-4" />
          Stage
        </>
      ) : null}
      {status === 'music' ? (
        <>
          <MusicalNoteIcon className="mr-1 w-4" />
          Music
        </>
      ) : null}
    </span>
  );
}
