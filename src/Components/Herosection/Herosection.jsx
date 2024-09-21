import React from 'react'
import './Herosection.css'
import hero_main from '../assets/icons/PicsArt_04-14-04.42 1.svg'


const Herosection = () => {
  return (
    <div className='Herosection-main'>

        <div className='Herosection-left'>
        <div className='rectanglae'></div>


            <h1>Accelerate Innovation <br /> with Global AI Challenges</h1>
            <p>AI Challenges at DPhi simulate real-world problems. It is a <br />great place to
                put your AI/Data Science skills to test on <br />diverse datasets allowing you to 
                foster learning through <br />competitions.
            </p>
            <button>Create Challenge</button>
        </div>
        <div className='Herosection-right'>
            <img src={hero_main} alt="" />
        </div>
        
       
        
      
    </div>
    
  )
}

export default Herosection
