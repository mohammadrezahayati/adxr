import { ReactNode } from 'react';

/* This code snippet defines a function named `TableHelper` that takes an input parameter `data` of
type `any` and returns a `ReactNode`. */
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
