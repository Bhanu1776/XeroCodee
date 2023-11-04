import Image from 'next/image';
import React from 'react';
import { Poppins } from 'next/font/google';

const Pop = Poppins({
  subsets: ['latin'],
  variable: '--font-Roboto',
  weight:  '900'
});

const Hero = () => (
  <main className='flex flex-col items-center mt-20'>
    <h1 className={`font-extrabold xxsm:text-3xl md:text-5xl text-center`}>Build your audience and grow your <br className='hidden lg:block' /> <span>brand</span></h1>
    <h3 className='xxsm:text-lg xxsm:px-4 lg:p-0 md:text-xl font-light my-8 text-center'>no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as <br className='hidden lg:block' /> <span>fast as your workload grows </span></h3>
    <button type='button' className='bg-blue-700 py-2 px-8 md:py-3 md:mt-5 md:px-10 rounded-md text-white text-lg font-semibold'>Get Started Now</button>
      <Image src="/Assets/Hero.png" alt="Architecture" className='xxsm:px-4 lg:px-0 mt-5 xxsm:h-52 md:max-w-full md:h-auto' height={1000} width={1250} />
  </main>
);

export default Hero;
