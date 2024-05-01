import type { FC } from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import UserMiniList from './userMiniList';
import { FaDolly } from 'react-icons/fa6';
import ProductMiniList from './productMiniList';
import { FaArrowUpRightDots } from 'react-icons/fa6';
import Analytics from './analytics';

interface bottomChartProps {}

const BottomChart: FC<bottomChartProps> = ({}) => {
  return (
    <div className='flex align-items-center w-full  h-dvh lg:h-80 justify-center flex-col lg:flex-row mt-4 gap-4 '>
      <div className='w-full lg:w-2/3 h-full lg:h-80  bg-base-400 rounded-md p-4 overflow-x-hidden overflow-y-scroll'>
        <div className='font-bold text-base-content w-full flex justify-start align-items-center gap-3'>
          <span className='flexCenter analyticsIconProductStyle'>
            <FaDolly />
          </span>
          <span>Top Selling Products</span>
        </div>
        <div className={'mt-4'}>
          <ProductMiniList />
        </div>
      </div>
      <div className='w-full lg:w-1/2 h-1/2 lg:h-80  bg-base-400 rounded-md p-4'>
        <div className='font-bold text-base-content w-full flex justify-start align-items-center gap-3'>
          <span className='flexCenter analyticsIconAnalyticsStyle'>
            <FaArrowUpRightDots />
          </span>
          <span>Analytics List</span>
        </div>
        <div className={'mt-4'}>
          <Analytics />
        </div>
      </div>
    </div>
  );
};
export default BottomChart;
