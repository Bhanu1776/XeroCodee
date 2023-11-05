import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
  return (
    <main className='bg-blue-200 items-center pb-20 rounded-[2rem] mx-6 lg:mx-40 flex flex-col'>
        <Image src="/Assets/airplane.png" className='mt-20' alt="airplane" height={100} width={120} />
        <h1 className='font-bold text-2xl text-center mx-4 md:text-4xl mt-14'>Subscribe to Our Newsletter & get the <br /> Coupon code.</h1>
        <p className='mt-4 font-light text-center mx-4'>All your information is completely confidential</p>
        <div className='flex mt-14 gap-2 flex-wrap justify-center'> 
          <input type="email" placeholder='Type your email' name="mail" id="mail" className='rounded-xl w-80 h-14 p-4 m-2' />
          <button type="button" className='bg-blue-600 rounded-xl text-white font-bold text-xl px-10 my-1'>Subscribe</button>
        </div>
    </main>
  )
}

export default Newsletter