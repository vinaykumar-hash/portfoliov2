import React from 'react'
// import FI from '../assets/Star'
const Featured = () => {
  return (
    <div style={{ zIndex: "4" }} className='w-full flex justify-center items-center flex-col border-white/50 border-t-2 border-b-2 pt-16 bg-baseblack-100'>
        <div style={{ zIndex: "5" }}  className='relative bg-baseblack-100 mb-10'>
            <p className='text-5xl sm:text-7xl font-bold tracking-tight text-white'>Featured Works</p>
            <div className='absolute top-0 -translate-y-10 w-full'>
                <img className='scale-50 absolute -right-16' src="/Star1.svg" alt="" />
                <img className='scale-50 absolute -right-16 translate-x-0.5' src="/Star2.svg" alt="" />
            </div>
        </div>
        <div className='polkadot relative w-full border-white/50 border-t-2'>
          <div className='w-full h-screen flex justify-center items-center' >
            <div className='h-3/4 w-11/12 bg-white'>

            </div>
          </div>
          <div className='w-full h-screen flex justify-center items-center' >
            <div className='h-3/4 w-11/12 bg-white'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured