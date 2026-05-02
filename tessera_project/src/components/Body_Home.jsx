import React from 'react'
import home_body_image from '../assets/home_body_image.png'
import "./Body_Home.css"

const Body_Home = () => {
  return (
    <div className="hero">

      <div className="hero-text">
        <h1>Together for a <span style={{color:"green"}}>Better City</span></h1>
        <p>
          Report issues in your area and help make your city smarter and cleaner.
        </p>
      </div>

      <div className="hero-image">
        <img src={home_body_image} alt="Home Body" />
      </div>

    </div>
  )
}

export default Body_Home