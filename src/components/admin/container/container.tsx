import { useEffect, type FC } from 'react';
import Menu from './menu';
import Navbar from './navbar';
import { themeChange } from 'theme-change';
import Information from './information';
interface containerProps {
  children: React.ReactNode;
  search?: boolean;
  breadcrumb?: boolean;
}

const Container: FC<containerProps> = ({ children, search, breadcrumb }) => {
  useEffect(() => {
    themeChange(false);
  }, []);
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
          {(breadcrumb || search) && <Information search={search} />}
          {children}
        </div>
      </div>
    </div>
  );
};
export default Container;
