import React from 'react'
import './CardSec.css'
import card1 from '../assets/cardimage/Group 1000002466.png'
import card2 from '../assets/cardimage/Group 1000002466.png'
import card3 from '../assets/cardimage/Group 1000002767.png'
import card4 from '../assets/cardimage/Group 1000002771.png'
import card5 from '../assets/cardimage/Group 1000002772.png'
import card6 from '../assets/cardimage/Group 1000002773.png'



const CardSec = () => {
  return (
    <div className='card-sec-main'>
        <div className="card-sec-content">

        <div className="card">
        <img src={card1} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className='card-body-p1'>Upcoming</p>
        <h5 className="card-title">Data Science Bootcamp -  <br /> Graded Datathon</h5>
        <p className="card-text">Starts in</p>
        <p className='card-body-time'>00 &nbsp;:&nbsp; 15&nbsp; :&nbsp; 22</p>
        <a href="#" className="btn btn-success">Participate Now</a>
        </div>
        </div>
        <div className="card">
        <img src={card2} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className='card-body-p1'>Upcoming</p>
        <h5 className="card-title">Data Sprint 72 - Butterfly <br />Identification</h5>
        <p className="card-text">Starts in</p>
        <p className='card-body-time'>00 &nbsp;:&nbsp; 12&nbsp; :&nbsp; 22</p>
        <a href="#" className="btn btn-success">Participate Now</a>
        </div>
        </div>
        <div className="card">
        <img src={card3} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className='card-body-p2'>Active</p>
        <h5 className="card-title">Data Sprint 71 - Weather <br /> Recognition</h5>
        <p className="card-text">Ends in</p>
        <p className='card-body-time'>00 &nbsp;:&nbsp; 17&nbsp; :&nbsp; 22</p>
        <a href="#" className="btn btn-success">Participate Now</a>
        </div>
        </div>
        <div className="card">
        <img src={card4} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className='card-body-p2'>Active</p>
        <h5 className="card-title">Data Sprint 70-Airline <br /> Passenger Satisfaction</h5>
        <p className="card-text">Ends in</p>
        <p className='card-body-time'>00 &nbsp;:&nbsp; 11&nbsp; :&nbsp; 27</p>
        <a href="#" className="btn btn-success">Participate Now</a>
        </div>
        </div>
        <div className="card">
        <img src={card5} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className='card-body-p3'>Past</p>
        <h5 className="card-title">Engineering Graduates <br /> Employment Outcomes</h5>
        <p className="card-text">Ended on</p>
        <p className='card-body-time'>16th May'22 09:00 PM</p>
        <a href="#" className="btn btn-success">Participate Now</a>
        </div>
        </div>
        <div className="card">
        <img src={card6} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className='card-body-p3'>Past</p>
        <h5 className="card-title">Travel Insurance Claim <br />  Prediction</h5>
        <p className="card-text">Ended on</p>
        <p className='card-body-time'>16th May'22 09:00 PM</p>
        <a href="#" className="btn btn-success">Participate Now</a>
        </div>
        </div>
        
        
        
        
        </div>
      
    </div>
  )
}

export default CardSec
