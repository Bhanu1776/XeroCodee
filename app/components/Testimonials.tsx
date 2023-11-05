import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
  <section className='lg:flex hidden flex-col items-center mt-20 mb-96 mx-32'>
      <h1 className='text-4xl text-center mb-14 mx-3 lg:mx-0 font-extrabold'>See our success stories</h1>
      <div className='flex '>
          <Image src="/Assets/leftArrow.png" className='py-20 px-3' alt="Arrows" height={1000} width={100} />
          <article className='flex items-center rounded-r-3xl'>
            <Image src="/Assets/comma.png" alt="Arrows" height={30} width={150} />
            <div className='flex flex-col ml-6'>
              <p className='text-justify'>There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
              <p className='text-end'> <span className='font-bold text-lg'>-Bhanu Sunka </span> <br />Frontend Engineer</p>
            </div>
            <div className='border-[6px] rounded-full mx-14 border-blue-700 w-1/2 h-[65%]'></div>
          </article>
          <Image src="/Assets/rightArrow.png" className='py-20 px-3' alt="Arrows" height={1000} width={100} />
      </div>
          <Image src="/Assets/threedots.png" alt="Arrows" height={20} width={60} />
  </section>
  )
}

export default Testimonials