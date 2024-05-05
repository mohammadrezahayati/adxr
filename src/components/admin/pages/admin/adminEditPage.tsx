'use client';
import AdminEdit from '@Component/admin/admin/adminEdit';
import Container from '@Component/admin/container/container';
import type { FC } from 'react';

interface adminEditPageProps {}

const AdminEditPage: FC<adminEditPageProps> = ({}) => {
  return <Container breadcrumb search><AdminEdit/></Container>;
};
export default AdminEditPage;
