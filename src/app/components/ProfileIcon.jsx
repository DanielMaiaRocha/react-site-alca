import React, { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';


export const ProfileIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className='rounded-full bg-zinc-300 flex p-0'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[55px] h-[55px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-md p-4 m-3 w-56 h-56">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link href="/myProfile" className=" hover:bg-gray-200 rounded text-lg md:text-xl font-semibold font-customFont3 flex justify-center items-center mt-3">
                Account
            </Link>
          </li>
          <li>
            <Link href="/myProfile" className=" hover:bg-gray-200 rounded text-lg md:text-xl font-semibold font-customFont3 flex justify-center items-center mt-3">
                My Profile
            </Link>
          </li>
          <li>
            <Link href="/myProfile"className=" hover:bg-gray-200 rounded text-lg md:text-xl font-semibold font-customFont3 flex justify-center items-center mt-3 mb-3">
               Settings
            </Link>
          </li>
          <button onClick={() => signOut()}className='rounded hover:bg-[#5d9ba5] bg-[#17a2b8] text-lg md:text-xl text-white font-customFont3 font-semibold flex justify-center items-center'>
                Log Out
          </button>
        </ul>
      </div>
      )}
    </div>
  );
};
