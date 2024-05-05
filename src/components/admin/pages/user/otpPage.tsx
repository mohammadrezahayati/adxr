'use client';
import Container from '@Component/admin/container/container';
import OtpList from '@Component/admin/user/otpList';
import type { FC } from 'react';

interface otpPageProps {}

const OtpPage: FC<otpPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <OtpList />
    </Container>
  );
};
export default OtpPage;
