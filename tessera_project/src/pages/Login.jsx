import React from 'react'
import './Login.css'
import Navbar from '../components/Navbar'
import Footer from '../components/home_page_components/Footer'

const Login = () => {

  const handleLogin = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (!email || !password) {
      alert("Please fill all fields")
      return
    }


    alert("Login successful ")
  }

  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <input
          id="email"
          className="login-input"
          type="email"
          placeholder="Enter email"
        />

        <input
          id="password"
          className="login-input"
          type="password"
          placeholder="Enter password"
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="login-text">
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
     
    </div>
     <Footer />
    </>
  )
}

export default Login