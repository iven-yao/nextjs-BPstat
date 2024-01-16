import Spinner from "@/app/ui/spinner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Members',
  };
export default function Page(){
    return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
          <h1 className={`text-2xl`}>Members</h1>
      </div>
      Under Construction...
      <Spinner />
    </div>
    );
}