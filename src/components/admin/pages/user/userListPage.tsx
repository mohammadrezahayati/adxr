'use client';
import Container from '@Component/admin/container/container';
import UserList from '@Component/admin/user/userList';
import type { FC } from 'react';

interface userListPageProps {}

const UserListPage: FC<userListPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <UserList />
    </Container>
  );
};
export default UserListPage;
