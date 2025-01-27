import React from 'react'
import Container from './Container'

function Header() {
  return (
    <div
    className=''>
        <Container>
            <div className='flex md:px-6 h-full shadow-lg items-center justify-stretch gap-4 bg-gradient-to-r from-cyan-300 via-blue-200 to-green-200 rounded-lg  md:flex-col '>
         
               
                
           
            <div className='text-center  flex flex-col md:flex-row  p-2 md:p-5 h-3/6 min-h-full bg-white rounded-lg m-12
             border ' dir='rtl'>
                 <img className='shadow-lg  h-[300px] w-[400px] md:w-[500px] md:h-[500px] rounded-2xl ' src="https://shmoobed.ir/wp-content/uploads/2024/03/%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA-%D8%B3%D9%82%D9%81-%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-edited.jpeg" />

                <div className='p-8'>
                <div className='flex flex-col gap-2 md:p-4 text-center'>
        <h2 className='font-bold md:text-4xl '>تبلیغات تبلیغات  تبلیغات </h2>
        <div className='mr-2'>
        <p className='font-semibold md:text-2xl text-gray-600'>تبلیغات هدفمند تاثیر گذار است و سرمایه گذاری برای تبلیغات لازمه بقا، رشد و سوددهی کسب و کار است.
            </p>
            <p className='font-semibold md:text-2xl text-gray-600'>تبلیغات کسب و کارتان را با مشاوره تخصصی تبلیغاتی شروع کنید تا به سرعت از رقبا عبور کنید.</p>

        </div>
      </div>
                                <h1 className='font-bold  md:text-4xl mb-4'>
                                تبلیغات به کسب و کار جان می دهد.
                                </h1>
                                <p className='font-semibold mb-8'>تبلیغات، راهکار خلاق ارتباط سودمند با مشتریان نیازمند است با این هدف که در کمترین زمان بیشترین تآثیر را در ذهن آنان بگذارد و سبب خرید شود.</p>

                                <span className='md:text-2xl p-4 rounded-lg shadow-md bg-gradient-to-r from-cyan-300 via-blue-200 to-green-200 ' dir='rtl'>تبلیغات سقف ندارد.</span>
                </div>

            
            </div>

            </div>
         


        </Container>
    </div>
  )
}

export default Header
