import { fetchSingles, fetchAlbums } from '@/app/lib/data';
import { Metadata } from 'next';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import ChartCard from '@/app/ui/charts/chart-card';
 
export const metadata: Metadata = {
    title: 'Charts',
};

export default async function Page() {
    const singles = await fetchSingles();
    const spotifyOrdered = [...singles].sort((a,b) => b.streamings-a.streamings);
    const youtubeOrdered = [...singles].sort((a,b) => b.views-a.views).filter((a) => a.views > 0);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl`}>Charts</h1>
                <div className="flex items-center">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated 2024-01-15</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                <ChartCard title='Spotify Streamings Chart' field='streamings' singles={spotifyOrdered} />
                <ChartCard title='Youtube M/V Views Chart' field='views' singles={youtubeOrdered} />
            </div>
        </div>
    );
}