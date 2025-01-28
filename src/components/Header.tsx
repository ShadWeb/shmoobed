import React from 'react'
import Container from './Container'
import Advertising_item from './Advertising_item'

function Header() {
  return (
    <div
    className=''>
        <Container>
            <div className='flex mt-12 py-9   h-full shadow-lg items-center justify-center w-full px-9 gap-4 bg-slate-50 rounded-lg border  md:flex-col '>
            {/* <div className='text-center  flex flex-col md:flex-row    h-full bg-white rounded-lg 
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

            
            </div> */}
         
         <div dir='rtl' className="  w-full flex min-h-[500px] sm:mx-4 overflow-hidden rounded-xl border  bg-white shadow-md ">
          <div className="md:flex">
            <div className="md:shrink-0 lg:w-1/4">
              <img  className="h-48 w-full object-cover md:h-full md:w-48 lg:w-full "
                src="https://shmoobed.ir/wp-content/uploads/2024/03/%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA-%D8%B3%D9%82%D9%81-%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-edited.jpeg"
              />
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div>
              <p className="text-sm md:text-lg font-semibold tracking-wide text-indigo-500 uppercase">تبلیغات سقف ندارد.</p>
                  <p className="mt-1 block text-lg leading-tight font-medium text-black ">
                  تبلیغات هدفمند تاثیر گذار است و سرمایه گذاری برای تبلیغات لازمه بقا، رشد و سوددهی کسب و کار است.              </p>
                  <p className="mt-1 block text-lg leading-tight font-medium text-black ">
                  تبلیغات کسب و کارتان را با مشاوره تخصصی تبلیغاتی شروع کنید تا به سرعت از رقبا عبور کنید.</p>
                  <p className="mt-2 text-gray-500">
                  تبلیغات راهکار خلاق ارتباط سودمند با مشتریان نیازمند است با این هدف که در کمترین زمان بیشترین تآثیر را در ذهن آنان بگذارد و سبب خرید شود.
                  </p>
              </div>

                 
                  <div className='hidden md:flex flex-wrap md:gap-2 lg:gap-4 md:w-full '>
                      <Advertising_item img='https://www.openpr.com/wiki/images/349-400x300_4841' title='تبلیغات دیجیتال' dic='تبلیغات دیجیتال (تبلیغات آنلاین، تبلیغات اینترنتی) روش مدرن تبلیغات است که جایگزین تبلیغات سنتی شده است. تبلیغات دیحیتال هدفمند، کسب و کار شما را به میلیونها مشتری نیازمند معرفی می کند.'/>
                      <Advertising_item title='تبلیغات محیطی' dic='تبلیغات محیطی روشی از تبلیغات است که خارج از محیط خانه انجام میشود. تبلیغات محیطی به برند اعتبار و اعتماد می دهد و آگاهی برند را در ذهن مشتریان نیازمند بالا می برد.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZE3a3nvzURX0IV-aSI88uV8KNjXfKz3LE7aPLVCcCHKyw9-UtcGZ2QRm4KWWLfrD6pc&usqp=CAU'/>
                      <Advertising_item title='تبلیغات تلویزیونی' dic='تبلیغات تلویزیونی یکی از روش های مرسوم در صنعت تبلیغات است. تبلیغات تلویزیونی در آگاهی برند تاثیر گذار است ولی بسیار گران است.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAosYqFtRRAW6hc2ESqIDpXmoGejIRLnZ5w&s'/>
                      <Advertising_item title='استراتژی تبلیغاتی' dic='استراتژی تبلیغاتی، نقشه راه تبلیغات است. طراحی و تدوین استراتژی تبلیغاتی بستگی به هدف کسب و کار شما دارد و نیاز به تحقیق و شناخت کسب و کار است. بدون استراتژی تبلیغاتی، تبلیغ کردن بی نتیجه است.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi1fz-nXp70l0QWiaGS4oyAsZhOebfVlh0w&s'/>
                      <Advertising_item title='مشاوره تبلیغاتی' dic='هدف از تبلیغات، فروش بیشتر است و برای فروش بیشتر نیاز به مشتری بیشتر است. تبلیغات به ظاهر آسان است ولی برای تاثیر گذاری نیاز به تخصص است. قبل از شروع با متخصص تبلیغات مشورت کنید.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_cu2rDBJW6sui8ZUt5oYsSt4CmjfXOmzEQ&s'/>
                      <Advertising_item title='مدیریت اجرایی تبلیغات' dic='روش های گوناگون تبلیغاتی بسیار زیاد است و انتخاب کدام روش و کانال ارتباطی تخصصی است. مدیریت اجرایی تبلیغات کسب و کار از طراحی و اجرا تعهد تیم ما است.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP3ftq_Y2EeaRXpqYUpIrgtVOIr0qM2pAmg&s'/>
     
                  </div>
            </div>
          </div>
        </div>
                
           

            </div>
         
         

        </Container>
    </div>
  )
}

export default Header
