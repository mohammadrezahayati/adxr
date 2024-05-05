import type { FC } from 'react';
import { TableHelper } from 'src/util';

interface tinyTableProps {
  title: any[];
  data: any;
  footer?: boolean;
}

const TinyTable: FC<tinyTableProps> = ({ data, title, footer }) => {
  return (
    <div className='overflow-x-auto h-full'>
      <table className='table table-xs'>
        <thead>
          <tr>
            {title.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{TableHelper(data)}</tbody>
        <tfoot>
          <tr>
            {footer && (
              <>
                {title.map((item, idx) => (
                  <th key={idx}>{item}</th>
                ))}
              </>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default TinyTable;
