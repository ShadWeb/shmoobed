"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'

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

    <nav className='flex justify-between items-center p-4 rounded-b-md px-8 shadow-md bg-slate-400'>
      <div className='flex justify-between bg-white p-2 rounded-md items-center w-full px-4 md:px-9 '>
      <div className='md:flex hidden   ml-4'>
        {
            navlinks.map((item=>(
                <Link key={item.href} className={`hover:text-cyan-500 p-3 rounded font-semibold text-gray-600 text-2xl${pathname === item.href ? 'text-sky-300 border-b-2 border-sky-500' : ""} {${console.log(pathname)}}`} href={item.href}>{item.title}</Link>

            )))
        }
      </div>
      <div className='w-10 h-10 md:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
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
