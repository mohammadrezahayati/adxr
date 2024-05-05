import { faker } from '@faker-js/faker';
import type { FC } from 'react';
import Pagination from '../common/pagination';
import Table from '../common/table';
import UserStat from './userStat';
interface userListProps {}
interface UserListData {
  image: string;
  fullName: string;
  country: string;
  company: string;
  jobTitle: string;
  jobType: string;
}

export function createRandomUser(): UserListData {
  return {
    image: faker.image.avatar(),
    fullName: faker.person.fullName(),
    country: faker.location.country(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
  };
}

export const users: UserListData[] = faker.helpers.multiple(createRandomUser, {
  count: 10,
});
const UserList: FC<userListProps> = ({}) => {
  const title = [' ', 'Name', 'Job', 'Favorite Color', ' '];
  return (
    <div className='w-full flex justify-start align-items-center flex-col gap-3'>
      <UserStat />
      <div className='h-full overflow-scroll flex justify-start bg-base-400 align-items-center flex-col w-full rounded-md'>
        <Table data={users} title={title} />
        <Pagination />
      </div>
    </div>
  );
};
export default UserList;
