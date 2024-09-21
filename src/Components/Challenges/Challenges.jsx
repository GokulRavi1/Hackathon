import React from 'react'
import './Challenges.css'
import carbon_img from '../assets/icons/carbon_notebook-reference.svg'
import vector_img from '../assets/icons/Vector.svg'
import robot_img from '../assets/icons/Robot.svg'
import IdentificationCard from '../assets/icons/IdentificationCard.svg'



const Challenges = () => {
  return (
    <div className='challenges'>
        <h1>Why Participate in  <span>AI Challenges?</span> </h1>
   <div className="challenges-grid">
   <div className="card" >
    <img src={carbon_img} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3 className='card-h3'>Prove your skills</h3>
    <p className="card-text">Gain substantial experience by solving real-world problems <br />
         and pit against others to come up with innovative solutions..</p>
    </div>
    </div>
    <div className="card" >
    <img src={vector_img} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3 className='card-h3'>Learn from community</h3>
    <p className="card-text">One can look and analyze the solutions submitted by the <br />
         other Data Scientists in the community and learn from them.</p>
    </div>
    </div>
    <div className="card">
    <img src={robot_img} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3 className='card-h3'>Challenge yourself</h3>
    <p className="card-text">There is nothing for you to lose by participating in a <br />
        challenge. You can fail safe, learn out of the entire <br />
         experience and bounce back harder.</p>
    </div>
    </div>
    <div className="card" >
    <img src={IdentificationCard} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3 className='card-h3'>Earn recognition</h3>
    <p className="card-text">You will stand out from the crowd if you do well in AI
        <br /> challenges, it not only helps you shine in the community but
        <br /> also earns rewards.</p>
    </div>
    </div>
   </div>
    
    

      
    </div>
  )
}

export default Challenges
