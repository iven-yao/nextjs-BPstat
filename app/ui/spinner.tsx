import {inter_700} from '@/app/ui/fonts';
export default function Spinner() {
    return (
        <div className={`${inter_700.className} flex`}>
            <div className="mx-auto w-fit text-4xl flex border-4 p-3 text-pink-300 border-pink-300">
                BLɅ<span className="my-auto h-7 w-7 animate-spin rounded-full border-[6px] border-solid border-current border-r-transparent" />KPIИK
            </div>
        </div>
    );
}