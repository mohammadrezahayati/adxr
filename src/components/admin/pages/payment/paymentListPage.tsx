'use client';
import Container from '@Component/admin/container/container';
import PaymentList from '@Component/admin/payment/paymentList';
import type { FC } from 'react';

interface paymentListPageProps {}

const PaymentListPage: FC<paymentListPageProps> = ({}) => {
  return (
    <Container breadcrumb search>
      <PaymentList />
    </Container>
  );
};
export default PaymentListPage;
