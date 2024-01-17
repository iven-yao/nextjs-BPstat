import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function BpstatLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-black text-[40px]`}>
      BP
      <span className='text-[20px] animate-pulse text-pink-200'><GlobeAltIcon width={20}/></span>
      STAT
    </div>
  );
}
