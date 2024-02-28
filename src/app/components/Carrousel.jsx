"use client"
import React from 'react';
import Slider from 'react-slick'; 
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {  
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1300,
  cssEase: "linear",    
  breakpoint: 1024,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
};

const Carrousel = () => {
  return (
    <div className="relative max-w-sreen=lg mx-auto w-full ">
        <h1 className='mx-auto justify-center text-[black] font-bold font-sans text-5xl flex p-2 border-b-8 rounded-sm border-[#17a2b8]'>
          Customers
        </h1>
        <div className='relative px-4 md:px-0 block pt-30 pt-md-0'>
            <Slider {...settings} className='p-7 max-w-[1240px] mx-auto'> 
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/netflix.png" alt="/" width={150} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/amazon.png" alt="/" width={80} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/disney.jpg" alt="/" width={100} height={100} />
                </div>
                <div className="mx-2">
                <Image className=" object-contain mx-auto" src="/images/warner.svg" alt="/" width={100} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/crunchyroll.png" alt="/" width={170} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/dwa.png" alt="/" width={140} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/deluxe.png" alt="/" width={80} height={100}/>
                </div>
                <div className="mx-2">
                <Image className=" object-contain mx-auto" src="/images/iyunno.jpg" alt="/" width={130} height={100}/>
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/zap.png" alt="/" width={100} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/onegai.png" alt="/" width={80} height={100}/>
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/pixelogic.jpg" alt="/" width={150} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/audible.png" alt="/" width={130} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/baybus.jpg" alt="/" width={210} height={120} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/futura.png" alt="/" width={90} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/globolivros.png" alt="/" width={120} height={100} />
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/hbo.png" alt="/" width={100} height={100}/>
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/lionsgate.svg" alt="/" width={180} height={100}/>
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/mattel.png" alt="/" width={80} height={100}/>
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/mgm.png" alt="/" width={150} height={100}/>
                </div>
                <div className="mx-2">
                <Image className="object-contain mx-auto" src="/images/nbcu.svg" alt="/" width={200} height={100}/>
                </div>
            </Slider>
        </div>
    </div>
  );
}

export default Carrousel;
