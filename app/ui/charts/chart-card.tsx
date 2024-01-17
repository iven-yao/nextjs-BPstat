import { Albums, Singles } from "@/app/lib/definitions";
import Image from "next/image";
import {formatBigNumber} from "../../lib/utils";
import { space_mono } from "../fonts";

export default async function ChartCard({
    title,
    field,
    singles
}:{
    title: string,
    field: string,
    singles: Singles[]
}) {

    return (
        <div className="flex flex-col m-2 p-4 border border-pink-300 rounded-lg">
            <div className="text-sm lg:text-2xl md:text-lg text-center mb-2">{title}</div>
            {singles.map((single) => (
                <div key={single.id} className={`text-base md:text-xs lg:text-base flex justify-between border-t border-gray-500 py-2`}>
                    <div className="flex flex-row">
                        <Image src={single.member_image_url} alt="member" width={20} height={20} className="mr-1"/>
                        {single.name}
                    </div>
                    <span className={space_mono.className}>{formatBigNumber(field === 'views' ? single.views : single.streamings)}</span>
                </div>
            ))}
        </div>
    );
}