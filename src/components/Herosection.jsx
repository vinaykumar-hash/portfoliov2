import React, { useEffect } from 'react'

const Herosection = () => {
    useEffect(() => {
        const backreveal = document.getElementsByClassName("backreveal");
        const backrevealparents = document.getElementsByClassName("backrevealparent");
        const backreveal1 = document.getElementsByClassName("backreveal1");
        const backrevealparents1 = document.getElementsByClassName("backrevealparent1");
        const backreveal2 = document.getElementsByClassName("backreveal2");
        const backrevealparents2 = document.getElementsByClassName("backrevealparent2");
        Array.from(backrevealparents).forEach(backrevealparent => {
            backrevealparent.addEventListener('mousemove', () => {
                Array.from(backreveal).forEach(reveal => {
                    reveal.style.width = "2000px";
                    reveal.style.height = "2000px";
                });
            });
        });
        Array.from(backrevealparents).forEach(backrevealparent => {
            backrevealparent.addEventListener('mouseleave', () => {
                Array.from(backreveal).forEach(reveal => {
                    reveal.style.width = "0%";
                    reveal.style.height = "0%";
                });
            });
        });
        Array.from(backrevealparents1).forEach(backrevealparent => {
            backrevealparent.addEventListener('mousemove', () => {
                Array.from(backreveal1).forEach(reveal => {
                    reveal.style.width = "2000px";
                    reveal.style.height = "2000px";
                });
            });
        });
        Array.from(backrevealparents1).forEach(backrevealparent => {
            backrevealparent.addEventListener('mouseleave', () => {
                Array.from(backreveal1).forEach(reveal => {
                    reveal.style.width = "0%";
                    reveal.style.height = "0%";
                });
            });
        });
        Array.from(backrevealparents2).forEach(backrevealparent => {
            backrevealparent.addEventListener('mousemove', () => {
                Array.from(backreveal2).forEach(reveal => {
                    reveal.style.width = "2000px";
                    reveal.style.height = "2000px";
                });
            });
        });
        Array.from(backrevealparents2).forEach(backrevealparent => {
            backrevealparent.addEventListener('mouseleave', () => {
                Array.from(backreveal2).forEach(reveal => {
                    reveal.style.width = "0%";
                    reveal.style.height = "0%";
                });
            });
        });
    }, []);
    
    
  return (
    <div className=''>
        <div style={{zIndex:"0"}} className=' sticky top-0 text-white text-7xl flex items-stretch justify-center tracking-tight font-bold overflow-hidden'>
            <div className='backrevealparent overflow-hidden relative opacity-60 transition-all  hover:opacity-100 hover:text-baseblack-100 text-center border-white/50 border-r-2 px-20 flex-auto'>
                <p className='absolute opacity-20 text-baseblack-100' style={{fontSize:"20rem",zIndex:"901"}}>Skills</p>
                <p style={{zIndex:"900"}} className='py-10 relative'>Skills</p>
                <div style={{zIndex:"899"}} className='backreveal'></div>
            </div>
            <div className='backrevealparent1 overflow-hidden relative opacity-60 transition-all hover:opacity-100 hover:text-baseblack-100 text-center border-white/50 border-r-2 px-20'>
                <p className='absolute opacity-20 text-baseblack-100' style={{fontSize:"20rem",zIndex:"901"}}>Projects</p>
                <p style={{zIndex:"900"}} className='py-10 relative'>Projects</p>
                <div style={{zIndex:"899"}} className='backreveal1'></div>
            </div>
            <div className='backrevealparent2 overflow-hidden relative opacity-60 transition-all hover:opacity-100 hover:text-baseblack-100 text-center px-20 flex-auto'>
                <p className='absolute opacity-20 text-baseblack-100' style={{fontSize:"20rem",zIndex:"901"}}>Contact</p>
                <p style={{zIndex:"900"}} className='py-10 relative'>Connect With Me</p>
                <div style={{zIndex:"899"}} className='backreveal2'></div>
            </div>
        </div>
        <div style={{zIndex:"1"}} className='bg-baseblack-100 sticky top-0 border-white/50 border-t-2 min-h-80 flex justify-center items-center overflow-hidden'>
            <p className='z-0 absolute text-white -top-40 font-bold opacity-10 -left-40' style={{fontSize:"15rem"}}>UIUX Designer</p>
            <div className='z-10 flex justify-center items-center text-8xl font-bold gap-2'>
                <h1 className='text-white'>Vinay</h1>
                <h2 className='tracking-tighter red_grade'>Choudhary</h2>
            </div>
        </div>
        <div style={{ zIndex: "2" }} className='px-20 gap-20 sticky top-0 text-white text-7xl flex justify-center items-center bg-baseblack-100 border-white/50 border-t-2'>
            <div className=' pr-20 font-bold tracking-tight w-max flex-1 text-right opacity-40 flex justify-center items-center border-white/50 border-r-2 py-10'><p>About</p><p className='ml-2'>Me</p></div>
            <div className='text-4xl font-medium tracking-normal'>
                I'm a college student based in Bengaluru with a passion for UI/UX design.
            </div>
</div>

    </div>
  )
}

export default Herosection





// import React from 'react'

// const Herosection = () => {
//   return (
//     <div >
//         <div className='z-0 sticky text-white text-7xl flex items-center justify-center tracking-tight font-bold border-white border-b-2 overflow-hidden cursor-pointer'>
//             <div className='overflow-hidden relative opacity-60 transition-all hover:bg-basered-100 hover:opacity-100 hover:text-baseblack-100 text-center border-white border-r-2 px-20 flex-auto'>
//                 <p className='absolute opacity-20 text-baseblack-100' style={{fontSize:"20rem"}}>Skills</p>
//                 <p className='   py-10  '>Skills</p>
//             </div>
//             <div className='overflow-hidden relative opacity-60 transition-all hover:bg-basered-100 hover:opacity-100 hover:text-baseblack-100 text-center border-white border-r-2 px-20'>
//             <p className='absolute opacity-20 text-baseblack-100' style={{fontSize:"20rem"}}>Projects</p>
//                 <p className='   py-10  '>Projects</p>
//             </div>
//             <div className='overflow-hidden relative opacity-60 transition-all hover:bg-basered-100 hover:opacity-100 hover:text-baseblack-100 text-center px-20 flex-auto'>
//             <p className='absolute opacity-20 text-baseblack-100' style={{fontSize:"20rem"}}>Contact</p>
//                 <p className='   py-10  '>Connect With Me</p>
//             </div>
//         </div>
//         <div className='z-10 sticky border-white border-b-2 min-h-80 flex justify-center items-center overflow-hidden'>
//             <p className='z-0 absolute text-white -top-40 font-bold opacity-10 -left-40' style={{fontSize:"15rem"}}>UIUX Designer</p>
//             <div className='z-10 flex justify-center items-center text-8xl font-bold gap-2'>
//                 <h1 className='text-white'>Vinay</h1>
//                 <h2 className='tracking-tighter red_grade'>Choudhary</h2>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Herosection



