import Image from 'next/image'
import React from 'react'
import "./CardPage.css"

const CardPage = () => {
  return (
    <div id='page' className='flex justify-center mt-20'>
        <div id="container" className='w-[1400px] pt-8 pb-0 gap-12 flex flex-wrap'>
            <div id="left" className='flex flex-col flex-none gap-5'>
                <span className='font-semibold text-sm text-[#555]'>DUBBER / Dubbing Actor</span>
                <h1 className='font-bold text-2xl '>Ashley Davis</h1>
                <div>
                   <div className='flex gap-3 items-center pb-3'>
                        <Image 
                            src={"/images/w2.jpg"}
                            alt='/'
                            width={250}
                            height={250}
                            className='rounded-full w-28 h-28 object-cover'
                        />
                        <span id='Name' className='font-semibold text-lg'>Dubbing actor</span>
                        <div id='stars' className='flex flex-row gap-1 '>
                            <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                            <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                            <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                            <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                            <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                            <span className='font-bold text-[#ffc108]'>5</span>
                        </div>
                    </div>
                    <video controls     className='w-[50rem] h-[32rem] flex items-center justify-center object-contain'>
                        <source src='/video/videobg.mp4' />
                    </video> 
                    <h2 className='py-4 font-semibold text-lg'>About me</h2>
                    <p className='font-light text-md text-[#555] leading-6 max-w-[36rem]'>I’m Ashley Cooper, a voice actress from the U.S. I specialize in bringing animated characters to life across TV shows, video games, and audiobooks with my versatile voice.</p>     
                    <div id='seller' className='mt-12 flex flex-col gap-3  w-[32rem]'>
                        <h2 className='font-semibold text-lg'>About the professional</h2>
                        <div className='flex items-center gap-5'>
                            <Image 
                                src={"/images/w2.jpg"}
                                alt='/'
                                width={250}
                                height={250}
                                className='rounded-full w-24 h-24 object-cover items-center'
                            />
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-semibold text-md'>Ashley Cooper</h1>
                                <div id='stars' className='flex flex-row gap-1'>
                                    <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                    <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                    <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                    <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                    <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                    <span className='font-semibold text-[#ffc108]'>5</span>
                                </div>
                                <button className='border border-black font-semibold text-black rounded-md mt-2 p-1'>Chat me</button>
                            </div>
                        </div>
                    </div>             
                </div>
                <div id="box" className='border border-[lightgray] rounded-sm p-5 mt-5 '>
                    <div id="items" className='flex flex-wrap justify-between'>
                        <div id='item' className='flex flex-col w-72 gap-2 mb-3'>
                            <span id='title' className='text-md text-[gray]'>From</span>
                            <span id='desc' className='font-semibold text-md'>USA</span>
                        </div>
                        <div id='item' className='flex flex-col w-72 gap-2 mb-3'>
                            <span id='title' className='text-md text-[gray]'>Years of Experience</span>
                            <span id='desc' className='font-semibold text-md'>12</span>
                        </div>
                        <div id='item' className='flex flex-col w-72 gap-2 mb-3'>
                            <span id='title' className='text-md text-[gray]'>Language</span>
                            <span id='desc' className='font-semibold text-md'>English</span>
                        </div>
                        <div id='item' className='flex flex-col w-72 gap-2 mb-3'>
                            <span id='title' className='text-md text-[gray]'>Avg. response time</span>
                            <span id='desc' className='font-semibold text-md'>4 hours</span>
                        </div>
                    </div>
                    <hr className='h-0 border border-[lightgray] mb-2'/>
                    <p className='mt-2 text-[#555]'>I’m Ashley Cooper, a voice actress from the U.S. I’m thrilled to bring animated characters to life across TV shows, video games, and audiobooks with my versatile voice. I’m eager to collaborate and create something extraordinary together</p>
                </div>
                <div id="reviews" className='flex flex-col mt-14 mb-20'>
                    <h2 className='font-semibold text-2xl'>Reviews</h2>
                    <hr className='h-0 border border-[lightgray] mb-2'/>
                    <div id="item" className='flex flex-col gap-5 mt-5 mb-5'>
                        <div id="user" className='flex items-center gap-3'>
                            <Image 
                                src={"/images/teste.jpeg"} 
                                alt='/' 
                                width={350} 
                                height={350}  
                                className='h-14 w-14 rounded-full object-cover'
                            />
                            <div id="info">
                                <span className='font-semibold'>Daniel R.</span>
                                <div id="country" className='flex items-center gap-2 text-[gray]'>
                                    <Image src={"/images/brazil.svg"} alt='/' width={30} height={30} className='w-5' />
                                    <span>Brasil</span>
                                </div>
                            </div>
                        </div>
                        <div id='stars' className='flex flex-row -mt-2 gap-1'>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <span className='font-semibold text-[#ffc108]'>5</span>
                        </div>
                        <p>It was a plasure work with a such Dubbing Actriss</p>
                    </div>
                    <hr />
                    <div id="item" className='flex flex-col gap-5 mt-5 mb-5'>
                        <div id="user" className='flex items-center gap-3'>
                            <Image 
                                src={"/images/h2.jpg"} 
                                alt='/' 
                                width={350} 
                                height={350}  
                                className='h-14 w-14 rounded-full object-cover'
                            />
                            <div id="info">
                                <span className='font-semibold'>Samir Maluf</span>
                                <div id="country" className='flex items-center gap-2 text-[gray]'>
                                    <Image src={"/images/saudi.svg"} alt='/' width={30} height={30} className='w-5' />
                                    <span>Saudi Arabia</span>
                                </div>
                            </div>
                        </div>
                        <div id='stars' className='flex flex-row -mt-2 gap-1'>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <span className='font-semibold text-[#ffc108]'>5</span>
                        </div>
                        <p>Great dubbing atress, cant wait to work more with her</p>
                    </div>
                    <hr />
                    <div id="item" className='flex flex-col gap-5 mt-5 mb-5'>
                        <div id="user" className='flex items-center gap-3'>
                            <Image 
                                src={"/images/w1.jpg"} 
                                alt='/' 
                                width={350} 
                                height={350}  
                                className='h-14 w-14 rounded-full object-cover'
                            />
                            <div id="info">
                                <span className='font-semibold'>Klelia Demetriou</span>
                                <div id="country" className='flex items-center gap-2 text-[gray]'>
                                    <Image src={"/images/greece.svg"} alt='/' width={30} height={30} className='w-5' />
                                    <span>Greece</span>
                                </div>
                            </div>
                        </div>
                        <div id='stars' className='flex flex-row -mt-2 gap-1'>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <Image src={"/images/star.png"} alt='/' width={20} height={20}/>
                                <span className='font-semibold text-[#ffc108]'>5</span>
                        </div>
                        <p>We spend a good time working on our last project!</p>
                    </div>
                </div>
                <hr />
            </div>
            
            <div id="right" className='flex flex-col flex-initial border border-[lightgray] p-5 rounded-md gap-5 sticky top-40 max-h-[350px]'>
                <div id="price" className='flex gap-72'>
                    <h2 className='text-lg font-semibold'>Let&apos;s Talk!</h2>
                    <h3 className='text-lg font-semibold'>$50/hr</h3>
                </div>
                <p className='text-lg font-light text-[#555]'>Come talk to me and booking a date, im sure i will enjoy working on your project</p>
                <div id="datails">
                    <div id="item" className='flex flex-row gap-2'>
                        <Image src={"/images/clock.png"} alt='/' width={25} height={25}/>
                        <span className='text-md text-[#555] font-bold'>Chat for booking</span>
                    </div>
                </div>
                <div id="features" className='flex flex-col gap-2'>
                    <div id="item" className='flex flex-row gap-2'>
                        <Image src={"/images/check.png"} alt='/' width={25} height={25}/>
                        <span>Certified Professional</span>
                    </div>
                    <div id="item" className='flex flex-row gap-2'>
                        <Image src={"/images/check.png"} alt='/' width={25} height={25}/>
                        <span>Dubsol Aproval</span>
                    </div>
                    <div id="item" className='flex flex-row gap-2'>
                        <Image src={"/images/check.png"} alt='/' width={25} height={25}/>
                        <span>Dubsol Certified</span>
                    </div>
                </div>
                <button className='bg-[#17a2b8] p-1 rounded-md text-white'>Chat here</button>
            </div>
        </div>
    </div>
  )
}

export default CardPage