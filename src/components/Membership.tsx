import React from 'react'
import Form_member from './Form_member'

function Membership() {
  return (
    <div className='p-4   bg-slate-200 '>
<div className='bg-white rounded-xl p-4 shadow-lg flex flex-col xl:flex-row-reverse'>
<div dir='rtl' className=' flex flex-col gap-4     p-4   '>
        <div>
            <h2 className='text-sm lg:text-2xl md:text-xl font-semibold tracking-wide text-indigo-500 uppercase'>هر لحظه احساس کردید کسب و کار شما باید رشد کند میتوانید از خدمات ما استفاده کنید. </h2>
            
        </div>
      
      <div className='flex flex-col gap-2'>
      <h2 className='mt-1 flex items-center  text-lg leading-tight font-medium text-black'>
              خدمات ما : 
            </h2>
        <p><span className='mt-1   text-base leading-tight font-semibold text-black'>مشاوره تبلیغاتی :</span> با توجه به بودجه، نوع کسب و کار، رقبا، مشتریان و نیازهای کسب و کار شما، استراتژی تبلیغاتی برای شما طراحی می شود.
          
        </p>
        <p><span className='mt-1   text-base leading-tight font-semibold text-black'>  مجری تبلیغاتی: </span>اگر شما استراتژی تبلیغاتی دارید و نیاز به اجرا دارید تیم متخصص و مجرب ما آنرا برای شما انجام می دهد. </p>
        <p><span className='mt-1   text-base leading-tight font-semibold text-black'>ناطر تبلیغاتی</span> شما هم استراتژی تبلیغاتی دارید و هم مجری تبلیغاتی ولی نیاز به ناظری متخصص دارید که از جانب شما بر روند انجام پروژه نظارت کند. </p>
      </div>
    </div>
    <div className='lg:w-1/2 mx-auto w-full'>
      <Form_member/>
    </div>
</div>
  
    </div>
  )
}

export default Membership
