import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <main className='pt-28 text-white'>
      <div className='flex flex-col items-center pb-16 bg-[#0C5BC6] rounded-3xl mx-6 md:mx-14 lg:mx-40 px-4 lg:px-20'>
        <h1 className='text-center mt-20 md:mx-2 lg:mx-4 leading-relaxed font-extrabold text-xl md:text-3xl lg:text-4xl'>Modernize Apps, Infrastructure With Cloud Native <br /> Tech For Resilience, Scalability.</h1>
      

    <section className='flex mt-14 lg:mt-24 flex-col lg:flex-row'>
        <Image src="/Assets/graph1.png" alt="Charts" className='lg:-ml-20' height={500} width={700} />
        <div className='flex flex-col text-center mb-16 lg:mb-0 lg:text-left lg:-ml-10'>
          <h2 className='font-extrabold  text-4xl lg:mt-10'>Real-Time Risk Monitoring</h2>
          <p className='mt-6'>Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.</p>
      </div>
    </section>

    <section className='flex flex-col lg:flex-row'>
        <div className='flex flex-col text-center lg:text-left order-2'>
          <h2 className='font-extrabold text-4xl mt-10'>Collaborative <br className='hidden lg:block'/> workflows</h2>
          <p className='lg:mt-6 lg:pr-16'>Share artifacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.</p>
      </div>
        <Image src="/Assets/graph2.png" alt="Charts" className='lg:order-2 md:ml-20 lg:ml-0' height={250} width={450} />
    </section>
    </div>
    </main>
  )
}

export default Card