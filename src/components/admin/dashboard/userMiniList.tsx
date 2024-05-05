import { faker } from '@faker-js/faker';
import type { FC } from 'react';
import { FaLink } from 'react-icons/fa6';
interface UserType {
  name: string;
  number: string;
  color: string;
}

export function createRandomUser(): UserType {
  return {
    name: faker.person.fullName(),
    number: faker.phone.number(),
    color: faker.color.rgb({ includeAlpha: true }),
  };
}

export const userData: UserType[] = faker.helpers.multiple(createRandomUser, {
  count: 20,
});
interface userMiniListProps {}

const UserMiniList: FC<userMiniListProps> = ({}) => {
  return (
    <div className='w-full d-flex justify-between align-items-center h-80 '>
      {userData.map((item, idx) => {
        return (
          <div
            className='mt-2 mb-2 flex justify-between gap-2 align-items-center'
            key={idx}>
            <div className='flex justify-between gap-2 align-items-center'>
              <div className='avatar placeholder'>
                <div className={`rounded-full w-12 glass`}>
                  <span
                    style={{
                      color: item.color,
                      filter: `drop-shadow(1px 5px 11px ${item.color})`,
                    }}
                    className='font-bold'>
                    {item.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className='text-base-content flex justify-start align-items-center flex-col'>
                <span className='font-bold text-sm whitespace-nowrap'>
                  {item.name}
                </span>
                <span className='text-sm whitespace-nowrap'>{item.number}</span>
              </div>
            </div>
            <div className='flex justify-start align-items-start flex-col'>
              <span className='text-sm text-base-content'>12/3/2024</span>
              <span className='text-lg text-blue-500 flex justify-end w-full align-items-start cursor-pointer '>
                <FaLink />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserMiniList;
