'use client';
import type { FC } from 'react';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { FaBeer } from 'react-icons/fa';
import LayoutComponents from '../main/layout/layoutComponents';
interface mainProps {}

const IndexPage: FC<mainProps> = ({}) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <LayoutComponents>
        asd
      <FaBeer />
    </LayoutComponents>
  );
};
export default IndexPage;
