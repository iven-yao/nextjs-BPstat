import Image from 'next/image';
import { UpdateEvent, DeleteEvent } from '@/app/ui/events/buttons';
import InvoiceStatus from '@/app/ui/events/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredEvents } from '@/app/lib/data';
import EventStatus from '@/app/ui/events/status';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const events = await fetchFilteredEvents(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-black border-2 border-pink-300 text-white p-2 md:pt-0">
          <div className="md:hidden">
            {events?.map((event) => (
              <div
                key={event.id}
                className="mb-2 w-full rounded-md bg-transparent p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={event.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${event.name}'s profile picture`}
                      />
                      <p>{event.name}</p>
                    </div>
                  </div>
                  <div>
                    <p>{event.description}</p>
                  </div>
                  <EventStatus status={event.category} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{event.date.toISOString().slice(0,10)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateEvent id={event.id} />
                    <DeleteEvent id={event.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Member
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              {events?.map((event) => (
                <tr
                  key={event.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={event.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${event.name}'s profile picture`}
                      />
                      <p>{event.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.date.toISOString().slice(0,10)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <EventStatus status={event.category} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateEvent id={event.id} />
                      <DeleteEvent id={event.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
