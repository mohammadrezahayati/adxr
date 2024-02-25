import type { FC } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';

interface layoutComponentsProps {
  children: React.ReactNode;
}

const LayoutComponents: FC<layoutComponentsProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mainBody bg-base-300 backdrop-blur-md">
        {children}
      </main>
      <Sidebar />
    </>
  );
};
export default LayoutComponents;
