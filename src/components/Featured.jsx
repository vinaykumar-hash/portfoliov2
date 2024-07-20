import React from 'react'
// import FI from '../assets/Star'
const Featured = () => {
  return (
    <div style={{ zIndex: "4" }} className='w-full sticky top-0 flex justify-center items-center flex-col border-white/50 border-t-2 border-b-2 py-16 bg-baseblack-100'>
        <div className='relative mb-10'>
            <p className='text-5xl sm:text-7xl font-bold tracking-tight text-white'>Featured Works</p>
            <div className='absolute top-0 -translate-y-10 w-full'>
                <img className='scale-50 absolute -right-16' src="/Star1.svg" alt="" />
                <img className='scale-50 absolute -right-16 translate-x-0.5' src="/Star2.svg" alt="" />
            </div>
        </div>
        <div className='relative w-full border-white/50 border-t-2'>
          <div className='w-full h-screen'></div>
        </div>
    </div>
  )
}

export default Featured