import React from 'react';
import Image from 'next/image';

const MidAboutSection = () => {
  return (
    <div className='w-full py-16 relative'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 relative z-10'>
        <div className='lg:col-span-2 mr-22 flex flex-col items-center lg:items-start'>
          <h1 className='text-5xl font-customFont font-semibold text-[#18e0ff]'>Who we are?</h1>
          <p className='text-md sm:text-xl font-customFont font-semibold text-white my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem quia rerum, officia recusandae asperiores placeat quo et exercitationem similique!
          </p>
        </div>
        <div className='my-4 hidden lg:flex flex-col sm:flex-row'>
          <Image
            src="/images/logodubsol.png"
            alt='Logo'
            width={600}
            height={600}
          />
        </div>
      </div>
      <video className='w-full h-80 object-cover absolute top-0 left-0 z-0' src='/video/videobg.mp4' autoPlay loop muted></video>
    </div>
  );
}

export default MidAboutSection;