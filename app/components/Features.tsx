import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flex flex-col items-center mt-28'>
      <button className='bg-blue-200 text-blue-600 font-bold text-xl py-4 px-8 rounded-full'>Features</button>
      <h2 className='font-extrabold text-2xl text-center md:text-4xl mt-14'> <span className='text-blue-800'>Save 1000s</span> of expensive coder hours</h2>
      <p className='font-light text-center mx-4 md:mx-0 text-lg mt-5'>With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability</p>
      <div className='flex gap-8 mt-16 text-xs flex-wrap md:text-sm mx-8 lg:mx-0'>
        <button className='md:py-1 md:px-7 p-0 border-b-4 border-blue-600 '>Apps</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>App Configs</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>Pipelines</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>Infra Creation</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>Cost</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>Add-Ons</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>Monitoring</button>
        <button className='md:py-1 md:px-7 p-0 bg-white'>Connections</button>
      </div>
      <Image loading="lazy"
 src="/Assets/Features.png" alt="Features" className='xxsm:px-4 lg:px-0 mt-14 xxsm:h-52 md:max-w-full md:h-auto' height={1000} width={1250} />
      
      {/* Comparison */}
      <figure className='grid grid-cols-2 place-content-center mt-20 mb-32 lg:gap-x-40'>
        <div className='place-self-center max-h-[25rem]'>
          <h3 className='text-center mt-10 font-bold md:text-xl'>Without XeroCodee</h3>
      <Image loading="lazy"
 src="/Assets/Without_XeroCodee.png" alt="Xerocodee" className='xxsm:px-4 lg:px-0 mt-16 xxsm:h-52 md:max-w-full md:h-auto' height={200} width={350} />
        </div>
        <div className='place-self-center max-h-[25rem]'>
          <h3 className='text-center mt-10 md:ml-14 font-bold md:text-xl'>With XeroCodee</h3>
      <Image loading="lazy"
 src="/Assets/With_XeroCodee.png" alt="Xerocodee" className='xxsm:px-4 lg:px-0 mt-16 xxsm:h-52 md:max-w-full md:h-auto' height={250} width={400 } />
        </div>

      </figure>
    </section>
  )
}

export default Features