'use client';
import Container from '@Component/admin/container/container';
import UserEdit from '@Component/admin/user/userEdit';
import type { FC } from 'react';

interface userEditPageProps {}

const UserEditPage: FC<userEditPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <UserEdit />
    </Container>
  );
};
export default UserEditPage;
