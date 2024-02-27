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
type dirType = 'rtl' | 'ltr';
const Root: FC<layoutProps> = ({ children }) => {
 
  
  const [langState, setLangState] = useState();
  const [dirState, setDirState] = useState<dirType>('ltr');
  const [dir, setDir] = useState<dirType>('ltr');
  useEffect(() => {
    themeChange(false);
    setDir(localStorage.getItem('direction') as dirType);
  }, []);
  useEffect(() => {
    const handleStorage = () => {
      const dir = localStorage.getItem('direction');
      return setDirState(dir as dirType);
    };

    window.addEventListener('storage', handleStorage() as any);
    return () => window.removeEventListener('storage', handleStorage() as any);
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
