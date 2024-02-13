import type { FC } from 'react';
import ThemeToggle from './themeToggle';

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <>
      <ThemeToggle />
    </>
  );
};
export default Navbar;
