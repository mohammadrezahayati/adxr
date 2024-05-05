import type { FC } from 'react';
import { faker } from '@faker-js/faker';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProductType {
  image: string;
  name: string;
  count: number;
  profit: string;
}

export function createRandomProduct(): ProductType {
  return {
    image: faker.image.url(),
    name: faker.commerce.product(),
    count: faker.number.int(1000),
    profit: faker.number
      .int(10000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  };
}

export const Products: ProductType[] = faker.helpers.multiple(
  createRandomProduct,
  {
    count: 20,
  }
);
interface productMiniListProps {}

const ProductMiniList: FC<productMiniListProps> = ({}) => {
  return (
    <div className='flex justify-start flex-col align-items-start gap-3'>
      {Products.map((item, idx) => {
        return (
          <div
            className='flex justify-between align-items-center min-w-96 gap-4'
            key={idx}>
            <div className='avatar flexCenter'>
              <div className='w-10 rounded-full'>
                <img src={item.image} alt={item.name} />
              </div>
            </div>
            <span className='productMiniListItem text-base-content w-full'>
              {item.name}
            </span>
            <span className='productMiniListItem text-base-content w-full'>
              {item.count}
            </span>
            <span className='productMiniListItem text-base-content w-full'>
              ${item.profit}
            </span>
            <button className='btn btn-primary'>
              <FaArrowUpRightFromSquare /> show
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductMiniList;
