import type { FC } from 'react';
import Menu from './menu';
import Navbar from './navbar';

interface containerProps {
  children: React.ReactNode;
}

const container: FC<containerProps> = ({ children }) => {
  return (
    <div className='h-dvh w-full fixed'>
      <div className='w-full h-auto'>
        <Navbar />
      </div>
      <div className='containerStyle flex gap-4 pr-4 pl-4 pt-3'>
        <div className='flex-none h-full hidden lg:block'>
          <Menu />
        </div>
        <div className='grow h-full bg-base-300 rounded-box p-4 overflow-x-hidden overflow-y-scroll'>
          {children}
        </div>
      </div>
    </div>
  );
};
export default container;
