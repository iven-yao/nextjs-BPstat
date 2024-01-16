import { fetchSingles, fetchAlbums } from '@/app/lib/data';
import { Metadata } from 'next';
import AlbumCard from '@/app/ui/discography/album-card';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
 
export const metadata: Metadata = {
    title: 'Discography',
};

export default async function Page() {
    const singles = await fetchSingles();
    const albums = await fetchAlbums();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl`}>Discography</h1>
                <div className="flex items-center">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated 2024-01-15</h3>
                </div>
            </div>
            {albums.map((album) => (
                <AlbumCard album={album} singles={singles.filter((single) => single.album_id == album.id)} key={album.id}/>
            ))}
        </div>
    );
}