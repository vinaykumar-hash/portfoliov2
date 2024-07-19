import React from 'react'
import { useNavigate } from "react-router-dom"; 
import { redirect } from "react-router-dom";
const Collab = () => {
  // const navigate = useNavigate();
  // function navInsta() {
  //   window.location.href = "https://www.instagram.com/vinay_kumar.0.0/";
  // }
  return (
    <div style={{ zIndex: "0" }} className='magicpattern sticky bottom-0 font-b text-white px-20 border-white/50 border-t-2 flex justify-between items-center sm:flex-row flex-col gap-5 sm:gap-0 overflow-hidden'>
        
        <div className='font-bold text-5xl sm:text-7xl min-w-max max-w-max tracking-tight border-white/50 border-r-0 sm:border-r-2 h-full py-20 pr-0 sm:pr-20'>
            <div className='flex justify-start items-end leading-10'>
                <p className='pb-2'>Let's</p>
                <p className='text-2xl sm:text-4xl red_grade pl-3 leading-10'>Have A Coffee</p>
            </div>
            <p className='flex'>Collaborate <p className='bg-basered-200'>.</p></p>
        </div>
        <div className=' relative flex justify-center items-center flex-col sm:flex-row text-4xl tracking-tighter font-bold gap-10 sm:gap-5 w-full pb-20 sm:pb-0'>
          <img className='h-40 sm:h-20 w-auto rounded-full' src="/profile.jpg" alt="" />
          <p>@vinay_kumar.0.0 <p className='font-bold text-2xl pl-2 tracking-tight bg-basered-200'>@limit.lessuser</p></p>
        </div>
        {/* <div className=' flex flex-col transition-all sm:flex-row w-full justify-center gap-5 sm:gap-20 items-center opacity-50 '>
          <div  className='flex justify-center items-center font-bold text-2xl  text-left'>
            <img className=' scale-75 sm:scale-100 grayscale' width="90" height="90" src="https://img.icons8.com/color/90/instagram-new--v1.png" alt="instagram-new--v1"/>
            <p className='text-5xl sm:text-7xl tracking-tight '>Instagram</p>
            
          </div>
          <div className='w-full sm:w-auto flex justify-start items-center font-bold text-2xl text-left'>
            <img className='scale-75 sm:scale-100 grayscale' width="90" height="90" src="https://img.icons8.com/color/90/linkedin.png" alt="linkedin"/>
            <p className='text-5xl sm:text-7xl tracking-tight'>Linkdin</p>
            </div>
        </div> */}
        
        
    </div>
  )
}

export default Collab