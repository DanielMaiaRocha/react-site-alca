"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Card({ imgUrl, title, description, country, lang} ) {
  return (
    <div className='w-[70%] flex flex-auto mx-auto my-auto rounded-xl border'>
        <div className="w-96 h-52 md:h-72 rounded-l-xl relative group" 
            style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        </div>
        <div className='text-black rounded-b-xl py-3 px-4'>
            <h5 className='text-2xl font-semibold mb-2 '>{title}</h5> 
            <p className='text-[#ADB7BE] w-96 indent-1 text-warp'>{description}</p>
            <p className='flex flew-row'>
              <Image
                src="/images/lang.svg"
                alt="."
                width={28}
                height={28}
              />
              <span className='mt-1'>{lang}</span>
            </p>
            <p className='flex flew-row'>
              <Image
                src="/images/location.svg"
                alt="."
                width={28}
                height={28}
              />
              <span className='mt-1'>{country}</span>
            </p>
        </div>
        <div className='flex items-end'>
          <div className='flex gap-3 justify-end ml-64'>
              <Link href={'#'}>
                  <button className='border rounded-md w-28 p-2 font-bold mb-4 text-white bg-[#17a2b8]'>Appoiment</button>
              </Link>
              <Link href={'#'}>
                  <button className='border rounded-md w-28 p-2 font-bold mb-4'>Chat</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Card