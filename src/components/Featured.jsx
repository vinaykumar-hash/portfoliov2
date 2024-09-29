import React, { useEffect } from 'react'
// import FI from '../assets/Star'
const Featured = () => {
  useEffect(()=>{
    document.getElementById("projects").addEventListener('click',()=>{
      document.getElementById('projectmain').scrollIntoView()
  })
  },[])
  return (
    <div id='projectmain' style={{ zIndex: "4" }} className='w-full flex justify-center items-center flex-col border-white/50 border-t-2 border-b-2 pt-16 bg-baseblack-100'>
        <div style={{ zIndex: "5" }}  className='relative bg-baseblack-100 mb-10'>
            <p className='text-4xl sm:text-7xl font-bold tracking-tight text-white'>Featured Works</p>
            <div className='absolute top-0 -translate-y-10 w-full'>
                <img className='scale-50 absolute -right-12 sm:-right-16' src="/Star1.svg" alt="" />
                <img className='scale-50 absolute -right-12 sm:-right-16 translate-x-0.5' src="/Star2.svg" alt="" />
            </div>
        </div>
        <div className='polkadot relative w-full border-white/50 border-t-2'>
          <div className='w-full h-screen flex justify-center items-center gap-20 py-20' >
            <div className='relative h-full w-11/12 bg-baseblack-100 overflow-y-scroll border-white/50 border flex justify-start items-center flex-col'>
              <a href="https://kashimantram.in" className='font-bold text-4xl sm:text-6xl text-center font-b tracking-tighter bg-baseblack-100 text-white py-6'>kashimantram<span className='text-basered-200'>.</span>in</a>
              <iframe className='h-full w-full bg-white' src="https://kashimantram.in/" frameborder="0"></iframe>
              {/* <img className='' src="/project1.jpg" alt="" /> */}
              <div className='w-full sticky bottom-0'>
                <p className='text-xl font-b text-center bg-baseblack-100 text-white py-2'>A Hotel Booking Website Featuring Hotel Kashi Mantram Based in Kashi , Banaras , India . <a className='text-basered-200' href="https://kashimantram.in">kashimantram.in</a></p>
              </div>
            </div>
          </div>
          <div className='w-full h-screen flex justify-center items-center gap-20 py-20' >
            <div className='relative h-full w-11/12 bg-baseblack-100 overflow-y-scroll border-white/50 border flex justify-start items-center flex-col'>
              <a href="https://www.behance.net/gallery/202415959/Tranquility" className='font-bold text-4xl sm:text-6xl text-center font-b tracking-tighter bg-baseblack-100 text-white py-6'>Tranquility</a>
              <img className='' src="/project2.jpg" alt="" />
              <div className='w-full sticky bottom-0'>
                <p className='text-xl font-b text-center bg-baseblack-100 text-white py-2'>An Stress Releasing Application , Designed To Maintain Your Healthy Life - <a className='text-basered-200' href="https://www.behance.net/gallery/202415959/Tranquility">Behance Report</a></p>
              </div>
            </div>
          </div>
          <div className='w-full h-auto sm:h-screen flex justify-center items-center gap-20 py-20' >
            <div className='relative h-full w-11/12 bg-baseblack-100 overflow-y-scroll border-white/50 border flex justify-start items-center flex-col'>
              <a href="https://www.behance.net/gallery/202415959/Tranquility" className='font-bold text-4xl sm:text-6xl text-center font-b tracking-tighter bg-baseblack-100 text-white py-6'>Beyond Border CRM</a>
              <img className='' src="/project3.jpg" alt="" />
              <div className='w-full sticky bottom-0'>
                <p className='text-xl font-b text-center bg-baseblack-100 text-white py-2'>An CRM - Customer Relationsip Management Application</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured