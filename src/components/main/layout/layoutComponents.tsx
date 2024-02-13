import type { FC } from 'react';
import Navbar from '../navbar/navbar';

interface layoutComponentsProps {
  children: React.ReactNode;
}

const LayoutComponents: FC<layoutComponentsProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default LayoutComponents;
