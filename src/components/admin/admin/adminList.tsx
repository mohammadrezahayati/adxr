import type { FC } from 'react';
import Table from '../common/table';
import { faker } from '@faker-js/faker';
import AdminStat from './adminStat';
import Pagination from '../common/pagination';
interface adminListProps {}
interface AdminListData {
  image: string;
  fullName: string;
  country: string;
  company: string;
  jobTitle: string;
  jobType: string;
}

export function createRandomAdmin(): AdminListData {
  return {
    image: faker.image.avatar(),
    fullName: faker.person.fullName(),
    country: faker.location.country(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
  };
}

export const Products: AdminListData[] = faker.helpers.multiple(
  createRandomAdmin,
  {
    count: 10,
  }
);
const AdminList: FC<adminListProps> = ({}) => {
  const title = [' ', 'Name', 'Job', 'Favorite Color', ' '];
  return (
    <div className='w-full flex justify-start align-items-center flex-col gap-3'>
      <AdminStat />
      <div className='h-full overflow-scroll flex justify-start bg-base-400 align-items-center flex-col w-full rounded-md'>
        <Table data={Products} title={title} />
        <Pagination />
      </div>
    </div>
  );
};
export default AdminList;
