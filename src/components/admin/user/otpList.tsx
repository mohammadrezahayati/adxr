import type { FC } from 'react';
import { faker } from '@faker-js/faker';
import TinyTable from '../common/tinyTable';
import Pagination from '../common/pagination';
interface otpListProps {}
interface OtpListType {
  fullName: string;
  email: string;
  code: number;
  number: string;
  status: string;
}

export function createRandomOtp(): OtpListType {
  return {
    fullName: faker.person.fullName(),
    code: faker.number.int({ min: 111111, max: 999999 }),
    email: faker.internet.email(),
    number: faker.phone.number(),
    status: faker.helpers.arrayElement(['success', 'failed', 'pending']),
  };
}

export const Otp: OtpListType[] = faker.helpers.multiple(createRandomOtp, {
  count: 40,
});
const OtpList: FC<otpListProps> = ({}) => {
  const title = ['full name', 'code', 'email', 'number', 'status'];
  return (
    <div className='tableContactHeight flex gap-4 flex-col'>
      <TinyTable title={title} data={Otp} />
      <Pagination />
    </div>
  );
};
export default OtpList;
