import React from 'react'
type  BlogitemProps={
    title:string;
    dic:string;
    date:string
}
function Blog_item({title,dic,date}:BlogitemProps) {
  return (
    <div className=' p-2  flex items-center justify-between bg-white shadow-lg rounded-lg border hover:bg-slate-200 ' dir='rtl'>
      <h2 className='font-semibold text-xs md:text-xl'>{title}</h2>
      <div className='p-2 flex flex-col gap-1 text-xs'>
        <p>{date}</p>
        <p>{dic}</p>
      </div>
    </div>
  )
}

export default Blog_item
