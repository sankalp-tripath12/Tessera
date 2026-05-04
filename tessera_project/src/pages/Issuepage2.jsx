import React, { useState } from "react";

export default function Issuepage2() {
  const [description, setDescription] = useState("There is a big pothole causing problems...");

  const [location, setLocation] = useState(

    "MG Road, Near Metro Station"); 

  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const preview = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...preview]);
  };

  return (
    <>
      <style>{`
        .container {
          max-width: 600px;
          height: 90vh;
          margin: auto;
          padding: 18px;
          font-family: Arial;
          background: #f5f5f5;
          border-radius: 20px;
          
        }

        .header {
          text-align: center;
          position: relative;
          font-weight: bold;
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
          background: #16cf57ff;
          color: white;
        }

        .step.done {
          background: #20ce63ff;
          color: white ;
        }

        .line {
          flex: 1;
          height: 2px;
          background: #ddd;
        }

        .label {
          margin-top: 20px;
          font-weight: bold;
          color :  rgba(2, 2, 6, 1);
        }

        .input-box {
          width:  500px;  
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #ddd;
          margin: 8px 0 16px;
          background: white;
        }

        .map-box {
          height: 140px;
          border-radius: 12px;
          background: #cfe3c1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .auto-text {
          font-size: 18px;
          color: #242424ff;
          
        }

        .auto-text span {
          color: #000000da;
          font-weight: bold;
        }

        .photos {
          display: flex;
          gap: 10px;
        }

        .photo {
          width: 70px;
          height: 70px;
          border-radius: 40px; 
          background: #ccc;
          // object-fit: cover;
        }

        .upload {
          width: 70px;
          height: 70px;
          border: 2px dashed #aaa;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .next-btn {
          margin-top: 20px;
          width: 100%;
          padding: 14px;
          background: #1f7a3f;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: bold;  
        }
      `}</style>

      <div className="container">
        <div className="header">
          <span className="back">&lt; Back</span>
          Add Details
        </div>
        <div className="steps">
          <div className="step done">✓</div>
          <div className="line"></div>
          <div className="step active">2</div>
          <div className="line"></div>
          <div className="step">3</div>
        </div>

        <div className="label">Description</div>
        <br />
        <textarea
          className="input-box"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="label">Location</div>
        <br />
        <div className="map-box">📍</div>

        <input
          className="input-box"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="auto-text">
          <br />
          <br />
          Auto-detected zone: <span>Zone 2 — Indiranagar</span>
        </div>

        <div className="label">Add Photos</div>
        <div className="photos">
          {images.map((img, i) => (
            <img key={i} src={img} className="photo" />
          ))}

          <label className="upload">
            +
            <input
              type="file"
              hidden
              multiple
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <br /><br />
        <button className="next-btn">Next</button>
      </div>
    </>
  );
}