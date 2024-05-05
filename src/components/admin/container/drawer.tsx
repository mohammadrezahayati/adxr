import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { FaAlignJustify } from 'react-icons/fa6';
import {
  FaArrowDownWideShort,
  FaBagShopping,
  FaBarcode,
  FaBasketShopping,
  FaBloggerB,
  FaFileInvoiceDollar,
  FaGear,
  FaHouse,
  FaMoneyBillTransfer,
  FaPhoneVolume,
  FaQuestion,
  FaReadme,
  FaRegAddressCard,
  FaUpload,
  FaUserLarge,
  FaUserTie,
} from 'react-icons/fa6';
interface drawerProps {}

const Drawer: FC<drawerProps> = ({}) => {
  const pathname = usePathname().split('/');
  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer' className='btn glass drawer-button'>
          <FaAlignJustify />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <ul className='menu flex-nowrap overflow-x-hidden overflow-y-scroll rounded-e-2xl rounded-ee-2xl h-full gap-2 p-4 w-60 min-h-full backdrop-blur-xl bg-base-500'>
          <li>
            <Link
              href={'/admin/dashboard'}
              className={`text-base ${
                pathname[2] === 'dashboard'
                  ? 'bg-primary hover:bg-primary text-base-200'
                  : 'text-base-content'
              }`}>
              <FaHouse />
              Dashboard
            </Link>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[2] === 'admin'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaUserTie />
                Admin
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/admin/add'}
                    className='text-base text-base-content'>
                    Add
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/admin/edit'}
                    className='text-base text-base-content'>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/admin/list'}
                    className='text-base text-base-content'>
                    List
                  </Link>
                </li>
                {/* <li>
              <details>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[2] === 'user' &&
                  pathname[3] !== 'bag' &&
                  pathname[3] !== 'otp'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaUserLarge />
                Users
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/user/add'}
                    className='text-base text-base-content'>
                    Add
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/user/edit'}
                    className='text-base text-base-content'>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/user/list'}
                    className='text-base text-base-content'>
                    List
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li
            className={`text-base rounded-lg ${
              pathname[2] === 'payment'
                ? 'bg-primary hover:bg-primary text-base-200'
                : 'text-base-content'
            }`}>
            <Link href={'/admin/payment'}>
              <FaMoneyBillTransfer />
              Payment
            </Link>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[2] === 'order'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaFileInvoiceDollar />
                Orders
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/order/edit'}
                    className='text-base text-base-content'>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/order/list'}
                    className='text-base text-base-content'>
                    List
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[2] === 'product' && pathname[3] !== 'uploader'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaBagShopping />
                Products
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/product/add'}
                    className='text-base text-base-content'>
                    Add
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/product/edit'}
                    className='text-base text-base-content'>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/product/list'}
                    className='text-base text-base-content'>
                    List
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li
            className={`text-base rounded-lg ${
              pathname[3] === 'uploader'
                ? 'bg-primary hover:bg-primary text-base-200'
                : 'text-base-content'
            }`}>
            <Link href={'/admin/product/uploader'}>
              <FaUpload />
              Uploader
            </Link>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[2] === 'category'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaArrowDownWideShort />
                Category
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/category/main'}
                    className='text-base text-base-content'>
                    main
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className='text-base text-base-content'>
                <FaGear />
                Settings
              </summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[3] === 'qa'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaQuestion />
                QA
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/setting/qa/add'}
                    className='text-base text-base-content'>
                    Add
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/setting/qa/edit'}
                    className='text-base text-base-content'>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/setting/qa/list'}
                    className='text-base text-base-content'>
                    List
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              href={'/admin/setting/policy'}
              className={`text-base ${
                pathname[3] === 'policy'
                  ? 'bg-primary hover:bg-primary text-base-200'
                  : 'text-base-content'
              }`}>
              <FaReadme />
              Policy
            </Link>
          </li>
          <li>
            <Link
              href={'/admin/setting/contactUs'}
              className={`text-base ${
                pathname[3] === 'contactUs'
                  ? 'bg-primary hover:bg-primary text-base-200'
                  : 'text-base-content'
              }`}>
              <FaPhoneVolume /> ContactUs
            </Link>
          </li>
          <li>
            <Link
              href={'/admin/setting/aboutUs'}
              className={`text-base ${
                pathname[3] === 'aboutUs'
                  ? 'bg-primary hover:bg-primary text-base-200'
                  : 'text-base-content'
              }`}>
              <FaRegAddressCard /> AboutUs
            </Link>
          </li>
          <li>
            <Link
              href={'/admin/user/otp'}
              className={`text-base ${
                pathname[3] === 'otp'
                  ? 'bg-primary hover:bg-primary text-base-200'
                  : 'text-base-content'
              }`}>
              <FaBarcode /> OTP
            </Link>
          </li>
          <li>
            <Link
              href={'/admin/user/bag'}
              className={`text-base ${
                pathname[3] === 'bag'
                  ? 'bg-primary hover:bg-primary text-base-200'
                  : 'text-base-content'
              }`}>
              <FaBasketShopping /> Bags
            </Link>
          </li>
          <li>
            <details>
              <summary
                className={`text-base ${
                  pathname[2] === 'blog'
                    ? 'bg-primary hover:bg-primary text-base-200'
                    : 'text-base-content'
                }`}>
                <FaBloggerB />
                Blog
              </summary>
              <ul>
                <li>
                  <Link
                    href={'/admin/blog/add'}
                    className='text-base text-base-content'>
                    Add
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/blog/edit'}
                    className='text-base text-base-content'>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/admin/blog/list'}
                    className='text-base text-base-content'>
                    List
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
