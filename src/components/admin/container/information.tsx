import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

interface informationProps {
  search?: boolean;
}

const Information: FC<informationProps> = ({ search }) => {
  const pathName = usePathname().split('/');
  return (
    <div className='flex justify-between align-items-center mb-4 flex-col lg:flex-row '>
      <div className='text-sm breadcrumbs'>
        <ul>
          {pathName.map((item, idx) => {
            return (
              <li className='text-base-content' key={idx}>
                <Link href={'#'}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {search && (
        <div>
          <label className='input text-base-content input-bordered flex items-center gap-2'>
            <input type='text' className='grow' placeholder='Search' />
            <kbd className='kbd kbd-sm'>⌘</kbd>
            <kbd className='kbd kbd-sm'>K</kbd>
          </label>
        </div>
      )}
    </div>
  );
};
export default Information;
