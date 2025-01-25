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

    <nav className='flex justify-between items-center p-6 rounded-b-md px-8 shadow-md bg-white'>
      <div className='flex gap-3 ml-8'>
        {
            navlinks.map((item=>(
                <Link key={item.href} className={`hover:bg-slate-400 p-3 rounded font-semibold text-gray-600 text-2xl${pathname === item.href ? "text-sky-300 border-b-2 border-sky-500" : ""} {${console.log(pathname)}}`} href={item.href}>{item.title}</Link>

            )))
        }
      </div>
      <div>
        <Link className='font-bold text-gray-800 text-2xl' href="./">شهرام موبد</Link>
      </div>
    </nav>
    </Container>
  )
}

export default Navbar
