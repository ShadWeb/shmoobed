import React from 'react'
type AdvertisingProps={
    title:string;
    dic:string;
    img:string
}
function Advertising_item({title,dic,img}:AdvertisingProps) {
  if(dic.length >100){
    dic = dic.slice(0,100 -3) +"...";
}
  return (
    <div dir='rtl' className='flex flex-col md:flex-row rounded-lg border shadow-md p-3 max-w-[300px] hover:bg-blue-100 xl:max-w-[380px] gap-2'>
      {/* <div className='shadow-md flex items-center flex-col justify-center w-full h-full'>
      <img className=' md:rounded-t-full  rounded-md' src={`${img}`} alt="" />
      <div className='p-5' >
      <h2 className='font-bold md:text-lg text-sm text-nowrap'>{title}</h2>
      <p className='font-semibold md:text-base text-sm text-slate-600'>{dic}</p>
      </div>
      </div> */}
     <div className='  '>
        <div className=" ">
          <img
            className="  object-cover  max-w-28 max-h-28  "
            src={`${img}`}
          />
        </div>
        </div>
          <div>
      <p className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{title}</p>
      <p className="mt-1 block text-sm leading-tight font-medium text-wrap text-black ">
      {dic} 
     </p>
      {/* <p className="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p> */}
      </div>
       
    </div>
  )
}

export default Advertising_item
