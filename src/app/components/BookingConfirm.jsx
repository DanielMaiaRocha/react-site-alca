"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import './Booking.css'



const BookingConfirm = () => {
    useEffect(() => {
        const checkBtn = document.getElementById('checkBtn');
        const declineBtn = document.getElementById('declineBtn');
        const popup = document.getElementById('popup');
        const popupOverlay = document.getElementById('popupOverlay');
        const closePopup = document.getElementById('closePopup');
    
        function showPopup() {
          popup.style.display = 'block';
          popupOverlay.style.display = 'block';
        }
    
        function hidePopup() {
          popup.style.display = 'none';
          popupOverlay.style.display = 'none';
        }
    
        checkBtn.addEventListener('click', showPopup);
        declineBtn.addEventListener('click', showPopup);
        closePopup.addEventListener('click', hidePopup);
        popupOverlay.addEventListener('click', hidePopup);
    
        // Cleanup event listeners on component unmount
        return () => {
          checkBtn.removeEventListener('click', showPopup);
          declineBtn.removeEventListener('click', showPopup);
          closePopup.removeEventListener('click', hidePopup);
          popupOverlay.removeEventListener('click', hidePopup);
        };
      }, []);
  
    return (
    <div id='bookings' className='mt-20 flex justify-center'>
        <div id="container" className='w-[1400px] py-12 px-12'>
            <div id="title" className='font-bold text-2xl flex justify-between items-center mb-10'>
                <h1>Bookings</h1>
                <div className='flex gap-3'> 
                    <Link href={"/confirmations"} className='flex items-center p-1 rounded-md border border-[#17a2b8] hover:bg-[#17a2b8] hover:text-white hover:border-none'>Confirmations</Link>
                    <Link href={"/messages"} className=' p-1 rounded-md bg-[#17a2b8]  border border-[#17a2b8] text-white'>Messages</Link>
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
                    <td className='w-12 h-7 '>
                        <div className='flex flex-row justify-center items-center mr-10 gap-5 w-24'>
                            <button id="checkBtn"><Image src={"/images/checkbtn.png"} alt='/' width={25} height={25}/></button>
                            <button id="declineBtn"><Image src={"/images/declinebtn.png"} alt='/' width={25} height={25}/></button>
                        </div>
                    </td>
                </tr>
            </table>
            <div className='flex flex-row items-center justify-center'>
                <div className='flex gap-3'>
                    <button className='hover:-translate-x-1'><Image src={"/images/arrow-r.png"} alt='/' width={15} height={15} className='rounded-full  object-cover'/></button>
                    <span>1</span>
                    <button className='hover:translate-x-1'><Image src={"/images/arrow-l.png"} alt='/' width={15} height={15} className='rounded-full object-cover'/></button>
                </div>
            </div>
        </div>
        <div class="popup-overlay" id="popupOverlay" className='hidden fixed left-0 top-0 w-[400px] h-full z-[999]' ></div>
            <div class="popup" id="popup" className='hidden fixed justify-center items-center top-96 translate-[50% 50%] p-5 bg-white border rounded z-[1000]'>
            <p>Accept this Boking?</p>
            <div className='flex justify-center items-center gap-10 mt-2 mb-2'>
                <button>Yes</button>
                <button>No</button>
            </div>
            <button class="close-popup" id="closePopup" className='cursor-pointer mt-2 ml-10 bg-[#17a2b8] rounded text-white p-2'>Fechar</button>
        </div>
    </div>
  )
}

export default BookingConfirm