import { deleteEvent } from '@/app/lib/action';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateEvent() {
  return (
    <Link
      href="/dashboard/events/create"
      className="flex h-10 items-center rounded-lg bg-pink-300 px-4 text-sm font-medium text-white transition-colors hover:bg-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
    >
      <span className="hidden md:block">Create Event</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateEvent({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/events/${id}/edit`}
      className="rounded-md border p-2 hover:border-pink-300 hover:text-pink-300"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteEvent({ id }: { id: string }) {
  const deleteEventWithId = deleteEvent.bind(null, id);
  return (
    <form action={deleteEventWithId}>
      <button className="rounded-md border p-2 hover:border-pink-300 hover:text-pink-300">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
