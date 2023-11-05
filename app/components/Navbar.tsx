import Image from 'next/image';
import React from 'react';

const Navbar = () => (
  <header className="lg:mx-36 2xl:mx-96 mt-4 flex items-center justify-between rounded-2xl px-16 py-2 shadow-xl">
    <a href="https://www.bhanuportfolio.xyz/" className="flex items-center">
      <Image src="/Assets/logo.png" alt="logo" height={40} width={165} />
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <nav className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex space-x-10 font-normal text-zinc-800">
        <li>
          <a
            href="/"
            className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
          >
            Team
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
          >
            Careers
          </a>
        </li>
      </ul>
    </nav>

    <button
      type="button"
      className=" hidden md:block rounded-lg border-[3px] border-blue-600 px-6 text-blue-700 py-1 lg:block"
    >
      Sign In
    </button>
  </header>
);

export default Navbar;
