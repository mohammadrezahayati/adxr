'use client';
import Container from '@Component/admin/container/container';
import BagList from '@Component/admin/user/bagList';
import type { FC } from 'react';

interface bagPageProps {}

const BagPage: FC<bagPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <BagList />
    </Container>
  );
};
export default BagPage;
