import type { FC } from 'react';

interface tableProps {
  data: any[];
  title: string[];
  bottom?: boolean;
}

const Table: FC<tableProps> = ({ title, bottom = false, data }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            {title.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          src={item.image}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold text-base-content'>{item.fullName}</div>
                      <div className='text-sm opacity-50 text-base-content'>{item.country}</div>
                    </div>
                  </div>
                </td>
                <td className='text-base-content'>
                  {item.jobTitle}
                  <br />
                  <span className='badge badge-ghost badge-sm'>
                    {item.jobType}
                  </span>
                </td>
                <td className='text-base-content'>{item.jobTitle}</td>
                <th>
                  <button className='btn btn-primary btn-xs'>details</button>
                </th>
              </tr>
            );
          })}
        </tbody>
        {/* foot */}
        {bottom === true && (
          <tfoot>
            <tr>
              {title.map((item, idx) => (
                <th key={idx}>{item}</th>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
export default Table;
