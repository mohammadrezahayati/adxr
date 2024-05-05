import type { FC } from 'react';

interface userStatProps {}

const UserStat: FC<userStatProps> = ({}) => {
  return (
    <div className='stats stats-vertical lg:stats-horizontal shadow w-full rounded-md'>
      <div className='stat lg:gap-4'>
        <div className='stat-title'>Requests</div>
        <div className='stat-value font-bold Dash-newDownloads'>451K</div>
        <div className='stat-desc'>Jan 1st - Feb 1st</div>
      </div>

      <div className='stat lg:gap-4'>
        <div className='stat-title'>New Users</div>
        <div className='stat-value font-bold Dash-newUsers'>6,231</div>
        <div className='stat-desc'>↗︎ 400 (22%)</div>
      </div>

      <div className='stat lg:gap-4'>
        <div className='stat-title'>New Registers</div>
        <div className='stat-value font-bold Dash-newRegisters'>5,932</div>
        <div className='stat-desc'>↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};
export default UserStat;
