import CardWrapper from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';
import { SalesChartSkeleton, RecentEventsSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import SalesChart from '@/app/ui/dashboard/sales-chart';
import RecentEvents from '@/app/ui/dashboard/recent-events';

export const metadata: Metadata = {
    title: 'Dashboard',
  };
export default async function Page() {
    return (
        <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<SalesChartSkeleton />}>            
                <SalesChart />
            </Suspense>
            <Suspense fallback={<RecentEventsSkeleton />}>
                <RecentEvents />
            </Suspense>
        </div>
        </main>
    );
}