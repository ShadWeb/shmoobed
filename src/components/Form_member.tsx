import React from 'react'

function Form_member() {
  return (
    <div dir='rtl'>
      {/* <div className="flex items-center justify-center max-h-full w-full bg-white">
  <form className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">ارتباط با ما</h2>

    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">نام</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="نام خود را وارد کنید"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="ایمیل خود را وارد کنید"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">پیام</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="پیام خود را بنویسید"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white font-medium p-3 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      ارسال پیام
    </button>
  </form>
</div> */}
<div className="flex items-center justify-center max-h-full w-full bg-white">
  <form className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">ارتباط با ما</h2>

    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">نام</label>
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="نام خود را وارد کنید"
          required
        />
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A6 6 0 1118.878 6.196m-9.655 9.655A3 3 0 1017.804 5.12m-9.656 9.656L21 21" />
          </svg>
        </span>
      </div>
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="ایمیل خود را وارد کنید"
          required
        />
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
          </svg>
        </span>
      </div>
    </div>

    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">پیام</label>
      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="پیام خود را بنویسید"
          required
        ></textarea>
        <span className="absolute top-3 left-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0l-4-4m4 4l-4 4M4 13l4-4m-4 4l4 4" />
          </svg>
        </span>
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white font-medium p-3 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      ارسال پیام
    </button>
  </form>
</div>

    </div>
  )
}

export default Form_member
