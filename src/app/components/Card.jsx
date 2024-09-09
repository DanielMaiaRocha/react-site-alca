"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card({ imgUrl, title, role, description, country, lang }) {
  return (
    <div className='md:w-[70%] max-h-80 md:flex mx-auto my-auto rounded-xl border cursor-pointer overflow-hidden'>
      <div className="w-96 h-52 md:h-80 rounded-l-xl relative bg-cover bg-no-repeat"
           style={{ backgroundImage: `url(${imgUrl})` }}>
      </div>
      <div className='flex flex-col justify-between p-4 text-black flex-1'>
        <div>
          <h5 className='text-2xl font-semibold mb-1'>{title}</h5>
          <h6 className='text-sm font-semibold mb-2'>{role}</h6>
          <p className='text-[#ADB7BE] text-ellipsis overflow-hidden'>{description}</p>
        </div>
        <div className='mt-4'>
          <p className='flex items-center mb-2'>
            <Image
              src="/images/lang.svg"
              alt="Language icon"
              width={24}
              height={24}
              className='mr-2'
            />
            <span>{lang}</span>
          </p>
          <p className='flex items-center'>
            <Image
              src="/images/location.svg"
              alt="Location icon"
              width={24}
              height={24}
              className='mr-2'
            />
            <span>{country}</span>
          </p>
        </div>
        <div className='flex gap-4 mt-4'>
          <Link href={'/appointment'} className='border rounded-md w-32 p-2 font-bold text-center bg-[#17a2b8] text-white'>
            Appointment
          </Link>
          <Link href={'/chat'} className='border rounded-md w-28 p-2 font-bold text-center'>
            Chat
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
