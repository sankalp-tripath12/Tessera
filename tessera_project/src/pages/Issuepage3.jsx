import React from "react";

export default function Issuepage3() {
  return (
    <>
      <style>{`
        .container {
        
          max-width: 420px;
          height: 70vh;
          margin: auto;
          font-family: Arial;
          background: #f5f5f5;
          border-radius: 20px;
          padding: 16px;
          margin-top: 130px;
        }

        .header {
          display: flex;
          justify-content: center;
          position: relative;
          font-weight: bold;
        }

        .back {
          position: absolute;
          left: 0;
          color: gray;
          cursor: pointer;
        }

        .image-box {
          height: 140px;
          border-radius: 16px;
          overflow: hidden;
          margin: 15px 0;
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
          padding: 4px 10px;
          border-radius: 10px;
          font-size: 12px;
        }

        .subtext {
          color: gray;
          font-size: 13px;
          margin: 5px 0;
        }

        .badge {
          display: inline-block;
          padding: 4px 10px;
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
          margin-top: 20px;
          position: relative;
        }

        /* vertical line */
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
          margin-bottom: 18px;
          position: relative;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          z-index: 1;

        }

        .dot.green { background: green; }
        .dot.blue { background: #3b6ef5; }
        .dot.gray { background: #ccc; }

        .timeline-text {
          font-size: 14px;
        }

        .timeline-sub {
          font-size: 12px;
          color: gray;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <span className="back">&lt; Back</span>
          Issue Details
        </div>

        <div className="image-box">
          <img
            src="https://images.unsplash.com/photo-1597002974009-6c9f5f6e8f2c"
            alt="issue"
          />
        </div>

        <div className="title-row">
          <div className="title">Pothole on MG Road</div>
          <br />
          <br />
          <div className="status-tag">In Progress</div>
        </div>
         <br />

        <div className="subtext">
          MG Road, Near Metro Station • 20 May, 2:30 PM
        </div>
        <br /><br />

        <div style={{ marginTop: "6px" }}>
          <span className="badge green">Pothole</span>
          <span className="badge orange">Credibility 82%</span>
          <span className="subtext">▲ 24 upvotes</span>
        </div>

        <div className="timeline">
          <div className="title" style={{ marginBottom: "10px" }}>
            Status Updates
          </div>
          <br />

          <div className="timeline-item">
            <div className="dot green"></div>
            <div>
              <div className="timeline-text">Issue Reported</div>
              <div className="timeline-sub">20 May, 2:30 PM</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot green"></div>
            <div>
              <div className="timeline-text">Under Review</div>
              <div className="timeline-sub">20 May, 4:15 PM</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot blue"></div>
            <div>
              <div className="timeline-text">Work In Progress</div>
              <div className="timeline-sub">21 May, 10:30 AM</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot gray"></div>
            <div>
              <div className="timeline-text" style={{ color: "#999" }}>
                Resolved
              </div>
              <div className="timeline-sub">Pending</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
