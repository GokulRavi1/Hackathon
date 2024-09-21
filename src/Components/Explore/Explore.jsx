import React from 'react'
import './Explore.css'

const Explore = () => {
  return (
    <div  className='explore'>
        <h1>Explore Challenges</h1>
        <div  className='search-div'>
        
            <input type="text" className='explore-input' placeholder='Search' />
            <button>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >Action</a></li>
            <li><a className="dropdown-item" >Another action</a></li>
            <li><a className="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
            </button>
            
        </div>
      
    </div>
  )
}

export default Explore
