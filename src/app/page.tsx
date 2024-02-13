import IndexPage from '@/components/pages/main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'next-admin Dashboard',
  description: 'next admin dashboard created by Mohammadreza Hayati',
};

export default function Home() {
  return <IndexPage />;
}
