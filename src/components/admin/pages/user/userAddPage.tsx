'use client';
import Container from '@Component/admin/container/container';
import UserAdd from '@Component/admin/user/userAdd';
import type { FC } from 'react';

interface userAddPageProps {}

const UserAddPage: FC<userAddPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <UserAdd />
    </Container>
  );
};
export default UserAddPage;
