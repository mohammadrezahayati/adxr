'use client';
import { useDirection } from '@/utils/direction';
import { Inter, Rubik } from 'next/font/google';
import { useEffect, useState, type FC } from 'react';
import { RecoilRoot } from 'recoil';
import { themeChange } from 'theme-change';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const rubic = Rubik({ subsets: ['arabic'], variable: '--font-rubic' });

interface layoutProps {
  children: React.ReactNode;
}

const Root: FC<layoutProps> = ({ children }) => {
  const lang = localStorage.getItem('lang');
  const dir = localStorage.getItem('direction') ?? 'ltr';
  const [langState, setLangState] = useState();
  const [dirState, setDirState] = useState<'rtl' | 'ltr'>('ltr');
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  useEffect(() => {
    const handleStorage = () => {
      const dir = localStorage.getItem('direction') ?? "ltr";
      return setDirState(dir);
    };

    window.addEventListener('storage', handleStorage());
    return () => window.removeEventListener('storage', handleStorage());
  }, []);
  return (
    <html lang="en" className={`${inter.variable} ${rubic.variable}`} dir={dir}>
      <body>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
};
export default Root;
