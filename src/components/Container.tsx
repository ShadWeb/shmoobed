import React from 'react'
interface IContainerProps{
    children:React.ReactNode
}
function Container({children}:IContainerProps) {
  return (
    <div className='mx-auto container'>
      {children}
    </div>
  )
}

export default Container