import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Booking.css'


const Messages = () => {
    const currentUser = {
        id: 1, 
        username: 'Patricia', 
        isSeller: true
    }

    const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse totam nisi assumenda, numquam dolores quidem eveniet explicabo, animi, ab asperiores repellendus! Iste provident mollitia dignissimos repellendus laborum quis eum possimus.'
  return (
    <div id='bookings' className='mt-20 flex justify-center'>
        <div id="container" className='w-[1400px] py-12 px-12'>
            <div id="title" className='font-bold text-2xl flex justify-between items-center mb-10'>
                <h1>Bookings</h1>
                <div className='flex gap-3'> 
                    <Link href={"/confirmations"} className='flex items-center p-1 rounded-md border border-[#17a2b8] hover:bg-[#17a2b8] hover:text-white hover:border-none'>Confirmations</Link>
                    <Link href={"/chat"} className=' p-1 rounded-md bg-[#17a2b8] border border-[#17a2b8] text-white'>Messages</Link>
                </div>
            </div>
            <table className='w-full justify-center '>
                <tr className='h-12'>
                    <th className='text-left'>Hirer</th>
                    <th className='text-left'>Message</th>
                    <th className='text-left'>Production</th>
                    <th className='text-left'>Date</th>
                    <th className='text-left'>Action</th>
                </tr>
                <tr className='h-12'>
                    <td className='p-3'>
                        Patricia Zap
                    </td>
                    <td className='max-w-72 p-2 mx-auto text-sm text-[#555]'>{message}</td>
                    <td>Seven Deadly Sins</td>
                    <td>20/05/2024</td>
                    <td className='w-12 h-7'>
                        <Link href={'/chat'}><Image src={"/images/message.png"} alt='/' width={25} height={25}/></Link>
                    </td>
                </tr>
                <br />
                <tr className='h-12'>
                    <td className='p-3'>
                        Patricia Zap
                    </td>
                    <td className='max-w-72 p-2 mx-auto text-sm text-[#555]'>{message}</td>
                    <td>Seven Deadly Sins</td>
                    <td>20/05/2024</td>
                    <td className='w-12 h-7'>
                        <Link href={'/chat'}><Image src={"/images/message.png"} alt='/' width={25} height={25}/></Link>                    </td>
                </tr>
                <br />
                <tr className='h-12'>
                    <td className='p-3'>
                        Patricia Zap
                    </td>
                    <td className='max-w-72 p-2 mx-auto text-sm text-[#555]'>{message}</td>
                    <td>Seven Deadly Sins</td>
                    <td>20/05/2024</td>
                    <td className='w-12 h-7'>
                        <Link href={'/chat'}><Image src={"/images/message.png"} alt='/' width={25} height={25}/></Link>
                    </td>
                </tr>
                <br />
                <tr className='h-12'>
                    <td className='p-3'>
                        Patricia Zap
                    </td>
                    <td className='max-w-72 p-2 mx-auto text-sm text-[#555]'>{message}</td>
                    <td>Seven Deadly Sins</td>
                    <td>20/05/2024</td>
                    <td className='w-12 h-7'>
                        <Link href={'/chat'}><Image src={"/images/message.png"} alt='/' width={25} height={25}/></Link>
                    </td>
                </tr>
                <br />
                <tr className='h-12'>
                    <td className='p-3'>
                        Patricia Zap
                    </td>
                    <td className='max-w-72 p-2 mx-auto text-sm text-[#555]'>{message}</td>
                    <td>Seven Deadly Sins</td>
                    <td>20/05/2024</td>
                    <td className='w-12 h-7'>
                        <Link href={'/chat'}><Image src={"/images/message.png"} alt='/' width={25} height={25}/></Link>
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

export default Messages