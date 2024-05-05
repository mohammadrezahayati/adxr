import type { FC } from 'react';

interface paginationProps {}

const Pagination: FC<paginationProps> = ({}) => {
        return (
          <div className='join flex justify-center align-items-center'>
            <input
              className='join-item btn btn-square'
              type='radio'
              name='options'
              aria-label='1'
              checked
            />
            <input
              className='join-item btn btn-square'
              type='radio'
              name='options'
              aria-label='2'
            />
            <input
              className='join-item btn btn-square'
              type='radio'
              name='options'
              aria-label='3'
            />
            <input
              className='join-item btn btn-square'
              type='radio'
              name='options'
              aria-label='4'
            />
          </div>
        );
}
export default Pagination;