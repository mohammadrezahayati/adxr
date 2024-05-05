'use client';

import Container from '@Component/admin/container/container';
import BottomChart from '@Component/admin/dashboard/bottomChart';
import MainChart from '@Component/admin/dashboard/mainChart';
import TopChart from '@Component/admin/dashboard/topChart';
import type { FC } from 'react';

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  
  return (
    <Container>
      <TopChart />
      <MainChart />
      <BottomChart />
    </Container>
  );
};
export default DashboardPage;
