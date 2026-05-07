import React from 'react'
import { Link } from 'react-router-dom'
import Tessera_logo from '../assets/Tessera_logo.png'

const Navbar = () => {
  return (
       <>
    <header className='header'>
     
      <nav className='navbar'>
         <img className='logo' src={Tessera_logo} alt="logo"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/issue">Issues</Link></li>
        <li><Link to="/report">Report</Link></li>
        <li><Link to="/city-intelligence">City Intelligence</Link></li>
      </ul>
      <button className='btn'>Login</button>
    </nav>
    </header>
  </>
  )
}

export default Navbar