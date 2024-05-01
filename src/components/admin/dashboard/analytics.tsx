import type { FC } from 'react';
import { FaCircleExclamation, FaMoneyBillTransfer, FaRankingStar, FaSackDollar, FaStairs, FaWallet } from 'react-icons/fa6';

interface analyticsProps {}

const Analytics: FC<analyticsProps> = ({}) => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between align-items-center mb-5'>
        <div className='flex justify-center align-items-center gap-3'>
          <span className='flexCenter analyticsIconStyle'>
            <FaSackDollar />
          </span>
          <span className='text-base-content'>Total Profit</span>
        </div>
        <div className='text-base-content font-bold'>$3,345</div>
      </div>
      <div className='flex justify-between align-items-center mb-5'>
        <div className='flex justify-center align-items-center gap-3'>
          <span className='flexCenter analyticsIconStyle'>
            <FaWallet />
          </span>
          <span className='text-base-content'>withdrawn</span>
        </div>
        <div className='text-base-content font-bold'>$3,345</div>
      </div>
      <div className='flex justify-between align-items-center mb-5'>
        <div className='flex justify-center align-items-center gap-3'>
          <span className='flexCenter analyticsIconStyle'>
            <FaMoneyBillTransfer />
          </span>
          <span className='text-base-content'>Next Billing</span>
        </div>
        <div className='text-base-content font-bold'>5/1/2024</div>
      </div>
      <div className='flex justify-between align-items-center mb-5'>
        <div className='flex justify-center align-items-center gap-3'>
          <span className='flexCenter analyticsIconStyle'>
            <FaRankingStar />
          </span>
          <span className='text-base-content'>Seller Ranking</span>
        </div>
        <div className='text-base-content font-bold'>#963</div>
      </div>
      <div className='flex justify-between align-items-center mb-5'>
        <div className='flex justify-center align-items-center gap-3'>
          <span className='flexCenter analyticsIconStyle'>
            <FaCircleExclamation />
          </span>
          <span className='text-base-content'>Warning</span>
        </div>
        <div className='text-base-content font-bold'>3</div>
      </div>
      <div className='flex justify-between align-items-center mb-5'>
        <div className='flex justify-center align-items-center gap-3'>
          <span className='flexCenter analyticsIconStyle'>
            <FaStairs />
          </span>
          <span className='text-base-content'>Growth</span>
        </div>
        <div className='text-base-content font-bold'>$3,345</div>
      </div>
    </div>
  );
};
export default Analytics;
