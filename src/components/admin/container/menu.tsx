import type { FC } from 'react';
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

interface menuProps {}

const Menu: FC<menuProps> = ({}) => {
  return (
    <ul className='menu flex-nowrap overflow-x-hidden overflow-y-scroll bg-base-300 w-56 rounded-box h-full gap-2'>
      <li>
        <a className='text-base text-base-200 bg-primary hover:bg-primary'>
          <FaHouse />
          Dashboard
        </a>
      </li>

      <li>
        <details>
          <summary className='text-base text-base-content'>
            <FaUserTie />
            Admin
          </summary>
          <ul>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
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
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className='text-base text-base-content'>
            <FaUserLarge />
            Users
          </summary>
          <ul>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
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
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className='text-base text-base-content'>
            <FaMoneyBillTransfer />
            Payment
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
          <summary className='text-base text-base-content'>
            <FaFileInvoiceDollar />
            Orders
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
          <summary className='text-base text-base-content'>
            <FaBagShopping />
            Products
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
          <summary className='text-base text-base-content'>
            <FaUpload />
            Uploader
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
          <summary className='text-base text-base-content'>
            <FaArrowDownWideShort />
            Category
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
          <summary className='text-base text-base-content'>
            <FaQuestion />
            QA
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
          <summary className='text-base text-base-content'>
            <FaReadme />
            Policy
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
        <a className='text-base text-base-content'>
          <FaPhoneVolume /> ContactUs
        </a>
      </li>
      <li>
        <a className='text-base text-base-content'>
          <FaRegAddressCard /> AboutUs
        </a>
      </li>
      <li>
        <a className='text-base text-base-content'>
          <FaBarcode /> OTP
        </a>
      </li>
      <li>
        <a className='text-base text-base-content'>
          <FaBasketShopping /> Bags
        </a>
      </li>
      <li>
        <details>
          <summary className='text-base text-base-content'>
            <FaBloggerB />
            Blog
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
    </ul>
  );
};
export default Menu;
