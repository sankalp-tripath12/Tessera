import React from 'react'
import Tessera_logo from '../assets/Tessera_logo.png'

const Navbar = () => {
  return (
       <>
    <header className='header'>
     
      <nav className='navbar'>
         <img className='logo' src={Tessera_logo} alt="logo"  />
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Issues</a></li>
        <li><a href="">Report</a></li>
        <li><a href="">City Intelligence</a></li>
      </ul>
      <button className='btn'>Login</button>
    </nav>
    </header>
  </>
  )
}

export default Navbar