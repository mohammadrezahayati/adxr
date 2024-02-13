'use client';
import type { FC } from 'react';
import { Inter, Rubik } from 'next/font/google';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const rubic = Rubik({ subsets: ['arabic'], variable: '--font-rubic' });
interface layoutProps {
  children: React.ReactNode;
}

const Root: FC<layoutProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <html lang="en" className={`${inter.variable} ${rubic.variable}`}>
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
