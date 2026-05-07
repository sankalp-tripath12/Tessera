import React from 'react'
import home_body_image from "../../assets/home_body_image.png";
import "./Body_Home.css"

const Body_Home = () => {
  return (
    <div className="hero">

      <div className="hero-text">
        <h1>Together for a <span style={{color:"green"}}>Better City</span></h1>
        <p>
          Report issues in your area and help make your city smarter and cleaner.
        </p>
        
        <button className="hero-buttons" style={{backgroundColor:"#009900",border:"none", fontSize:"16px", color:"white", padding:"15px 24px", borderRadius:"10px"}}>Report an Issue</button>
        <button className="hero-buttons" style={{ backgroundColor:"white",border:"1px solid green",fontSize:"16px", color:"green", padding:"15px 20px", borderRadius:"10px",marginLeft:"20px"   }}>View Issues</button>


{/* stats section for No. of reports ,resolved cases ,ueser */}
        <div className="hero-stats">
      <div>
        <h3>1,200+</h3>
        <p>Reports</p>
      </div>

      <div>
        <h3>950+</h3>
        <p>Resolved</p>
      </div>

      <div>
        <h3>300+</h3>
        <p>Users</p>
      </div>
    </div>
        
      </div>

       <div className="hero-image">
            <img src={home_body_image} alt="Home Body" />
        </div>
      </div>  
  )
}

export default Body_Home