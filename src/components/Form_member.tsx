import React from 'react'

function Form_member() {
  return (
    <div dir='rtl'>
      <div className="flex items-center justify-center max-h-full w-full bg-white">
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
</div>
    </div>
  )
}

export default Form_member
