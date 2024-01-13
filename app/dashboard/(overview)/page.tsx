import CardWrapper from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import SalesChart from '@/app/ui/dashboard/sales-chart';
import RecentEvents from '@/app/ui/dashboard/recent-events';

export const metadata: Metadata = {
    title: 'Dashboard',
  };
export default async function Page() {
    return (
        <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>            
                <SalesChart />
            </Suspense>
            <Suspense fallback={<LatestInvoicesSkeleton />}>
                <RecentEvents />
            </Suspense>
        </div>
        </main>
    );
}