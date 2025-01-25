import React from 'react'
import Container from './Container'

function Header() {
  return (
    <div
    className='mt-12'>
        <Container>
            <div className='flex items-center justify-stretch gap-4 shadow-md bg-white rounded-lg '>
            <div className='h-3/6' >
                <img className='rounded-s-lg relative ' src="https://shmoobed.ir/wp-content/uploads/2024/03/%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA-%D8%B3%D9%82%D9%81-%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-edited.jpeg" />
                
                     
            
            </div>
            <div className='text-center  flex flex-col p-5 h-3/6 min-h-full ' dir='rtl'>
                <div className='p-8'>

                                <h1 className='font-bold  text-4xl mb-4'>
                                تبلیغات به کسب و کار جان می دهد.
                                </h1>
                                <p className='font-semibold mb-8'>تبلیغات، راهکار خلاق ارتباط سودمند با مشتریان نیازمند است با این هدف که در کمترین زمان بیشترین تآثیر را در ذهن آنان بگذارد و سبب خرید شود.</p>

                                <span className='text-2xl p-4 shadow-md  ' dir='rtl'>تبلیغات سقف ندارد.</span>
                </div>

                <div className='flex gap-4 justify-center mt-8'>
                    <button className='px-6 py-2 rounded-md shadow-lg border bg-black text-white hover:bg-gray-600'>معرفی شهرام موبد </button>
                </div>
            </div>

            </div>
         


        </Container>
    </div>
  )
}

export default Header
