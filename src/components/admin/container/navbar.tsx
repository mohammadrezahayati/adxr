import { useState, type FC } from 'react';
import Drawer from './drawer';
import { setDir } from 'src/util';

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  const [checkTheme, setCheckTheme] = useState<'dark' | 'light'>('dark');
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <span className='block lg:hidden'>
          <Drawer />
        </span>
        <a className='btn btn-ghost text-xl text-base-content'>ARH</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-primary m-1'>
            Lang
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-base-100 text-base-content rounded-box w-24'>
            <li>
              <a onClick={() => setDir('ltr')}>English</a>
            </li>
            <li>
              <a onClick={() => setDir('rtl')}>Persian</a>
            </li>
          </ul>
        </div>
        <input
          data-toggle-theme={checkTheme}
          type='checkbox'
          onChange={(e) => {
            return setCheckTheme(checkTheme === 'dark' ? 'light' : 'dark');
          }}
          className={`toggle`}
        />
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
