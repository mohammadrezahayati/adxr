import { setDirection } from '@/utils/direction';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { AiOutlineTranslation } from 'react-icons/ai';

interface langToggleProps {}
interface CountryType {
  name: string;
  flag: string;
  dir: 'rtl' | 'ltr';
}
const LangToggle: FC<langToggleProps> = ({}) => {
  const Countries: CountryType[] = [
    {
      name: 'USA',
      flag: '/image/flag/usa.png',
      dir: 'ltr',
    },
    {
      name: 'IRAN',
      flag: '/image/flag/iran.png',
      dir: 'rtl',
    },
  ];
  return (
    <details className="dropdown">
      <summary className="m-1 btn bg-transparent border-0">
        <AiOutlineTranslation
          style={{
            width: '35px',
            height: '35px',
          }}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
        {Countries.map((item) => {
          return (
            <li
              className="flex flex-row justify-start align-center gap-3 w-100"
              key={item.name}
            >
              <button
                onClick={() => setDirection(item.dir)}
                style={{ width: '100%' }}
              >
                <Image
                  src={item.flag}
                  alt={'countries'}
                  width={28}
                  height={15}
                />
                <span>{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </details>
  );
};
export default LangToggle;
