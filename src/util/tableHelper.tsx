import { ReactNode } from 'react';

export const TableHelper = (data: any): ReactNode => {
  let keys = data.length && Object.keys(data[0]);
  return data.map((item: any, idx: number) => {
    return (
      <tr key={idx}>
        {keys.map((i: any, d: number) => {
          return <th className='text-base-content' key={d}>{item[i]}</th>;
        })}
      </tr>
    );
  });
};
