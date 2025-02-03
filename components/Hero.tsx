import React from 'react'
import Image from 'next/image'
import portrait from '../public/Portrait.svg'

const Hero = () => {
  return (
    <section className='h-screen flex justify-center items-center'>
        <div className='mr-4 border-2'>
            <h1 className='font-inter text-3xl'>Hi, I'm</h1>
            <h1 className='font-carattere text-7xl'>Ashwani Kansal</h1>
            <p className='font-inter text-3xl'>I'm a <span className='text-accent'>Developer</span></p>
            <button>Resume</button>
        </div>
        <div className='ml-4 border-2 h-3/5 w-auto'>
            <Image
                src={portrait}
                alt="Sketch Portrait of me"
                style={{height: "100%"}}
                className='-rotate-2'
            />
        </div>
    </section>
  )
}

export default Hero