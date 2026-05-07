import React from "react";
import "./Feature_Section.css"

const Feature_Section = ({ icon: Icon, title, description ,color,backgroundColor}) => {
  return (
    <div className="feature-card">
      
      <div className="icon"
        style={{backgroundColor:"lightgreen"}}>
        <Icon size={30} color="green"  />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

    </div>
  );
};

export default Feature_Section;