import {
  CurrencyDollarIcon,
  PlayCircleIcon,
  MusicalNoteIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { fetchBPCardData } from '@/app/lib/data';

const iconMap = {
  sales: CurrencyDollarIcon,
  views: PlayCircleIcon,
  streamings: MusicalNoteIcon,
  events: CalendarDaysIcon,
};

export default async function CardWrapper() {
  const {totalSales, totalViews, totalStreamings, upcomingEvents} = await fetchBPCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <Card title="Album Sales" value={totalSales} type="sales" />
      <Card title="Youtube M/V Views" value={totalViews} type="views" />
      <Card title="Spotify Streamings" value={totalStreamings} type="streamings" />
      <Card title="Upcoming Events" value={upcomingEvents} type="events" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'sales' | 'views' | 'events' | 'streamings';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-transparent p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium truncate">{title}</h3>
      </div>
      <p className={`truncate rounded-xl bg-transparent border-pink-300 border-2 px-4 py-8 text-center text-2xl`}>
        {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
    </div>
  );
}
