"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'
import Hamicon from '../assets/svg/burger-menu-svgrepo-com.svg'
function Navbar() {
    const pathname=usePathname()
    const navlinks= [
        {
            href:"./contact_us",
            title:"تماس باما"
        },
        
        {
            href:"./blog",
            title:"بلاگ"
        },
   ]
  return (
    <Container>

    <nav className='flex justify-between items-center p-6 rounded-b-md px-8 shadow-md bg-gradient-to-r from-cyan-300 via-blue-200 to-green-200'>
      <div className='flex justify-between bg-white p-2 rounded-md items-center w-full px-9'>
      <div className='md:flex hidden   ml-4'>
        {
            navlinks.map((item=>(
                <Link key={item.href} className={`hover:text-cyan-500 p-3 rounded font-semibold text-gray-600 text-2xl${pathname === item.href ? 'text-sky-300 border-b-2 border-sky-500' : ""} {${console.log(pathname)}}`} href={item.href}>{item.title}</Link>

            )))
        }
      </div>
      <div className='w-10 h-10'>
        <img className='w-[40px] h-[40px]' src={Hamicon} alt="" /> 
      </div>
      <div>
        <Link className='font-bold text-gray-800 text-2xl hover:text-cyan-500' href="./">شهرام موبد</Link>
      </div>
      </div>
     
    </nav>
    </Container>

  )
}

export default Navbar
