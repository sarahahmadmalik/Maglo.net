import React from 'react'
import {  Raleway } from "next/font/google";

const font = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
const Sales = () => {
  return (
    <div className={`p-4 py-8 w-full h-full border-t border-slate-600 ${font.className}`}>
    <form action="">
      <input type="name" placeholder="Name" className="w-full h-12 px-2 mb-4 rounded-lg placeholder-black focus:outline-none" />
      <input type="email" placeholder="Email" className="w-full h-12 px-2 mb-4 rounded-lg placeholder-black focus:outline-none" />
      <input type="Phone" placeholder="Phone" className="w-full h-12 px-2 mb-4 rounded-lg placeholder-black focus:outline-none" />
      <input type='service' placeholder="Service" className="w-full h-12 px-2 mb-4 rounded-lg placeholder-black focus:outline-none" />
      <textarea placeholder="Describe your Inquiry" className="w-full h-20 px-2 mb-4 rounded-lg border placeholder-black focus:outline-none resize-none" />
      <button type='submit' className='bg-transparent border-2 border-white rounded-lg text-white w-full h-14'>
        Submit
      </button>
    </form>
  </div>
  )
}

export default Sales