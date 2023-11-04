import Image from 'next/image'
import React from 'react'

const Environment = () => {
  return (
    <figure className='grid grid-cols-4 lg:mx-32'>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E1.png" className='' alt="Greenhouse" height={40} width={190} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E2.png" className='' alt="Greenhouse" height={40} width={150} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E3.png" className='' alt="Greenhouse" height={40} width={150} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E4.png" className='' alt="Greenhouse" height={40} width={110} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E1.png" className='' alt="Greenhouse" height={40} width={190} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E2.png" className='' alt="Greenhouse" height={40} width={150} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E3.png" className='' alt="Greenhouse" height={40} width={150} />
      </div>
      <div className='place-self-center my-2 p-2'>
      <Image src="/Assets/E4.png" className='' alt="Greenhouse" height={40} width={110} />
      </div>
    </figure>
  )
}

export default Environment