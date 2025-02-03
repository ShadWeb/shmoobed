import React from 'react'
import Blog_item from './Blog_item'

function Blog_list() {
  return (
    <div dir='rtl' className=' shadow-lg px-4 md:px-9  md:p-8 pt-5 md:pt-10 rounded-lg flex-col md:flex-row gap-6 flex bg-slate-200    '>
     
       <div className=' bg-white p-4 flex flex-col gap-4 border shadow max-w-3xl text-center md:text-left items-center rounded-md '>
       <h2 className='font-bold  text-2xl'>
اخریدن مقالات        </h2>
          <div className='flex flex-col gap-2 bg-white  '>
          <Blog_item  title='اسرار موفقیت برند ری بن Ray Ban' dic='تبلیغات . در برند .برند های برتر '/>
        <Blog_item title='وبلاگ نویسی و تقویت تبلیغات' dic='در بازاریابی, تبلیغات' />
        <Blog_item title='اهمیت شناخت مشتری هدف در تبلیغات' dic='بازاریابی .تبلیغات'/>
        <Blog_item title='میمون چی توز شخصیت برنده' dic='تبلیغات . در برند .برند های برتر '/>
        <Blog_item title='استراتژی تبلیغاتی برند: نقشه راه رسیدن به موفقیت' dic='
در تبلیغات, مشاوره تبلیغاتی'/>
        <Blog_item title='کیت کت بیشتر از یک میان وعده' dic='تبلیغات . در برند .برند های برتر '/>
          </div>
       
        
       </div>

       <div className='bg-white  w-full rounded-lg shadow-lg flex p-4 min-h-full'>
        sadas
       </div>
    </div>
  )
}

export default Blog_list
