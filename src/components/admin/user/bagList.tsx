import type { FC } from 'react';
import { faker } from '@faker-js/faker';
import TinyTable from '../common/tinyTable';
import Pagination from '../common/pagination';
interface bagListProps {}
interface BagListData {
  fullName: string;
  product: string
  email: string;
  number: string;
  price: string;
  status: string;
}

export function createRandomBag(): BagListData {
  return {
    fullName: faker.person.fullName(),
    product: faker.commerce.product(),
    email: faker.internet.email(),
    number: faker.phone.number(),
    price: `$${faker.number.float({ min: 10, max: 100, multipleOf: 0.02 })}`,
    status: faker.helpers.arrayElement(['success', 'failed', 'pending']),
  };
}

export const Bags: BagListData[] = faker.helpers.multiple(
  createRandomBag,
  {
    count: 40,
  }
);
const BagList: FC<bagListProps> = ({}) => {
     const title = ['full name','product', 'email', 'number', 'price', 'status'];
        return (
          <div className='tableContactHeight flex gap-4 flex-col'>
            <TinyTable title={title} data={Bags} />
            <Pagination />
          </div>
        );
}
export default BagList;