import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/home_page_components/Footer'


export default function Report() {

  const reports = [
    { title: "Pothole on MG Road", status: "In Progress", time: "2h ago", icon: "⚠️", statusColor: "#f59e0b", bg: "#FEF3C7" },

    { title: "Garbage Overflow", status: "Resolved", time: "5h ago", icon: "💧", statusColor: "#16a34a", bg: "#DCFC7"},

    { title: "Water Leakage", status: "In Progress",   time: "1d ago", icon: "💦", statusColor: "#f59e0b", bg: "#FEF3C7"},


    { title: "Street Light Not Working" , status: "Pending",   time: "2d ago", icon: "💡", statusColor: "#6b7280", bg: "#E5E7EB" }

  ];
  return (
    <>
      <style>{`
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #f3f4f6;
        }

        .container {
          max-width: 430px;
          height: 100vh;
          margin: auto;
          background: white;
          padding: 20px;
          position: relative ;
          border-radius: 14px;
          
        }

        .title {
          text-align: center;
          font-size: 34px;
          font-weight: bold;
          margin-top: 20px;
        }

        .tabs {
          display: flex;
          gap: 14px;
          margin-top: 30px;
        }

        .tab {
          flex: 1;
          padding: 14px;
          text-align: center;
          border-radius: 14px;
          background: #f5f5f5;
          color: #999;
          font-weight: 600;
          font-size: 15px;
        }

        .tab.active {
          background: white;
          color: #16a34a;
          border-bottom: 3px solid #16a34a;
        }

        .reports {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .card {
          background: white;
          border-radius: 18px;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }

        .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .report-title {
          font-size: 16px;
          font-weight: 600;
        }

        .right {
          text-align: right;
        }

        .status {
          padding: 5px 12px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: bold;
          display: inline-block;
        }

        .time {
          margin-top: 6px;
          font-size: 12px;
          color: #999;
        }

      `}</style>
      <Navbar /> 
      <br />

      <div className="container">

        <div className="title">
          Dashboard
        </div>

        <div className="tabs">
          <div className="tab active">
            My Reports
          </div>

          <div className="tab">
            Updates
          </div>
        </div>

        <div className="reports">

          {
          reports.map((item, index) => (
            <div className="card" key={index}>

              <div className="left">

                <div>{item.icon}</div>

                <div className="report-title">
                  {item.title}
                </div>
              </div>

              <div className="right">

                <div
                  className="status"
                  style={{
                    color: item.statusColor,
                    background: item.bg,
                  }}
                >
                  {item.status}
                </div>

                <div className="time">
                  {item.time}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
      <br />
      <Footer />
    </>
  );
}