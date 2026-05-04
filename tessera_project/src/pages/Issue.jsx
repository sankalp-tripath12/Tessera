import React, { useState } from "react";

// import  Issuepage2 from './Issuepage2'
import Image from "../assets/Image.png";
import Imagecopy1 from "../assets/Imagecopy1.png";
import Imagecopy2 from "../assets/Imagecopy2.png";
import Imagecopy3 from "../assets/Imagecopy3.png";
import Imagecopy4 from "../assets/Imagecopy4.png";
import Imagecopy5 from "../assets/Imagecopy5.png";

export default function Issue() {
  const [selected, setSelected] = useState("");

  const categories = [
    {  image: Image },
    { image: Imagecopy1 }, 
    { image: Imagecopy2 },
    { image: Imagecopy4 }, 
    { image: Imagecopy5 },
    { image: Imagecopy3 },
  ]; 

  const handleNext = () => {
    if (!selected) {
      alert("Please select an issue");
      return;
    }
    alert(`Selected: ${selected}`);
  };

  return (
    <>
            <style>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 16px;
          font-family: Arial, sans-serif;
      

        .header { 
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .back {
          position: absolute;
          left: 0;
          color: gray;
          cursor: pointer;
        }

        .steps {
          display: flex;
          align-items: center;
          margin: 20px 0;
        }

        .step {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step.active {
          background: #1f7a3f;
          color: white;
        }

        .line {
          flex: 1;
          height: 2px;
          background: #ddd;
        }

        .subtitle {
          color: gray;
          margin-bottom: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr ;
          gap: 60px;

        }

        .card {
          border: 2px solid #ddd;
          border-radius: 15px;
          padding: 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;
          
        }
        
        .card img {
          width: 100%;
          height: 200px;

        }

        .card:hover {
          border: 1px solid black;
          background:  #373434ff;

        }


        .next-btn {
          margin-top: 20px;
          width: 100%;
          padding: 14px;
          background: #1f7a3f;
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer; 

        }
      `}</style>
      <div className="container">

        <div className="header">
          <span className="back">&lt; Back</span>
          <h2>Report an Issue</h2>
        </div>

        <div className="steps">
          <div className="step active">1</div>
          <div className="line"></div>
          <div className="step">2</div>
          <div className="line"></div>
          <div className="step">3</div>
        </div>

        <h3>What is the issue?</h3>
        <br />
        <p className="subtitle">Select a category</p>
          <br />
        <div className="grid">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`card ${selected === item.id ? "selected" : ""}`}
              onClick={() => setSelected(item.id)}
            >
              <img src={item.image} alt={item.label} className="card-img" />

              <div className="card-footer">
                
              </div>
            </div> 
          ))}
        </div>
          <br />
          <br />
          <br />
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
      {/* <Issuepage2 /> */}
    </>
  );
}




