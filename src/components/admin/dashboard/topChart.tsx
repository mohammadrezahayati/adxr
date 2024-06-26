import type { FC } from 'react';
import {
  FaChartLine,
  FaFileInvoiceDollar,
  FaMoneyCheckDollar,
} from 'react-icons/fa6';

interface topChartProps {}

const TopChart: FC<topChartProps> = ({}) => {
  return (
    <div className='flex justify-between flex-col lg:flex-row align-items-center gap-2'>
      <div className='w-full flexCenter flex-col rounded-md p-4 bg-base-400 text-base-content gap-3 lg:gap-6'>
        <div className='flex justify-start w-full align-items-center text-lg lg:text-2xl font-bold gap-2'>
          <span className='flexCenter'>
            <FaChartLine className='lg:text-3xl chartTotalSales' />
          </span>
          <span> Total Sales </span>
        </div>
        <div className='chartTotalSales'>
          <span className='stat-value'>1,456</span>
        </div>
      </div>
      <div className='w-full flexCenter flex-col rounded-md p-4 bg-base-400 text-base-content gap-3 lg:gap-6'>
        <div className='flex justify-start w-full align-items-center text-lg lg:text-2xl font-bold gap-2'>
          <span className='flexCenter'>
            <FaMoneyCheckDollar className='lg:text-3xl chartTotalProfit' />
          </span>
          <span> Total Profit </span>
        </div>
        <div className='chartTotalProfit'>
          <span className='stat-value'>$151,234</span>
        </div>
      </div>
      <div className='w-full flexCenter flex-col rounded-md p-4 bg-base-400 text-base-content gap-3 lg:gap-6'>
        <div className='flex justify-start w-full align-items-center text-lg lg:text-2xl font-bold gap-2'>
          <span className='flexCenter'>
            <FaFileInvoiceDollar className='lg:text-3xl chartAllOrder' />
          </span>
          <span> All Orders </span>
        </div>
        <div className='chartAllOrder'>
          <span className='stat-value'>567</span>
        </div>
      </div>
    </div>
  );
};
export default TopChart;
