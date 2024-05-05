'use client';
import AdminList from '@Component/admin/admin/adminList';
import Container from '@Component/admin/container/container';
import type { FC } from 'react';

interface adminListPageProps {}

const AdminListPage: FC<adminListPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <AdminList />
    </Container>
  );
};
export default AdminListPage;
