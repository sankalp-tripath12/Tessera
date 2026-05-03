import React, { useState } from "react";
import Image from "../assets/Image.png";
import Imagecopy1 from "../assets/Imagecopy1.png";
import Imagecopy2 from "../assets/Imagecopy2.png";
import Imagecopy3 from "../assets/Imagecopy3.png";
import Imagecopy4 from "../assets/Imagecopy4.png";
import Imagecopy5 from "../assets/Imagecopy5.png";

export default function Issue() {
  const [selected, setSelected] = useState("");

  const categories = [
    { id: "pothole", label: "Pothole",    icon : "🕳️", image: Image },
    { id: "garbage", label: "Water Leakage", icon: "🗑️", image: Imagecopy1 }, 
    { id: "water", label: "Street Light", icon: "💧", image: Imagecopy2 },
    { id: "air", label: "Garbage", icon: "☁️", image: Imagecopy4 }, 
    { id: "others", label: "Air Quality", icon: "⋯", image: Imagecopy5 },
    { id: "street", label: "Other", icon: "💡", image: Imagecopy3 },
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
          max-width: 1000px;
          margin: auto;
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          // gap: 12px;
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
          grid-template-columns: 1fr 1fr;
          gap: 80px;

        }

        .card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;
          
        }
        
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card:hover {
          border-color: #23e166ff;
        }

        .card.selected {
          border: 2px solid #1f7a3f;
          background: #11c54dff;
        }

        .icon {
          font-size: 28px;
          margin-bottom: 8px;
        }

        .label {
          font-size: 14px;
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
        <p className="subtitle">Select a category</p>

        <div className="grid">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`card ${selected === item.id ? "selected" : ""}`}
              onClick={() => setSelected(item.id)}
            >
              <img src={item.image} alt={item.label} className="card-img" />

              <div className="card-footer">
                <div className="icon-circle">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}