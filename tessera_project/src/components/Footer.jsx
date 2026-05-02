import React from 'react'
import Tessera_logo from '../assets/Tessera_logo.png'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Tessera_logo} alt="Tessera Logo" />
      <p>@ 2026 Tessera. All rights reserved.</p>
    </div>
  )
}

export default Footer