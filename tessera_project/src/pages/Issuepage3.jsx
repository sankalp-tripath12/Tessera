import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/Image.png"; 
import Navbar from "../components/Navbar";
import Footer from "../components/home_page_components/Footer";

export default function Issuepage3() { 

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/issue/step2");
  };


   const categories = [{ id: 1, image: Image }];

  return (
    <>
      <style>{`

       
        .container {
          max-width: 600px;
          margin: auto;
          margin-top: 40px;
          padding: 16px;
          font-family: Arial, sans-serif;
          background: #f5f5f5;
          border-radius: 20px;
        }

        .header3 {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          font-weight: bold;
          font-size: 22px;
        }

        .back {
          position: absolute;
          left: 0;
          color: gray;
          cursor: pointer;
        }

        .image-box {
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          margin: 20px 0;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-size: 18px;
          font-weight: bold;
        }

        .status-tag {
          background: #e0ecff;
          color: #2f6fd6;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 12px;
        }

        .subtext {
          color: gray;
          font-size: 14px;
          margin: 8px 0;
        }

        .badge {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 10px;
          font-size: 12px;
          margin-right: 6px;
        }

        .badge.green {
          background: #d4f1df;
          color: green;
        }

        .badge.orange {
          background: #fde3c7;
          color: #c47a00;
        }

        .timeline {
          margin-top: 30px;
          position: relative;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 6px;
          top: 0;
          width: 2px;
          height: 100%;
          background: #ddd;
        }

        .timeline-item {
          display: flex;
          gap: 12px;
          margin-bottom: 22px;
          position: relative;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          z-index: 1;
        }

        .dot.green {
          background: green;
        }

        .dot.blue {
          background: #3b6ef5;
        }

        .dot.gray {
          background: #ccc;
        }

        .timeline-text {
          font-size: 16px;
        }

        .timeline-sub {
          font-size: 13px;
          color: gray;
        }
      `}</style>

      <Navbar />

      <div className="container">

        <div className="header3">

          <span
            className="back"
            onClick={handleBack}
          >
            &lt; Back
          </span>

          Issue Details
        </div>

       <div className="image-box">

          <img src={Image} alt="Issue" />
      </div>
        <div className="title-row">

          <div className="title">
            Pothole on MG Road
          </div>

          <div className="status-tag">
            In Progress
          </div>

        </div>

        <div className="subtext">
          MG Road, Near Metro Station • 20 May, 2:30 PM
        </div>

        <div style={{ marginTop: "10px" }}>

          <span className="badge green">
            Pothole
          </span>

          <span className="badge orange">
            Credibility 82%
          </span>

          <span className="subtext">
            ▲ 24 upvotes
          </span>

        </div>

        <div className="timeline">

          <div
            className="title"
            style={{ marginBottom: "20px" }}
          >
            Status Updates
          </div>

          <div className="timeline-item">

            <div className="dot green"></div>

            <div>
              <div className="timeline-text">
                Issue Reported
              </div>

              <div className="timeline-sub">
                20 May, 2:30 PM
              </div>
            </div>

          </div>

          <div className="timeline-item">

            <div className="dot green"></div>

            <div>
              <div className="timeline-text">
                Under Review
              </div>

              <div className="timeline-sub">
                20 May, 4:15 PM
              </div>
            </div>

          </div>

          <div className="timeline-item">

            <div className="dot blue"></div>

            <div>
              <div className="timeline-text">
                Work In Progress
              </div>

              <div className="timeline-sub">
                21 May, 10:30 AM
              </div>
            </div>

          </div>

          <div className="timeline-item">

            <div className="dot gray"></div>

            <div>

              <div
                className="timeline-text"
                style={{ color: "#999" }}
              >
                Resolved
              </div>

              <div className="timeline-sub">
                Pending
              </div>

            </div>

          </div>

        </div>

      </div>

      <br />
      <br />
      <br />

      <Footer />

    </>
  );
}