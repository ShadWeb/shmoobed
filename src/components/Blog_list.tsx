import React from 'react'
import Blog_item from './Blog_item'

function Blog_list() {
  return (
    <div className='bg-white shadow-lg p-8 pt-10 rounded-lg  gap-12 flex flex-col items-center justify-center'>
      <div>
          <h2 className='font-bold text-4xl'>
          مشاوره تبلیغاتی از طراحی استراتژی تبلیغاتی تا مدیریت اجرای تبلیغات
          </h2>
       </div>
       <div className='w-full p-4 flex flex-col gap-4'>
        <Blog_item title='اسرار موفقیت برند ری بن Ray Ban' date='
سپتامبر 22, 2024
—
توسط shmoobed'
dic='تبلیغات . در برند .برند های برتر '/>
        <Blog_item title='وبلاگ نویسی و تقویت تبلیغات' dic='در بازاریابی, تبلیغات' date='
سپتامبر 14, 2024
—
توسط
shmoobed
'/>
        <Blog_item title='اهمیت شناخت مشتری هدف در تبلیغات' dic='بازاریابی .تبلیغات' date='
سپتامبر 7, 2024
—توسط
shmoobed
'/>
        <Blog_item title='میمون چی توز شخصیت برنده' dic='تبلیغات . در برند .برند های برتر ' date='
آگوست 27, 2024
—توسط
shmoobed'/>
        <Blog_item title='استراتژی تبلیغاتی برند: نقشه راه رسیدن به موفقیت' dic='
در تبلیغات, مشاوره تبلیغاتی' date='
آگوست 25, 2024
—توسط
shmoobed'/>
        <Blog_item title='کیت کت بیشتر از یک میان وعده' dic='تبلیغات . در برند .برند های برتر ' date='
آگوست 24, 2024
—توسط
shmoobed'/>
        
       </div>
    </div>
  )
}

export default Blog_list