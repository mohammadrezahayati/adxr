'use client';
import type { FC } from 'react';
import Container from '../container/container';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import TopChart from './topChart';
import MainChart from './mainChart';
import BottomChart from './bottomChart';
interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return <Container>
    <TopChart/>
    <MainChart/>
    <BottomChart/>
  </Container>;
};
export default DashboardPage;
