import { generateSaleChartYAxis, generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchSaleChart } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function SalesChart() {
  const albums = await fetchSaleChart();
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

  const { yAxisLabels, topLabel } = generateSaleChartYAxis(albums);

  if (!albums || albums.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Top Sales Album
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="rounded-xl bg-black border-2 border-pink-400 p-4">
        <div className="sm:grid-cols-9 mt-0 grid grid-cols-9 items-end gap-2 rounded-md md:gap-4">
          <div
            className="hidden flex-col justify-between text-right text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {albums.map((album) => (
            <div key={album.id} className="has-tooltip flex flex-col gap-2">
                <div className='tooltip rounded shadow-lg text-xs w-fit'>{album.sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                <div
                    className="w-full rounded-md bg-pink-300 relative cursor-pointer mt-auto"
                    style={{
                    height: `${(chartHeight / topLabel) * album.sale}px`,
                    }}
                >
                </div>
            </div>
          ))}
        </div>
        <div className='mt-0 grid grid-cols-9 gap-2 rounded-md md:gap-4'>
            <div></div>
            {albums.map((album) => (
                <div key={album.id} className="text-sm text-center text-gray-400">
                    {album.name.toString()}
                </div>
            ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
