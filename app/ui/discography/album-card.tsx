import { Albums, Singles } from "@/app/lib/definitions";
import clsx from "clsx";
import Image from "next/image";
import {formatBigNumber} from "../../lib/utils";
import { space_mono } from "../fonts";
import { MusicalNoteIcon, PlayCircleIcon, PlayIcon } from "@heroicons/react/24/outline";

export default async function AlbumCard({
    album,
    singles
}:{
    album: Albums,
    singles: Singles[]
}) {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
            <div className="flex flex-col">
                <Image
                    src={album.cover}
                    className="mt-10"
                    width={300}
                    height={300}
                    alt={`${album.name} cover image`}
                />
                <p className="text-xl hidden md:block">{album.name}</p>
                <p className="hidden md:block">{album.artist}</p>
                <p className="hidden md:block">{album.id != ''?album.release_date.toISOString().slice(0,10):''}</p>
                <p className="hidden md:block">Sale: {album.sale > 0 ? formatBigNumber(album.sale) : 'N/A'}</p>
            </div>
            <div className="md:hidden mt-10">
                <p className="flex justify-end text-xl">{album.name}</p>
                <p className="flex justify-end ">{album.artist}</p>
                <p className="flex justify-end ">{album.id != ''?album.release_date.toISOString().slice(0,10):''}</p>
                <p className="flex justify-end ">Sale: {album.sale > 0 ? formatBigNumber(album.sale) : 'N/A'}</p>
            </div>
            <div className="hidden md:block md:col-span-3">
                <div className='grid grid-cols-3 py-2'>
                    <div className="px-2">Track</div>
                    <div className="flex justify-end px-2">Youtube M/V Views</div>
                    <div className="flex justify-end px-2">Spotify Streamings</div>
                </div>
                {singles.map((single, i) => (
                    <div 
                        key={single.id}
                        className={clsx(
                        'grid grid-cols-3 py-2 border-t border-gray-500',
                        {
                        },
                      )}>
                        <div className="px-2">{single.name}</div>
                        <div className={`${space_mono.className} flex justify-end px-2`}>{single.views > 0 ? formatBigNumber(single.views) : '-'}</div>
                        <div className={`${space_mono.className} flex justify-end px-2`}>{formatBigNumber(single.streamings)}</div>
                    </div>
                ))}
            </div>
            <div className="col-span-2 md:hidden">
                {singles.map((single, i) => (
                    <div key={single.id} className="flex flex-col">
                        <div className="flex justify-between">{single.name}
                            <div className={`${space_mono.className} flex`}>
                                <PlayCircleIcon className="text-gray-500 mr-2" width={20}/>
                                {single.views > 0 ? formatBigNumber(single.views) : '-'}
                            </div>
                        </div>
                        <div className={`${space_mono.className} flex justify-end`}>
                            <MusicalNoteIcon className="text-gray-500 mr-2" width={20} />
                            {formatBigNumber(single.streamings)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}