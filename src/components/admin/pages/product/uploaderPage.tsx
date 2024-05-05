'use client';
import Container from '@Component/admin/container/container';
import UploaderList from '@Component/admin/product/uploaderList';
import type { FC } from 'react';

interface uploaderPageProps {}

const UploaderPage: FC<uploaderPageProps> = ({}) => {
  return <Container breadcrumb search><UploaderList/></Container>;
};
export default UploaderPage;
