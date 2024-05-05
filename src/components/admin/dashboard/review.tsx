import type { FC } from 'react';
import { FaDownload, FaPersonCirclePlus, FaStar } from 'react-icons/fa6';
interface reviewProps {}

const Review: FC<reviewProps> = ({}) => {
  return (
    <div className='stats stats-vertical shadow w-full lg:w-1/6 overflow-hidden rounded-md'>
      <div className='stat'>
        <div className='stat-title flex justify-start align-items-center gap-2'>
          <span className='flexCenter'>
            <FaDownload />
          </span>
          <span className='flexCenter'>Downloads</span>
        </div>
        <div className='stat-value Dash-newDownloads'>31K</div>
        <div className='stat-desc'>Jan 1st - Feb 1st</div>
      </div>

      <div className='stat'>
        <div className='stat-title flex justify-start align-items-center gap-2'>
          <span className='flexCenter'>
            <FaStar />
          </span>
          <span className='flexCenter '>New Users</span>
        </div>
        <div className='stat-value Dash-newUsers'>4,200</div>
        <div className='stat-desc'>↗︎ 400 (22%)</div>
      </div>

      <div className='stat'>
        <div className='stat-title flex justify-start align-items-center gap-2'>
          <span className='flexCenter'>
            <FaPersonCirclePlus />
          </span>
          <span className='flexCenter'>New Registers</span>
        </div>
        <div className='stat-value Dash-newRegisters'>1,200</div>
        <div className='stat-desc'>↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};
export default Review;
