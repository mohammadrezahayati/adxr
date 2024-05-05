import type { FC } from 'react';

interface userAddProps {}

const UserAdd: FC<userAddProps> = ({}) => {
  return (
    <form className='w-full flexCenter flex-col gap-4'>
      <div role='alert' className='alert alert-warning lg:w-3/6 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
          />
        </svg>
        <span>Added User</span>
      </div>
      <div className='flex justify-center align-items-center w-full lg:w-3/6 gap-3 flex-col'>
        <label className='input input-bordered flex items-center gap-2 text-base-content font-bold'>
          Name
          <input type='text' className='grow font-normal' placeholder='Daisy' />
        </label>
        <label className='input input-bordered flex items-center gap-2 text-base-content font-bold'>
          Middle Name
          <input type='text' className='grow font-normal' placeholder='Daisy' />
        </label>
        <label className='input input-bordered flex items-center gap-2 text-base-content font-bold'>
          Family
          <input type='text' className='grow font-normal' placeholder='Daisy' />
        </label>

        <label className='input input-bordered flex items-center gap-2 text-base-content font-bold'>
          Email
          <input
            type='text'
            className='grow font-normal'
            placeholder='daisy@site.com'
          />
        </label>
        <label className='input input-bordered flex items-center gap-2 text-base-content font-bold'>
          Number
          <input
            type='number'
            className='grow font-normal'
            placeholder='123456789'
          />
        </label>
        <input type='file' className='file-input file-input-bordered w-full' />
        <select className='select select-bordered w-full'>
          <option disabled selected>
            User Type
          </option>
          <option>Super User</option>
          <option>User</option>
        </select>
        <textarea
          className='textarea textarea-bordered'
          placeholder='Description'></textarea>
        <div className='flex justify-start align-items-center gap-4'>
          <button className='btn btn-neutral'>Cancel</button>
          <button className='btn btn-primary'>Added</button>
        </div>
      </div>
    </form>
  );
};
export default UserAdd;
