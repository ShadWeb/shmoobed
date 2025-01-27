import React from 'react'
type AdvertisingProps={
    title:string;
    dic:string;
    img:string
}
function Advertising_item({title,dic,img}:AdvertisingProps) {
  return (
    <div className='text-center h-[380px] w-[350px] items-center gap-14 md:h-[400px] max-w-xs hover:transition-shadow rounded-lg md:rounded-t-full border flex flex-col pb-4 px-4 py-6 bg-white hover:shadow-2xl '>
      <div className='shadow-md md:rounded-t-full  flex items-center flex-col justify-center w-full h-full'>
      <img className=' md:rounded-t-full  rounded-md' src={`${img}`} alt="" />
      <div className='p-5' >
      <h2 className='font-bold md:text-lg text-sm text-nowrap'>{title}</h2>
      <p className='font-semibold md:text-base text-sm text-slate-600'>{dic}</p>
      </div>
      </div>
       
    </div>
  )
}

export default Advertising_item
