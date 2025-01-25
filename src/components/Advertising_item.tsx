import React from 'react'
type AdvertisingProps={
    title:string;
    dic:string;
    img:string
}
function Advertising_item({title,dic,img}:AdvertisingProps) {
  return (
    <div className='text-center items-center gap-4 h-[400px] max-w-xs shadow-lg rounded-lg border flex flex-col pb-4 px-4 py-6 bg-blue-600 hover:bg-blue-400'>
      <div >
        <img src={`${img}`} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{title}</h2>
      <p className='font-semibold text-base text-slate-600'>{dic}</p>
    </div>
  )
}

export default Advertising_item
