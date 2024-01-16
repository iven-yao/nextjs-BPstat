import Spinner from "@/app/ui/spinner";

export default function Loading() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl`}>Discography</h1>
            </div>
            <Spinner />
        </div>
    );
}