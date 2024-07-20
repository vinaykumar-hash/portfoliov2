// import React from 'react'

// const Skills = () => {
//   return (
//     <div style={{ zIndex: "3" }} className='font-b sticky top-0 flex justify-start   items-center'>
//         <div className='relative border-white/50 border-r-2 min-w-max max-w-max overflow-hidden'>
//             <p style={{zIndex:"1"}} className='relative  text-7xl text-white font-bold tracking-tight py-10 px-20'>Skills</p>
//             <img style={{zIndex:"2"}} className='absolute -top-16 -right-16' src="/Startrans.svg" alt="" />
//         </div>
//         <div className='flex justify-start items-center overflow-x-scroll grayscale gap-10'>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/adobe-illustrator--v1.png" alt="adobe-illustrator--v1"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/html-5--v1.png" alt="html-5--v1"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/css3.png" alt="css3"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/javascript--v1.png" alt="javascript--v1"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/python--v1.png" alt="python--v1"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/c-programming.png" alt="c-programming"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/tailwindcss.png" alt="tailwindcss"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/nextjs.png" alt="nextjs"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/nodejs.png" alt="nodejs"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/mongodb.png" alt="mongodb"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/figma--v1.png" alt="figma--v1"/>
//         <img className='scale-75'  width="100" height="100" src="https://img.icons8.com/color/100/react-native.png" alt="react-native"/>
//         </div>
//     </div>
//   )
// }

// export default Skills


import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const scrollRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0; // Reset scroll position to start
          } else {
            scrollRef.current.scrollLeft += 1; // Scroll to the right
          }
        }
      }, 20); // Adjust the speed by changing the interval
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('mouseover', stopScrolling);
      scrollRef.current.addEventListener('mouseleave', startScrolling);
      startScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('mouseover', stopScrolling);
        scrollRef.current.removeEventListener('mouseleave', startScrolling);
      }
    };
  }, []);

  const skills = [
    'https://img.icons8.com/color/100/adobe-illustrator--v1.png',
    'https://img.icons8.com/color/100/html-5--v1.png',
    'https://img.icons8.com/color/100/css3.png',
    'https://img.icons8.com/color/100/javascript--v1.png',
    'https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png',
    'https://img.icons8.com/color/100/python--v1.png',
    'https://img.icons8.com/color/100/c-programming.png',
    'https://img.icons8.com/color/100/c-plus-plus-logo.png',
    'https://img.icons8.com/color/100/tailwindcss.png',
    'https://img.icons8.com/color/100/nextjs.png',
    'https://img.icons8.com/color/100/nodejs.png',
    'https://img.icons8.com/color/100/mongodb.png',
    'https://img.icons8.com/color/100/figma--v1.png',
    'https://img.icons8.com/color/100/react-native.png'
  ];

  return (
    <div style={{ zIndex: '5' }} className='border-white/50 border-b-2 border-t-2 font-b sticky top-0 flex justify-start items-center sm:flex-row flex-col bg-baseblack-100'>
      <div className='relative border-white/50 border-r-0 sm:border-r-2 min-w-full sm:min-w-max sm:max-w-max overflow-hidden'>
        <p style={{ zIndex: '1' }} className='relative text-5xl text-center sm:text-7xl text-white font-bold tracking-tight py-10 px-20'>Skills</p>
        <img style={{ zIndex: '2' }} className='absolute -top-16 -right-16' src='/Startrans.svg' alt='' />
      </div>
      <div ref={scrollRef} className=' w-full skills-container flex justify-start items-center overflow-x-scroll gap-4 sm:gap-10 hidescroll py-4'>
        {[...skills, ...skills].map((src, index) => (
          <img
            key={index}
            className='scale-75'
            width='100'
            height='100'
            src={src}
            alt=''
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

