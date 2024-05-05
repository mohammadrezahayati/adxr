import type { FC } from 'react';
import { faker } from '@faker-js/faker';
import TinyTable from '../common/tinyTable';
import Pagination from '../common/pagination';
interface paymentListProps {}
interface PaymentListData {
  fullName: string;
  email: string;
  number: string;
  price: string;
  status: string;
}

export function createRandomPayment(): PaymentListData {
  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    number: faker.phone.number(),
    price: `$${faker.number.float({ min: 10, max: 100, multipleOf: 0.02 })}`,
    status: faker.helpers.arrayElement(['success', 'failed', 'pending']),
  };
}

export const Payments: PaymentListData[] = faker.helpers.multiple(
  createRandomPayment,
  {
    count: 40,
  }
);

const PaymentList: FC<paymentListProps> = ({}) => {
  const title = ['full name', 'email', 'number', 'price', 'status'];
  return (
    <div className='tableContactHeight flex gap-4 flex-col'>
      <TinyTable title={title} data={Payments} footer />
      <Pagination />
    </div>
  );
};
export default PaymentList;
