'use client';
import AdminAdd from '@Component/admin/admin/adminAdd';
import Container from '@Component/admin/container/container';
import type { FC } from 'react';

interface adminAddPageProps {}

const AdminAddPage: FC<adminAddPageProps> = ({}) => {
  return (
    <Container breadcrumb>
      <AdminAdd />
    </Container>
  );
};
export default AdminAddPage;
