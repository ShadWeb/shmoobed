import Link from 'next/link'
import React from 'react'

function Oops() {
  return (
    <div  className="bg-gray-100 flex items-center justify-center h-screen rounded-lg mt-8" dir='rtl'>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">متاسفانه مشکلی پیش آمده,صحفه مورد نظر بارگذارینمیشود!!</p>
        <Link href="/" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600">برگشت به خانه</Link>
    </div>
    </div>
  )
}

export default Oops
