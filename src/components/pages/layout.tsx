'use client';
import { Inter, Rubik } from 'next/font/google';
import { useEffect, useState, type FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { themeChange } from 'theme-change';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const rubic = Rubik({ subsets: ['arabic'], variable: '--font-rubic' });

interface layoutProps {
  children: React.ReactNode;
}

const Root: FC<layoutProps> = ({ children }) => {
  const queryClient = new QueryClient();
  const lang = localStorage.getItem('lang')
  const  [langState , setLangState] = useState()
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${rubic.variable}`}
      dir={'rtl'}
    >
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
};
export default Root;
