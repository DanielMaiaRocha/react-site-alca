import React from 'react'
import Image from 'next/image'
import { SlSocialLinkedin, SlSocialInstagram, SlBubble, SlGlobe } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 border-t-2'>
        <div >
            <Image
                src={"/images/logo.png"}
                alt="/"
                width={100}
                height={100}
            />  
            <h1 className='w-full text-3xl text-gray-400 font-sans font-semibold'>Dub<span className='text-[#17a2b8]'>ber</span></h1>
            <p className='text-gray-300 py-4'>Send us a message with any questions or suggestions, our team will respond you as fast we can! </p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <SlSocialInstagram size={40} className='text-[purple]' />
                <SlSocialLinkedin  size={40} className='text-[darkblue]'/>
                <SlBubble size={40} className='text-black'/>
                <SlGlobe size={40} className='text-black' />
            </div>
            <div className='lg:col-span-3 flex justify-between'>
                <div className=''>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer