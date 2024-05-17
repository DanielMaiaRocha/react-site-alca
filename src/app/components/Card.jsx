"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Card({ imgUrl, title, description, country, lang} ) {
  return (
    <div className='md:w-[70%] max-h-80 md:flex flex-auto mx-auto my-auto rounded-xl border cursor-pointer'>
        <div className="w-96 h-52 md:h-80 rounded-l-xl relative group" 
            style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        </div>
        <div className='text-black rounded-b-xl py-3 px-4'>
            <h5 className='text-2xl font-semibold mb-2 '>{title}</h5> 
            <p className='text-[#ADB7BE] w-72 max-h-20 indent-1 overflow-hidden'>{description}</p>
            <p className='flex flew-row mt-2'>
              <Image
                src="/images/lang.svg"
                alt="."
                width={28}
                height={28}
              />
              <span className='mt-1'>{lang}</span>
            </p>
            <p className='flex flew-row mb-2'>
              <Image
                src="/images/location.svg"
                alt="."
                width={28}
                height={28}
              />
              <span className='mt-1'>{country}</span>
            </p>
            <Link href={"#"} className=' flex absolute mt-10'>
                <span className='border rounded-lg p-2 font-semibold text-black'>See more</span>
            </Link>
        </div>
        <div className='flex items-end'>
          <div className='flex gap-3 justify-end ml-80'>
              <Link href={'/appoiment'} className='border rounded-md w-28 p-2 font-bold mb-4 flex items-center justify-center bg-[#17a2b8] text-white'>
                 <span>Appoiment</span>
              </Link>
              <Link href={'/chat'} className='border rounded-md w-28 p-2 font-bold mb-4 flex items-center justify-center ' >
                  <span>Chat</span>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Card