"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Card = () => {
  const [isRed, setIsRed] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div className='flex justify-center items-center -mt-20 mb-20 md:mr-96 md:mb-20 md:-mt-20'>
      <div className={`border shadow-xl w-96 md:w-[60%] h-60 rounded-md relative`}>
        <div className='absolute top-4 left-[10.8rem] md:top-6 md:left-[11.5rem] h-full w-10 flex items-center justify-center'>
          <div className={`w-4 h-4 rounded-full ${isOnline ? 'bg-green-500 border-2 border-black' : ' border-2 border-black bg-gray-500'}`}></div>
        </div>
        <div className='flex justify-end items-end mt-2 mr-1 md:mt-5 md:mr-3'>
          <button onClick={toggleColor}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={isRed ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={isRed ? "red" : "currentColor"} className="w-6 h-6 md:w-7 md:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>
        <div className='absolute top-[10.5rem] left-4'>
          <ul className='flex flex-col text-zinc-400'>
            <li className='flex flex-row gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Brasil
            </li>
            <li className='flex flex-row justify-center items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
              </svg>
              Portuguese
            </li>
          </ul>
        </div>
        <div className='-mt-5 ml-4 md:-mt-8 md:ml-5 flex flex-row'>
          <Image
            src={"/images/flavia.jpg"}
            alt='/'
            width={200}
            height={200}
            className='rounded-md border-2 border-black'
          />
          <div className='gap-2'>
            <h1 className='ml-3 text-xl font-customFont3 font-semibold'>Flavia Saddy</h1>
            <p className='ml-3 text-md text-zinc-400 font-customFont3'>Dubbing Actor/Director</p>
          </div>
          <div className='flex flex-col justify-end -ml-[8rem] mr-2 -mb-[4.3rem] md:ml-20 md:-mb-[4rem] gap-3'>
            <button className='bg-zinc-200 border shadow-lg  hover:bg-zinc-300 rounded-md w-32 p-1 text-lg font-medium'>Chat</button>
            <button className='bg-[#17a2b8] border shadow-lg  hover:bg-[#468089] rounded-md w-32 p-1 text-lg font-medium text-white'>Appoint</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
