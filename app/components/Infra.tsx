import Image from 'next/image'
import React from 'react'

const Infra = () => {
  return (
    <section className='flex flex-col items-center mt-20 mb-8'>
      <h1 className='text-4xl text-center mb-14 mx-3 lg:mx-0 font-extrabold'>Self serve infrastructure platform for <span className='text-blue-600'>scaling <br className='hidden lg:block' /> teams</span></h1>
      <div className="grid grid-cols-1 mx-4 lg:mx-0 md:grid-cols-2 grid-rows-2 gap-x-14 lg:gap-x-24 gap-y-10">
        <div className='flex  p-4 px-6 gap-x-4  shadow-lg bg-white pr-9 rounded-2xl'>
          <div className='bg-white rounded-2xl flex justify-center p-2 shadow-lg'>
            <Image src="/Assets/Infrastructure.png" alt="Infrastructure" height={40} width={50} />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-xl'>Infrastructure</h2>
            <p className='font-light'>Automated Cloud Infrastructure Workflow</p>
          </div>
        </div>
        <div className='flex  p-4 px-6 gap-x-4 shadow-lg bg-white pr-9 rounded-2xl'>
          <div className='bg-white rounded-2xl flex justify-center p-2 shadow-lg'>
            <Image src="/Assets/security.png" alt="Security" height={40} width={50} />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-xl'>Security</h2>
            <p className='font-light'>Modern Secure Infrastructure Approach</p>
          </div>
        </div>
        <div className='flex  p-4 px-6 gap-x-4 shadow-lg bg-white pr-9 rounded-2xl'>
          <div className='bg-white rounded-2xl flex justify-center p-2 shadow-lg'>
            <Image src="/Assets/networking.png" alt="Networking" height={40} width={50} />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-xl'>Networking</h2>
            <p className='font-light '>Flexible Secure Application Connectivity</p>
          </div>
        </div>
        <div className='flex  p-4 px-6 gap-x-4 shadow-lg bg-white pr-9 rounded-2xl'>
          <div className='bg-white rounded-2xl flex justify-center p-2 shadow-lg'>
            <Image src="/Assets/Application.png" alt="Applications" height={40} width={50} />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-xl'>Applications</h2>
            <p className='font-light '>Automate Application Deployment for Agility</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infra