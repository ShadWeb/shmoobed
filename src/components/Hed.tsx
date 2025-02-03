import React from 'react'
import Slider from './Slider'
import Blog_item from './Blog_item'

function Hed() {
  return (
    <div  className=' rounded-lg  mt-12 p-4 md:p-8 w-full  bg-slate-200'>
        <section className='flex flex-col md:grid  md:grid-cols-3 gap-5 auto-rows-[300px]'>
            <div className='rounded-xl border px-4  col-span-2 bg-white shadow-md p-3 w-full '>
                <Slider/>
            </div>
            <div className='rounded-xl  border hidden md:flex bg-white shadow-md overflow-y-scroll p-2 '>

            <div className='flex flex-col gap-2  '>
            <Blog_item  title='اسرار موفقیت برند ری بن Ray Ban' dic='تبلیغات . در برند .برند های برتر '/>
            <Blog_item title='وبلاگ نویسی و تقویت تبلیغات' dic='در بازاریابی, تبلیغات' />
            <Blog_item title='اهمیت شناخت مشتری هدف در تبلیغات' dic='بازاریابی .تبلیغات'/>
            <Blog_item title='میمون چی توز شخصیت برنده' dic='تبلیغات . در برند .برند های برتر '/>
            <Blog_item title='استراتژی تبلیغاتی برند: نقشه راه رسیدن به موفقیت' dic='
            در تبلیغات, مشاوره تبلیغاتی'/>
            <Blog_item title='کیت کت بیشتر از یک میان وعده' dic='تبلیغات . در برند .برند های برتر '/>
            </div>

            </div>
            <div className='rounded-xl  border  bg-white shadow-md '>fffd</div>
            <div className='rounded-xl  border col-span-2  bg-white shadow-md '>wwww</div>
        </section>
    </div>
  )
}

export default Hed
