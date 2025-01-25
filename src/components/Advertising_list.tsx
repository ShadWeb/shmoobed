import React from 'react'
import Advertising_item from './Advertising_item'

function Advertising_list() {
  return (
    <div dir='rtl' className='flex flex-col  bg-white rounded-lg shadow p-8'>
      <div className='flex flex-col gap-2 p-4 text-center'>
        <h2 className='font-bold text-4xl '>تبلیغات تبلیغات  تبلیغات </h2>
        <div className='mr-2'>
        <p className='font-semibold text-2xl text-gray-600'>تبلیغات هدفمند تاثیر گذار است و سرمایه گذاری برای تبلیغات لازمه بقا، رشد و سوددهی کسب و کار است.
            </p>
            <p className='font-semibold text-2xl text-gray-600'>تبلیغات کسب و کارتان را با مشاوره تخصصی تبلیغاتی شروع کنید تا به سرعت از رقبا عبور کنید.</p>

        </div>
      </div>
      <div className='flex items-center justify-center'>

      <div className='flex items-center justify-center m-auto gap-14 flex-wrap w-full p-4'>
        <Advertising_item img='https://www.openpr.com/wiki/images/349-400x300_4841' title='تبلیغات دیجیتال' dic='تبلیغات دیجیتال (تبلیغات آنلاین، تبلیغات اینترنتی) روش مدرن تبلیغات است که جایگزین تبلیغات سنتی شده است. تبلیغات دیحیتال هدفمند، کسب و کار شما را به میلیونها مشتری نیازمند معرفی می کند.'/>
        <Advertising_item title='تبلیغات محیطی' dic='تبلیغات محیطی روشی از تبلیغات است که خارج از محیط خانه انجام میشود. تبلیغات محیطی به برند اعتبار و اعتماد می دهد و آگاهی برند را در ذهن مشتریان نیازمند بالا می برد.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZE3a3nvzURX0IV-aSI88uV8KNjXfKz3LE7aPLVCcCHKyw9-UtcGZ2QRm4KWWLfrD6pc&usqp=CAU'/>
        <Advertising_item title='تبلیغات تلویزیونی' dic='تبلیغات تلویزیونی یکی از روش های مرسوم در صنعت تبلیغات است. تبلیغات تلویزیونی در آگاهی برند تاثیر گذار است ولی بسیار گران است.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAosYqFtRRAW6hc2ESqIDpXmoGejIRLnZ5w&s'/>
        <Advertising_item title='استراتژی تبلیغاتی' dic='استراتژی تبلیغاتی، نقشه راه تبلیغات است. طراحی و تدوین استراتژی تبلیغاتی بستگی به هدف کسب و کار شما دارد و نیاز به تحقیق و شناخت کسب و کار است. بدون استراتژی تبلیغاتی، تبلیغ کردن بی نتیجه است.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi1fz-nXp70l0QWiaGS4oyAsZhOebfVlh0w&s'/>
        <Advertising_item title='مشاوره تبلیغاتی' dic='هدف از تبلیغات، فروش بیشتر است و برای فروش بیشتر نیاز به مشتری بیشتر است. تبلیغات به ظاهر آسان است ولی برای تاثیر گذاری نیاز به تخصص است. قبل از شروع با متخصص تبلیغات مشورت کنید.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_cu2rDBJW6sui8ZUt5oYsSt4CmjfXOmzEQ&s'/>
        <Advertising_item title='مدیریت اجرایی تبلیغات' dic='روش های گوناگون تبلیغاتی بسیار زیاد است و انتخاب کدام روش و کانال ارتباطی تخصصی است. مدیریت اجرایی تبلیغات کسب و کار از طراحی و اجرا تعهد تیم ما است.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP3ftq_Y2EeaRXpqYUpIrgtVOIr0qM2pAmg&s'/>
     
      </div>
      </div>
    </div>
  )
}

export default Advertising_list
