import React from 'react'
// import FI from '../assets/Star'
const Featured = () => {
  return (
    <div className='w-full flex justify-center items-center border-white/50 border-t-2 border-b-2 py-16'>
        <div className='relative'>
            <p className='text-5xl sm:text-7xl font-bold tracking-tight text-white'>Featured Works</p>
            <div className='absolute top-0 -translate-y-10 w-full'>
                <img className='scale-50 absolute -right-16' src="/Star1.svg" alt="" />
                <img className='scale-50 absolute -right-16 translate-x-0.5' src="/Star2.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured