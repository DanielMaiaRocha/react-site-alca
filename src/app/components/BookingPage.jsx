import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Booking.css'


const BookingPage = () => {
  return (
    <div id='bookings' className='mt-20 flex justify-center'>
        <div id="container" className='w-[1400px] py-12 px-12'>
            <div id="title" className='font-bold text-2xl flex justify-between items-center mb-10'>
                <h1>Bookings</h1>
                <div className='flex gap-3'> 
                    <Link href={"/confirmations"} className='flex items-center p-1 rounded-md border border-[#17a2b8] hover:bg-[#17a2b8] hover:text-white hover:border-none'>Confirmations</Link>
                    <Link href={"/messages"} className=' p-1 rounded-md bg-[#17a2b8]  border-[#17a2b8] text-white'>Messages</Link>
                </div>
            </div>
            <table className='w-full justify-center '>
                <tr className='h-12'>
                    <th className='text-left'>Hirer</th>
                    <th className='text-left'>Production</th>
                    <th className='text-left'>Price</th>
                    <th className='text-left'>Date</th>
                    <th className='text-left'>Action</th>
                </tr>
                <tr className='h-12'>
                    <td className='p-2'>
                        <Image src={"/images/profile-bg.png"} alt='/' width={50} height={80} className='rounded-full w-12  object-cover'/>
                    </td>
                    <td>Teste 1</td>
                    <td>50/hr</td>
                    <td>02/08/2024</td>
                    <td className='w-12 h-7'>
                        <button><Image src={"/images/message.png"} alt='/' width={25} height={25}/></button>
                    </td>
                </tr>
                <br />
            </table>
            <div className='flex flex-row items-center justify-center'>
                <div className='flex gap-3'>
                    <button className='hover:-translate-x-1'><Image src={"/images/arrow-r.png"} alt='/' width={15} height={15} className='rounded-full  object-cover'/></button>
                    <span>1</span>
                    <button className='hover:translate-x-1'><Image src={"/images/arrow-l.png"} alt='/' width={15} height={15} className='rounded-full object-cover'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingPage