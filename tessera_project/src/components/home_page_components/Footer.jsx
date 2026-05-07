import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      {/* Left */}
      <div className="footer-left">
        <h2 className="footer-logo">Tessera</h2>
        <p>Smarter & cleaner cities.</p>
      </div>

      {/* Links */}
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/issues">Issues</a>
        <a href="/report">Report</a>
      </div>

      {/* Contact */}
      <div className="footer-contact">
        <p>support@tessera.com</p>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Tessera</p>
      </div>

    </footer>
  )
}

export default Footer