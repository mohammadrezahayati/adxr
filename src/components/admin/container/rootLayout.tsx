'use client';
import { Inter } from 'next/font/google';
import { type FC } from 'react';
import '../../../app/globals.css';
import '../../../assets/sass/style.scss';
interface rootLayoutProps {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ['latin'] });
const RootLayoutPage: FC<rootLayoutProps> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayoutPage;
