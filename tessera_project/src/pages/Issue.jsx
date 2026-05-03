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
    { id: "pothole", label: "Pothole", icon: "🕳️", image: Image },
    { id: "garbage", label: "Garbage", icon: "🗑️", image: Imagecopy1 },
    { id: "water", label: "Water Leakage", icon: "💧", image: Imagecopy2 },
    { id: "street", label: "Street Light", icon: "💡", image: Imagecopy3 },
    { id: "air", label: "Air Quality", icon: "☁️", image: Imagecopy4 },
    { id: "others", label: "Others", icon: "⋯", image: Imagecopy5 },
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
          max-width: 420px;
          margin: auto;
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .back {
          position: absolute;
          left: 0;
          color: #1f7a3f;
          cursor: pointer;
          font-weight: bold;
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
          gap: 16px;
        }

        .card {
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #eee;
          background: white;
          cursor: pointer;
          transition: 0.2s;
        }

        .card.selected {
          border: 2px solid #1f7a3f;
        }

        .card-img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #f9f9f9;
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: orange;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
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