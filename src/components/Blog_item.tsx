import React from 'react'
type  BlogitemProps={
    title:string;
    dic:string;
}
function Blog_item({title,dic}:BlogitemProps) {
  return (
    <div className=' p-2 pr-3 flex flex-col text-right  bg-white shadow-lg rounded-lg border hover:bg-blue-100 ' dir='rtl'>
      <h2 className='mt-1 block text-lg leading-tight lg:text-xl font-medium text-black'>{title}</h2>
      <div className='p-2 flex flex-col gap-1 text-xs'>
        <p>{dic}</p>
      </div>
    </div>
  )
}

export default Blog_item
