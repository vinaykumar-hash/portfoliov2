import { useEffect } from 'react';
import './App.css'
import Featured from './components/Featured';
import Herosection from './components/Herosection'
import Skills from './components/Skills';
import Collab from './components/Collab';
import { Analytics } from "@vercel/analytics/react"
import Links from './components/Links';
function App() {
  useEffect(()=>{
    const cursorSmall = document.querySelector('.small');
  // const cursorbig = document.querySelector('.cursorback');

    const positionElement = (e)=> {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      console.log();
      cursorSmall.style.transform = `translate3d(${mouseX+2}px, ${mouseY+2}px, 0)`;
      // cursorbig.style.transform = `translate3d(${mouseX}%, ${mouseY}%, 0)`;
    
    }

    //window.addEventListener('mousemove', positionElement)
  },[])
  
  return (
    <div className='bg-baseblack-100 font-b'>
      <div class="hidden cursor small"></div>
      <Herosection/>
      <Featured/>
      <Skills/>
      <Collab/>
      <Links/>
      <Analytics/>
    </div>
  )
}

export default App
