"use client";
import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navlink from './NavLink.jsx';
import MenuOverlay from './MenuOverlay.jsx';


const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Services",
        path: "#services",
    },
    {
        title: "Contact",
        path: "#contact",
    },

];


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

const handleLoginButtonClick = () => {
    window.location.href = "/login"; 
};    

    return (
        <nav className='fixed mx-auto border-b border-l-transparent border-t-transparent top-0 left-0 right-0 z-20 bg-white opacity-100'>
            <div className='container mx-auto px-4 py-1'>
                <div className='flex items-center justify-between'>
                    <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
                        <Image
                            src="/images/logo.png"
                            width={70}
                            height={70}
                            alt="logo"
                        />
                    </Link>
                    <div className='menu hidden md:block md:w-auto'>
                        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 m-0 justify-center font-sans font-bold text-xl'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Navlink href={link.path} title={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mobile-menublock md:hidden'>
                        {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-blac'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div>
                        <button onClick={handleLoginButtonClick} id='loginbtn' className='bg-[#17a2b8] hover:bg-[#468089] rounded-md text-white font-semibold w-36 p-1'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;