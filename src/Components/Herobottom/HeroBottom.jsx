import React from 'react'
import './HeroBottom.css'
import ai_img from'../assets/icons/Group 1000002515.svg'
import phone_img from'../assets/icons/Group 1000002516.svg'
import heart_img from'../assets/icons/Group 1000002518.svg'
const HeroBottom = () => {
  return (
    <div className='hero-bottom'>
        
        <div className='hero-b'>
            <div className="img-div-b">
                <img src={ai_img} alt="" />

            </div>
            <div className="bottom-text">
            <h5>100K+</h5>
            <p>AI model submissions</p>
            </div>
            <div className="white-line"></div>
            

        </div>
        <div className='hero-b'>
        <div className="img-div-b">
                <img src={phone_img} alt="" />
        </div>
        <div className="bottom-text">
        <h5>50K+</h5>
        <p>Data Scientists</p>
        </div>
        <div className="white-line"></div>

        
        </div>
        <div className='hero-b'>
        <div className="img-div-b">
                <img src={heart_img} alt="" />
         </div> 
         <div className='bottom-text'>
         <h5>100+</h5>    
         <p>AI Challenges hosted</p>
        </div>       
        
        </div>
      
    </div>
  )
}

export default HeroBottom
