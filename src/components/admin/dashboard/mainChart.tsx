import { ColorType, createChart } from 'lightweight-charts';
import { useEffect, useRef, useState, type FC } from 'react';
import { FaChartSimple, FaUserGroup } from 'react-icons/fa6';

import Review from './review';
import UserMiniList from './userMiniList';

interface mainChartProps {}

const MainChart: FC<mainChartProps> = ({}) => {
  const chartContainerRef = useRef();
  const [theme, setTheme] = useState<any>();
  const colors = {
    backgroundColor: 'transparent',
    lineColor: '#29cdff',
    textColor: theme === 'light' ? 'black' : 'white',
    areaTopColor: '#29cdff',
    areaBottomColor: 'rgba(41, 205, 255, 0.28)',
  };
  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ];
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(localStorage.getItem('theme'));
    }
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.backgroundColor },
        textColor: colors.textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor: colors.lineColor,
      topColor: colors.areaTopColor,
      bottomColor: colors.areaBottomColor,
    });
    newSeries.setData(initialData);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    initialData,
    colors.backgroundColor,
    colors.lineColor,
    colors.textColor,
    colors.areaTopColor,
    colors.areaBottomColor,
  ]);
  return (
    <div className='flex align-items-center w-full justify-center flex-col lg:flex-row mt-4 gap-4'>
      <div className='w-full lg:w-1/2 bg-base-400 rounded-md p-4 z-0 overflow-x-hidden overflow-y-scroll'>
        <div className='font-bold text-base-content w-full flex justify-start align-items-center gap-3'>
          <span className='flexCenter analyticsIconChartStyle'>
            <FaChartSimple />
          </span>
          <span>Profit Chart</span>
        </div>
        <div className={'mt-4'}>
          <div
            className='w-full rounded-md p-4 z-0'
            accordion-body
            ref={chartContainerRef}></div>
        </div>
      </div>

      <div className='w-full lg:w-1/2 bg-base-400 rounded-md p-4 overflow-x-hidden overflow-y-scroll'>
        <div className='font-bold text-base-content w-full flex justify-start align-items-center gap-3'>
          <span className='flexCenter analyticsIconUserStyle'>
            <FaUserGroup />
          </span>
          <span>User List</span>
        </div>
        <div className={'mt-4'}>
          <UserMiniList />
        </div>
      </div>
      <Review />
    </div>
  );
};
export default MainChart;
