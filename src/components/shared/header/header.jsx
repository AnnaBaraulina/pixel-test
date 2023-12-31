'use client';

import Link from 'next/link';

import Button from '../button/button';

const Header = () => (
  <header className="bg-black h-16 flex justify-center items-center relative">
    <nav className="">
      <ul className="flex items-center md:hidden">
        <li className="mr-5">
          <Link
            className="text-gray-98 font-normal text-sm no-underline flex items-center"
            href="#"
          >
            <span>Integrations</span>
          </Link>
        </li>
        <li className="mr-5">
          <Link
            className="text-gray-98 flex items-center font-normal text-sm no-underline"
            href="#"
          >
            <span className="mr-1">Core Platform</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 1L4 4L7.5 1" stroke="#FAF9FA" />
            </svg>
          </Link>
        </li>
        <li className="mr-5">
          <Link
            className="text-gray-98 flex items-center font-normal text-sm no-underline"
            href="#"
          >
            <span className="mr-1">Company</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 1L4 4L7.5 1" stroke="#FAF9FA" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-98 flex items-center font-normal text-sm no-underline"
            href="#"
          >
            <span className="mr-1 text-gray-98">Resources</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 1L4 4L7.5 1" stroke="#FAF9FA" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>

    <div className="flex absolute top-50% right-0 mr-24">
      <button className="text-gray-98 font-medium text-sm mr-5">Contact Sales</button>
      <Button size="md" theme="gray">
        Book a Demo
      </Button>
    </div>
  </header>
);

export default Header;
